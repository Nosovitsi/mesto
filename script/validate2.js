function showError(inputElement, errorElement) {
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = inputElement.validationMessage;
}

function hideError(inputElement, errorElement) {
  inputElement.classList.add("popup__input_type_error");
  errorElement.textContent = inputElement.validationMessage;
}


function checkInputValidity(inputElement) {
  const isInputValid = inputElement.validity.valid;
  const errorElement = formElement.querySelector(`.${inputElement.name}-error`);
  if(!isInputValid) {
    showError(inputElement, errorElement);
  }  else {
    hideError(inputElement, errorElement);
  }
}

function disabledButton(buttonElement) {
  buttonElement.disabled = "disabled";
  buttonElement.classList.add("popup__submit_inactive");
}

function enabledButton(buttonElement) {
  buttonElement.disabled = false;
  buttonElement.classlist.remove("popup__submit_inactive");
}

function toggleButtonState(buttonElement, isActive) {
  if (!isActive) {
    disabledButton(buttonElement);
  } else {
    enabledButton(buttonElement)
  }
}

function setEventListener(formElement){
  const inputList = formElement.querySelectorAll(".popup__input");
  const submitButtonElement = formElement.querySelector(".popup__submit");

toggleButtonState(submitButtonElement,formElement.checkInputValidity()); 
  // toggleButtonState(submitButtonElement, isActive); 
  [...inputList].forEach(function(inputElement){
    inputElement.addEventListener('input', function (){
      toggleButtonState(submitButtonElement, formElement.checkInputValidity());
      checkInputValidity(inputElement, formElement);
    })
  })

  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    if (!formElement.checkValidity()) return;

    console.log('Форма отправлена');
});
}



function enableValidation() {
  const formsList = document.querySelectorAll('.popup__form');
 
  [...formsList].forEach(function (formElement){
setEventListener(formElement);
  })
}

enableValidation();