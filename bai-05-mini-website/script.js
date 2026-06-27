// ===============================
// ĐẾM LƯỢT QUAN TÂM
// ===============================

const interestBtn = document.getElementById("interestBtn");
const countText = document.getElementById("count");

let count = localStorage.getItem("interestCount");

if (count === null) {
    count = 0;
} else {
    count = Number(count);
}

countText.textContent = count;

interestBtn.addEventListener("click", function () {

    count++;

    countText.textContent = count;

    localStorage.setItem("interestCount", count);

    alert("Cảm ơn bạn đã quan tâm đến TechStore!");

});


// ===============================
// KIỂM TRA FORM
// ===============================

const contactForm = document.getElementById("contactForm");

contactForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    const email = document.getElementById("email").value.trim();

    const message = document.getElementById("message").value.trim();

    if (name === "") {

        alert("Vui lòng nhập họ tên.");

        return;

    }

    if (!email.includes("@") || !email.includes(".")) {

        alert("Email không hợp lệ.");

        return;

    }

    if (message === "") {

        alert("Vui lòng nhập nội dung.");

        return;

    }

    alert("Gửi liên hệ thành công!");

    contactForm.reset();

});


// ===============================
// BACK TO TOP
// ===============================

const topBtn = document.getElementById("topBtn");

window.addEventListener("scroll", function () {

    if (window.scrollY > 300) {

        topBtn.style.display = "block";

    } else {

        topBtn.style.display = "none";

    }

});

topBtn.addEventListener("click", function () {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

});


// ===============================
// DARK MODE
// ===============================

const themeBtn = document.getElementById("themeBtn");

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {

    document.body.classList.add("dark-mode");

    if (themeBtn) {
        themeBtn.innerHTML =
            '<i class="bi bi-sun-fill"></i>';
    }

}

if (themeBtn) {

    themeBtn.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        if (document.body.classList.contains("dark-mode")) {

            localStorage.setItem("theme", "dark");

            themeBtn.innerHTML =
                '<i class="bi bi-sun-fill"></i>';

        } else {

            localStorage.setItem("theme", "light");

            themeBtn.innerHTML =
                '<i class="bi bi-moon-fill"></i>';

        }

    });

}


// ===============================
// SMOOTH SCROLL
// ===============================

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(function (link) {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const id = this.getAttribute("href");

        const section = document.querySelector(id);

        section.scrollIntoView({

            behavior: "smooth"

        });

    });

});


// ===============================
// HIỆU ỨNG CARD
// ===============================

const cards = document.querySelectorAll(".card");

cards.forEach(function (card) {

    card.addEventListener("mouseenter", function () {

        card.style.transform = "translateY(-10px)";

    });

    card.addEventListener("mouseleave", function () {

        card.style.transform = "translateY(0px)";

    });

});