/**
 * ============================================================================
 * COVIIFOOD - MAIN APPLICATION SCRIPT (app.js)
 * ============================================================================
 */

function safeExec(fn, name) {
    try {
        if (typeof fn === 'function') {
            fn();
        }
    } catch (err) {
        console.warn(`[COVIIFOOD Warning] Execution error in ${name || 'module'}:`, err);
    }
}

// Hàm khởi tạo ứng dụng chính
function initApp() {
    safeExec(initHeaderNav, 'initHeaderNav');
    safeExec(renderBrandData, 'renderBrandData');
    safeExec(renderWhyUsSection, 'renderWhyUsSection');
    safeExec(renderJourneySection, 'renderJourneySection');
    safeExec(renderStorySection, 'renderStorySection');

    // Render danh sách sản phẩm và bảng giá
    if (typeof renderProducts === 'function') {
        safeExec(function() {
            const dataList = (typeof products !== 'undefined' && Array.isArray(products)) ? products : [];
            renderProducts(dataList);
        }, 'renderProducts');
    }

    if (typeof renderPricingTable === 'function') {
        safeExec(renderPricingTable, 'renderPricingTable');
    }

    // Khởi tạo bộ lọc sản phẩm và FAQ Accordion
    if (typeof initProductFilters === 'function') {
        safeExec(initProductFilters, 'initProductFilters');
    }

    if (typeof initFaqAccordion === 'function') {
        safeExec(initFaqAccordion, 'initFaqAccordion');
    }

    // Khởi tạo hiệu ứng Cuộn trang (Scroll Animations)
    if (typeof initScrollAnimations === 'function') {
        safeExec(initScrollAnimations, 'initScrollAnimations');
    }
}

// Chạy khởi tạo ứng dụng độc lập trên mọi môi trường máy chủ web
if (document.readyState === 'complete' || document.readyState === 'interactive') {
    setTimeout(initApp, 1);
} else {
    document.addEventListener('DOMContentLoaded', initApp);
}

// Fallback bổ sung khi toàn bộ tài nguyên (ảnh/CSS) đã load xong
window.addEventListener('load', initApp);

// Xử lý hiệu ứng cuộn Header & Hamburger Menu Mobile
function initHeaderNav() {
    const header = document.querySelector('.site-header');
    const mobileToggle = document.getElementById('mobile-nav-toggle');
    const mainNav = document.getElementById('main-nav');
    const navLinks = document.querySelectorAll('.nav-link');

    // Effect khi cuộn trang
    if (header) {
        window.addEventListener('scroll', function() {
            if (window.scrollY > 30) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
            highlightActiveNavLink();
        });
    }

    // Toggle menu mobile
    if (mobileToggle && mainNav) {
        mobileToggle.addEventListener('click', function() {
            mainNav.classList.toggle('active');
            const isOpen = mainNav.classList.contains('active');
            mobileToggle.setAttribute('aria-expanded', isOpen);
        });
    }

    // Đóng mobile nav khi click vào link
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            if (mainNav) mainNav.classList.remove('active');
        });
    });
}

// Highlight Menu Link tương ứng với Section đang xem
function highlightActiveNavLink() {
    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    const scrollPosition = window.scrollY + 120;

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === `#${sectionId}` || link.getAttribute('href') === `index.html#${sectionId}`) {
                    link.classList.add('active');
                }
            });
        }
    });
}

// Bind dữ liệu Brand Info vào giao diện
function renderBrandData() {
    if (typeof brandInfo === 'undefined') return;

    // Brand Name & Tagline
    document.querySelectorAll('.brand-name-text').forEach(el => {
        if (el && brandInfo.name) el.innerText = brandInfo.name;
    });
    document.querySelectorAll('.brand-tagline-text').forEach(el => {
        if (el && brandInfo.tagline) el.innerText = brandInfo.tagline;
    });
    
    // Đổi Logo thành ảnh thực tế nếu có
    if (brandInfo.logoImage && !brandInfo.logoImage.includes('[THAY') && brandInfo.logoImage.trim() !== '') {
        document.querySelectorAll('.brand-logo').forEach(logoEl => {
            logoEl.innerHTML = `
                <img src="${brandInfo.logoImage}" alt="${brandInfo.name || 'COVIIFOOD'}" class="brand-logo-img">
                <span class="brand-name-text">${brandInfo.name || 'COVIIFOOD'}</span>
            `;
        });
    }

    // Social Links & Order Links
    const setHref = (selector, val) => {
        if (!val) return;
        document.querySelectorAll(selector).forEach(btn => btn.setAttribute('href', val));
    };

    setHref('.link-tiktok', brandInfo.tiktok);
    setHref('.link-zalo', brandInfo.zalo);
    setHref('.link-facebook', brandInfo.facebook);
    if (brandInfo.phone) setHref('.link-phone', `tel:${brandInfo.phone}`);
}

// Render 4 Card "Vì sao chọn Coviifood"
function renderWhyUsSection() {
    const container = document.getElementById('why-us-grid-container');
    if (!container || typeof whyUsCards === 'undefined' || !Array.isArray(whyUsCards)) return;

    container.innerHTML = whyUsCards.map(card => {
        return `
            <div class="why-card">
                <span class="why-number">${card.id}</span>
                <div class="why-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                    </svg>
                </div>
                <h3 class="why-card-title">${card.title}</h3>
                <h4 class="why-card-subtitle">${card.subtitle}</h4>
                <p class="why-card-desc">${card.desc}</p>
                <button class="why-card-btn" onclick="scrollToSection('contact')">
                    Tìm hiểu thêm →
                </button>
            </div>
        `;
    }).join('');
}

// Render Hành trình sản phẩm (6 bước Visual Storytelling)
function renderJourneySection() {
    const container = document.getElementById('journey-grid-container');
    if (!container || typeof journeySteps === 'undefined' || !Array.isArray(journeySteps)) return;

    container.innerHTML = journeySteps.map(step => {
        return `
            <div class="journey-card">
                <div class="journey-step-num">${step.step}</div>
                <h3 class="journey-title">${step.title}</h3>
                <p class="journey-desc">${step.desc}</p>
            </div>
        `;
    }).join('');
}

// Render Story Timeline & Nội dung mẫu
function renderStorySection() {
    const container = document.getElementById('story-timeline-container');
    if (!container || typeof storyData === 'undefined' || !storyData || !Array.isArray(storyData.timeline)) return;

    container.innerHTML = storyData.timeline.map((item) => {
        return `
            <div class="timeline-item">
                <div class="timeline-node"></div>
                <div class="timeline-content">
                    <span class="timeline-stage">${item.stage}</span>
                    <h3 style="font-size: 1.1rem; color: var(--color-text); margin-bottom: 6px;">${item.title}</h3>
                    <p style="font-size: 0.9rem; color: var(--color-text-muted);">${item.desc}</p>
                </div>
            </div>
        `;
    }).join('');
}

// Helper cuộn đến section mong muốn
function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}
