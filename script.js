var navLinks = document.getElementById("nav-links");

function showMenu() {
  navLinks.style.right = "0";
}

function hideMenu() {
  navLinks.style.right = "-200px";
}

// SHOPPING CART

let carts = document.querySelectorAll(".buy");

let products = [
  {
    name: "Netflix 12 meseci",
    tag: "netflix",
    price: 20,
    inCart: 0,
  },
  {
    name: "Spotify 12 meseci",
    tag: "spotify",
    price: 15,
    inCart: 0,
  },
  {
    name: "NordVPN 12 meseci",
    tag: "nordvpn",
    price: 10,
    inCart: 0,
  },
  {
    name: "Youtube 12 meseci",
    tag: "youtube",
    price: 40,
    inCart: 0,
  },
  {
    name: "Game Pass 2 meseca",
    tag: "gamepass",
    price: 10,
    inCart: 0,
  },
  {
    name: "Malwarebytes 3 meseca",
    tag: "malwarebytes",
    price: 10,
    inCart: 0,
  },
  {
    name: "HBO max 12 meseci",
    tag: "hbomax",
    price: 15,
    inCart: 0,
  },
  {
    name: "Grammarly 1 mesec",
    tag: "grammarly",
    price: 10,
    inCart: 0,
  },
  {
    name: "ExpressVPN 12 meseci",
    tag: "expressvpn",
    price: 30,
    inCart: 0,
  },
  {
    name: "Duolingo 12 meseci",
    tag: "duolingo",
    price: 25,
    inCart: 0,
  },
  {
    name: "Disney+ 12 meseci",
    tag: "disney",
    price: 15,
    inCart: 0,
  },
  {
    name: "Deezer 12 meseci",
    tag: "deezer",
    price: 30,
    inCart: 0,
  },
  {
    name: "Crunchyroll 12 meseci",
    tag: "crunchyroll",
    price: 10,
    inCart: 0,
  },
  {
    name: "Codecademy 12 meseci",
    tag: "codecademy",
    price: 40,
    inCart: 0,
  },
  {
    name: "Canva LIFETIME",
    tag: "canva",
    price: 20,
    inCart: 0,
  },
];

for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers();
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }
}

onLoadCartNumbers();
