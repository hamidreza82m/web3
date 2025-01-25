document.getElementById('login').addEventListener('click', function () {
    // const elements = document.querySelectorAll('#black');
    // elements.forEach(element => {
    // element.style.transform='rotate(-45deg)';
    // element.style.left='-450px'
    document.getElementById('black').classList.add('animate');
    document.getElementById('black').classList.remove('animate2');

    // });
});
document.getElementById('login').addEventListener('click', function () {
    const elements = document.querySelectorAll('#signUp');
    elements.forEach(element => {
        element.style.display = 'none';
    });
})
document.getElementById('login').addEventListener('click', function () {
    const elements = document.querySelectorAll('#login-page');
    elements.forEach(element => {
        element.style.display = 'flex';
    });
})
document.getElementById('signUpButton').addEventListener('click', function () {
    document.getElementById('black').classList.add('animate2');
    document.getElementById('black').classList.remove('animate');

    // });
});
document.getElementById('signUpButton').addEventListener('click', function () {
    const elements = document.querySelectorAll('#signUp');
    elements.forEach(element => {
        element.style.display = 'flex';
    });
})
document.getElementById('signUpButton').addEventListener('click', function () {
    const elements = document.querySelectorAll('#login-page');
    elements.forEach(element => {
        element.style.display = 'none';
    });
})
document.getElementById('signUpButton').addEventListener('click', function () {
document.querySelectorAll('.rotate').forEach(function(element) {
     element.classList.add('animate3');
    });
});
document.getElementById('login').addEventListener('click', function () {
    document.querySelectorAll('.rotate2').forEach(function(element) {
         element.classList.add('animate3');
        });
    });