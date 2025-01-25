document.getElementById('search').addEventListener('click', function () {
    const elements = document.querySelectorAll('#input-search');
    elements.forEach(element => {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
            // element.style.position = 'absolute'
        }
        else {
            element.style.display = 'none';
        }
    });
})
window.addEventListener('scroll', function () {
    var target = document.querySelector('.header');
    if (window.scrollY > 250) {
        target.classList.add('header2');
    }
    else {
        target.classList.remove('header2');
    }
});
document.getElementById('icon-bas').addEventListener('click', function () {
    const elements = document.querySelectorAll('.basket');
    elements.forEach(element => {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
            document.getElementById('basket').classList.add('animation2');
            document.getElementById('basket').classList.remove('animation');
            // element.style.position = 'absolute'
        }
        else {
            document.getElementById('basket').classList.remove('animation2');
            document.getElementById('basket').classList.add('animation');
            setTimeout(()=>{
                element.style.display = 'none';
            },500);
        }
    });
})