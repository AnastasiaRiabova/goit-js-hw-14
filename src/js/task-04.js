const valueRef = document.querySelector('#value');
const decrementRef = document.querySelector('button[data-action="decrement"]');
const incrementRef = document.querySelector('button[data-action="increment"]');

let counterValue = 0
const incrementCounterValue = () => {
    counterValue += 1
    valueRef.textContent = counterValue
}

const decrementCounterValue = () => {
    counterValue -= 1
    valueRef.textContent = counterValue
}

incrementRef.addEventListener('click', incrementCounterValue)
decrementRef.addEventListener('click', decrementCounterValue)

