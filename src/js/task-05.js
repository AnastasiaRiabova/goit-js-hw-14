const inputRef = document.querySelector('#name-input');
const outputRef = document.querySelector('#name-output');

const changeInputValue = (e) => {
    const inputValue = e.target.value.trim()
    outputRef.textContent = inputValue ? e.target.value : 'Anonymous'
}
inputRef.addEventListener('input', changeInputValue)