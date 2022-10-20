const form = document.querySelector("form");
const inputWeight = document.querySelector("#weight");
const inputHeight = document.querySelector("#height");

const Modal = {
    wrapper: document.querySelector(".modal-wrapper"),
    messege: document.querySelector(".modal .title"),
    buttonClose: document.querySelector(".modal button.close"),

    open(){
        Modal.wrapper.classList.add('open');
    },
    close(){
        Modal.wrapper.classList.remove("open");
    }
}

form.onsubmit = event => {
    event.preventDefault();

    const weight = inputWeight.value;
    const height = inputHeight.value;

    const bmiValue = BMI(weight, height);
    const message = `Your BMI is ${bmiValue}</br>(Normal)`;
   
    Modal.messege.innerHTML = message;
    Modal.open();

    resetInputs();
}

Modal.buttonClose.onclick = () => Modal.close();

function BMI(weight, height)
{
    return (weight/ ((height / 100) ** 2)).toFixed(2);
}

function resetInputs()
{
    inputHeight.value = "";
    inputWeight.value = "";
}