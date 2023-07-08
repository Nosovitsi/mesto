import {initialCards} from "./cards.js"; 

const popupEditProfile = document.querySelector('.popup_edit');

const editBtnProfile = document.querySelector('.profile__edit-button');

const addFormCloseButton = document.querySelector('.close-add-form');
const editFormCloseButton = document.querySelector('.close-edit-form');

const popupEditForm = document.querySelector('.popup__edit-form');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__job');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const profileAddButton = document.querySelector('.profile__add-button');
const addCard = document.querySelector('.popup_add_card');
const popupAddForm = document.querySelector('.popup__add-form');
const placeInput = document.querySelector('#input-place');
const linkInput = document.querySelector('#input-link');

const cards = document.querySelector('.cards');
const viewCard = document.querySelector("#view-card");
const viewCardCloseBtn = document.querySelector("#close-card");


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

function openPopup(popupEditProfile) {
  popupEditProfile.classList.add('popup_opened');
  document.addEventListener('click', clickOnOverlay);
  document.addEventListener('keydown', clickOnEsc);
}

// function closePopup() {
//   const openedPopup = document.querySelector('.popup_opened');
//   openedPopup.classList.remove('popup_opened');
// }

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
    console.log(e)
  openPopup(addCard);
}

/*Profile add image*/
profileAddButton.addEventListener('click', popupOpenAddBtn);

popupEditForm.addEventListener('submit', profilePopupFormSubmit);



function createCardElement(card) {
  const temp = document.getElementsByTagName("template")[0];
  const clone = temp.content.cloneNode(true);
  const img = clone.querySelector('.card__image');
  img.src = card.link;
  img.alt = card.name;
  img.addEventListener('click', function (evt) {
    viewCard.querySelector('.popup__view-image').src = card.link;
    viewCard.querySelector('.popup__view-image').alt = card.name;
    viewCard.querySelector('.popup__description').textContent = card.name;
    openPopup(viewCard);
  })
  clone.querySelector('.card__description').textContent = card.name;
  clone.querySelector('.card__like').addEventListener('click', function (evt) {
    evt.target.classList.toggle('card__like_active')
  });
  clone.querySelector('.card__delete').addEventListener('click', function (evt) {
    const card = evt.target.closest('.card');
    cards.removeChild(card)
  });

  return clone;
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
    const formData =  {name: placeInput.value, link: linkInput.value};
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

