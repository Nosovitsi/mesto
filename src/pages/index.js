import './index.css';
import { initialCards } from "../script/utils/cards";
import { Card } from "../script/components/Card";
import { FormValidator } from "../script/components/FormValidator";
import Section from "../script/components/Section";
import PopupWithImage from "../script/components/PopupWithImage";
import PopupWithForm from "../script/components/PopupWithForm";
import UserInfo from "../script/components/UserInfo";
import {
  addCard,
  addFormCloseButton,
  cards,
  editBtnProfile,
  editFormCloseButton,
  jobInput,
  jobValue,
  nameInput,
  nameValue,
  popupAddForm,
  popupEditForm,
  popupEdit,
  profileAddButton,
  viewCard,
  viewCardCloseBtn,
} from "../script/utils/variables";

/* Создание экземпляра класса Popup */
const popupEditProfile = new PopupWithForm(popupEdit, submitFormProfile);
const popupAddCard = new PopupWithForm(addCard);
const popupView = new PopupWithImage(viewCard);

popupEditProfile.setEventListeners();
popupAddCard.setEventListeners();
popupView.setEventListeners();
console.log(popupView);

function renderer(item) {
  const card = createCardElement(item);
  cardsSection.addItem(card);
}

/* Создание экземпляра класса Section */
const cardsSection = new Section(renderer, cards);
cardsSection.renderItems(initialCards);

/* Cоздание экземпляра класса UserInfo */

const profile = new UserInfo({
  profileName: nameValue,
  profileJob: jobValue,
});

const inputEvent = new Event("input");

const profileConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__submit",
  inactiveButtonClass: "popup__submit_inactive",
  inputErrorClass: "popup__input_type_error",
  spanErrorClass: "popup__input-error_active",
};

const validatorEditProfile = new FormValidator(profileConfig, '.popup__edit-form');
validatorEditProfile.enableValidation();

const validatorAddCard = new FormValidator(profileConfig, '.popup__add-form');
validatorAddCard.enableValidation();

/* Edit Btn */

function popupOpenEditBtn() {
  const { name, job } = profile.getUserInfo();
  nameInput.value = name;
  jobInput.value = job;
  nameInput.dispatchEvent(inputEvent);
  jobInput.dispatchEvent(inputEvent);
  popupEditProfile.open();
}

// function profilePopupFormSubmit(evt) {
//   evt.preventDefault();
//   nameValue.textContent = nameInput.value;
//   jobValue.textContent = jobInput.value;
//   popupEditProfile.close();
// }

/* Add Btn */
function popupOpenAddBtn() {
  popupAddCard.open();
}

/*Profile add image*/
profileAddButton.addEventListener('click', popupOpenAddBtn);
// popupEditForm.addEventListener('submit', popupOpenEditBtn);

function createCardElement(card) {
  return new Card('.template', card, '.popup_view', popupView.open  ).generateCard();
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

function submitAddCardForm(evt) {
  evt.preventDefault();
  const card =  createCardElement(popupAddCard.getInputValues());
  cardsSection.addItem(card);
  popupAddCard.close();
}

function submitFormProfile(evt) {
  debugger
  evt.preventDefault();
  evt.stopPropagation();
  // profile.setUserInfo({ name: nameInput.value, job: jobInput.value})
  profile.setUserInfo(popupEditProfile.getInputValues())
  popupEditProfile.close()
}

popupAddForm.addEventListener('submit', submitAddCardForm);

editBtnProfile.addEventListener('click', popupOpenEditBtn);

addFormCloseButton.addEventListener('click', () => {
  popupAddCard.close()
});

editFormCloseButton.addEventListener('click', () => {
  popupEditProfile.close()
});

viewCardCloseBtn.addEventListener('click', () => {
  popupView.close()
});
