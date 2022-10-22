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

function verifyBMICategory(BMI)
{
    if(BMI < 16)
    {
        return "Severe Thinness"
    }
    else if(BMI >= 16 && BMI < 17)
    {
        return "Moderate Thinness"
    }
    else if(BMI >= 17 && BMI < 18.5)
    {
        return "Mild Thinness"
    }
    else if(BMI >= 18.5 && BMI < 25)
    {
        return "Normal"
    }
    else if(BMI >= 25 && BMI < 30)
    {
        return "Overweight"
    }
    else if(BMI >= 30 && BMI < 35)
    {
        return "Obese Class I"
    }
    else if(BMI >= 35 && BMI < 40)
    {
        return "Obese Class II"
    }
    else
    {
        return "Obese Class III"
    }
}

function changeCategoryTextColor(category)
{
    const categoryText = document.querySelector(".title span");
    
    if(category === "Obese Class III")
    {
        categoryText.style.color = "#c90000";
    }
    else if(category === "Severe Thinness" || category === "Obese Class II")
    {
        categoryText.style.color = "#fa1d1d";
    }
    else if(category === "Moderate Thinness" || category === "Obese Class I")
    {
        categoryText.style.color = "#fa5a5a";
    }
    else if(category === "Mild Thinness" || category === "Overweight")
    {
        categoryText.style.color = "#cfcf02";
    }
    else
    {
        categoryText.style.color = "green";
    }
}

function resetInputs()
{
    inputHeight.value = "";
    inputWeight.value = "";
}

export { inputValueIsNotANumber, notNumber, verifyBMICategory, changeCategoryTextColor, calculateBMI, resetInputs };