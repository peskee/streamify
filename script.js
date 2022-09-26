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
    tag: "netflixlogo",
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
    tag: "youtubepremium",
    price: 40,
    inCart: 0,
  },
  {
    name: "Game Pass 2 meseca",
    tag: "xbox",
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
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");
  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}

function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}

function totalCost(product) {
  let cartCost = localStorage.getItem("totalCost");
  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let cartCost = localStorage.getItem("totalCost");
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <div class="product">
        <i class="fa-sharp fa-solid fa-circle-xmark"></i>
        <img src="./images/${item.tag}.png">
        <span>${item.name}</span>
      </div>
      <div class="price-cart">€${item.price},00</div>
      <div class="quantity">
      <i class="fa-solid fa-circle-arrow-left"></i>
        <span>${item.inCart}</span>
        <i class="fa-solid fa-circle-arrow-right"></i>
      </div>
      <div class="total">
        €${item.inCart * item.price},00
      </div>
      `;
    });
    productContainer.innerHTML += `
      <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
          Basket Total
        </h4>
        <h4 class="basketTotal">
          €${cartCost},00
        </h4>
      </div>
    `;
  }
}

onLoadCartNumbers();
displayCart();
