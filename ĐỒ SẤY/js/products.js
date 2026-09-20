/**
 * ============================================================================
 * COVIIFOOD - LOGIC SẢN PHẨM & POPUP MODAL (products.js)
 * ============================================================================
 */

// Hàm tạo ảnh SVG placeholder trực quan cho sản phẩm (khi chưa có ảnh thật hoặc lỗi)
function generateProductSVG(productName, category) {
    const colors = {
        'Sấy giòn': { bg: '#FFF8E7', accent: '#D97736' },
        'Sấy dẻo': { bg: '#FFF0F0', accent: '#C84B31' },
        'Sấy thăng hoa': { bg: '#EBF3E8', accent: '#2D5A27' },
        'Đồ ăn vặt': { bg: '#F5EBE6', accent: '#8C6D53' }
    };

    const theme = colors[category] || { bg: '#FAF7F2', accent: '#2D5A27' };
    const safeName = (productName || '').replace(/</g, '&lt;').replace(/>/g, '&gt;');

    return `
        <svg width="100%" height="100%" viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" style="background:${theme.bg}">
            <rect width="300" height="240" fill="${theme.bg}"/>
            <circle cx="150" cy="105" r="50" fill="${theme.accent}" opacity="0.12"/>
            <path d="M150 75 C130 75 115 90 115 110 C115 130 135 145 150 145 C165 145 185 130 185 110 C185 90 170 75 150 75 Z" fill="${theme.accent}" opacity="0.3"/>
            <circle cx="150" cy="110" r="24" fill="${theme.accent}"/>
            <text x="150" y="115" font-family="sans-serif" font-size="14" font-weight="bold" fill="#FFFFFF" text-anchor="middle">COVII</text>
            <text x="150" y="175" font-family="sans-serif" font-size="13" font-weight="bold" fill="#2B2D2F" text-anchor="middle">${safeName}</text>
            <text x="150" y="195" font-family="sans-serif" font-size="11" fill="#72767A" text-anchor="middle">COVIIFOOD</text>
        </svg>
    `;
}

// Xử lý khi ảnh bị lỗi (Fallback sang SVG an toàn)
function handleProductImgError(imgEl, productName, category) {
    if (!imgEl || imgEl.dataset.hasFailed) return;
    imgEl.dataset.hasFailed = "true";
    const container = imgEl.parentElement;
    if (container) {
        const badge = container.querySelector('.product-card-category-badge');
        const badgeHTML = badge ? badge.outerHTML : '';
        container.innerHTML = badgeHTML + generateProductSVG(productName, category);
    }
}

// Hàm lấy HTML ảnh sản phẩm (Hiển thị <img> nếu có ảnh thật, fallback về SVG nếu là placeholder hoặc lỗi)
function getProductImageHTML(product, isModal = false) {
    if (product.image && !product.image.includes('[THAY') && product.image.trim() !== '') {
        const className = isModal ? 'modal-product-img' : 'product-card-img';
        const safeName = (product.name || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
        const safeCategory = (product.category || '').replace(/'/g, "\\'").replace(/"/g, '&quot;');
        return `<img src="${product.image}" alt="${safeName}" class="${className}" onerror="handleProductImgError(this, '${safeName}', '${safeCategory}')">`;
    }
    return generateProductSVG(product.name, product.category);
}

// Hàm render danh sách sản phẩm ra giao diện
function renderProducts(productList) {
    const container = document.getElementById('products-grid-container');
    if (!container) return;

    if (!productList || productList.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--color-background); border-radius: var(--border-radius-md);">
                <p style="font-size: 1.1rem; color: var(--color-text-muted);">Không tìm thấy sản phẩm phù hợp với danh mục hoặc từ khóa.</p>
            </div>
        `;
        return;
    }

    container.innerHTML = productList.map(product => {
        return `
            <div class="product-card" onclick="openProductModal(${product.id})">
                <div class="product-card-thumb">
                    <span class="product-card-category-badge">${product.category}</span>
                    ${getProductImageHTML(product, false)}
                </div>
                <div class="product-card-body">
                    <h3 class="product-card-title">${product.name}</h3>
                    <p class="product-card-desc">${product.description}</p>
                    <div class="product-card-footer">
                        <div>
                            <span class="product-card-price">${product.price}</span>
                        </div>
                        <span class="product-card-weight">${product.weight}</span>
                    </div>
                </div>
            </div>
        `;
    }).join('');
}

// Hàm mở Modal xem chi tiết sản phẩm (An toàn không crash)
function openProductModal(productId) {
    if (typeof products === 'undefined') return;
    const product = products.find(p => p.id === Number(productId));
    if (!product) return;

    const modalOverlay = document.getElementById('product-modal-overlay');
    if (!modalOverlay) return;

    const setElText = (id, text) => {
        const el = document.getElementById(id);
        if (el) el.innerText = text || '';
    };

    // Cập nhật thông tin an toàn vào Modal
    setElText('modal-product-title', product.name);
    setElText('modal-product-category', product.category);
    setElText('modal-product-price', product.price);
    setElText('modal-product-weight', product.weight);
    setElText('modal-product-desc', product.description);
    setElText('modal-product-flavor', product.flavor);
    setElText('modal-product-texture', product.texture);
    setElText('modal-product-ingredients', product.ingredients);
    setElText('modal-product-origin', product.origin);
    setElText('modal-product-production', product.productionMethod);
    setElText('modal-product-storage', product.storage);
    setElText('modal-product-expiry', product.expiry);

    // Điểm nổi bật
    const highlightsContainer = document.getElementById('modal-product-highlights');
    if (highlightsContainer) {
        if (product.highlights && Array.isArray(product.highlights)) {
            highlightsContainer.innerHTML = product.highlights.map(item => `<li>${item}</li>`).join('');
        } else {
            highlightsContainer.innerHTML = '';
        }
    }

    // Hiển thị ảnh sản phẩm thật hoặc SVG trong Modal
    const imageContainer = document.getElementById('modal-image-container');
    if (imageContainer) {
        imageContainer.innerHTML = getProductImageHTML(product, true);
    }

    // Hiển thị modal
    modalOverlay.classList.add('active');
    document.body.style.overflow = 'hidden'; // Khóa cuộn trang khi mở modal
}

// Hàm đóng Modal
function closeProductModal() {
    const modalOverlay = document.getElementById('product-modal-overlay');
    if (modalOverlay) {
        modalOverlay.classList.remove('active');
        document.body.style.overflow = ''; // Phục hồi cuộn trang
    }
}

// Hàm render Bảng giá tự động từ danh sách sản phẩm
function renderPricingTable() {
    const tableBody = document.getElementById('pricing-table-body');
    if (!tableBody || typeof products === 'undefined') return;

    tableBody.innerHTML = products.map((product, index) => {
        return `
            <tr>
                <td><strong>${index + 1}. ${product.name}</strong></td>
                <td><span class="product-card-category-badge">${product.category}</span></td>
                <td>${product.weight}</td>
                <td><strong style="color: var(--color-primary);">${product.price}</strong></td>
            </tr>
        `;
    }).join('');
}

// Tự động render ngay khi nạp xong file sản phẩm (Tăng tốc hiển thị khi đăng lên web)
if (typeof products !== 'undefined' && Array.isArray(products)) {
    try {
        if (document.getElementById('products-grid-container')) {
            renderProducts(products);
        }
        if (document.getElementById('pricing-table-body')) {
            renderPricingTable();
        }
    } catch (e) {}
}
