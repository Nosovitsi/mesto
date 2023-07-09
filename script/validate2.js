
function checkInputValidity(inputElement) {
  const isInputValid = inputElement.validity.valid;
  if(!isInputValid) {
    inputElement.classList.add('popup__input_type_error');
  }
}

function setEventListener(formElement){
  const inputList = formElement.querySelectorAll(".popup__input");

  [...inputList].forEach(function(inputElement){
    inputElement.addEventListener('input', function (){
      console.log(inputElement.validity);
    })
  })
  formElement.addEventListener('submit', (evt) => {
    evt.preventDefault();
    console.log('test');
});
}



function enableValidation() {
  const formsList = document.querySelectorAll('.popup__form');
 
  [...formsList].forEach(function (formElement){
setEventListener(formElement);
  })
}

enableValidation();