/**
 * ============================================================================
 * COVIIFOOD - HIỆU ỨNG ANIMATION & FAQ ACCORDION (animations.js)
 * ============================================================================
 */

// Khởi tạo Scroll Reveal Animations bằng IntersectionObserver
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    if ('IntersectionObserver' in window) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.15,
            rootMargin: '0px 0px -40px 0px'
        });

        animatedElements.forEach(el => observer.observe(el));
    } else {
        // Fallback nếu trình duyệt cũ không hỗ trợ IntersectionObserver
        animatedElements.forEach(el => el.classList.add('visible'));
    }
}

// Khởi tạo FAQ Accordion
function initFaqAccordion() {
    const faqContainer = document.getElementById('faq-accordion-container');
    if (!faqContainer) return;

    // Render danh sách FAQ từ faqData trong data.js
    faqContainer.innerHTML = faqData.map((faq, index) => {
        return `
            <div class="faq-item ${index === 0 ? 'active' : ''}">
                <div class="faq-header" onclick="toggleFaq(${index})">
                    <h3 class="faq-question">${faq.question}</h3>
                    <span class="faq-icon">▼</span>
                </div>
                <div class="faq-content" id="faq-content-${index}">
                    <p style="padding-top: 12px; color: var(--color-text-muted); line-height: 1.6;">${faq.answer}</p>
                </div>
            </div>
        `;
    }).join('');

    // Set max height cho mục đầu tiên nếu đang active
    const firstContent = document.getElementById('faq-content-0');
    if (firstContent) {
        firstContent.style.maxHeight = firstContent.scrollHeight + 'px';
    }
}

// Hàm đóng/mở từng câu hỏi FAQ
function toggleFaq(index) {
    const items = document.querySelectorAll('.faq-item');
    const targetItem = items[index];
    const targetContent = document.getElementById(`faq-content-${index}`);

    if (!targetItem || !targetContent) return;

    const isActive = targetItem.classList.contains('active');

    // Đóng tất cả mục khác
    items.forEach((item, i) => {
        item.classList.remove('active');
        const content = document.getElementById(`faq-content-${i}`);
        if (content) content.style.maxHeight = null;
    });

    // Nếu chưa active thì mở mục được chọn
    if (!isActive) {
        targetItem.classList.add('active');
        targetContent.style.maxHeight = targetContent.scrollHeight + 'px';
    }
}
