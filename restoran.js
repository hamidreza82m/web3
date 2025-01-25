
document.getElementById('toggleButton').addEventListener('click', function() {
    const elements = document.querySelectorAll('.element');
    elements.forEach(element => {
        if (element.style.display === 'none' || element.style.display === '') {
            element.style.display = 'block'; 
            this.innerHTML ='<i class="icono-cross"></i>'; 
        } else {
            element.style.display = 'none';
            this.innerHTML = '<i class="icono-hamburger"></i>'; 
              }
    });
});
document.getElementById('toggleButton').addEventListener('click', function() {
    const elements = document.querySelectorAll('.element2');
    elements.forEach(element => {
        if (element.style.display === 'block' || element.style.display === '') {
            element.style.display = 'none'; 
            this.innerHTML ='<i class="icono-cross"></i>'; 
        } else {
            element.style.display = 'block'; 
            this.innerHTML = '<i class="icono-hamburger"></i>';
        }
    });
});

