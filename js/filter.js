/**
 * ============================================================================
 * COVIIFOOD - BỘ LỌC & TÌM KIẾM SẢN PHẨM (filter.js)
 * ============================================================================
 */

let currentCategory = 'TẤT CẢ';
let currentSearchQuery = '';

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
            currentSearchQuery = e.target.value.trim().toLowerCase();
            applyFilters();
        });
    }
}

// Lọc danh sách sản phẩm theo Category & Search Query
function applyFilters() {
    if (typeof products === 'undefined' || !Array.isArray(products)) return;

    let filtered = products;

    // 1. Lọc theo danh mục
    if (currentCategory.toUpperCase() !== 'TẤT CẢ') {
        filtered = filtered.filter(p => {
            if (!p.category) return false;
            return p.category.trim().toLowerCase() === currentCategory.toLowerCase();
        });
    }

    // 2. Lọc theo từ khóa tìm kiếm
    if (currentSearchQuery !== '') {
        filtered = filtered.filter(p => {
            const name = (p.name || '').toLowerCase();
            const desc = (p.description || '').toLowerCase();
            const cat = (p.category || '').toLowerCase();
            const flavor = (p.flavor || '').toLowerCase();
            return name.includes(currentSearchQuery) || 
                   desc.includes(currentSearchQuery) || 
                   cat.includes(currentSearchQuery) ||
                   flavor.includes(currentSearchQuery);
        });
    }

    // Render lại sản phẩm sau khi lọc
    if (typeof renderProducts === 'function') {
        renderProducts(filtered);
    }
}
