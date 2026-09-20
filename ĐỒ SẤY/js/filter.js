/**
 * ============================================================================
 * COVIIFOOD - BỘ LỌC & TÌM KIẾM SẢN PHẨM (filter.js)
 * ============================================================================
 */

let currentCategory = 'TẤT CẢ';
let currentSearchQuery = '';

// Hàm loại bỏ dấu tiếng Việt để so sánh chuỗi chuẩn xác trên mọi máy chủ
function normalizeVietnamese(str) {
    if (!str) return '';
    return str.toString()
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()
        .trim();
}

// Kiểm tra xem có phải danh mục "Tất cả" hay không
function isAllCategory(catName) {
    if (!catName) return true;
    const norm = normalizeVietnamese(catName);
    return norm === 'tat ca' || norm === 'all' || norm === '';
}

// Khởi tạo hệ thống lọc sản phẩm
function initProductFilters() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const searchInput = document.getElementById('product-search-input');

    // Sự kiện click nút danh mục
    filterButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            // Đổi active button
            filterButtons.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Lấy danh mục được chọn
            currentCategory = (this.getAttribute('data-category') || 'TẤT CẢ').trim();
            applyFilters();
        });
    });

    // Sự kiện gõ tìm kiếm
    if (searchInput) {
        searchInput.addEventListener('input', function(e) {
            currentSearchQuery = normalizeVietnamese(e.target.value);
            applyFilters();
        });
    }
}

// Lọc danh sách sản phẩm theo Category & Search Query
function applyFilters() {
    if (typeof products === 'undefined' || !Array.isArray(products)) return;

    let filtered = products;

    // 1. Lọc theo danh mục
    if (!isAllCategory(currentCategory)) {
        const normTarget = normalizeVietnamese(currentCategory);
        filtered = filtered.filter(p => {
            if (!p.category) return false;
            return normalizeVietnamese(p.category) === normTarget;
        });
    }

    // 2. Lọc theo từ khóa tìm kiếm (Không phân biệt hoa thường & dấu tiếng Việt)
    if (currentSearchQuery !== '') {
        filtered = filtered.filter(p => {
            const nameNorm = normalizeVietnamese(p.name);
            const descNorm = normalizeVietnamese(p.description);
            const catNorm = normalizeVietnamese(p.category);
            const flavorNorm = normalizeVietnamese(p.flavor);
            return nameNorm.includes(currentSearchQuery) || 
                   descNorm.includes(currentSearchQuery) || 
                   catNorm.includes(currentSearchQuery) ||
                   flavorNorm.includes(currentSearchQuery);
        });
    }

    // Render lại sản phẩm sau khi lọc
    if (typeof renderProducts === 'function') {
        renderProducts(filtered);
    }
}
