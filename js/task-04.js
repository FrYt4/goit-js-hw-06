const decrementButton = document.querySelector('[data-action="decrement"]');
const incrementButton = document.querySelector(`data-action="increment"`);
const counterValueSpan = document.getElementById(`value`);

let counterValue = 0;

const upadateValue = () => {
    counterValueSpan.textContent = counterValue
};

decrementButton.addEventListener(`click`, () => {
    counterValue -= 1;
    upadateValue();
});

incrementButton.addEventListener(`click`,() =>{
    counterValue += 1;
    upadateValue();
});