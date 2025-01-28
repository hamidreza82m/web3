
document.getElementById('login').addEventListener('click', function () {
    const elements = document.querySelectorAll('#signUp');
    elements.forEach(element => {
        element.style.display = 'none';
    });
    document.getElementById('black').classList.add('animate');
    document.getElementById('black').classList.remove('animate2');

    const elements2 = document.querySelectorAll('#login-page');
    elements2.forEach(element => {
        element.style.display = 'flex';
    });
    document.querySelectorAll('.rotate2').forEach(function (element) {
        element.classList.add('animate3');
    });
    const elements3 = document.querySelectorAll('.text-black-p');
    elements3.forEach(element => {
        element.style.position = 'relative';
    })
    document.querySelectorAll('.translate').forEach(function (element) {
        element.classList.add('animate4');
    })
    document.querySelectorAll('.translate2').forEach(function (element) {
        element.classList.add('animate5');
    })
})

document.getElementById('signUpButton').addEventListener('click', function () {
    document.getElementById('black').classList.add('animate2');
    document.getElementById('black').classList.remove('animate');

    const elements = document.querySelectorAll('#signUp');
    elements.forEach(element => {
        element.style.display = 'flex';
    });
    const elements2 = document.querySelectorAll('#login-page');
    elements2.forEach(element => {
        element.style.display = 'none';
    });
    document.querySelectorAll('.rotate').forEach(function (element) {
        element.classList.add('animate3');
    });
    const elements3 = document.querySelectorAll('.text-black-p');
    elements3.forEach(element => {
        element.style.position = 'absolute';
    })
});
