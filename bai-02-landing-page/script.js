// =========================
// Nút CTA
// =========================

const ctaBtn = document.querySelector("#ctaBtn");

ctaBtn.addEventListener("click", function () {

    alert("Cảm ơn bạn đã quan tâm đến TechStore!");

});

// =========================
// Đóng menu khi bấm link
// (Mobile)
// =========================

const navLinks = document.querySelectorAll(".nav-link");

const navbar = document.querySelector(".navbar-collapse");

navLinks.forEach(function (link) {

    link.addEventListener("click", function () {

        if (navbar.classList.contains("show")) {

            const bsCollapse = bootstrap.Collapse.getInstance(navbar);

            bsCollapse.hide();

        }

    });

});

// =========================
// Highlight menu khi cuộn
// =========================

const sections = document.querySelectorAll("section");

window.addEventListener("scroll", function () {

    let current = "";

    sections.forEach(function (section) {

        const sectionTop = section.offsetTop - 120;

        if (scrollY >= sectionTop) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(function (link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});