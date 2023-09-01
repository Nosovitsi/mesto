import './index.css';

import { initialCards } from "../script/utils/cards";
import { Card } from "../script/components/Card";
import { FormValidator } from "../script/components/FormValidator";
import { closePopup } from "../script/popup";
import { openPopup } from "../script/popup";
import Section from "../script/components/Section";
import PopupWithImage from "../script/components/PopupWithImage";
import PopupWithForm from "../script/components/PopupWithForm";
import {
  addCard, addFormCloseButton, cards, editBtnProfile, editFormCloseButton,
  jobInput,
  jobValue, linkInput,
  nameInput,
  nameValue, placeInput, popupAddForm, popupEditForm,
  popupEditProfile, profileAddButton,
  viewCard, viewCardCloseBtn
} from "../script/utils/variables";

function renderer(item) {
  const card = createCardElement(item);
  cardsSection.addItem(card);
}

/* Создание экземпляра класса Section */
const cardsSection = new Section(renderer, cards);
cardsSection.renderItems(initialCards);

/* Создание экземпляра класса Popup */
const popupEdit = new PopupWithForm(popupEditProfile, submitForm);
const popupAdd = new PopupWithForm(addCard);
const popupView = new PopupWithImage(viewCard);

popupEdit.setEventListeners();
popupAdd.setEventListeners();
popupView.setEventListeners();

const inputEvent = new Event("input");

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
function popupOpenAddBtn() {
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

function submitForm(evt) {
  evt.preventDefault();
  const formData = { name: placeInput.value, link: linkInput.value };
  renderCard(formData);
  closePopup()
  placeInput.value = '';
  linkInput.value = '';
}

popupAddForm.addEventListener('submit', submitForm);

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
