const buttonEye = document.querySelector('.button-eye');
const inputPassword = document.querySelector('#senha');

buttonEye.addEventListener('click', () => { 
    const type = inputPassword.getAttribute('type');

    if (type === 'password') {
        inputPassword.setAttribute('type', 'text');
        buttonEye.classList.add('active');
    } else {
        inputPassword.setAttribute('type', 'password');
        buttonEye.classList.remove('active');
    }
})