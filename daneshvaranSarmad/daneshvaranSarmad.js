function animation1() {
    document.getElementById('yellow-navar').style.left = '75%';
}
function animation2() {
    document.getElementById('yellow-navar').style.left = '50%';
}
function animation3() {
    document.getElementById('yellow-navar').style.left = '25%';
}
function animation4() {
    document.getElementById('yellow-navar').style.left = '0%';
}

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
const img1 = document.getElementsByClassName('img-dark');
const img2 = document.getElementsByClassName('img-light');
const bg = document.getElementsByClassName('bg');
const icons = document.getElementsByClassName('icons');

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = false;
    body.classList.add('dark-mode');
    localStorage.setItem('theme', 'dark');
    Array.from(icons).forEach(img => {
        img.style.mixBlendMode = 'plus-lighter';
    });
    Array.from(img1).forEach(img => {
        img.style.opacity = '1';
    });
    Array.from(img2).forEach(img => {
        img.style.opacity = '0';
    });
    Array.from(bg).forEach(img => {
        img.style.mixBlendMode = 'color-burn';
    });
    document.getElementById('logo').innerHTML = '<img src="./Clipped_image_20250407_134114 1.png" alt=""><h1>شر کت دانشوران سرمد</h1>';
    document.getElementById('logo-footer').innerHTML = '<img src="./Clipped_image_20250407_134114 1.png" alt=""><h1>شر کت دانشوران سرمد</h1>';
    document.getElementById('footer').style.background = 'url(./footer-dark.png) var(--recaptcha)';
    document.getElementById('footer').style.backgroundSize = 'cover';
}

themeToggle.addEventListener('change', function () {
    if (this.checked) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
        Array.from(icons).forEach(img => {
            img.style.mixBlendMode = 'normal';
        });
        Array.from(img1).forEach(img => {
            img.style.opacity = '0';
        });
        Array.from(img2).forEach(img => {
            img.style.opacity = '1';
        });
        Array.from(bg).forEach(img => {
            img.style.mixBlendMode = 'normal';
        });
        document.getElementById('logo').innerHTML = '<img src="./1000050309 1.png" alt=""><h1>شر کت دانشوران سرمد</h1>';
        document.getElementById('logo-footer').innerHTML = '<img src="./1000050309 1.png" alt=""><h1>شر کت دانشوران سرمد</h1>';
        document.getElementById('footer').style.background = 'url(./footer-light.png) var(--recaptcha)';
        document.getElementById('footer').style.backgroundSize = 'cover';



    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');
        Array.from(icons).forEach(img => {
            img.style.mixBlendMode = 'plus-lighter';
        });
        Array.from(img1).forEach(img => {
            img.style.opacity = '1';
        });
        Array.from(img2).forEach(img => {
            img.style.opacity = '0';
        });
        Array.from(bg).forEach(img => {
            img.style.mixBlendMode = 'color-burn';
        });
        document.getElementById('logo').innerHTML = '<img src="./Clipped_image_20250407_134114 1.png" alt=""><h1>شر کت دانشوران سرمد</h1>';
        document.getElementById('logo-footer').innerHTML = '<img src="./Clipped_image_20250407_134114 1.png" alt=""><h1>شر کت دانشوران سرمد</h1>';
        document.getElementById('footer').style.background = 'url(./footer-dark.png) var(--recaptcha)';
        document.getElementById('footer').style.backgroundSize = 'cover';

    }
});

// اسکریپت مدیریت انیمیشن‌های اسکرول
document.addEventListener('DOMContentLoaded', function() {
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