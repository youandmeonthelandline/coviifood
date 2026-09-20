# COVIIFOOD — BỘ KHUNG WEBSITE GIỚI THIỆU + BÁN HÀNG

Đây là bộ khung website hoàn chỉnh cho thương hiệu thực phẩm nông sản **COVIIFOOD**, được xây dựng dựa trên nguyên tắc **TÁCH BIỆT DỮ LIỆU VÀ GIAO DIỆN** (Data-driven UI architecture).

---

## 🚀 HƯỚNG DẪN CHẠY WEBSITE BẰNG VS CODE LIVE SERVER

1. Mở thư mục project trong Visual Studio Code.
2. Cài đặt Extension **Live Server** (của Ritwick Dey) trên VS Code nếu chưa có.
3. Nhấp chuột phải vào file `index.html` chọn **Open with Live Server** (hoặc nhấn phím tắt `Alt + L, Alt + O`).
4. Trình duyệt sẽ tự động mở trang web tại địa chỉ `http://127.0.0.1:5500`.

---

## 🛠️ HƯỚNG DẪN THAY ĐỔI THÔNG TIN BẰNG CTRL + F (PLACEHOLDER SYSTEM)

Toàn bộ dữ liệu của website được quản lý tập trung duy nhất tại file:
`js/data.js`

Bạn chỉ cần tìm kiếm (bằng tổ hợp phím **CTRL + F**) các từ khóa Placeholder để thay bằng dữ liệu thực tế từ chủ thương hiệu:

### 1. Thay thông tin liên hệ & mạng xã hội
- Tìm `[LINK TIKTOK]` => Thay bằng link TikTok Shop của Coviifood (Ví dụ: `https://tiktok.com/@coviifood`).
- Tìm `[LINK ZALO]` => Thay bằng link Zalo Official hoặc Zalo cá nhân (Ví dụ: `https://zalo.me/090xxxxxxx`).
- Tìm `[LINK FACEBOOK]` => Thay bằng link Fanpage (Ví dụ: `https://facebook.com/coviifood`).
- Tìm `[SỐ ĐIỆN THOẠI]` => Thay bằng hotline (Ví dụ: `0988 123 456`).
- Tìm `[THAY ĐỊA CHỈ TRỰC TIẾP HOẶC SHOWROOM]` => Thay bằng địa chỉ thực tế.

### 2. Thay câu chuyện thương hiệu chính thức
- Mở `js/data.js` -> Tìm đối tượng `storyData`.
- Thay thế các đoạn nội dung mẫu của người sáng lập, quá trình khởi đầu thời COVID, mục đích thành lập bằng câu chuyện chính thức.

### 3. Thay thông tin & Giá bán 13 sản phẩm
Mỗi sản phẩm trong mảng `products` của `js/data.js` chứa các trường:
- `price`: Thay `"[CHƯA CẬP NHẬT]"` bằng giá niêm yết (Ví dụ: `"65.000đ"`).
- `weight`: Thay `"[THAY KHỐI LƯỢNG]"` bằng khối lượng thực tế (Ví dụ: `"100g"`).
- `description`: Thay mô tả chi tiết sản phẩm.
- `ingredients`: Thay thành phần chính thức.
- `origin`: Thay nguồn nguyên liệu (Ví dụ: `"Đà Lạt, Lâm Đồng"`).
- `storage` & `expiry`: Thay hướng dẫn bảo quản và hạn sử dụng.

---

## 🖼️ HƯỚNG DẪN THAY HÌNH ẢNH SẢN PHẨM & HERO

1. **Hình ảnh sản phẩm**:
   - Thả ảnh thật sản phẩm vào thư mục `assets/products/` (Ví dụ: `assets/products/mit-say.jpg`).
   - Mở `js/data.js` và cập nhật trường `image` cho sản phẩm tương ứng:
     ```javascript
     image: "assets/products/mit-say.jpg"
     ```

2. **Hình ảnh Hero (Trang chủ)**:
   - Thả ảnh không gian tự nhiên/sản phẩm vào `assets/images/hero.jpg`.
   - Trong `index.html`, thay thế khối `hero-image-placeholder` bằng thẻ `<img>`:
     ```html
     <img src="assets/images/hero.jpg" alt="Coviifood Hero" class="hero-img">
     ```

---

## 🎨 HƯỚNG DẪN TINH CHỈNH MÀU SẮC GIAO DIỆN (THEME COLOR)

Mở file `css/style.css` và chỉnh sửa các biến màu tại khối `:root`:

```css
:root {
    --color-primary: #2D5A27;        /* Xanh lá nông sản chủ đạo */
    --color-secondary: #8C6D53;      /* Nâu đất nhẹ */
    --color-accent: #D97736;         /* Cam đất điểm nhấn */
    --color-background: #FAF7F2;     /* Nền kem ấm tự nhiên */
    --color-text: #2B2D2F;          /* Màu chữ tối */
}
```

---

## 📂 CẤU TRÚC THƯ MỤC PROJECT

```text
coviifood/
│
├── index.html              # Trang chủ chính với đầy đủ 12 section & anchor navigation
├── products.html           # Trang danh sách 13 sản phẩm riêng cho multi-page
├── story.html              # Trang câu chuyện thương hiệu riêng
├── pricing.html            # Trang bảng giá tự động từ data.js
├── faq.html                # Trang hỏi đáp FAQ (10 câu hỏi)
├── contact.html            # Trang liên hệ đặt hàng TikTok, Zalo, Facebook
│
├── css/
│   ├── style.css           # Design system, CSS Variables & Typography
│   ├── components.css      # Style chi tiết cho Header, Cards, Modal, Table, Accordion
│   └── responsive.css      # Responsive cho Mobile Drawer, Tablet, Desktop
│
├── js/
│   ├── data.js             # DỮ LIỆU TRUNG TÂM (Brand, 13 Sản phẩm, FAQ, Pricing)
│   ├── app.js              # Khởi chạy chính, bind data & header navigation
│   ├── products.js         # Render danh sách sản phẩm, Modal popup & Bảng giá
│   ├── filter.js           # Bộ lọc 5 danh mục & Tìm kiếm trực tiếp
│   └── animations.js       # Hiệu ứng cuộn mượt Fade-in & FAQ accordion
│
├── assets/
│   ├── images/             # Thư mục chứa hình ảnh thương hiệu & Hero
│   └── products/           # Thư mục chứa hình ảnh sản phẩm sấy
│
└── README.md               # Tài liệu hướng dẫn sử dụng tiếng Việt
```

---

## ✅ CHECKLIST KIỂM TRA CHỨC NĂNG

- [x] Giao diện sang trọng, sạch sẽ, tự nhiên, màu kem ấm & xanh lá nông sản.
- [x] Hệ thống Placeholder System minh bạch (`[THAY ...]`, `[CHƯA CẬP NHẬT]`) dễ CTRL + F.
- [x] Không bịa nhà máy, nguồn gốc, chứng nhận, thành phần hay tác dụng chữa bệnh.
- [x] Tách 100% dữ liệu khỏi giao diện qua `js/data.js`.
- [x] Đủ 13 sản phẩm mẫu với bộ lọc 5 danh mục & ô tìm kiếm không reload trang.
- [x] Dynamic Modal chi tiết sản phẩm với mục "ĐIỀU GÌ ĐẶC BIỆT Ở SẢN PHẨM NÀY?".
- [x] Bảng giá tự động kết xuất từ `data.js` kèm lưu ý tách biệt giá sỉ và giá bán lẻ.
- [x] Section "Thử trước khi chọn" và Hành trình sản phẩm (6 bước visual).
- [x] Đủ 10 câu hỏi FAQ accordion mở gập mượt mà.
- [x] Kênh liên hệ TikTok Shop, Zalo Official, Facebook Fanpage, Hotline.
- [x] Responsive hoàn hảo trên Desktop, Tablet và Mobile (Hamburger drawer navigation).
- [x] Code comment 100% bằng Tiếng Việt.
