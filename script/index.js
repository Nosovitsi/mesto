const popup = document.querySelector('.popup');
const editBtnProfile = document.querySelector('.profile__edit-button');
const popupCloseBtn = document.querySelector('.popup__close-button');
const popupForm = document.querySelector('.popup__form');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__job');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

function popupOpen() {
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
  popup.classList.add('popup_opened');
}

function popupClose() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt){
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;

  popupClose();
}

editBtnProfile.addEventListener('click',popupOpen);
popupCloseBtn.addEventListener('click', popupClose);

popupForm.addEventListener('submit', handleFormSubmit);
