const inputEl = document.querySelector('#font-size-control');
console.log(inputEl);
const textSize = document.querySelector('#text');
console.log(textSize);

inputEl.addEventListener('input', onMovingSlider);

function onMovingSlider() {
    textSize.style.fontSize = `${inputEl.value}px`;
}

