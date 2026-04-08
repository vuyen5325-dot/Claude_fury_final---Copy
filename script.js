/* ====================================================
   CRUNCHY FURY – MAIN SCRIPT
==================================================== */

// ===== DATA =====
const PRODUCTS = [
  {
    id: 1, name: "1 miếng Gà Giòn Vui Vẻ", emoji: "🍗", img: "thucdon/1gath.png", price: 33000, oldPrice: null,
    cat: "ga-ran", spicy: "khong-cay", stars: 5, reviews: 1234, sold: "2.3k", badge: "HOT"
  },
  {
    id: 2, name: "2 miếng Gà Giòn Vui Vẻ", emoji: "🍗🍗", img: "thucdon/2gath.png", price: 66000, oldPrice: null,
    cat: "ga-ran", spicy: "khong-cay", stars: 4.9, reviews: 890, sold: "1.8k", badge: "HOT"
  },
  {
    id: 3, name: "4 miếng Gà Giòn Vui Vẻ", emoji: "🍗🍗", img: "thucdon/4gath.png", price: 126000, oldPrice: null,
    cat: "ga-ran", spicy: "khong-cay", stars: 4.9, reviews: 760, sold: "1.2k", badge: "HOT"
  },
  {
    id: 4, name: "6 miếng Gà Giòn Vui Vẻ", emoji: "🪣🍗", img: "thucdon/6gath.png", price: 188000, oldPrice: null,
    cat: "ga-ran", spicy: "khong-cay", stars: 4.9, reviews: 654, sold: "980", badge: "HOT"
  },
  {
    id: 5, name: "1 Gà Giòn Vui Vẻ + 1 Khoai tây chiên vừa + 1 Nước ngọt", emoji: "🍗🍟🥤", img: "thucdon/1g1k.png", price: 58000, oldPrice: null,
    cat: "combo-ca-nhan", spicy: "khong-cay", stars: 4.8, reviews: 532, sold: "870", badge: null
  },
  {
    id: 6, name: "2 Gà Giòn Vui Vẻ + 1 Khoai tây chiên vừa + 1 Nước ngọt", emoji: "🍗🍟🥤", img: "thucdon/2g1k.png", price: 91000, oldPrice: null,
    cat: "combo-ca-nhan", spicy: "khong-cay", stars: 4.8, reviews: 421, sold: "940", badge: null
  },
  {
    id: 7, name: "1 Cơm + 1 Gà Giòn + 1 Cánh Gà Siêu Ngon Vui Vẻ", emoji: "🍚🍗", img: "thucdon/1com.png", price: 48000, oldPrice: null,
    cat: "com", spicy: "khong-cay", stars: 4.7, reviews: 1100, sold: "2.1k", badge: null
  },
  {
    id: 8, name: "1 Cơm Gà Giòn Vui Vẻ + 1 Nước ngọt + 1 Tương Chua Ngọt", emoji: "🍚🍗🥤", img: "thucdon/1c1n.png", price: 58000, oldPrice: null,
    cat: "combo-ca-nhan", spicy: "khong-cay", stars: 4.6, reviews: 350, sold: "620", badge: null
  },
  {
    id: 9, name: "1 Cơm Gà Giòn Vui Vẻ + 1 Súp bí đỏ + 1 Nước ngọt", emoji: "🍚🍗🥣🥤", img: "thucdon/1c1s.png", price: 63000, oldPrice: null,
    cat: "combo-ca-nhan", spicy: "khong-cay", stars: 4.7, reviews: 780, sold: "1.1k", badge: null
  },
  {
    id: 10, name: "1 miếng Gà Sốt Cay", emoji: "🌶️🍗", img: "thucdon/1cgc.png", price: 35000, oldPrice: null,
    cat: "ga-cay", spicy: "cay-vua", stars: 4.8, reviews: 200, sold: "5.2k", badge: "SPICY"
  },
  {
    id: 11, name: "2 miếng Gà Sốt Cay", emoji: "🌶️🍗🍗", img: "thucdon/2gc.png", price: 70000, oldPrice: null,
    cat: "ga-cay", spicy: "cay-vua", stars: 4.7, reviews: 180, sold: "3.8k", badge: "SPICY"
  },
  {
    id: 12, name: "1 Gà Sốt Cay + 1 Khoai tây chiên vừa + 1 Nước ngọt", emoji: "🌶️🍗🍟🥤", img: "thucdon/2gc1k.png", price: 60000, oldPrice: null,
    cat: "combo-ca-nhan", spicy: "cay-vua", stars: 4.8, reviews: 990, sold: "8.4k", badge: null
  },
  {
    id: 13, name: "2 Gà Sốt Cay + 1 Khoai tây chiên vừa + 1 Nước ngọt", emoji: "🌶️🍗🍟🥤", img: "thucdon/2gc1k.png", price: 95000, oldPrice: null,
    cat: "combo-ca-nhan", spicy: "cay-vua", stars: 4.7, reviews: 72, sold: "430", badge: null
  },
  {
    id: 14, name: "1 Cơm Gà Sốt Cay", emoji: "🍚🌶️🍗", img: "thucdon/1gc.png", price: 50000, oldPrice: null,
    cat: "com", spicy: "cay-vua", stars: 4.6, reviews: 14, sold: "280", badge: null
  },
  {
    id: 15, name: "1 Cơm Gà Sốt Cay + 1 Nước ngọt", emoji: "🍚🌶️🍗🥤", img: "thucdon/1cgc1n.png", price: 60000, oldPrice: null,
    cat: "combo-ca-nhan", spicy: "cay-vua", stars: 4.9, reviews: 88, sold: "650", badge: null
  },
  {
    id: 16, name: "1 Cơm Gà Sốt Cay + 1 Súp bí đỏ + 1 Nước ngọt", emoji: "🍚🌶️🍗🥣🥤", img: "thucdon/1cgc1s.png", price: 65000, oldPrice: null,
    cat: "combo-ca-nhan", spicy: "cay-vua", stars: 4.5, reviews: 31, sold: "190", badge: null
  },
  {
    id: 18, name: "Khoai tây lắc vị BBQ lớn", emoji: "🍟", img: "thucdon/1k.png", price: 35000, oldPrice: null,
    cat: "phu-kien", spicy: "khong-cay", stars: 4.6, reviews: 320, sold: "1.4k", badge: null
  },
  {
    id: 19, name: "Cơm Trắng", emoji: "🍚", img: "thucdon/1c.png", price: 10000, oldPrice: null,
    cat: "phu-kien", spicy: "khong-cay", stars: 4.5, reviews: 150, sold: "900", badge: null
  },
  {
    id: 20, name: "Thêm 2 Gói Tương Chua Ngọt", emoji: "🥫", img: "thucdon/2tc.png", price: 1000, oldPrice: null,
    cat: "phu-kien", spicy: "khong-cay", stars: 4.8, reviews: 80, sold: "2.8k", badge: null
  },
  {
    id: 21, name: "Thêm 2 Gói Tương Cà", emoji: "🍅", img: "thucdon/2tc.png", price: 1000, oldPrice: null,
    cat: "phu-kien", spicy: "khong-cay", stars: 4.7, reviews: 75, sold: "2.5k", badge: null
  },
  {
    id: 22, name: "Pepsi", emoji: "🥤", img: "thucdon/pesi.png", price: 15000, oldPrice: null,
    cat: "thuc-uong", spicy: "khong-cay", stars: 4.3, reviews: 200, sold: "5.2k", badge: null
  },
  {
    id: 23, name: "Mirinda", emoji: "🥤", img: "thucdon/mirida.png", price: 15000, oldPrice: null,
    cat: "thuc-uong", spicy: "khong-cay", stars: 4.2, reviews: 180, sold: "3.8k", badge: null
  },
  {
    id: 24, name: "7Up", emoji: "🥤", img: "thucdon/7up.png", price: 15000, oldPrice: null,
    cat: "thuc-uong", spicy: "khong-cay", stars: 4.2, reviews: 170, sold: "3.5k", badge: null
  },
];

const COMBOS = [
  {
    id: 101, name: "Combo một mình", emoji: "🦅", img: "thucdon/combo1.png", price: 78000, oldPrice: 100000,
    includes: ["1 miếng Gà Giòn", "1 Mỳ Ý", "1 Nước "],
    save: "TIẾT KIỆM 22K"
  },
  {
    id: 102, name: "Cập đôi ăn ý", emoji: "⚡", img: "thucdon/2m.png", price: 145000, oldPrice: 200000,
    includes: ["2 miếng Gà Giòn", "2 Mỳ Ý", "2 Nước ", "1 Khoai tay chiến"],
    save: "TIẾT KIỆM 66K"
  },
  {
    id: 103, name: "Combo Gia Đình", emoji: "🪣", img: "thucdon/giadinh.png", price: 185000, oldPrice: 250000,
    includes: ["3 miếng gà các loại", "2 Mỳ Ý", "3 Nước ", "1 Khoai tay chiến"],
    save: "TIẾT KIỆM 65K"
  },
];

// ===== CART =====
let cart = JSON.parse(localStorage.getItem('cf_cart')) || [];

function saveCart() {
  localStorage.setItem('cf_cart', JSON.stringify(cart));
  updateCartBadge();
}

function updateCartBadge() {
  const total = cart.reduce((s, i) => s + i.qty, 0);
  document.querySelectorAll('#cart-count').forEach(el => el.textContent = total);
}

function addToCart(product, qty = 1, note = '') {
  const existing = cart.find(i => i.id === product.id && i.note === note);
  if (existing) { existing.qty += qty; }
  else { cart.push({ ...product, qty, note }); }
  saveCart();
  showToast(`✅ Đã thêm "${product.name}" vào giỏ hàng!`);
}

function removeFromCart(id) {
  cart = cart.filter(i => i.id !== id);
  saveCart();
  if (typeof renderCart === 'function') renderCart();
}

function updateQty(id, delta) {
  const item = cart.find(i => i.id === id);
  if (!item) return;
  item.qty = Math.max(1, item.qty + delta);
  saveCart();
  if (typeof renderCart === 'function') renderCart();
}

// ===== TOAST =====
function showToast(msg, duration = 3000) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}

// ===== RENDER PRODUCT CARD =====
function renderProductCard(p) {
  const stars = '★'.repeat(Math.floor(p.stars)) + (p.stars % 1 >= 0.5 ? '½' : '');
  const badgeHtml = p.badge
    ? `<div class="product-badge${p.badge === 'SPICY' ? ' spicy' : ''}">${p.badge}</div>`
    : '';
  const oldPriceHtml = p.oldPrice
    ? `<span class="price-old">${p.oldPrice.toLocaleString('vi-VN')}đ</span>` : '';

  return `
  <div class="product-card" onclick="openProductModal(${p.id})">
    ${badgeHtml}
    <div class="product-img-wrap">
      ${p.img ? `<img src="${p.img}" alt="${p.name}" loading="lazy"/>` : `<div class="product-emoji">${p.emoji}</div>`}
      <button class="wishlist-btn" onclick="event.stopPropagation();toggleWishlist(this)" title="Yêu thích">
        <i class="far fa-heart"></i>
      </button>
    </div>
    <div class="product-info">
      <div class="product-name">${p.name}</div>
      <div class="product-price-wrap">
        ${oldPriceHtml}
        <span class="price-new">${p.price.toLocaleString('vi-VN')}đ</span>
      </div>
      <div class="product-meta">
        <span class="stars">${stars} <span style="color:var(--gray-lt)">(${p.reviews.toLocaleString('vi-VN')})</span></span>
        <span class="sold">Đã bán ${p.sold}</span>
      </div>
      <button class="btn-add-cart" onclick="event.stopPropagation();quickAddToCart(${p.id})">
        <i class="fas fa-shopping-cart"></i> Thêm vào giỏ
      </button>
    </div>
  </div>`;
}

function quickAddToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (p) addToCart(p);
}

function toggleWishlist(btn) {
  btn.classList.toggle('active');
  const icon = btn.querySelector('i');
  if (btn.classList.contains('active')) {
    icon.className = 'fas fa-heart';
    showToast('❤️ Đã thêm vào yêu thích!');
  } else {
    icon.className = 'far fa-heart';
    showToast('💔 Đã xóa khỏi yêu thích!');
  }
}

// ===== RENDER COMBO CARD =====
function renderComboCard(c) {
  const includesHtml = c.includes.map(i => `<li>${i}</li>`).join('');
  const imgHtml = c.img
    ? `<div style="width:100%;height:180px;border-radius:12px;overflow:hidden;margin-bottom:0.8rem;background:var(--dark3);">
         <img src="${c.img}" alt="${c.name}" loading="lazy" style="width:100%;height:100%;object-fit:cover;" />
       </div>`
    : `<div class="combo-emoji">${c.emoji}</div>`;

  return `
  <div class="combo-card">
    ${imgHtml}
    <div class="combo-header" style="${c.img ? 'gap:0;' : ''}">
      ${!c.img ? `<div class="combo-emoji">${c.emoji}</div>` : ''}
      <div class="combo-title">${c.name}</div>
    </div>
    <ul class="combo-includes">${includesHtml}</ul>
    <div class="combo-prices">
      <span class="combo-old">${c.oldPrice.toLocaleString('vi-VN')}đ</span>
      <span class="combo-new">${c.price.toLocaleString('vi-VN')}đ</span>
      <span class="combo-save">${c.save}</span>
    </div>
    <button class="btn-choose-combo" onclick="openComboModal(${c.id})">Chọn combo</button>
  </div>`;
}

// ===== PRODUCT MODAL =====
function openProductModal(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const overlay = document.getElementById('combo-modal');
  const content = document.getElementById('modal-content');
  if (!overlay || !content) return;
  content.innerHTML = `
    <h3>${p.emoji} ${p.name}</h3>
    <div style="color:var(--orange);font-size:1.4rem;margin-bottom:1rem;font-family:'Oswald',sans-serif">
      ${p.price.toLocaleString('vi-VN')}đ
      ${p.oldPrice ? `<span style="font-size:.9rem;color:var(--gray);text-decoration:line-through;margin-left:.5rem">${p.oldPrice.toLocaleString('vi-VN')}đ</span>` : ''}
    </div>
    <div class="modal-section">
      <label>Cấp độ cay</label>
      <div class="spicy-options">
        <button class="spicy-btn active" onclick="setSpicy(this,'khong-cay')">🌿 Không cay</button>
        <button class="spicy-btn" onclick="setSpicy(this,'cay-nhe')">🌶️ Cay nhẹ</button>
        <button class="spicy-btn" onclick="setSpicy(this,'cay-thieu-dot')">🔥 Cay thiêu đốt</button>
      </div>
    </div>
    <div class="modal-section">
      <label>Chọn nước</label>
      <select class="modal-select" id="modal-drink">
        <option>-- Không chọn nước --</option>
        <option>Pepsi 330ml (+20.000đ)</option>
        <option>7Up 330ml (+20.000đ)</option>
        <option>Trà xanh 330ml (+18.000đ)</option>
        <option>Nước suối (+10.000đ)</option>
      </select>
    </div>
    <div class="modal-section">
      <label>Thêm món kèm</label>
      <div style="display:flex;gap:.5rem;flex-wrap:wrap;">
        <label style="display:flex;align-items:center;gap:.4rem;font-size:.85rem;color:var(--gray-lt);cursor:pointer">
          <input type="checkbox" style="accent-color:var(--orange)"> Phô mai gà (+25k)
        </label>
        <label style="display:flex;align-items:center;gap:.4rem;font-size:.85rem;color:var(--gray-lt);cursor:pointer">
          <input type="checkbox" style="accent-color:var(--orange)"> Khoai tây xoắn (+20k)
        </label>
      </div>
    </div>
    <div class="modal-section">
      <label>Số lượng</label>
      <div class="qty-control">
        <button class="qty-btn" onclick="changeModalQty(-1)">−</button>
        <span class="qty-num" id="modal-qty">1</span>
        <button class="qty-btn" onclick="changeModalQty(1)">+</button>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn-outline" onclick="closeModal()">Quay lại</button>
      <button class="btn-primary" onclick="addModalToCart(${p.id})"><i class="fas fa-shopping-cart"></i> Thêm vào giỏ</button>
    </div>
  `;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

// ===== COMBO MODAL =====
function openComboModal(id) {
  const c = COMBOS.find(x => x.id === id);
  if (!c) return;
  const overlay = document.getElementById('combo-modal');
  const content = document.getElementById('modal-content');
  if (!overlay || !content) return;
  const includesHtml = c.includes.map(i => `<li style="color:var(--gray-lt);padding:.2rem 0;font-size:.9rem">✓ ${i}</li>`).join('');
  content.innerHTML = `
    ${c.img
      ? `<img src="${c.img}" alt="${c.name}" style="width:100%;height:220px;object-fit:cover;border-radius:12px;margin-bottom:1rem;" /><h3>${c.name}</h3>`
      : `<h3>${c.emoji} ${c.name}</h3>`}
    <ul style="margin-bottom:1rem;list-style:none">${includesHtml}</ul>
    <div class="combo-prices" style="margin-bottom:1.2rem">
      <span class="combo-old">${c.oldPrice.toLocaleString('vi-VN')}đ</span>
      <span class="combo-new">${c.price.toLocaleString('vi-VN')}đ</span>
      <span class="combo-save">${c.save}</span>
    </div>
    <div class="modal-section">
      <label>Cấp độ cay</label>
      <div class="spicy-options">
        <button class="spicy-btn active" onclick="setSpicy(this,'khong-cay')">🌿 Không cay</button>
        <button class="spicy-btn" onclick="setSpicy(this,'cay-nhe')">🌶️ Cay nhẹ</button>
        <button class="spicy-btn" onclick="setSpicy(this,'cay-thieu-dot')">🔥 Cay thiêu đốt</button>
      </div>
    </div>
    <div class="modal-section">
      <label>Chọn nước</label>
      <select class="modal-select">
        <option>Pepsi, 7Up, Trà xanh, Sting...</option>
        <option>Pepsi 330ml</option><option>7Up 330ml</option><option>Sting 330ml</option><option>Trà xanh</option>
      </select>
    </div>
    <div class="modal-section">
      <label>Số lượng</label>
      <div class="qty-control">
        <button class="qty-btn" onclick="changeModalQty(-1)">−</button>
        <span class="qty-num" id="modal-qty">1</span>
        <button class="qty-btn" onclick="changeModalQty(1)">+</button>
      </div>
    </div>
    <div class="modal-actions">
      <button class="btn-outline" onclick="closeModal()">Quay lại</button>
      <button class="btn-primary" onclick="addComboToCart(${c.id})"><i class="fas fa-shopping-cart"></i> Thêm vào giỏ</button>
    </div>
  `;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay = document.getElementById('combo-modal');
  if (overlay) { overlay.classList.remove('active'); document.body.style.overflow = ''; }
}

function setSpicy(btn, val) {
  btn.closest('.spicy-options').querySelectorAll('.spicy-btn').forEach(b => b.classList.remove('active'));
  btn.classList.add('active');
}

let _modalQty = 1;
function changeModalQty(delta) {
  _modalQty = Math.max(1, _modalQty + delta);
  const el = document.getElementById('modal-qty');
  if (el) el.textContent = _modalQty;
}

function addModalToCart(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (!p) return;
  const spicyEl = document.querySelector('.modal-box .spicy-btn.active');
  const note = spicyEl ? spicyEl.textContent.trim() : '';
  addToCart(p, _modalQty, note);
  closeModal();
  _modalQty = 1;
}

function addComboToCart(id) {
  const c = COMBOS.find(x => x.id === id);
  if (!c) return;
  addToCart({ id: c.id, name: c.name, emoji: c.emoji, price: c.price }, _modalQty, '');
  closeModal();
  _modalQty = 1;
}

// ===== HERO SLIDER =====
let currentSlide = 0;
let slideTimer = null;

function initSlider() {
  const track = document.getElementById('slides-track');
  const dots = document.querySelectorAll('.dot');
  if (!track) return;

  const slides = track.querySelectorAll('.slide');
  const total = slides.length;

  function goTo(n) {
    currentSlide = (n + total) % total;
    track.style.transform = `translateX(-${currentSlide * 100}%)`;
    dots.forEach((d, i) => d.classList.toggle('active', i === currentSlide));
  }

  document.getElementById('slider-prev')?.addEventListener('click', () => { goTo(currentSlide - 1); resetTimer(); });
  document.getElementById('slider-next')?.addEventListener('click', () => { goTo(currentSlide + 1); resetTimer(); });
  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); resetTimer(); }));

  function resetTimer() { clearInterval(slideTimer); slideTimer = setInterval(() => goTo(currentSlide + 1), 5000); }
  slideTimer = setInterval(() => goTo(currentSlide + 1), 5000);
}

// ===== COUNTDOWN TIMER =====
function initCountdown() {
  const hoursEl = document.getElementById('hours');
  const minsEl = document.getElementById('minutes');
  const secsEl = document.getElementById('seconds');
  if (!hoursEl) return;

  // Target: today 20:00
  const now = new Date();
  let target = new Date(now);
  target.setHours(20, 0, 0, 0);
  if (now >= target) target.setDate(target.getDate() + 1);

  function update() {
    const diff = target - new Date();
    if (diff <= 0) { target.setDate(target.getDate() + 1); return; }
    const h = Math.floor(diff / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    hoursEl.textContent = String(h).padStart(2, '0');
    minsEl.textContent = String(m).padStart(2, '0');
    secsEl.textContent = String(s).padStart(2, '0');
  }
  update();
  setInterval(update, 1000);
}

// ===== COUPON COPY =====
function copyCoupon() {
  const code = document.getElementById('coupon-code')?.textContent || 'FURY20';
  navigator.clipboard?.writeText(code).then(() => {
    showToast('📋 Đã sao chép mã: ' + code);
  }).catch(() => {
    showToast('📋 Mã giảm giá: ' + code);
  });
}

function copyCode(code) {
  navigator.clipboard?.writeText(code).then(() => {
    showToast('📋 Đã sao chép mã: ' + code);
  }).catch(() => {
    showToast('📋 Mã giảm giá: ' + code);
  });
}

// ===== HOME PAGE =====
function initHomePage() {
  const featGrid = document.getElementById('featured-grid');
  if (featGrid) {
    const featured = PRODUCTS.slice(0, 8);
    featGrid.innerHTML = featured.map(renderProductCard).join('');
  }
  const comboGrid = document.getElementById('combo-grid');
  if (comboGrid) {
    comboGrid.innerHTML = COMBOS.map(renderComboCard).join('');
  }
}

// ===== MENU PAGE =====
function initMenuPage() {
  filterMenu();
}

function filterMenu() {
  const grid = document.getElementById('menu-grid');
  if (!grid) return;

  const searchInput = document.getElementById('menu-search-input');
  const query = searchInput ? searchInput.value.toLowerCase() : '';

  const checkedCats = [...document.querySelectorAll('.filter-sidebar .filter-check input[type="checkbox"][value]')]
    .filter(cb => cb.checked && !['3', '4'].includes(cb.value))
    .map(cb => cb.value);

  const maxPrice = parseInt(document.getElementById('price-slider')?.value || 500000);

  let filtered = PRODUCTS.filter(p => {
    if (query && !p.name.toLowerCase().includes(query)) return false;
    if (checkedCats.length && !checkedCats.includes(p.cat)) return false;
    if (p.price > maxPrice) return false;
    return true;
  });

  const sortSelect = document.querySelector('.sort-select');
  if (sortSelect) {
    switch (sortSelect.value) {
      case 'price-asc': filtered.sort((a, b) => a.price - b.price); break;
      case 'price-desc': filtered.sort((a, b) => b.price - a.price); break;
      case 'popular': filtered.sort((a, b) => parseFloat(b.sold) - parseFloat(a.sold)); break;
    }
  }

  grid.innerHTML = filtered.length
    ? filtered.map(renderProductCard).join('')
    : '<p style="color:var(--gray);grid-column:1/-1;text-align:center;padding:3rem">Không tìm thấy sản phẩm phù hợp.</p>';

  const cnt = document.getElementById('result-count');
  if (cnt) cnt.textContent = `Hiển thị 1–${filtered.length} trên ${filtered.length} sản phẩm`;
}

function updatePriceLabel(val) {
  const el = document.getElementById('price-max-label');
  if (el) el.textContent = parseInt(val).toLocaleString('vi-VN') + 'đ';
}

function resetFilter() {
  document.querySelectorAll('.filter-sidebar input[type="checkbox"]').forEach(cb => cb.checked = true);
  const ps = document.getElementById('price-slider');
  if (ps) { ps.value = 500000; updatePriceLabel(500000); }
  filterMenu();
}

// ===== PROMO PAGE =====
function initPromoPage() {
  const grid = document.getElementById('promo-combo-grid');
  if (grid) grid.innerHTML = COMBOS.map(renderComboCard).join('');
}

// ===== CART PAGE =====
let COUPON_CODES = { 'FURY20': 20, 'BUCKET50': 50000, 'APP15K': 15000 };
let appliedDiscount = 0;
let appliedCouponType = null; // 'percent' | 'flat'

function renderCart() {
  const listEl = document.getElementById('cart-items-list');
  const emptyEl = document.getElementById('cart-empty');
  const summaryItems = document.getElementById('summary-items');
  if (!listEl) return;

  if (cart.length === 0) {
    listEl.style.display = 'none';
    if (emptyEl) emptyEl.style.display = 'block';
    updateSummary();
    return;
  }

  listEl.style.display = 'block';
  if (emptyEl) emptyEl.style.display = 'none';

  listEl.innerHTML = cart.map(item => `
    <div class="cart-item">
      <div class="cart-item-img">
        ${item.img ? `<img src="${item.img}" alt="${item.name}"/>` : item.emoji}
      </div>
      <div class="cart-item-info">
        <div class="cart-item-name">${item.name}</div>
        ${item.note ? `<div class="cart-item-note">${item.note}</div>` : ''}
        <div class="cart-item-price">${(item.price * item.qty).toLocaleString('vi-VN')}đ</div>
      </div>
      <div class="cart-item-controls">
        <div class="qty-control-sm">
          <button class="qty-btn-sm" onclick="updateQty(${item.id},-1)">−</button>
          <span style="min-width:1.5rem;text-align:center;font-family:'Oswald',sans-serif">${item.qty}</span>
          <button class="qty-btn-sm" onclick="updateQty(${item.id},1)">+</button>
        </div>
        <button class="remove-btn" onclick="removeFromCart(${item.id})"><i class="fas fa-trash-alt"></i> Xóa</button>
      </div>
    </div>
  `).join('');

  if (summaryItems) {
    summaryItems.innerHTML = cart.map(item => `
      <div class="summary-item">
        <div class="summary-item-img">${item.img ? `<img src="${item.img}" alt="${item.name}" style="width:100%;height:100%;object-fit:cover;border-radius:6px;"/>` : (item.emoji || '🍗')}</div>
        <div class="summary-item-name">${item.name} x${item.qty}</div>
        <div class="summary-item-price">${(item.price * item.qty).toLocaleString('vi-VN')}đ</div>
      </div>
    `).join('');
  }

  updateSummary();
}

function updateSummary() {
  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = cart.length === 0 ? 0 : 20000;
  const discount = appliedDiscount;
  const total = Math.max(0, subtotal + shipping - discount);

  const fmt = n => n.toLocaleString('vi-VN') + 'đ';
  const el = id => document.getElementById(id);
  if (el('subtotal')) el('subtotal').textContent = fmt(subtotal);
  if (el('shipping')) el('shipping').textContent = shipping === 0 ? '0đ' : fmt(shipping);
  if (el('discount')) el('discount').textContent = '-' + fmt(discount);
  if (el('total')) el('total').textContent = fmt(total);
}

function applyCoupon() {
  const input = document.getElementById('coupon-input');
  if (!input) return;
  const code = input.value.trim().toUpperCase();
  if (!code) { showToast('⚠️ Vui lòng nhập mã giảm giá!'); return; }

  const subtotal = cart.reduce((s, i) => s + i.price * i.qty, 0);

  if (code === 'FURY20') {
    appliedDiscount = Math.round(subtotal * 0.2);
    showToast('🎉 Áp dụng thành công! Giảm 20%');
  } else if (code === 'BUCKET50') {
    appliedDiscount = Math.min(50000, subtotal);
    showToast('🎉 Áp dụng thành công! Giảm 50.000đ');
  } else if (code === 'APP15K') {
    appliedDiscount = Math.min(15000, subtotal);
    showToast('🎉 Áp dụng thành công! Giảm 15.000đ');
  } else {
    showToast('❌ Mã giảm giá không hợp lệ!');
    return;
  }
  updateSummary();
}

// ===== SEARCH =====
function initSearch() {
  const btn = document.getElementById('search-toggle');
  const bar = document.getElementById('search-bar');
  if (btn && bar) {
    btn.addEventListener('click', () => bar.classList.toggle('active'));
  }
}

// ===== SCROLL HEADER =====
function initScrollHeader() {
  const header = document.getElementById('site-header');
  if (!header) return;
  window.addEventListener('scroll', () => {
    header.classList.toggle('scrolled', window.scrollY > 50);
  });
}

// ===== MOBILE NAV =====
function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mainNav = document.querySelector('.main-nav');
  if (!hamburger || !mainNav) return;

  // Clone nav into mobile overlay
  let mobileNav = document.getElementById('mobile-nav-overlay');
  if (!mobileNav) {
    mobileNav = document.createElement('div');
    mobileNav.className = 'mobile-nav';
    mobileNav.id = 'mobile-nav-overlay';
    mobileNav.innerHTML = `
      <button class="modal-close" id="mobile-nav-close" style="position:fixed;top:1.5rem;right:1.5rem;font-size:1.8rem">✕</button>
      ${mainNav.innerHTML}
      <a href="gio-hang.html" class="btn-primary" style="margin-top:1rem">🛒 Giỏ hàng</a>
    `;
    document.body.appendChild(mobileNav);
    mobileNav.querySelector('#mobile-nav-close')?.addEventListener('click', () => mobileNav.classList.remove('open'));
  }
  hamburger.addEventListener('click', () => mobileNav.classList.toggle('open'));
}

// ===== MODAL CLOSE =====
function initModalClose() {
  const close = document.getElementById('modal-close');
  const overlay = document.getElementById('combo-modal');
  if (close) close.addEventListener('click', closeModal);
  if (overlay) overlay.addEventListener('click', e => { if (e.target === overlay) closeModal(); });
}

// ===== CONTACT FORM =====
function submitContact(e) {
  e.preventDefault();
  showToast('✅ Tin nhắn đã được gửi! Chúng tôi sẽ liên hệ lại trong 24 giờ.');
  e.target.reset();
}

// ===== PAGE DETECTION & INIT =====
function getPage() {
  const path = window.location.pathname;
  if (path.includes('menu.html')) return 'menu';
  if (path.includes('khuyen-mai.html')) return 'khuyen-mai';
  if (path.includes('gio-hang.html')) return 'gio-hang';
  if (path.includes('lien-he.html')) return 'lien-he';
  return 'home';
}

document.addEventListener('DOMContentLoaded', () => {
  initScrollHeader();
  initSearch();
  initMobileNav();
  initModalClose();
  initCountdown();
  updateCartBadge();

  const page = getPage();

  switch (page) {
    case 'home':
      initSlider();
      initHomePage();
      break;
    case 'menu':
      initMenuPage();
      break;
    case 'khuyen-mai':
      initPromoPage();
      break;
    case 'gio-hang':
      renderCart();
      break;
  }
});

function initThankYouPage() {
  // Xóa dữ liệu giỏ hàng sau khi đặt thành công
  localStorage.removeItem('cf_cart');
  // Cập nhật lại badge giỏ hàng về 0
  updateCartBadge();

  // Giả lập thông báo tin nhắn trong Console
  console.log("CRUNCHY FURY: Đơn hàng #CF-102345 đã được xác nhận. Cảm ơn bạn!");
}
function initThankYouPage() {
  console.log("Thank you page loaded");
}