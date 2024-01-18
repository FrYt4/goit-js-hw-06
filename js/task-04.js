const decrementButton = document.querySelector('button[data-action="decrement"]');
const incrementButton = document.querySelector('button[data-action="decrement"]');
const counterValueSpan = document.querySelector("#value");

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