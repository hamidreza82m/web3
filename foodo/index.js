const items = [
  { id: 1, name: 'برگر فودو', cat: 'burger', desc: 'نان برگر، همبرگر ذغالی،پیاز کاراملی،پنیر گودا،سس مخصوص،گوجه،خیارشور', price: 215000, img: './img/4.png', spicy: false },
  { id: 2, name: 'برگر کلاسیک', cat: 'burger', desc: 'نان برگر،همبرگر ذغالی،سس مخصوص،کاهو،گوجه ،خیارشور ', price: 195000, img: './img/4.png', spicy: false },
  { id: 3, name: 'چیز برگر', cat: 'burger', desc: 'نان برگر،همبرگر ذغالی،پنیر گودا،سس مخصوص، کاهو،گوجه ،خیارشور', price: 210000, img: './img/4.png', spicy: false },
  { id: 4, name: 'ماشروم برگر', cat: 'burger', desc: 'نان برگر،همبرگر ذغالی،قارچ،پنیر موزارلا،سس مخصوص، کاهو،گوجه ،خیارشور', price: 255000, img: './img/4.png', spicy: false },
  { id: 5, name: 'رویال برگر', cat: 'burger', desc: 'نان برگر،همبرگر ذغالی،ژامبون 90%،پنیر موزارلا،سس مخصوص، کاهو،گوجه ،خیارشور', price: 265000, img: './img/4.png', spicy: false },
  { id: 6, name: 'هات برگر', cat: 'burger', desc: 'نان برگر،همبرگر ذغالی،کالباس پپرونی،پنیر گودا،سس مخصوص، کاهو،گوجه ،خیارشور', price: 265000, img: './img/4.png', spicy: true },
  { id: 7, name: 'دوبل برگر', cat: 'burger', desc: 'نان برگر،دوبل همبرگر ذغالی،دو ورق پنیر گودا،سس مخصوص، کاهو،گوجه ،خیارشور', price: 310000, img: './img/4.png', spicy: false },
  { id: 8, name: 'چیکن برگر', cat: 'burger', desc: 'نان برگر،فیله مرغ،سس مخصوص، کاهو،گوجه ،خیارشور', price: 235000, img: './img/4.png', spicy: false },
  { id: 9, name: 'چیکن میت', cat: 'burger', desc: 'نان برگر،همبرگر ذغالی،فیله گریل،سس مخصوص، کاهو،گوجه ،خیارشور', price: 310000, img: './img/4.png', spicy: false },

  { id: 10, name: 'اسنک فودو', cat: 'Snack', desc: 'نان تست،میکس ژامبون مرغ و گوشت،پنیر موزارلا،ذرت،فلفل دلمه ای', price: 110000, img: './img/3.png', spicy: false },
  { id: 11, name: 'اسنک رویال', cat: 'Snack', desc: 'نان تست، میکس ژامبون مرغ و گوشت و پپرونی،پنیر موزارلا،ذرت،فلفل دلمه ای', price: 135000, img: './img/3.png', spicy: false },
  { id: 12, name: 'اسنک پپرونی', cat: 'Snack', desc: 'نان تست،کالباس پپرونی،پنیر موزارلا،ذرت،فلفل دلمه ای', price: 125000, img: './img/3.png', spicy: true },
  { id: 13, name: 'اسنک اسپایسی', cat: 'Snack', desc: 'نان تست،کالباس پپرونی،سس تند هالوپینو ،پنیر موزارلا،ذرت،فلفل دلمه ای', price: 145000, img: './img/3.png', spicy: true },
  { id: 14, name: 'اسنک بیف', cat: 'Snack', desc: 'نان تست،گوشت اسلایسی طعم دار،پنیر موزارلا،ذرت،قارچ،فلفل دلمه ای', price: 165000, img: './img/3.png', spicy: false },
  { id: 15, name: 'اسنک چیکن', cat: 'Snack', desc: 'نان تست،مرغ مرینیت شده،پنیر موزارلا،ذرت،قارچ،فلفل دلمه ای', price: 145000, img: './img/3.png', spicy: false },
  { id: 16, name: 'اسنک میکس', cat: 'Snack', desc: 'نان تست،مرغ مرینیت شده،گوشت اسلایسی طعم دار،پنیر موزارلا،ذرت،قارچر،فلفل دلمه ای', price: 160000, img: './img/3.png', spicy: false },

  { id: 17, name: 'هات داگ', cat: 'Sandwich', desc: 'هات داگ،سس مخصوص، خلال چیپس،کاهو،گوجه،خیارشور،نان باگت', price: 145000, img: './img/2.png', spicy: false },
  { id: 18, name: 'هات داگ ویژه', cat: 'Sandwich', desc: 'هات داگ،قارچ ،پنیر مخصوص،خلال چیپس، سس مخصوص', price: 215000, img: './img/2.png', spicy: false },
  { id: 19, name: 'ژامبون تنوری', cat: 'Sandwich', desc: 'ژامبون مرغ و گوشت،قارچ،پنیر مخصوص،کاهو،گوجه،خیارشور،نان باگت', price: 220000, img: './img/2.png', spicy: false },
  { id: 20, name: 'ژامبون سرد', cat: 'Sandwich', desc: 'ژامبون مرغ و گوشت،کاهو،گوجه،خیارشور،نان باگت', price: 185000, img: './img/2.png', spicy: false },
  { id: 21, name: 'چیکن گریل', cat: 'Sandwich', desc: 'فیله مرغ مرینیت شده، خلال چیپس،کاهو،گوجه،خیارشور،نان باگت', price: 225000, img: './img/2.png', spicy: false },
  { id: 22, name: 'رست بیف', cat: 'Sandwich', desc: 'گوشت اسلایسی طعم دار، قارچ، پنیر مخصوص، کاهو، گوجه، خیارشور، نان باگت', price: 245000, img: './img/2.png', spicy: false },
  { id: 23, name: 'بیف چیکن', cat: 'Sandwich', desc: 'گوشت اسلایسی طعم دار، فیله مرغ  ،قارچ، پنیر مخصوص،کاهو،گوجه،خیارشور،نان باگت', price: 235000, img: './img/2.png', spicy: false },

  { id: 24, name: 'تُست فودو', cat: 'tork', desc: 'نان مخصوص،ژامبون مارتا،پنیر ورقه ای،ادویه ترکی', price: 155000, img: './img/5.png', spicy: false },
  { id: 25, name: 'تُست استانبول', cat: 'tork', desc: 'نان مخصوص،سوجوک ترکی،پنیر ورقه ای،ادویه ترکی', price: 185000, img: './img/5.png', spicy: false },
  { id: 26, name: 'تُست پپرونی', cat: 'tork', desc: 'نان مخصوص،پپرونی70%،پنیر ورقه ای،ادویه ترکی', price: 165000, img: './img/5.png', spicy: true },
  { id: 27, name: 'تُست بیف', cat: 'tork', desc: 'نان مخصوص،رست بیف،پنیر ورقه ای،قارچ،پیاز حلقه ای،ادویه ترکی', price: 220000, img: './img/5.png', spicy: false },
  { id: 28, name: 'تُست چیکن', cat: 'tork', desc: 'نان مخصوص،مرغ گریل،پنیر ورقه ای،قارچ،ادویه ترکی', price: 210000, img: './img/5.png', spicy: false },
  { id: 29, name: 'تُست میکس', cat: 'tork', desc: 'نان مخصوص،رست بیف،مرغ گریل،پنیر ورقه ای،قارچ،ادویه ترکی', price: 215000, img: './img/5.png', spicy: false },

  // { id: 30, name: 'کوکا کولا (شیشه‌ای)', cat: 'drinks', desc: 'نوشیدنی خنک', price: 18000, img: './img/3.png', spicy: false },

  { id: 30, name: 'سیب ساده', cat: 'sides', desc: 'سیب زمینی سرخ شده، ادویه مخصوص، سس مخصوص', price: 72000, img: './img/1.png', spicy: false },
  { id: 31, name: 'سیب فودو', cat: 'sides', desc: 'سیب زمینی سرخ شده، ژامبون مرغ و گوشت، پنیر گودا، ادویه مخصوص، سس مخصوص', price: 72000, img: './img/1.png', spicy: false },
  { id: 32, name: 'سالاد ماکارونی', cat: 'sides', desc: '', price: '', img: './img/6.png', spicy: false }
];


const menuEl = document.getElementById('menu');
const qEl = document.getElementById('q');
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modalImg');
const modalTitle = document.getElementById('modalTitle');
const modalDesc = document.getElementById('modalDesc');
const modalPrice = document.getElementById('modalPrice');
const closeBtn = document.getElementById('closeBtn');
let currentCat = 'all';

// format price
function formatPrice(n) {
  return n.toLocaleString('fa-IR') + ' تومان';
}

// render menu
function render(list) {
  menuEl.innerHTML = '';
  list.forEach((it, i) => {
    const div = document.createElement('article');
    div.className = 'card';
    div.setAttribute("data-aos", "fade-up");
    div.style.transitionDelay = (i * 0.05) + "s"; // stagger animation

    div.innerHTML = `
      <div class="meta">
        ${it.spicy ? '<div class="ribbon">تند</div>' : ''}
        <img loading="lazy" src="${it.img}" alt="${it.name}">
      </div>
      <div class="card-body">
        <h3>${it.name}</h3>
        <div class="desc">${it.desc}</div>
        <div class="price-row">
          <div class="price">${formatPrice(it.price)}</div>
          <div>
            <button class="btn" data-id="${it.id}">نمایش</button>
          </div>
        </div>
      </div>
    `;
    menuEl.appendChild(div);
  });

  document.querySelectorAll('.btn[data-id]').forEach(b => {
    b.addEventListener('click', () => {
      const item = items.find(x => x.id == b.dataset.id);
      if (!item) return;
      modalImg.src = item.img;
      modalTitle.textContent = item.name;
      modalDesc.textContent = item.desc;
      modalPrice.textContent = formatPrice(item.price);
      modal.classList.add('open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = "hidden";
    });
  });

  refreshAOS();
}

// filters
function applyFilters() {
  const q = qEl.value.trim().toLowerCase();
  const filtered = items.filter(it =>
    (it.name.toLowerCase().includes(q) || it.desc.toLowerCase().includes(q)) &&
    (currentCat === 'all' || it.cat === currentCat)
  );
  render(filtered);
}

// search
qEl.addEventListener('input', applyFilters);

// categories
document.querySelectorAll('.cat-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentCat = btn.dataset.cat;
    applyFilters();
  });
});

// modal close
closeBtn.addEventListener('click', closeModal);
modal.addEventListener('click', e => { if (e.target === modal) closeModal(); });
document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
function closeModal() {
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = "";
}

// AOS animation system
function refreshAOS() {
  const elements = document.querySelectorAll('[data-aos]');
  function checkPosition() {
    const scrollPos = window.scrollY + window.innerHeight * 0.85;
    elements.forEach(el => {
      if (scrollPos > el.offsetTop) el.classList.add('aos-animate');
    });
  }
  checkPosition();
  window.addEventListener('scroll', checkPosition);
  window.addEventListener('resize', checkPosition);
}

// initial
render(items);

