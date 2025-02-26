function animation1() {
    document.getElementById('yellow-navar').style.left = '76%';
}
function animation2() {
    document.getElementById('yellow-navar').style.left = '51%';
}
function animation3() {
    document.getElementById('yellow-navar').style.left = '26%';
}
function animation4() {
    document.getElementById('yellow-navar').style.left = '1%';
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