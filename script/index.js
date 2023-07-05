const popup = document.querySelector('.popup');
const popupCloseBtn = document.querySelector('.popup__close-button');
const popupForm = document.querySelector('.popup__form');



/* Edit Btn */
const editBtnProfile = document.querySelector('.profile__edit-button');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__job');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

function popupOpenEditBtn() {
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
  popup.classList.add('popup_opened');
}

function popupCloseEditBtn() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;

  popupCloseEditBtn();
}

/* Add Btn */
const addBtnProfile = document.querySelector('.profile__add-button');
const placeValue = document.querySelector('#place-input');
const linkValue = document.querySelector('#link-input');
const placeInput = document.querySelector('.popup__input_place');
const linkInput = document.querySelector('.popup__input_link');

function popupOpenAddBtn() {
  placeInput.value = placeValue.textContent;
  placeInput.value = placeValue.textContent;
  popup.classList.add('popup_opened');
}

function popupCloseAddBtn() {
  popup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
  evt.preventDefault();
  placeValue.textContent = placeInput.value;
  linkValue.textContent = linkInput.value;

  popupCloseEditBtn();
}


editBtnProfile.addEventListener('click',popupOpenEditBtn);
popupCloseBtn.addEventListener('click', popupCloseEditBtn);

addBtnProfile.addEventListener('click', popupOpenAddBtn);
popupCloseBtn.addEventListener('click', popupCloseAddBtn);

popupForm.addEventListener('submit', handleFormSubmit);

/* Template */
