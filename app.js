/// ===== PRODUCTS (60 ITEMS) =====
const products = [
  // 🐶 Dog Food
  { id: 1, name: "Pedigree Adult Chicken & Veg Dry Dog Food (3 kg)", category: "dogfood", price: 494, img: "https://zigly.com/cdn/shop/files/OTRFO1385.jpg?format=webp&v=1744281698&width=550" },
  { id: 2, name: "Drools Chicken & Egg Adult Dog Food (1 kg)", category: "dogfood", price: 221, img: "https://m.media-amazon.com/images/I/71ELhuy3tKL._SY879_.jpg" },
  { id: 3, name: "Royal Canin Labrador Retriever Adult (3 kg)", category: "dogfood", price: 1750, img: "https://zigly.com/cdn/shop/files/OTRFO1812_dc575eac-5161-4c35-8578-ea8e306f96a5.jpg?format=webp&v=1750067473&width=550" },
  { id: 4, name: "Farmina N&D Chicken & Pomegranate Dog (2.5 kg)", category: "dogfood", price: 1899, img: "https://zigly.com/cdn/shop/files/OTRFO1203_1200e7c1-9c2a-4340-985f-88bb5778fd06.jpg?format=webp&v=1743667873&width=550" },
  { id: 5, name: "Purepet Meat & Rice Adult Dog Food (10 kg)", category: "dogfood", price: 1649, img: "https://m.media-amazon.com/images/I/61RzxB+TfcL._SX522_.jpg" },
  { id: 6, name: "Orijen Puppy Large Breed (2 kg)", category: "dogfood", price: 2199, img: "https://m.media-amazon.com/images/I/61wR6Sdyn4L._SX522_.jpg" },
  { id: 7, name: "Pedigree Puppy Chicken & Milk (3 kg)", category: "dogfood", price: 630, img: "https://zigly.com/cdn/shop/files/OTRFO1391.jpg?format=webp&v=1744281533&width=550" },
  { id: 8, name: "Drools Focus Puppy Super Premium Food (4 kg)", category: "dogfood", price: 1349, img: "https://m.media-amazon.com/images/I/61B2wD5IjVL._SX522_.jpg" },

  // 🐱 Cat Food
  { id: 9, name: "Whiskas Ocean Fish Dry Cat Food (1.2 kg)", category: "catfood", price: 385, img: "https://zigly.com/cdn/shop/files/OTRFO1429_a00c4403-f9af-44af-a929-e8c73e0e98b5.jpg?format=webp&v=1748526376&width=550" },
  { id: 10, name: "Drools Kitten Ocean Fish (1.2 kg)", category: "catfood", price: 349, img: "https://m.media-amazon.com/images/I/41DRteKtMbL._SY300_SX300_QL70_FMwebp_.jpg" },
  { id: 11, name: "Royal Canin Persian Adult Cat Food (2 kg)", category: "catfood", price: 1850, img: "https://zigly.com/cdn/shop/files/OTRFO1745.jpg?format=webp&v=1747662329&width=550" },
  { id: 12, name: "Me-O Tuna Cat Food (3 kg)", category: "catfood", price: 899, img: "https://zigly.com/cdn/shop/files/OTRFO16695.jpg?format=webp&v=1748499735&width=550" },
  { id: 13, name: "Sheba Rich Premium Wet Cat Food (70 g)", category: "catfood", price: 70, img: "https://zigly.com/cdn/shop/files/OTRFO1459_VIRTUAL-PACK_48.jpg?format=webp&v=1751278583&width=550" },
  { id: 14, name: "Whiskas Kitten Ocean Fish (1.1 kg)", category: "catfood", price: 420, img: "https://thepetproject.com/cdn/shop/files/Whiskas_Junior_Ocean_Fish_Milky_1.1kg.webp?v=1756806650&width=823" },
  { id: 15, name: "Farmina N&D Low Grain Cat Food (1.5 kg)", category: "catfood", price: 1250, img: "https://zigly.com/cdn/shop/files/OTRFO1229_56600a7e-7621-4833-9741-b4881fc11271.jpg?format=webp&v=1743666838&width=550" },

  // 🍖 Treats
  { id: 16, name: "Purepet Pressed Chew Bones Treat (160g)", category: "treat", price: 157, img: "https://thepetproject.com/cdn/shop/files/purepet_chew_bones_160g_e897_9b8f9d6f-8fb4-4658-ba95-5b0ebb0f116f.png?v=1756806248&width=823" },
  { id: 17, name: "JerHigh Chicken & Vegetable Treat (120g)", category: "treat", price: 70, img: "https://zigly.com/cdn/shop/files/OTRFO1564_VIRTUAL-PACK_48.jpg?format=webp&v=1750922055&width=550" },
  { id: 18, name: "Dogsee Chew Himalayan Bars (100 g)", category: "treat", price: 199, img: "https://zigly.com/cdn/shop/files/OTRFO2018.jpg?format=webp&v=1752659938&width=550" },
  { id: 19, name: "Choostix Chicken Dog Treats (450 g)", category: "treat", price: 190, img: "https://rukminim2.flixcart.com/image/300/300/jjsw4nk0/pet-treat/b/x/w/450-dog-choostix-lamb-choostix-original-imaf7akdjsd7catz.jpeg" },
  { id: 20, name: "Pedigree Meat Jerky Stix (80 g)", category: "treat", price: 120, img: "https://zigly.com/cdn/shop/files/PTSY24223.jpg?format=webp&v=1751352287&width=550" },
  { id: 21, name: "Temptations Cat Treats Salmon (85 g)", category: "treat", price: 150, img: "https://m.media-amazon.com/images/I/81Y6vXZ9WTL._SX522_.jpg" },
  { id: 22, name: "Sheba Melty Cat Treats Tuna (48 g)", category: "treat", price: 99, img: "https://supertails.com/cdn/shop/files/1_-_2025-04-16T191742.753_458c2258-0cb5-4052-94a2-61c9464c974a_600x.jpg?v=1750262518" },
  { id: 23, name: "Gnawlers Puppy Snack Bone (200 g)", category: "treat", price: 250, img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcSQkIWhLgkcnemdEELibZy8pbv41lR-8DITg8kGO-AH2kD6p7cHdbQ3GVEk2f46cR05EkMqYRPj-zmZKCTsGvnD1Jvy87luFan3OEV_X9Ih1UHlRFlSsMPH" },

  // 🎾 Toys
  { id: 24, name: "Squeaky Rubber Toy Bone", category: "toy", price: 299, img: "https://indihopshop.com/cdn/shop/files/IMG_9765.jpg?v=1695653138" },
  { id: 25, name: "Interactive Treat Ball Toy", category: "toy", price: 349, img: "https://www.cocoandpud.com.au/cdn/shop/files/Coco_PudInteractiveDogTreatBall-Aqua_1_30eaf83e-918e-43cb-9a19-6351520d4a10.png?v=1707784885&width=800" },
  { id: 26, name: "Catnip Toy for Cats", category: "toy", price: 120, img: "https://zigly.com/cdn/shop/files/OTRNF7673.jpg?format=webp&v=1748256797&width=550" },
  { id: 27, name: "Rope Tug Toy (Medium)", category: "toy", price: 180, img: "https://m.media-amazon.com/images/I/61BqHFjKOYL.jpg" },
  { id: 28, name: "Plush Duck Dog Toy", category: "toy", price: 260, img: "https://m.media-amazon.com/images/I/616pkJDaFdS.jpg" },
  { id: 29, name: "Feather Wand Cat Toy", category: "toy", price: 175, img: "https://m.media-amazon.com/images/I/615Ccf+wziL.jpg" },
  { id: 30, name: "Chew Rope Knot Ball", category: "toy", price: 210, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRYzdC2tdAhszt5fTjTDhXr-Sau2cqGpWppsQ&s" },

  // 🧴 Grooming (Dogs)
  { id: 31, name: "Himalaya Erina Dog Shampoo (200 ml)", category: "grooming", price: 220, img: "https://m.media-amazon.com/images/I/515LnuSfU1L._SX522_.jpg" },
  { id: 32, name: "Wahl Oatmeal Dog Shampoo (710 ml)", category: "grooming", price: 849, img: "https://supertails.com/cdn/shop/files/Frame_344684585_600x.png?v=1726745152" },
  { id: 33, name: "Petkin Jumbo Dog Wipes (100 pcs)", category: "grooming", price: 499, img: "https://www.abkgrooming.com/cdn/shop/products/5571new.png?v=1669101243&width=1800" },
  { id: 34, name: "FURminator Deshedding Brush for Dogs (Large)", category: "grooming", price: 780, img: "https://thepetproject.com/cdn/shop/files/Furminator-Comb-XL-Front_04953a24-ca84-4900-8b7e-e5d53267b005.jpg?v=1756805592" },
  { id: 35, name: "Captain Zack Tick Repellent Dog Spray (100 ml)", category: "grooming", price: 360, img: "https://m.media-amazon.com/images/I/61EN9N52QmL._SX522_.jpg" },
  { id: 36, name: "PetVogue Stainless Steel Nail Clipper for Dogs", category: "grooming", price: 299, img: "https://m.media-amazon.com/images/I/51XIj8cJG-L._SX522_.jpg" },
  { id: 37, name: "Pet Vogue Double Sided Dog Comb", category: "grooming", price: 250, img: "https://www.petoly.in/cdn/shop/files/OILPETPVO0072-1_1024x1024.jpg?v=1683627170" },
  { id: 38, name: "Wahl Slicker Brush for Dogs", category: "grooming", price: 399, img: "https://supertails.com/cdn/shop/files/Frame12031_3_600x.png?v=1696636910" },
  { id: 39, name: "Lozalo Conditioning Dog Shampoo (500 ml)", category: "grooming", price: 410, img: "https://m.media-amazon.com/images/I/51ExNKIkJIL._SX522_.jpg" },
  { id: 40, name: "Dogsee Natural Perfume Spray (100 ml)", category: "grooming", price: 420, img: "https://m.media-amazon.com/images/I/41OQjzhNckL._UF1000,1000_QL80_.jpg" },
  { id: 41, name: "Petkin Deodorizing Spray for Dogs (120 ml)", category: "grooming", price: 380, img: "https://m.media-amazon.com/images/I/61yE-PKMI7L._SX522_.jpg" },
  { id: 42, name: "Captain Zack Paw Butter for Dogs (100 g)", category: "grooming", price: 325, img: "https://m.media-amazon.com/images/I/71O0uJz33WL._UF1000,1000_QL80_.jpg" },
  { id: 43, name: "Wahl Flea & Tick Shampoo (700 ml)", category: "grooming", price: 799, img: "https://supertails.com/cdn/shop/files/image_1888_600x.png?v=1728298742" },
  { id: 44, name: "Pets Empire Soft Bristle Dog Brush", category: "grooming", price: 280, img: "https://m.media-amazon.com/images/I/71dnQcVDjnL._UF1000,1000_QL80_.jpg" },
  { id: 45, name: "FurMagic Dematting Comb for Dogs", category: "grooming", price: 499, img: "https://m.media-amazon.com/images/I/81LWkFN-k9L.jpg" },

  // 🧴 Grooming (Cats)
  { id: 46, name: "Himalaya Erina Cat Shampoo (200 ml)", category: "grooming", price: 199, img: "https://m.media-amazon.com/images/I/515LnuSfU1L._SX522_.jpg" },
  { id: 47, name: "Petkin Kitty Wipes (30 pcs)", category: "grooming", price: 299, img: "https://m.media-amazon.com/images/I/61cKq8ZB8HL._UF1000,1000_QL80_.jpg" },
  { id: 48, name: "FURminator Deshedding Tool for Cats (Medium)", category: "grooming", price: 2299, img: "https://m.media-amazon.com/images/I/61kq1Gr4tEL._UF1000,1000_QL80_.jpg" },
  { id: 49, name: "Captain Zack Cat Grooming Wipes (50 pcs)", category: "grooming", price: 349, img: "https://m.media-amazon.com/images/I/71OTMcfvSDL._UF1000,1000_QL80_.jpg" },
  { id: 50, name: "Wahl Waterless Cat Shampoo (210 ml)", category: "grooming", price: 440, img: "https://greenhawk.com/cdn/shop/files/CAT0503.jpg?v=1696858233&width=1214" },
  { id: 51, name: "PetVogue Cat Nail Clipper", category: "grooming", price: 270, img: "https://m.media-amazon.com/images/I/61+AnAoJA0L._SX522_.jpg" },
  { id: 52, name: "Lozalo Conditioning Cat Shampoo (200 ml)", category: "grooming", price: 260, img: "https://m.media-amazon.com/images/I/51DgemkLb4L._UF1000,1000_QL80_.jpg" },
  { id: 53, name: "PetVogue Cat Grooming Comb (Stainless Steel)", category: "grooming", price: 210, img: "https://m.media-amazon.com/images/I/61kigoWSruL._SX522_PIbundle-2,TopRight,0,0_SX522SY488SH20_.jpg" },
  { id: 54, name: "Pets Empire Cat Perfume Spray (100 ml)", category: "grooming", price: 310, img: "https://www.petsempire.in/cdn/shop/products/WhatsAppImage2022-12-30at11.31.41PM.jpg?v=1672472265&width=990" },
  { id: 55, name: "Cat Grooming Slicker Brush", category: "grooming", price: 340, img: "https://m.media-amazon.com/images/I/81CcSU4Jv-L._UF1000,1000_QL80_.jpg" },
  { id: 56, name: "FurMagic Cat Dematting Comb", category: "grooming", price: 480, img: "https://m.media-amazon.com/images/I/81LWkFN-k9L.jpg" },
  { id: 57, name: "PetVogue Cat Bath Gloves", category: "grooming", price: 260, img: "https://supertails.com/cdn/shop/files/GroomingShampoo_38888233-ac91-4967-b3ce-fd8684d18095_600x.png?v=1714032854" },
  { id: 58, name: "Captain Zack Cat Deodorizing Spray (100 ml)", category: "grooming", price: 330, img: "https://captainzack.in/cdn/shop/products/Zoey-Hurry_BathinaSpray250ml-60.jpg?v=1712910320" },
  { id: 59, name: "Petkin Cat Eye Wipes (80 pcs)", category: "grooming", price: 450, img: "https://getvetco.com/wp-content/uploads/2020/07/Petkin-Kitty-Eye-Wipes-40-count.jpg" },
  { id: 60, name: "Wahl Cat Grooming Comb", category: "grooming", price: 999, img: "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcQR_3sr-U9g-b7MnaGkrrt89LlCc1ZkyT81uHhRmyxQwCpF1tq_S1XSeuYwkkgu8iBKcv4tLpyHHAIaPFW71XJALocvXBp9q56t-SZs-y2H_qdMRNGoaWrmXA" },
];

let cart = [];
const productListEl = document.getElementById("product-list");
const contactPageEl = document.getElementById("contact-page"); // NEW
const searchContainerEl = document.getElementById("search-container"); // NEW
const btnHomeEl = document.getElementById("btn-home"); // NEW
const btnContactEl = document.getElementById("btn-contact"); // NEW
const cartCountEl = document.getElementById("cart-count");
const cartModal = document.getElementById("cart-modal");
const cartItemsEl = document.getElementById("cart-items");
const cartTotalEl = document.getElementById("cart-total");
const btnUpi = document.getElementById("btn-upi");
const btnCod = document.getElementById("btn-cod");
const btnCloseCart = document.getElementById("btn-close-cart");
const filterBtns = document.querySelectorAll(".filter-btn");
const searchInput = document.getElementById("search-input");
const cartDeliveryEl = document.getElementById("cart-delivery");
const cartTotalFinalEl = document.getElementById("cart-total-final");


// UPI & COD forms
const upiForm = document.getElementById("upi-form");
const upiIdInput = document.getElementById("upi-id");
const cancelUpiBtn = document.getElementById("cancel-upi");

const codForm = document.getElementById("cod-form");
const codName = document.getElementById("cod-name");
const codAddress = document.getElementById("cod-address");
const codPhone = document.getElementById("cod-phone");
const cancelCodBtn = document.getElementById("cancel-cod");


// ===== PAGE SWITCHING FUNCTIONS =====
function showProductsPage() {
    contactPageEl.classList.add('hidden');
    productListEl.classList.remove('hidden');
    searchContainerEl.classList.remove('hidden');
}

function showContactPage() {
    productListEl.classList.add('hidden');
    searchContainerEl.classList.add('hidden');
    contactPageEl.classList.remove('hidden');
    // Deselect active filter button when navigating away from products
    filterBtns.forEach(b => b.classList.remove("active")); 
}


// ===== RENDER PRODUCTS =====
function renderProducts(filterCat = "all", searchTerm = "") {
  showProductsPage(); 

  productListEl.innerHTML = "";

  const filtered = products.filter(p => {
    const matchesCat = filterCat === "all" || p.category === filterCat;
    const matchesSearch = p.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCat && matchesSearch;
  });

  if (filtered.length === 0) {
    productListEl.innerHTML = "<p style='grid-column: 1/-1; text-align:center; color:#555;'>No products found.</p>";
    return;
  }

  filtered.forEach(p => {
    const cartItem = cart.find(item => item.id === p.id);
    const qty = cartItem ? cartItem.qty : 0;

    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
      <img src="${p.img}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/200x140?text=No+Image'"/>
      <h3>${p.name}</h3>
      <div class="price">₹${p.price}</div>
      <div class="controls">
        ${
          qty === 0
            ? `<button class="add-btn" data-id="${p.id}">Add to Cart</button>`
            : `<div class="qty-controls">
                <button class="dec" data-id="${p.id}">−</button>
                <span class="qty-num">${qty}</span>
                <button class="inc" data-id="${p.id}">+</button>
               </div>`
        }
      </div>
    `;
    productListEl.appendChild(card);
  });

  // Listeners
  productListEl.querySelectorAll(".add-btn").forEach(btn => {
    btn.addEventListener("click", (e) => changeQty(+e.target.dataset.id, 1));
  });
  productListEl.querySelectorAll(".inc").forEach(btn => {
    btn.addEventListener("click", (e) => changeQty(+e.target.dataset.id, 1));
  });
  productListEl.querySelectorAll(".dec").forEach(btn => {
    btn.addEventListener("click", (e) => changeQty(+e.target.dataset.id, -1));
  });
}

// ===== CART FUNCTIONS =====
function changeQty(pid, delta) {
  const existing = cart.find(item => item.id === pid);
  if (existing) {
    existing.qty += delta;
    if (existing.qty <= 0) {
      cart = cart.filter(item => item.id !== pid);
    }
  } else if (delta > 0) {
    const prod = products.find(p => p.id === pid);
    cart.push({ id: pid, name: prod.name, price: prod.price, qty: 1 });
  }
  updateCartCount();
  renderProducts(getActiveFilter(), searchInput.value);
  if (cartModal.style.display === "flex") renderCartItems();
}

function updateCartCount() {
  const totalQty = cart.reduce((sum, item) => sum + item.qty, 0);
  cartCountEl.textContent = totalQty;
}

function showCart() {
  renderCartItems();
  cartModal.style.display = "flex";
}
function hideCart() {
  cartModal.style.display = "none";
  upiForm.classList.add("hidden");
  codForm.classList.add("hidden");
}
function renderCartItems() {
  cartItemsEl.innerHTML = "";
  let subtotal = 0; 

  if (cart.length === 0) {
    cartItemsEl.innerHTML = "<p style='text-align:center; padding: 20px 0;'>Your cart is empty. 🐾</p>";
    updateCartTotalDisplay(0); 
    return;
  }

  cart.forEach(item => {
    const row = document.createElement("div");
    row.className = "cart-item";
    row.innerHTML = `
      <span>${item.name}</span>
      <div class="qty-controls">
        <button class="dec" data-id="${item.id}">−</button>
        <span class="qty-num">${item.qty}</span>
        <button class="inc" data-id="${item.id}">+</button>
      </div>
      <span>₹${item.price * item.qty}</span>
    `;
    cartItemsEl.appendChild(row);
    subtotal += item.price * item.qty;
  });

  cartItemsEl.querySelectorAll(".inc").forEach(btn => {
    btn.addEventListener("click", (e) => changeQty(+e.target.dataset.id, 1));
  });
  cartItemsEl.querySelectorAll(".dec").forEach(btn => {
    btn.addEventListener("click", (e) => changeQty(+e.target.dataset.id, -1));
  });

  updateCartTotalDisplay(subtotal); 
}

function updateCartTotalDisplay(subtotal) {
  const delivery = subtotal > 0 ? 40 : 0; 
  const final = subtotal + delivery;

  cartTotalEl.textContent = subtotal; 
  cartDeliveryEl.textContent = delivery; 
  cartTotalFinalEl.textContent = final; 
}


// ===== CHECKOUT =====
btnUpi.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("⚠️ Your cart is empty. Please add items to place an order.");
    return;
  }
  upiForm.classList.remove("hidden");
  codForm.classList.add("hidden");
});

cancelUpiBtn.addEventListener("click", () => {
  upiForm.classList.add("hidden");
});

upiForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const upiId = upiIdInput.value.trim();
  if (!upiId) {
    alert("⚠️ Please enter a valid UPI ID.");
    return;
  }
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal + (subtotal > 0 ? 40 : 0); 
  alert(`Redirecting you to your UPI app. Please pay ₹${total} to complete your order.`);
  cart = [];
  updateCartCount();
  renderProducts(getActiveFilter(), searchInput.value); 
  upiForm.reset();
  hideCart();
});

btnCod.addEventListener("click", () => {
  if (cart.length === 0) {
    alert("⚠️ Your cart is empty. Please add items to place an order.");
    return;
  }
  codForm.classList.remove("hidden");
  upiForm.classList.add("hidden");
});

cancelCodBtn.addEventListener("click", () => {
  codForm.classList.add("hidden");
});

codForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const name = codName.value.trim();
  const address = codAddress.value.trim();
  const phone = codPhone.value.trim();
  if (!name || !address || !phone) {
    alert("⚠️ Please fill in all fields.");
    return;
  }
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const total = subtotal + (subtotal > 0 ? 40 : 0); 
  alert(`✅ Thank you ${name}! Your order has been placed.\n\n📍 Address: ${address}\n📞 Phone: ${phone}\n💵 Please pay ₹${total} in cash on delivery.\n\nYour order is on the way in 15 mins!`);
  cart = [];
  updateCartCount();
  renderProducts(getActiveFilter(), searchInput.value); 
  codForm.reset();
  hideCart();
});

// ===== Contact Form Submission =====
document.getElementById('contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert("Thank you for reaching out! We have received your message and will get back to you shortly.");
    document.getElementById('contact-form').reset();
});


// ===== FILTERS + SEARCH =====
function getActiveFilter() {
  const active = document.querySelector(".filter-btn.active");
  return active ? active.dataset.cat : "all";
}

filterBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    filterBtns.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    renderProducts(btn.dataset.cat, searchInput.value);
  });
});

searchInput.addEventListener("input", () => {
  renderProducts(getActiveFilter(), searchInput.value);
});

// ===== EVENT LISTENERS FOR NAVIGATION =====
// Click logo/home button to go to product page
btnHomeEl.addEventListener('click', showProductsPage);
// Click Contact Us button
btnContactEl.addEventListener('click', showContactPage);

// ===== CART EVENTS =====
document.querySelector(".cart-icon").addEventListener("click", showCart);
btnCloseCart.addEventListener("click", hideCart);

// ===== INITIAL LOAD =====
renderProducts();
updateCartCount();

// Splash Banner Logic
document.body.classList.add("splash-active");

const splash = document.getElementById("splash-banner");
const enterBtn = document.getElementById("enter-site-btn");

enterBtn.addEventListener("click", () => {
  splash.style.opacity = "0";
  splash.style.transition = "opacity 0.8s ease";

  setTimeout(() => {
    splash.style.display = "none";
    document.body.classList.remove("splash-active");
    showProductsPage(); 
  }, 800);
});