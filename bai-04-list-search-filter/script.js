// ==========================
// DANH SÁCH SẢN PHẨM
// ==========================

const items = [
    {
        id: 1,
        name: "Laptop Dell Inspiron",
        category: "Laptop",
        price: 18990000,
        image: "./images/laptop1.jpg"
    },
    {
        id: 2,
        name: "Laptop ASUS Vivobook",
        category: "Laptop",
        price: 16490000,
        image: "./images/laptop2.jpg"
    },
    {
        id: 3,
        name: "iPhone 15",
        category: "Điện thoại",
        price: 22990000,
        image: "./images/phone1.jpg"
    },
    {
        id: 4,
        name: "Samsung Galaxy S24",
        category: "Điện thoại",
        price: 19990000,
        image: "./images/phone2.jpg"
    },
    {
        id: 5,
        name: "Apple Watch Series 9",
        category: "Phụ kiện",
        price: 9990000,
        image: "./images/watch.jpg"
    },
    {
        id: 6,
        name: "Tai nghe Airpods",
        category: "Phụ kiện",
        price: 2490000,
        image: "./images/headphone.jpg"
    },
    {
        id: 7,
        name: "Bàn phím cơ Dareu",
        category: "Phụ kiện",
        price: 1590000,
        image: "./images/keyboard.jpg"
    },
    {
        id: 8,
        name: "Chuột Gaming Logitech",
        category: "Phụ kiện",
        price: 890000,
        image: "./images/mouse.jpg"
    }
];

// ==========================
// LẤY PHẦN TỬ HTML
// ==========================

const itemList = document.getElementById("itemList");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const sortPrice = document.getElementById("sortPrice");

const cartCount = document.getElementById("cartCount");
const favoriteCount = document.getElementById("favoriteCount");

const noResult = document.getElementById("noResult");

// ==========================
// GIỎ HÀNG
// ==========================

let cart = 0;

// ==========================
// YÊU THÍCH
// ==========================

let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

updateFavoriteCount();

// ==========================
// HIỂN THỊ SẢN PHẨM
// ==========================

function renderItems(data) {

    itemList.innerHTML = "";

    if (data.length === 0) {

        noResult.style.display = "block";
        return;
    }

    noResult.style.display = "none";

    data.forEach(function (item) {

        const liked = favorites.includes(item.id);

        itemList.innerHTML += `

        <div class="item-card">

            <img src="${item.image}" alt="${item.name}">

            <div class="item-content">

                <h3>${item.name}</h3>

                <p class="category">${item.category}</p>

                <p class="price">${item.price.toLocaleString()} VNĐ</p>

                <div class="btn-group">

                    <button
                        class="btn favorite ${liked ? "active" : ""}"
                        onclick="toggleFavorite(${item.id})">

                        <i class="fa-solid fa-heart"></i>

                    </button>

                    <button
                        class="btn cart"
                        onclick="addCart()">

                        <i class="fa-solid fa-cart-shopping"></i>

                        Thêm

                    </button>

                </div>

            </div>

        </div>

        `;
    });

}

// ==========================
// TÌM KIẾM + LỌC
// ==========================

function filterItems() {

    const keyword = searchInput.value.toLowerCase().trim();

    const category = categoryFilter.value;

    let result = items.filter(function (item) {

        const matchName = item.name
            .toLowerCase()
            .includes(keyword);

        const matchCategory =
            category === "all" ||
            item.category === category;

        return matchName && matchCategory;

    });

    if (sortPrice.value === "asc") {

        result.sort(function (a, b) {

            return a.price - b.price;

        });

    }

    if (sortPrice.value === "desc") {

        result.sort(function (a, b) {

            return b.price - a.price;

        });

    }

    renderItems(result);

}

// ==========================
// GIỎ HÀNG
// ==========================

function addCart() {

    cart++;

    cartCount.textContent = cart;

    alert("Đã thêm sản phẩm vào giỏ hàng!");

}

// ==========================
// YÊU THÍCH
// ==========================

function toggleFavorite(id) {

    if (favorites.includes(id)) {

        favorites = favorites.filter(function (item) {

            return item !== id;

        });

    } else {

        favorites.push(id);

    }

    localStorage.setItem(

        "favorites",

        JSON.stringify(favorites)

    );

    updateFavoriteCount();

    filterItems();

}

// ==========================
// ĐẾM YÊU THÍCH
// ==========================

function updateFavoriteCount() {

    favoriteCount.textContent = favorites.length;

}

// ==========================
// SỰ KIỆN
// ==========================

searchInput.addEventListener(

    "input",

    filterItems

);

categoryFilter.addEventListener(

    "change",

    filterItems

);

sortPrice.addEventListener(

    "change",

    filterItems

);

// ==========================
// CHẠY LẦN ĐẦU
// ==========================

renderItems(items);