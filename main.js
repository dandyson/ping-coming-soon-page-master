// VARIABLES

const userInput = document.getElementById('userInput');
const submitButton = document.getElementById("submitButton");
const errorText = document.getElementById("errorText");

// FUNCTIONS

const validation = () => {
    if (userInput.value === "") {
        errorText.innerText = "Please provide a valid email address";
        userInput.style.border = "1px solid red";
    }
}

// EVENT HANDLER

submitButton.addEventListener("click", () => {
    return validation();
})
