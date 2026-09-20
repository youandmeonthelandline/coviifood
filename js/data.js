/**
 * ============================================================================
 * COVIIFOOD - FILE DỮ LIỆU TRUNG TÂM (CENTRAL DATA SOURCE)
 * ============================================================================
 * 
 * HƯỚNG DẪN SỬ DỤNG CHO CHỦ THƯƠNG HIỆU:
 * Bạn chỉ cần tìm các thẻ placeholder nằm trong ngoặc vuông [ ] để thay thông tin thật.
 * Ví dụ: 
 *   - [LINK TIKTOK] => thay bằng https://tiktok.com/@coviifood
 *   - [CHƯA CẬP NHẬT] => thay bằng giá tiền hoặc câu trả lời chính thức
 *   - [THAY MÔ TẢ] => thay bằng mô tả thật của sản phẩm
 * 
 * Sau khi sửa file này, toàn bộ website sẽ tự động cập nhật!
 */

// 1. THÔNG TIN THƯƠNG HIỆU COVIIFOOD
const brandInfo = {
    name: "COVIIFOOD",
    tagline: "Từ nông sản đến những sản phẩm ngon lành cho mỗi ngày.",
    shortDesc: "Coviifood là thương hiệu chuyên cung cấp các sản phẩm thực phẩm từ nông sản Việt Nam chất lượng cao, lưu giữ trọn vẹn hương vị tự nhiên.",
    logoText: "COVIIFOOD",
    logoImage: "assets/images/logo.jpg", // Đường dẫn ảnh logo thực tế
    
    // Kênh liên hệ và mạng xã hội (Thay link thực tế tại đây)
    tiktok: "[LINK TIKTOK]",
    zalo: "https://zalo.me/0948971425",
    facebook: "[LINK FACEBOOK]",
    phone: "[SỐ ĐIỆN THOẠI]",
    email: "[EMAIL LIÊN HỆ]",
    address: "[THAY ĐỊA CHỈ TRỰC TIẾP HOẶC SHOWROOM]",
    orderNote: "Đặt hàng trực tiếp qua Zalo, TikTok Shop hoặc Facebook Fanpage của Coviifood."
};

// 2. CÂU CHUYỆN THƯƠNG HIỆU (NỘI DUNG MẪU - ĐÁNH DẤU CẦN THAY CHÍNH THỨC)
const storyData = {
    title: "Câu chuyện Coviifood",
    subtitle: "Hành trình kết nối nông sản Việt đến căn bếp mọi nhà",
    isSampleContent: true, // Cờ đánh dấu đây là nội dung mẫu
    statusNote: "[NỘI DUNG MẪU BAN ĐẦU - CHỜ CHỦ THƯƠNG HIỆU CẬP NHẬT BẢN CHÍNH THỨC]",
    
    founder: {
        title: "Người sáng lập",
        role: "Đầu bếp & Người tâm huyết với nông sản Việt",
        desc: "Xuất thân là một đầu bếp chuyên nghiệp, người sáng lập Coviifood luôn trăn trở về việc biến các nguồn nông sản phong phú của Việt Nam thành những sản phẩm tiện lợi, giữ nguyên vị ngon tự nhiên và nâng cao giá trị cho nông sản Việt."
    },
    
    history: {
        title: "Coviifood bắt đầu như thế nào?",
        content: "Thương hiệu bắt đầu hình thành trong giai đoạn COVID-19, khi nông sản nội địa gặp vô vàn khó khăn về đầu ra. Chứng kiến cảnh nông dân loay hoay với sản lượng thu hoạch, ý tưởng về việc chế biến sâu nông sản tươi thành các sản phẩm sấy chất lượng cao đã ra đời."
    },
    
    whyStart: {
        title: "Vì sao chúng tôi bắt đầu?",
        content: "Chúng tôi bắt đầu với mong muốn giải quyết bài toán đầu ra cho nông sản, đồng thời mang đến cho người tiêu dùng những món ăn vặt, thực phẩm sấy sạch, thơm ngon, giữ trọn dinh dưỡng mà không sử dụng phụ gia độc hại."
    },
    
    mission: {
        title: "Coviifood hướng đến điều gì?",
        content: "Coviifood hướng tới trở thành thương hiệu thực phẩm nông sản tin cậy, minh bạch về nguồn gốc, đồng hành cùng người nông dân và mang hương vị nông sản Việt đến mọi gia đình."
    },
    
    // Timeline lịch sử thương hiệu
    timeline: [
        {
            stage: "GIAI ĐOẠN COVID",
            title: "Khởi nguồn khó khăn",
            desc: "Nông sản gặp trở ngại đầu ra, nông dân gặp khó khăn tiêu thụ."
        },
        {
            stage: "NÔNG SẢN CẦN ĐẦU RÁ",
            title: "Trăn trở của đầu bếp",
            desc: "Tìm giải pháp bảo quản và nâng cao giá trị cho trái cây, củ quả."
        },
        {
            stage: "Ý TƯỞNG HÌNH THÀNH",
            title: "Nghiên cứu công nghệ sấy",
            desc: "Thử nghiệm chế biến giữ trọn cấu trúc, hương vị tự nhiên của nông sản."
        },
        {
            stage: "COVIIFOOD RA ĐỜI",
            title: "Chính thức thành lập",
            desc: "Thương hiệu Coviifood được hình thành với định hướng chất lượng & minh bạch."
        },
        {
            stage: "PHÁT TRIỂN SẢN PHẨM",
            title: "Đa dạng hóa dòng sản phẩm",
            desc: "Phát triển các dòng Sấy giòn, Sấy dẻo, Sấy thăng hoa và Đồ ăn vặt."
        },
        {
            stage: "ĐẾN TAY KHÁCH HÀNG",
            title: "Trao gửi hương vị lành",
            desc: "Sản phẩm được đóng gói chỉn chu, mang tới trải nghiệm trọn vẹn cho người dùng."
        }
    ]
};

// 3. VÌ SAO CHỌN COVIIFOOD (4 CARDS)
const whyUsCards = [
    {
        id: "01",
        title: "NÔNG SẢN",
        subtitle: "Nguồn nguyên liệu tươi chọn lọc",
        desc: "[THÔNG TIN NGUỒN NGUYÊN LIỆU] — Ưu tiên thu mua nông sản từ các vùng trồng đạt chuẩn, nguyên liệu trái cây và củ quả tươi ngon.",
        icon: "leaf"
    },
    {
        id: "02",
        title: "SẤY THĂNG HOA",
        subtitle: "Công nghệ sấy hiện đại",
        desc: "[THÔNG TIN CÔNG NGHỆ] — Áp dụng phương pháp sấy tiên tiến giúp giữ lại màu sắc, hương vị nguyên bản và hàm lượng dinh dưỡng tối đa.",
        icon: "snowflake"
    },
    {
        id: "03",
        title: "NGƯỜI LÀM",
        subtitle: "Góc nhìn người đầu bếp",
        desc: "Sản phẩm được chăm chút từ khâu nêm nếm, phối vị đến cấu trúc thành phẩm bởi đội ngũ am hiểu ẩm thực và tâm huyết.",
        icon: "chef-hat"
    },
    {
        id: "04",
        title: "MINH BẠCH",
        subtitle: "Tiêu chuẩn & Rõ ràng",
        desc: "[THÔNG TIN CHỨNG NHẬN] — Đảm bảo an toàn vệ sinh thực phẩm, quy trình rõ ràng, thông tin bao bì minh bạch đến người tiêu dùng.",
        icon: "shield-check"
    }
];

// 4. DANH SÁCH 13 SẢN PHẨM MẪU CỦA COVIIFOOD
const products = [
    {
        id: 1,
        name: "Rau củ quả sấy giòn",
        category: "Sấy giòn",
        image: "assets/images/raucuquasaygion.jpg",
        imagePlaceholderText: "Rau củ quả sấy giòn",
        price: "[CHƯA CẬP NHẬT]",
        weight: "[THAY KHỐI LƯỢNG]",
        description: "[THAY MÔ TẢ] — Tổng hợp các loại rau củ quả tự nhiên sấy giòn rụm, giữ nguyên màu sắc và vị ngọt thanh tự nhiên.",
        flavor: "[THAY HƯƠNG VỊ]",
        texture: "Giòn rụm, xốp nhẹ",
        ingredients: "[THAY THÀNH PHẦN]",
        productionMethod: "[THAY PHƯƠNG PHÁP SẢN XUẤT]",
        origin: "[THAY NGUỒN NGUYÊN LIỆU]",
        storage: "[THAY CÁCH BẢO QUẢN]",
        expiry: "[THAY HẠN SỬ DỤNG]",
        highlights: [
            "[THAY ĐIỂM NỔI BẬT 1: Giữ nguyên màu sắc tự nhiên]",
            "[THAY ĐIỂM NỔI BẬT 2: Giòn xốp dễ ăn, không dầu mỡ]",
            "[THAY ĐIỂM NỔI BẬT 3: Thích hợp cho cả gia đình]"
        ]
    },
    {
        id: 2,
        name: "Mít sấy",
        category: "Sấy giòn",
        image: "assets/images/mitsaygion.jpg",
        imagePlaceholderText: "Mít sấy giòn",
        price: "[CHƯA CẬP NHẬT]",
        weight: "[THAY KHỐI LƯỢNG]",
        description: "[THAY MÔ TẢ] — Những múi mít vàng tươi sấy giòn, thơm nức mũi, vị ngọt đậm đà đặc trưng của mít chín nông sản Việt.",
        flavor: "[THAY HƯƠNG VỊ]",
        texture: "Giòn xốp, thơm lừng",
        ingredients: "[THAY THÀNH PHẦN]",
        productionMethod: "[THAY PHƯƠNG PHÁP SẢN XUẤT]",
        origin: "[THAY NGUỒN NGUYÊN LIỆU]",
        storage: "[THAY CÁCH BẢO QUẢN]",
        expiry: "[THAY HẠN SỬ DỤNG]",
        highlights: [
            "[THAY ĐIỂM NỔI BẬT 1: Múi mít dầy dặn]",
            "[THAY ĐIỂM NỔI BẬT 2: Hương thơm tự nhiên không hương liệu]",
            "[THAY ĐIỂM NỔI BẬT 3: Vị ngọt thanh dễ chịu]"
        ]
    },
    {
        id: 3,
        name: "Khoai lang tím",
        category: "Sấy giòn",
        image: "assets/images/khoailangtimsaygion.jpg",
        imagePlaceholderText: "Khoai lang tím sấy",
        price: "[CHƯA CẬP NHẬT]",
        weight: "[THAY KHỐI LƯỢNG]",
        description: "[THAY MÔ TẢ] — Khoai lang tím sấy giòn với màu tím tự nhiên bắt mắt, bùi bùi thanh ngọt thanh mát.",
        flavor: "[THAY HƯƠNG VỊ]",
        texture: "Bùi, giòn giòn",
        ingredients: "[THAY THÀNH PHẦN]",
        productionMethod: "[THAY PHƯƠNG PHÁP SẢN XUẤT]",
        origin: "[THAY NGUỒN NGUYÊN LIỆU]",
        storage: "[THAY CÁCH BẢO QUẢN]",
        expiry: "[THAY HẠN SỬ DỤNG]",
        highlights: [
            "[THAY ĐIỂM NỔI BẬT 1: Màu tím nguyên bản]",
            "[THAY ĐIỂM NỔI BẬT 2: Vị bùi tự nhiên]",
            "[THAY ĐIỂM NỔI BẬT 3: Giàu chất xơ]"
        ]
    },
    {
        id: 4,
        name: "Khoai lang vàng",
        category: "Sấy giòn",
        image: "assets/images/khoailangvangsaygion.jpg",
        imagePlaceholderText: "Khoai lang vàng sấy",
        price: "[CHƯA CẬP NHẬT]",
        weight: "[THAY KHỐI LƯỢNG]",
        description: "[THAY MÔ TẢ] — Khoai lang vàng chọn lọc sấy giòn tan, vị ngọt bùi tự nhiên ngon miệng.",
        flavor: "[THAY HƯƠNG VỊ]",
        texture: "Giòn xốp, bùi ngọt",
        ingredients: "[THAY THÀNH PHẦN]",
        productionMethod: "[THAY PHƯƠNG PHÁP SẢN XUẤT]",
        origin: "[THAY NGUỒN NGUYÊN LIỆU]",
        storage: "[THAY CÁCH BẢO QUẢN]",
        expiry: "[THAY HẠN SỬ DỤNG]",
        highlights: [
            "[THAY ĐIỂM NỔI BẬT 1: Khoai củ tuyển chọn]",
            "[THAY ĐIỂM NỔI BẬT 2: Giòn tan dịu ngọt]",
            "[THAY ĐIỂM NỔI BẬT 3: Ăn vặt lành mạnh]"
        ]
    },
    {
        id: 5,
        name: "Xoài sấy dẻo",
        category: "Sấy dẻo",
        image: "assets/images/xoaisaydeo.jpg",
        imagePlaceholderText: "Xoài sấy dẻo",
        price: "[CHƯA CẬP NHẬT]",
        weight: "[THAY KHỐI LƯỢNG]",
        description: "[THAY MÔ TẢ] — Miếng xoài sấy dẻo quánh, giữ trọn vị chua chua ngọt ngọt cuốn hút của xoài tươi.",
        flavor: "[THAY HƯƠNG VỊ]",
        texture: "Dẻo mềm, dai xoai",
        ingredients: "[THAY THÀNH PHẦN]",
        productionMethod: "[THAY PHƯƠNG PHÁP SẢN XUẤT]",
        origin: "[THAY NGUỒN NGUYÊN LIỆU]",
        storage: "[THAY CÁCH BẢO QUẢN]",
        expiry: "[THAY HẠN SỬ DỤNG]",
        highlights: [
            "[THAY ĐIỂM NỔI BẬT 1: Độ dẻo hoàn hảo]",
            "[THAY ĐIỂM NỔI BẬT 2: Vị chua ngọt hài hòa]",
            "[THAY ĐIỂM NỔI BẬT 3: Miếng dầy mọng]"
        ]
    },
    {
        id: 6,
        name: "Xoài xí muội cay",
        category: "Sấy dẻo",
        image: "assets/images/xoaiximuoicay.jpg",
        imagePlaceholderText: "Xoài xí muội cay",
        price: "[CHƯA CẬP NHẬT]",
        weight: "[THAY KHỐI LƯỢNG]",
        description: "[THAY MÔ TẢ] — Sự kết hợp giữa xoài dẻo ngọt thanh, lớp muối xí muội mặn ngọt và chút ớt cay nhẹ kích thích vị giác.",
        flavor: "[THAY HƯƠNG VỊ]",
        texture: "Dẻo mềm, phủ lớp xí muội",
        ingredients: "[THAY THÀNH PHẦN]",
        productionMethod: "[THAY PHƯƠNG PHÁP SẢN XUẤT]",
        origin: "[THAY NGUỒN NGUYÊN LIỆU]",
        storage: "[THAY CÁCH BẢO QUẢN]",
        expiry: "[THAY HẠN SỬ DỤNG]",
        highlights: [
            "[THAY ĐIỂM NỔI BẬT 1: Hương vị xí muội độc đáo]",
            "[THAY ĐIỂM NỔI BẬT 2: Vị cay nhẹ vui miệng]",
            "[THAY ĐIỂM NỔI BẬT 3: Món ăn vặt gây nghiện]"
        ]
    },
    {
        id: 7,
        name: "Dâu tây sấy giòn",
        category: "Sấy giòn",
        image: "assets/images/dautaysaygion.jpg",
        imagePlaceholderText: "Dâu tây sấy giòn",
        price: "[CHƯA CẬP NHẬT]",
        weight: "[THAY KHỐI LƯỢNG]",
        description: "[THAY MÔ TẢ] — Trái dâu tây nguyên quả sấy giòn xốp, giữ màu đỏ tươi và vị chua thanh tự nhiên.",
        flavor: "[THAY HƯƠNG VỊ]",
        texture: "Giòn xốp, tan trong miệng",
        ingredients: "[THAY THÀNH PHẦN]",
        productionMethod: "[THAY PHƯƠNG PHÁP SẢN XUẤT]",
        origin: "[THAY NGUỒN NGUYÊN LIỆU]",
        storage: "[THAY CÁCH BẢO QUẢN]",
        expiry: "[THAY HẠN SỬ DỤNG]",
        highlights: [
            "[THAY ĐIỂM NỔI BẬT 1: Giữ nguyên hình dáng quả dâu]",
            "[THAY ĐIỂM NỔI BẬT 2: Chua ngọt tươi mới]",
            "[THAY ĐIỂM NỔI BẬT 3: Rất thích hợp ăn kèm sữa chua]"
        ]
    },
    {
        id: 8,
        name: "Dâu tây sấy dẻo",
        category: "Sấy dẻo",
        image: "assets/images/dautaysaydeo.jpg",
        imagePlaceholderText: "Dâu tây sấy dẻo",
        price: "[CHƯA CẬP NHẬT]",
        weight: "[THAY KHỐI LƯỢNG]",
        description: "[THAY MÔ TẢ] — Quả dâu tây dẻo thơm, mọng vị ngọt chua quyến rũ.",
        flavor: "[THAY HƯƠNG VỊ]",
        texture: "Dẻo mềm, mọng vị",
        ingredients: "[THAY THÀNH PHẦN]",
        productionMethod: "[THAY PHƯƠNG PHÁP SẢN XUẤT]",
        origin: "[THAY NGUỒN NGUYÊN LIỆU]",
        storage: "[THAY CÁCH BẢO QUẢN]",
        expiry: "[THAY HẠN SỬ DỤNG]",
        highlights: [
            "[THAY ĐIỂM NỔI BẬT 1: Vị dâu đậm đà]",
            "[THAY ĐIỂM NỔI BẬT 2: Cấu trúc dẻo dai ngon miệng]",
            "[THAY ĐIỂM NỔI BẬT 3: Bao bì hiện đại]"
        ]
    },
    {
        id: 9,
        name: "Dâu tằm sấy dẻo",
        category: "Sấy dẻo",
        image: "assets/images/dautamsaydeo.jpg",
        imagePlaceholderText: "Dâu tằm sấy dẻo",
        price: "[CHƯA CẬP NHẬT]",
        weight: "[THAY KHỐI LƯỢNG]",
        description: "[THAY MÔ TẢ] — Dâu tằm chín mọng sấy dẻo đậm đà hương thơm đặc trưng của trái cây đồi núi.",
        flavor: "[THAY HƯƠNG VỊ]",
        texture: "Dẻo dai, mọng hương",
        ingredients: "[THAY THÀNH PHẦN]",
        productionMethod: "[THAY PHƯƠNG PHÁP SẢN XUẤT]",
        origin: "[THAY NGUỒN NGUYÊN LIỆU]",
        storage: "[THAY CÁCH BẢO QUẢN]",
        expiry: "[THAY HẠN SỬ DỤNG]",
        highlights: [
            "[THAY ĐIỂM NỔI BẬT 1: Trái dâu tằm mọng vị]",
            "[THAY ĐIỂM NỔI BẬT 2: Màu sắc tự nhiên của dâu tằm]",
            "[THAY ĐIỂM NỔI BẬT 3: Giàu dưỡng chất]"
        ]
    },
    {
        id: 10,
        name: "Khoai môn cọng hành",
        category: "Đồ ăn vặt",
        image: "assets/images/khoaimonconghanh.jpg",
        imagePlaceholderText: "Khoai môn cọng hành",
        price: "[CHƯA CẬP NHẬT]",
        weight: "[THAY KHỐI LƯỢNG]",
        description: "[THAY MÔ TẢ] — Khoai môn cắt cọng sấy giòn tẩm vị hành mặn nhẹ, thơm lừng bùi béo.",
        flavor: "[THAY HƯƠNG VỊ]",
        texture: "Giòn rụm, thơm mùi hành tươi",
        ingredients: "[THAY THÀNH PHẦN]",
        productionMethod: "[THAY PHƯƠNG PHÁP SẢN XUẤT]",
        origin: "[THAY NGUỒN NGUYÊN LIỆU]",
        storage: "[THAY CÁCH BẢO QUẢN]",
        expiry: "[THAY HẠN SỬ DỤNG]",
        highlights: [
            "[THAY ĐIỂM NỔI BẬT 1: Vị hành thơm dịu vừa vặn]",
            "[THAY ĐIỂM NỔI BẬT 2: Khoai môn bùi béo]",
            "[THAY ĐIỂM NỔI BẬT 3: Cọng khoai giòn giòn]"
        ]
    },
    {
        id: 11,
        name: "Khoai môn vị cua",
        category: "Đồ ăn vặt",
        image: "assets/images/khoaimonvicua.jpg",
        imagePlaceholderText: "Khoai môn vị cua",
        price: "[CHƯA CẬP NHẬT]",
        weight: "[THAY KHỐI LƯỢNG]",
        description: "[THAY MÔ TẢ] — Khoai môn giòn bùi kết hợp cùng gia vị vị cua đậm đà lạ miệng.",
        flavor: "[THAY HƯƠNG VỊ]",
        texture: "Giòn rụm, đậm đà",
        ingredients: "[THAY THÀNH PHẦN]",
        productionMethod: "[THAY PHƯƠNG PHÁP SẢN XUẤT]",
        origin: "[THAY NGUỒN NGUYÊN LIỆU]",
        storage: "[THAY CÁCH BẢO QUẢN]",
        expiry: "[THAY HẠN SỬ DỤNG]",
        highlights: [
            "[THAY ĐIỂM NỔI BẬT 1: Vị cua đậm đà mặn ngọt]",
            "[THAY ĐIỂM NỔI BẬT 2: Giòn sần sật]",
            "[THAY ĐIỂM NỔI BẬT 3: Thích hợp thưởng thức cùng trà]"
        ]
    },
    {
        id: 12,
        name: "Khoai tây phô mai",
        category: "Đồ ăn vặt",
        image: "assets/images/khoaitayphomai.jpg",
        imagePlaceholderText: "Khoai tây phô mai",
        price: "[CHƯA CẬP NHẬT]",
        weight: "[THAY KHỐI LƯỢNG]",
        description: "[THAY MÔ TẢ] — Lát khoai tây sấy giòn lắc lớp bột phô mai béo ngậy thơm nức.",
        flavor: "[THAY HƯƠNG VỊ]",
        texture: "Giòn giòn, béo ngậy phô mai",
        ingredients: "[THAY THÀNH PHẦN]",
        productionMethod: "[THAY PHƯƠNG PHÁP SẢN XUẤT]",
        origin: "[THAY NGUỒN NGUYÊN LIỆU]",
        storage: "[THAY CÁCH BẢO QUẢN]",
        expiry: "[THAY HẠN SỬ DỤNG]",
        highlights: [
            "[THAY ĐIỂM NỔI BẬT 1: Phô mai đậm đà]",
            "[THAY ĐIỂM NỔI BẬT 2: Khoai tây cắt lát giòn rụm]",
            "[THAY ĐIỂM NỔI BẬT 3: Món ăn vặt trẻ em yêu thích]"
        ]
    },
    {
        id: 13,
        name: "Sữa chua sấy thăng hoa",
        category: "Sấy thăng hoa",
        image: "assets/images/suachuathanghoa.jpg",
        imagePlaceholderText: "Sữa chua sấy thăng hoa",
        price: "[CHƯA CẬP NHẬT]",
        weight: "[THAY KHỐI LƯỢNG]",
        description: "[THAY MÔ TẢ] — Viên sữa chua được sấy thăng hoa ở nhiệt độ âm, giữ trọn vi lợi khuẩn, xốp mềm và tan ngay trên đầu lưỡi.",
        flavor: "[THAY HƯƠNG VỊ]",
        texture: "Xốp nhẹ, tan ngay trong miệng",
        ingredients: "[THAY THÀNH PHẦN]",
        productionMethod: "Công nghệ Sấy Thăng Hoa (Freeze Drying) hiện đại",
        origin: "[THAY NGUỒN NGUYÊN LIỆU]",
        storage: "[THAY CÁCH BẢO QUẢN]",
        expiry: "[THAY HẠN SỬ DỤNG]",
        highlights: [
            "[THAY ĐIỂM NỔI BẬT 1: Giữ lại cấu trúc xốp đặc trưng]",
            "[THAY ĐIỂM NỔI BẬT 2: Vị chua thanh béo nhẹ của sữa chua]",
            "[THAY ĐIỂM NỔI BẬT 3: Công nghệ sấy thăng hoa đỉnh cao]"
        ]
    }
];

// 5. BẢNG GIÁ & LƯU Ý
const pricingInfo = {
    title: "BẢNG GIÁ COVIIFOOD",
    subtitle: "Thông tin giá bán minh bạch cho từng sản phẩm",
    noteRetail: "Bảng giá bên dưới là BẢNG GIÁ BÁN LẺ tham khảo. Hiện tại giá bán lẻ chính thức đang ở trạng thái [CHƯA CẬP NHẬT].",
    noteWholesale: "LƯU Ý: Giá sỉ và giá đại lý/sỉ số lượng lớn được áp dụng chính sách riêng biệt. KHÔNG lấy giá sỉ làm giá bán lẻ.",
    contactForBulk: "Để nhận bảng giá sỉ và chính sách đại lý mới nhất, vui lòng liên hệ qua Zalo hoặc Hotline."
};

// 6. HÀNH TRÌNH SẢN PHẨM (6 BƯỚC VISUAL STORYTELLING)
const journeySteps = [
    {
        step: 1,
        title: "NÔNG SẢN",
        desc: "Lựa chọn các loại hoa quả, củ tươi từ các nguồn nông sản uy tín.",
        icon: "seedling"
    },
    {
        step: 2,
        title: "LỰA CHỌN",
        desc: "Sơ chế, phân loại kỹ càng từng quả/củ đảm bảo độ tươi ngon nguyên bản.",
        icon: "filter"
    },
    {
        step: 3,
        title: "SẢN XUẤT",
        desc: "Quy trình chế biến sạch sẽ, chuẩn bị cho các phương pháp sấy.",
        icon: "cog"
    },
    {
        step: 4,
        title: "SẤY",
        desc: "Áp dụng công nghệ sấy giòn, sấy dẻo hoặc sấy thăng hoa tương ứng.",
        icon: "wind"
    },
    {
        step: 5,
        title: "ĐÓNG GÓI",
        desc: "Đóng gói bao bì minh bạch, niêm phong kín giữ trọn chất lượng.",
        icon: "box"
    },
    {
        step: 6,
        title: "ĐẾN TAY KHÁCH HÀNG",
        desc: "Vận chuyển nhanh chóng, trao tận tay trải nghiệm ẩm thực trọn vẹn.",
        icon: "heart"
    }
];

// 7. CÂU HỎI THƯỜNG GẶP (FAQ - 10 CÂU HỎI YÊU CẦU)
const faqData = [
    {
        question: "Coviifood là gì?",
        answer: "Coviifood là thương hiệu thực phẩm chuyên cung cấp các sản phẩm từ nông sản Việt Nam với định hướng chất lượng, tự nhiên và minh bạch thông tin."
    },
    {
        question: "Coviifood bắt đầu từ đâu?",
        answer: "Coviifood bắt đầu từ giai đoạn khó khăn COVID-19, xuất phát từ mong muốn hỗ trợ đầu ra cho nông sản Việt và trăn sở của người đầu bếp sáng lập."
    },
    {
        question: "Nguyên liệu được lấy từ đâu?",
        answer: "[THAY BẰNG CÂU TRẢ LỜI CHÍNH THỨC — Ví dụ: Nguyên liệu được thu mua từ các vùng trồng nông sản đạt chuẩn tại Việt Nam]."
    },
    {
        question: "Sản phẩm được sản xuất ở đâu?",
        answer: "[THAY BẰNG CÂU TRẢ LỜI CHÍNH THỨC — Ví dụ: Sản phẩm được sản xuất tại nhà máy đạt chuẩn vệ sinh an toàn thực phẩm]."
    },
    {
        question: "Sấy thăng hoa là gì?",
        answer: "Sấy thăng hoa (Freeze Drying) là công nghệ cấp đông sản phẩm ở nhiệt độ âm sâu, sau đó làm bay hơi nước trong môi trường chân không mà không qua thể lỏng, giúp giữ trọn màu sắc, hương vị và dinh dưỡng."
    },
    {
        question: "Sản phẩm có những thành phần gì?",
        answer: "[THAY BẰNG CÂU TRẢ LỜI CHÍNH THỨC — Xem thành phần chi tiết của từng sản phẩm trong mục Chi tiết sản phẩm]."
    },
    {
        question: "Bảo quản như thế nào?",
        answer: "[THAY BẰNG CÂU TRẢ LỜI CHÍNH THỨC — Thông thường bảo quản nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp và kéo kín khóa zip sau khi dùng]."
    },
    {
        question: "Hạn sử dụng bao lâu?",
        answer: "[THAY BẰNG CÂU TRẢ LỜI CHÍNH THỨC — Hạn sử dụng được in rõ ràng trên bao bì từng lô sản phẩm]."
    },
    {
        question: "Có đổi trả không?",
        answer: "[THAY BẰNG CÂU TRẢ LỜI CHÍNH THỨC — Coviifood hỗ trợ đổi trả nếu sản phẩm có lỗi từ nhà sản xuất hoặc hư hỏng do vận chuyển]."
    },
    {
        question: "Làm thế nào để đặt hàng?",
        answer: "Bạn có thể đặt hàng dễ dàng bằng cách click nút ĐẶT HÀNG để kết nối trực tiếp với Zalo, TikTok Shop hoặc Facebook của Coviifood."
    }
];

// 8. KHU VỰC THỬ TRƯỚC KHI CHỌN
const tryBeforeBuyData = {
    title: "Không biết chọn vị nào?",
    subtitle: "Thử trước – cảm nhận rồi hãy chọn.",
    desc: "Chúng tôi hiểu rằng mỗi người có một khẩu vị riêng. Coviifood khuyến khích bạn trải nghiệm dùng thử trước khi đưa ra quyết định mua số lượng lớn.",
    locationPlaceholder: "[THAY THÔNG TIN ĐỊA ĐIỂM HOẶC CÁCH THỨC ĐĂNG KÝ THỬ SẢN PHẨM]"
};
