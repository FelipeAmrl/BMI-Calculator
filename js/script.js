import { Modal } from './modal.js';
import { AlertError } from './alert-error.js';
import { inputValueIsNotANumber, notNumber, verifyBMICategory, changeCategoryTextColor, calculateBMI, resetInputs } from './utils.js';

const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

form.oninput = () => inputValueIsNotANumber(inputWeight.value, inputHeight.value);
form.onsubmit = event => handleSubmit(event);

function handleSubmit(event)
{
    event.preventDefault();
    const weight = inputWeight.value;
    const height = inputHeight.value;
    
    const weightOrHeightIsNotANumber = notNumber(weight) || notNumber(height);

    if(weightOrHeightIsNotANumber)
    {
        AlertError.open();
        return;
    }

    const BMI = calculateBMI(weight, height);
    const category = verifyBMICategory(BMI);
    displayResultMessage(BMI, category);

    resetInputs();
}

function displayResultMessage(BMI, category)
{
    const message = `Your BMI is ${BMI}</br>(<span>${category}</span>)`;

    Modal.messege.innerHTML = message;

    changeCategoryTextColor(category);

    Modal.open();
}

export {inputHeight, inputWeight};