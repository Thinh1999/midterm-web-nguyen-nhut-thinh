// =====================
// Đổi giao diện
// =====================

const themeBtn = document.getElementById("themeBtn");

themeBtn.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

});


// =====================
// Đổi nội dung giới thiệu
// =====================

const introBtn = document.getElementById("introBtn");

const description = document.getElementById("description");

let isChanged = false;

introBtn.addEventListener("click", function () {

    if (isChanged) {

        description.textContent =
            "Tôi đang học lập trình Web Front-end và yêu thích thiết kế giao diện website đơn giản, hiện đại và thân thiện với người dùng.";

    } else {

        description.textContent =
            "Mục tiêu của tôi là trở thành Front-end Developer, học thêm ReactJS và xây dựng nhiều dự án web thực tế.";

    }

    isChanged = !isChanged;

});