// منوی موبایل
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');
const main = document.querySelector('.dark-main');
const home = document.getElementById('home')

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    menuToggle.classList.toggle('active');
    home.classList.toggle('filter-blur');
    main.classList.toggle('filter-blur');

});

// تغییر استایل نوار ناوبری هنگام اسکرول
window.addEventListener('scroll', () => {
    const nav = document.querySelector('.dark-nav');
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// فیلتر نمونه کارها
const filterBtns = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // حذف کلاس active از همه دکمه‌ها
        filterBtns.forEach(btn => btn.classList.remove('active'));
        // اضافه کردن کلاس active به دکمه کلیک شده
        console.log('gg');
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        portfolioItems.forEach(item => {
            if (filter === 'all' || item.dataset.category === filter) {
                item.style.display = 'block';
            } else {
                item.style.display = 'none';
            }
        });
    });
});

// انیمیشن نوارهای پیشرفت
function animateProgressBars() {
    const progressFills = document.querySelectorAll('.progress-fill');

    progressFills.forEach(fill => {
        const width = fill.style.width;
        // fill.style.width = '0';

        setTimeout(() => {
            fill.style.width = width;
        }, 1000);
    });
}

// مشاهده بخش‌ها با انیمیشن
const sections = document.querySelectorAll('section');

function checkScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (sectionTop < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';

            if (section.id === 'about') {
                animateProgressBars();
            }
        }
    });
}

// تنظیم اولیه برای انیمیشن‌ها
sections.forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
});

// فراخوانی اولیه
checkScroll();
window.addEventListener('scroll', checkScroll);

emailjs.init('rj_d3YPMh67WhYduL');
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const btn = document.querySelector('.submit-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال ارسال...';

    emailjs.sendForm('service_ajioc4r', 'template_n414xo7', this)
        .then(() => {
            showAlert('پیام شما با موفقیت ارسال شد!', 'success');
            this.reset();
        })
        .catch((error) => {
            showAlert('خطا در ارسال پیام. لطفاً دوباره تلاش کنید.', 'error');
            console.error('Failed:', error);
        })
        .finally(() => {
            btn.disabled = false;
            btn.innerHTML = 'ارسال پیام';
        });
});

function showAlert(message, type) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type}`;
    alertDiv.innerHTML = `
        <p>${message}</p>
        <button class="close-alert">&times;</button>
    `;

    document.body.appendChild(alertDiv);

    setTimeout(() => {
        alertDiv.classList.add('show');
    }, 100);

    alertDiv.querySelector('.close-alert').addEventListener('click', () => {
        alertDiv.classList.remove('show');
        setTimeout(() => alertDiv.remove(), 300);
    });

    setTimeout(() => {
        alertDiv.classList.remove('show');
        setTimeout(() => alertDiv.remove(), 300);
    }, 5000);
}