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
// // تابع برای چاپ عرض و ارتفاع صفحه
// function printWindowSize() {
//     const width = window.innerWidth;
//     const height = window.innerHeight;
//     console.log(`عرض صفحه: ${width}px`);
//     console.log(`ارتفاع صفحه: ${height}px`);
// }

// // چاپ اندازه صفحه هنگام بارگذاری صفحه
// printWindowSize();

// // چاپ اندازه صفحه هنگام تغییر اندازه پنجره
// window.addEventListener('resize', printWindowSize);
let i = 0;
function next() {
    i++;
    i = (i + 5) % 5
    scroll(i);
    scroll2(i);

}
function pre() {
    i--;
    i = (i + 5) % 5;
    scroll(i);
    scroll3(i);
}
function scroll2(i) {

    switch (i) {
        case 0:
            document.getElementById('c4').style.background = "#38AFB3";
            break;
        case 1:
            document.getElementById('c0').style.background = "#38AFB3";
            break;
        case 2:
            document.getElementById('c1').style.background = "#38AFB3";
            break;
        case 3:
            document.getElementById('c2').style.background = "#38AFB3";
            break;
        case 4:
            document.getElementById('c3').style.background = "#38AFB3";
            break;

    }
}
function scroll3(i) {

    switch (i) {
        case 0:
            document.getElementById('c1').style.background = "#38AFB3";
            break;
        case 1:
            document.getElementById('c2').style.background = "#38AFB3";
            break;
        case 2:
            document.getElementById('c3').style.background = "#38AFB3";
            break;
        case 3:
            document.getElementById('c4').style.background = "#38AFB3";
            break;
        case 4:
            document.getElementById('c0').style.background = "#38AFB3";
            break;

    }
}
function scroll(i) {

    switch (i) {
        case 0:
            document.getElementById('c0').style.background = "#213f40";
            break;
        case 1:
            document.getElementById('c1').style.background = "#213f40";
            break;
        case 2:
            document.getElementById('c2').style.background = "#213f40";
            break;
        case 3:
            document.getElementById('c3').style.background = "#213f40";
            break;
        case 4:
            document.getElementById('c4').style.background = "#213f40";
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
var target = document.querySelector('.header');
window.addEventListener('scroll', function () {
    if (window.scrollY > 120) {
        target.style.transform = 'translateY(-98px)';
        document.getElementById('hover').style.display = 'block';
        document.getElementById('menu2').style.display = 'none';
        document.getElementById('show').innerHTML = `<i class='bx bx-menu' id="menu" style='color:#176d73'  ></i>`;
    }
    else {
        target.style.transform = 'translateY(0)';
        document.getElementById('hover').style.display = 'none';
    }
});
function header() {
    if (target.style.transform == 'translateY(-98px)') {
        target.style.transform = 'translateY(0)';
        document.getElementById('hover').style.transform = 'rotateZ(180deg)';
        document.getElementById('hover').classList.add('radius1')
        document.getElementById('hover').classList.remove('radius2')

    }
    else {
        target.style.transform = 'translateY(-98px)';
        document.getElementById('hover').style.transform = 'rotateZ(0deg)';
        document.getElementById('hover').classList.add('radius2')
        document.getElementById('hover').classList.remove('radius1')

    }
}