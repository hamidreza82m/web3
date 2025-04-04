
const navMenu = document.querySelector('.main-nav');
document.addEventListener('DOMContentLoaded', function () {
    const toggleBtn = document.querySelector('.mobile-menu-toggle');
    const close = document.getElementById('close');

    toggleBtn.addEventListener('click', function () {
        navMenu.classList.toggle('active');
    });
    close.addEventListener('click', function () {
        navMenu.classList.remove('active');
    });

});
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-mode');
    themeToggle.checked = false;
}

themeToggle.addEventListener('change', function () {
    if (this.checked) {
        body.classList.remove('dark-mode');
        localStorage.setItem('theme', 'light');
    } else {
        body.classList.add('dark-mode');
        localStorage.setItem('theme', 'dark');

    }
});
window.addEventListener('scroll', function () {
    if (window.scrollY > 20) {
        navMenu.classList.remove('active');
    }
})
document.addEventListener('DOMContentLoaded', function() {
    // تابع برای افزایش آمار
    function incrementStat(statName) {
        let stats = JSON.parse(localStorage.getItem('downloadStats')) || {
            totalDownloads: 0,
            todayDownloads: 0,
            lastDownloadDate: '',
            pageViews: 0
        };

        // بازدید صفحه
        if(statName === 'pageView') {
            stats.pageViews++;
        }
        
        // دانلودها
        if(statName === 'download') {
            const today = new Date().toDateString();
            
            // اگر تاریخ امروز با آخرین دانلود متفاوت است
            if(stats.lastDownloadDate !== today) {
                stats.todayDownloads = 0;
                stats.lastDownloadDate = today;
            }
            
            stats.totalDownloads++;
            stats.todayDownloads++;
        }

        localStorage.setItem('downloadStats', JSON.stringify(stats));
        updateStatsDisplay(stats);
    }

    // تابع برای نمایش آمار
    function updateStatsDisplay(stats) {
        document.getElementById('total-downloads').textContent = stats.totalDownloads.toLocaleString();
        document.getElementById('today-downloads').textContent = stats.todayDownloads.toLocaleString();
        document.getElementById('page-views').textContent = stats.pageViews.toLocaleString();
    }

    // افزایش بازدید صفحه هنگام لود
    incrementStat('pageView');

    // ثبت کلیک روی دکمه‌های دانلود
    document.querySelectorAll('.download-link').forEach(link => {
        link.addEventListener('click', function(e) {
            // اگر لینک واقعی است نه #
            if(this.getAttribute('href') !== '#') {
                incrementStat('download');
            }
        });
    });

    // بارگذاری آمار موجود
    const savedStats = JSON.parse(localStorage.getItem('downloadStats'));
    if(savedStats) {
        updateStatsDisplay(savedStats);
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