
let i = 0;
scroll(i);
function next() {
    i++;
    scroll(i);
    console.log(i);

}
function pre() {
    i--;
    scroll(i);
    console.log(i);
}
function scroll(i) {

    switch (i) {
        case 0:
            document.getElementById('left').style.opacity = '0';
            document.getElementById('c0').style.background = "var(--text-blue)";
            document.getElementById('c1').style.background = "#D4C9BE";
            document.getElementById('c2').style.background = "#D4C9BE";
            document.getElementById('c3').style.background = "#D4C9BE";
            document.getElementById('c4').style.background = "#D4C9BE";
            document.getElementById('left').style.display = 'none';
            break;
        case 1:
            document.getElementById('c0').style.background = "#D4C9BE";
            document.getElementById('c1').style.background = "var(--text-blue)";
            document.getElementById('c2').style.background = "#D4C9BE";
            document.getElementById('c3').style.background = "#D4C9BE";
            document.getElementById('c4').style.background = "#D4C9BE";
            document.getElementById('left').style.display = 'block';
            document.getElementById('left').style.opacity = '1';
            break;
        case 2:
            document.getElementById('c0').style.background = "#D4C9BE";
            document.getElementById('c1').style.background = "#D4C9BE";
            document.getElementById('c2').style.background = "var(--text-blue)";
            document.getElementById('c3').style.background = "#D4C9BE";
            document.getElementById('c4').style.background = "#D4C9BE";
            break;
        case 3:
            document.getElementById('c0').style.background = "#D4C9BE";
            document.getElementById('c1').style.background = "#D4C9BE";
            document.getElementById('c2').style.background = "#D4C9BE";
            document.getElementById('c3').style.background = "var(--text-blue)";
            document.getElementById('c4').style.background = "#D4C9BE";
            document.getElementById('right').style.display = 'block';
            document.getElementById('right').style.opacity = '1';
            break;
        case 4:
            document.getElementById('right').style.opacity = '0';
            document.getElementById('c0').style.background = "#D4C9BE";
            document.getElementById('c1').style.background = "#D4C9BE";
            document.getElementById('c2').style.background = "#D4C9BE";
            document.getElementById('c3').style.background = "#D4C9BE";
            document.getElementById('c4').style.background = "var(--text-blue)";
            document.getElementById('right').style.display = 'none';
            break;

    }
}
let width = window.innerWidth;
window.addEventListener("resize", () => {
    resize();
});
const slides = document.getElementById('slides');
function resize() {

}

const menu = document.getElementById('menu');
const menu2 = document.getElementById('menu2');
function show() {
    if (document.getElementById('menu2').style.display == 'none' || document.getElementById('menu2').style.display == '') {
        document.getElementById('menu2').style.display = 'flex';
        document.getElementById('menu2').classList.add('animation5');
        document.getElementById('menu2').classList.remove('animation6');
        setTimeout(() => {
            document.getElementById('show').innerHTML = `<lord-icon
        src="https://cdn.lordicon.com/nqtddedc.json"
        trigger="hover"
        state="hover-cross-3"
        colors="primary:#176d73"
        style="width:40px;height:40px">
        </lord-icon>`
        }, 300);
    }
    else {
        document.getElementById('menu2').classList.add('animation6');
        document.getElementById('menu2').classList.remove('animation5');
        setTimeout(() => {
            document.getElementById('menu2').style.display = 'none';
            document.getElementById('show').innerHTML = `<i class='bx bx-menu' id="menu" style='color:#176d73'  ></i>`;
        }, 300);
    }
}
const themeToggle = document.getElementById('themeToggle');
const body = document.body;
const icons = document.getElementsByClassName('icons');
const bg = document.getElementsByClassName('bg');
const bgCard = document.getElementsByClassName('bg-card');
const img1 = document.getElementById('img1')
const img2 = document.getElementById('img2')
const img3 = document.getElementById('img3')

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = false;
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    Array.from(bgCard).forEach(img => {
        img.src = './blob 2.png';
    });
    img1.src='./cloud-computing 1.png';
    img2.src='./1000051715 1.png';
    img3.src='./1000051714 1.png';
    document.getElementById('logo').innerHTML = '<img src="./Clipped_image_20250407_134114 1.png" alt="">';
    document.getElementById('logo-footer').innerHTML = '<img src="./Clipped_image_20250407_134114 1.png" alt=""><h1>شر کت دانشوران سرمد</h1>';
    document.getElementById('location').src = 'location2.png';
    document.getElementById('sms').src = 'sms2.png';
    document.getElementById('mobile').src = 'mobile2.png';
    document.getElementById('map').src = 'map2.png';


}

themeToggle.addEventListener('change', function () {
    if (this.checked) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        Array.from(bg).forEach(img => {
            img.style.mixBlendMode = 'normal';
        });
        Array.from(bgCard).forEach(img => {
            img.src = './blob 1.png';
        });
        img1.src='./img1.png';
        img2.src='./img2.png';
        img3.src='./img3.png';
        document.getElementById('logo').innerHTML = '<img src="./1000050309 1.png" alt="">';
        document.getElementById('logo-footer').innerHTML = '<img src="./1000050309 1.png" alt=""><h1>شر کت دانشوران سرمد</h1>';
        document.getElementById('location').src = 'location.png';
        document.getElementById('sms').src = 'sms.png';
        document.getElementById('mobile').src = 'mobile.png';
        document.getElementById('map').src = 'map.png';


    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        Array.from(bg).forEach(img => {
            img.style.mixBlendMode = 'color-burn';
        });
        Array.from(bgCard).forEach(img => {
            img.src = './blob 2.png';
        });
        img1.src='./cloud-computing 1.png';
        img2.src='./1000051715 1.png';
        img3.src='./1000051714 1.png';
        document.getElementById('logo').innerHTML = '<img src="./Clipped_image_20250407_134114 1.png" alt="">';
        document.getElementById('logo-footer').innerHTML = '<img src="./Clipped_image_20250407_134114 1.png" alt=""><h1>شر کت دانشوران سرمد</h1>';
        document.getElementById('location').src = 'location2.png';
        document.getElementById('sms').src = 'sms2.png';
        document.getElementById('mobile').src = 'mobile2.png';
        document.getElementById('map').src = 'map2.png';
    }
});

// اسکریپت مدیریت انیمیشن‌های اسکرول
document.addEventListener('DOMContentLoaded', function () {
    const elements = document.querySelectorAll('[data-aos]');

    function checkPosition() {
        const windowHeight = window.innerHeight;
        const scrollPosition = window.scrollY + (windowHeight * 0.8);

        elements.forEach(element => {
            const elementPosition = element.offsetTop;

            if (scrollPosition > elementPosition) {
                element.classList.add('aos-animate');
            } else if (!element.getAttribute('data-aos-once')) {
                element.classList.remove('aos-animate');
            }
        });
    }

    // اجرای اولیه
    checkPosition();

    // اضافه کردن event listener
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', checkPosition);
});


document.addEventListener('DOMContentLoaded', function () {
    // تابع تولید کپچا
    function generateCaptcha() {
        const chars = '0123456789';
        let captcha = '';
        for (let i = 0; i < 6; i++) {
            captcha += chars.charAt(Math.floor(Math.random() * chars.length));
        }

        let distortedCaptcha = '';
        for (let i = 0; i < captcha.length; i++) {
            const rotate = (Math.random() * 10) - 5;
            const scale = 0.8 + (Math.random() * 0.4);


            distortedCaptcha += `
                <span style="
                    display: inline-block;
                    transform: rotate(${rotate}deg) scale(${scale});
                    margin: 0 1px;
                ">${captcha.charAt(i)}</span>
            `;
        }

        return {
            text: captcha,
            html: distortedCaptcha
        };
    }

    // متغیرهای مورد نیاز
    let currentCaptcha = generateCaptcha();
    const form = document.getElementById('contact-form');
    const captchaCode = document.getElementById('captcha-code');
    const refreshBtn = document.getElementById('refresh-captcha');
    const captchaInput = document.getElementById('captcha-input');
    const captchaError = document.getElementById('captcha-error');

    // تابع به‌روزرسانی کپچا
    function updateCaptcha() {
        currentCaptcha = generateCaptcha();
        captchaCode.innerHTML = currentCaptcha.html;
        captchaInput.value = '';
        resetCaptchaError();
        console.log('کپچا به‌روز شد:', currentCaptcha.text);
    }

    // تابع ریست خطای کپچا
    function resetCaptchaError() {
        captchaError.style.display = 'none';
        captchaInput.classList.remove('input-error');
    }

    // تابع نمایش خطای کپچا
    function showCaptchaError(message) {
        captchaError.textContent = message;
        captchaError.style.display = 'block';
        captchaInput.classList.add('input-error');
        captchaInput.focus();
    }

    // اعتبارسنجی کپچا
    function validateCaptcha() {
        const enteredCaptcha = captchaInput.value.trim().toUpperCase();

        if (!enteredCaptcha) {
            showCaptchaError('لطفاً کد امنیتی را وارد کنید');
            return false;
        }

        if (enteredCaptcha !== currentCaptcha.text) {
            showCaptchaError('کد امنیتی نادرست است');
            updateCaptcha();
            return false;
        }

        return true;
    }

    // اعتبارسنجی کلی فرم
    function validateForm() {
        let isValid = true;

        // اعتبارسنجی فیلدهای الزامی
        const requiredFields = form.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                field.classList.add('input-error');
                isValid = false;
            } else {
                field.classList.remove('input-error');
            }
        });

        // اعتبارسنجی کپچا
        if (!validateCaptcha()) {
            isValid = false;
        }

        return isValid;
    }

    // مقداردهی اولیه کپچا
    updateCaptcha();

    // رویدادها
    refreshBtn.addEventListener('click', updateCaptcha);

    captchaInput.addEventListener('focus', resetCaptchaError);
    captchaInput.addEventListener('input', resetCaptchaError);
});

emailjs.init('yEQZr60w4-prS55zF');
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();
    if (!validateForm()) {
        return; // اگر اعتبارسنجی انجام نشد، هیچ کاری نکن
    }
    const btn = document.querySelector('.submit-btn');
    btn.disabled = true;
    btn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> در حال ارسال...';

    emailjs.sendForm('service_tkwc1t2', 'template_5v7b2om', this)
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
            btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="arr-2" viewBox="0 0 24 24">
                    <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                    </path>
                </svg>
                <span class="text">ارسال درخواست</span>
                <span class="circle"></span>
                <svg xmlns="http://www.w3.org/2000/svg" class="arr-1" viewBox="0 0 24 24">
                    <path
                        d="M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z">
                    </path>
                </svg>`;
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
};