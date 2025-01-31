document.getElementById('search').addEventListener('click', function () {
    const elements = document.querySelectorAll('.searchBox');
    elements.forEach(element => {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block';
            document.getElementById('input-search').classList.add('animation3');
            document.getElementById('input-search').classList.remove('animation4');
            this.innerHTML = '<lord-icon src="https://cdn.lordicon.com/nqtddedc.json" trigger="hover" style="width:30px;height:30px"></lord-icon>';
        }
        else {
            document.getElementById('input-search').classList.remove('animation3');
            document.getElementById('input-search').classList.add('animation4');
            setTimeout(()=>{
                element.style.display = 'none';
            },365);
            this.innerHTML = '<lord-icon src="https://cdn.lordicon.com/fkdzyfle.json" trigger="hover" style="width:30px;height:30px">'
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
