const textInputEl = document.querySelector('#validation-input');

const wrongLength = Number(textInputEl.getAttribute('data-length'));


textInputEl.addEventListener('blur', (event) => {
    
    let lengthTargetValue = Number(textInputEl.value.trim().length);
    
    if (lengthTargetValue === wrongLength) {
        textInputEl.classList.remove('invalid');
        textInputEl.classList.add('valid');
    } else  {
        textInputEl.classList.remove('valid');
        textInputEl.classList.add('invalid')
    }
})