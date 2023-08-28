import { initialCards } from "./cards.js";
import { Card } from "./card.js";
import { FormValidator } from "./FormValidator.js"

const popupEditProfile = document.querySelector('.popup_edit');

const editBtnProfile = document.querySelector('.profile__edit-button');

const addFormCloseButton = document.querySelector('.close-add-form');
const editFormCloseButton = document.querySelector('.close-edit-form');

const popupEditForm = document.querySelector('.popup__edit-form');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__job');
const nameInput = document.querySelector('.popup__input_name');
const jobInput = document.querySelector('.popup__input_job');

const profileAddButton = document.querySelector('.profile__add-button');
const addCard = document.querySelector('.popup_add_card');
const popupAddForm = document.querySelector('.popup__add-form');
const placeInput = document.querySelector('.popup__input_place');
const linkInput = document.querySelector('.popup__input_link');

const cards = document.querySelector('.cards');
const viewCard = document.querySelector("#view-card");
const viewCardCloseBtn = document.querySelector("#close-card");

const popupAddSubmitBtn = document.querySelector(".popup__add-btn");

const inputEvent = new Event("input");

let inputElement = placeInput;

let profileConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_inactive",
  inputErrorClass: "popup__input_type_error",
  spanErrorClass: "popup__input-error_active",
};
const profileForm = new FormValidator(profileConfig, '.popup__edit-form');
profileForm.enableValidation();
const addForm = new FormValidator(profileConfig, '.popup__add-form');
addForm.enableValidation();


/* Close functions */

function clickOnEsc(evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

function clickOnOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup();
  }
};

function openPopup(popup) {
  popup.classList.add('popup_opened');
  document.addEventListener('click', clickOnOverlay);
  document.addEventListener('keydown', clickOnEsc);
}

function closePopup() {
  const openedPopup = document.querySelector('.popup_opened');
  if (openedPopup) {
    openedPopup.classList.remove('popup_opened');
    document.removeEventListener('click', clickOnOverlay);
    document.removeEventListener('keydown', clickOnEsc);
  }
}

/* Edit Btn */

function popupOpenEditBtn() {
  nameInput.value = nameValue.textContent;
  jobInput.value = jobValue.textContent;
  nameInput.dispatchEvent(inputEvent);
  jobInput.dispatchEvent(inputEvent);
  openPopup(popupEditProfile);
}

function profilePopupFormSubmit(evt) {
  evt.preventDefault();
  nameValue.textContent = nameInput.value;
  jobValue.textContent = jobInput.value;
  closePopup();
}

/* Add Btn */
function popupOpenAddBtn(e) {
  openPopup(addCard);
}

/*Profile add image*/
profileAddButton.addEventListener('click', popupOpenAddBtn);

popupEditForm.addEventListener('submit', profilePopupFormSubmit);



function createCardElement(card) {
  return new Card('.template', card, '.popup_view').generateCard();
}
function renderCard(card) {
  const element = createCardElement(card);
  cards.prepend(element);
}

function render() {
  initialCards.forEach((card) => {
    renderCard(card)
  })
}
render();

popupAddForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const formData = { name: placeInput.value, link: linkInput.value };
  renderCard(formData);
  closePopup()
  placeInput.value = '';
  linkInput.value = '';
})

editBtnProfile.addEventListener('click', popupOpenEditBtn);
addFormCloseButton.addEventListener('click', () => {
  closePopup()
});
editFormCloseButton.addEventListener('click', () => {
  closePopup()
});
viewCardCloseBtn.addEventListener('click', () => {
  closePopup()
});
