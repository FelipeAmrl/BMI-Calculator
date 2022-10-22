import {inputWeight, inputHeight} from './script.js';
import { AlertError } from './alert-error.js';

function inputValueIsNotANumber(weight, height)
{
    (isNaN(height) || isNaN(weight)) ? AlertError.open(): AlertError.close()
}

function notNumber(value)
{
    return isNaN(value) || value == ""
}

function calculateBMI(weight, height)
{
    return (weight/ ((height / 100) ** 2)).toFixed(2);
}

function resetInputs()
{
    inputHeight.value = "";
    inputWeight.value = "";
}

export { inputValueIsNotANumber, notNumber, calculateBMI, resetInputs };