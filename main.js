const menuEmail = document.querySelector(".navbar-email");
const desktopMenu = document.querySelector(".desktop-menu");

const burgerMenu = document.querySelector(".burger-menu");
const mobileMenu = document.querySelector(".mobile-menu");

const shoppingCartIcon = document.querySelector(".navbar-shopping-cart");
const aside = document.querySelector(".product-detail");

const cardsContainer = document.querySelector('.cards-container');

menuEmail.addEventListener("click", toggleDesktopMenu);
burgerMenu.addEventListener("click", toggleMobileMenu);
shoppingCartIcon.addEventListener("click", toggleProductsMenu);

function toggleDesktopMenu() {
  desktopMenu.classList.toggle("inactive");
  menuEmail.classList.toggle("hover");

  // hide

  mobileMenu.classList.add("inactive");
  aside.classList.add("inactive");
}

function toggleMobileMenu() {
  mobileMenu.classList.toggle("inactive");

  // hide

  aside.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

function toggleProductsMenu() {
  aside.classList.toggle("inactive");

  // hide

  mobileMenu.classList.add("inactive");
  desktopMenu.classList.add("inactive");
}

const productList = [];
productList.push({
  name: 'Bike',
  price: 200,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: 'TV',
  price: 280,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

productList.push({
  name: 'Computer',
  price: 650,
  image: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

// <div class="product-card">
//   <img src="https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="">
//   <div class="product-info">
//     <div>
//       <p>$120,00</p>
//       <p>Bike</p>
//     </div>
//     <figure>
//       <img src="./icons/bt_add_to_cart.svg" alt="">
//     </figure>
//   </div>
// </div>

function renderProducts(arr) {

  for (product of arr) {
    const productCard = document.createElement('div');
    productCard.classList.add('product-card');
  
    // product = {name, price, image} -> product.image
    const productImg = document.createElement('img');
    productImg.setAttribute('src', product.image);
  
    const productInfo = document.createElement('div');
    productInfo.classList.add('product-info');
  
    const productInfoDiv = document.createElement('div');
    
    const productPrice = document.createElement('p');
    productPrice.innerText = '$' + product.price;
    const productName = document.createElement('p');
    productName.innerText = product.name;
  
    productInfoDiv.appendChild(productPrice);
    productInfoDiv.appendChild(productName);
  
    const productInfoFigure = document.createElement('figure');
    const productImgCart = document.createElement('img');
    productImgCart.setAttribute('src', './icons/bt_add_to_cart.svg');
  
    productInfoFigure.appendChild(productImgCart);
  
    productInfo.appendChild(productInfoDiv);
    productInfo.appendChild(productInfoFigure);
  
    productCard.appendChild(productImg);
    productCard.appendChild(productInfo);
  
    cardsContainer.appendChild(productCard);
  }
  
}

renderProducts(productList);