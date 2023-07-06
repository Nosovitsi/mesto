import {initialCards} from "./cards.js"; 

const popup = document.querySelector('.popup');
const editBtnProfile = document.querySelector('.profile__edit-button');

const addFormCloseButton = document.querySelector('#close-add-form');
const editFormCloseButton = document.querySelector('#close-edit-form');

const popupForm = document.querySelector('.popup__form');
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__job');

const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');

const placeInput = document.querySelector('#place-input');
const linkInput = document.querySelector('#link-input');

const profileAddButton = document.querySelector('.profile__add-button');
const addCard = document.querySelector('#add-card');
const editCard = document.querySelector('#edit-card');

const cards = document.querySelector('.cards')
const template = document.querySelector('.template')
const viewCard = document.querySelector("#view-card");
const viewCardCloseBtn = document.querySelector("#close-card");

/* Edit Btn */
function popupOpenEditBtn() {
    nameInput.value = nameValue.textContent;
    jobInput.value = jobValue.textContent;
    popup.classList.add('popup_opened');
}

function closePopup() {
    const openedPopup = document.querySelector('.popup_opened');
    openedPopup.classList.remove('popup_opened');
}

function handleFormSubmit(evt) {
    evt.preventDefault();
    nameValue.textContent = nameInput.value;
    jobValue.textContent = jobInput.value;

    closePopup();
}

/* Add Btn */
function popupOpenAddBtn(e) {
    console.log(e)
    addCard.classList.add('popup_opened');
}

function popupCloseAddBtn() {
    addCard.classList.remove('popup_opened');
}

/*Profile add image*/
profileAddButton.addEventListener('click', popupOpenAddBtn);

popupForm.addEventListener('submit', handleFormSubmit);


function renderCard(card) {
    let temp = document.getElementsByTagName("template")[0];
    const clone = temp.content.cloneNode(true);
    const img = clone.querySelector('.card__image');
    img.src = card.link;
    img.addEventListener( 'click', function(evt){
      viewCard.querySelector('.popup__view-image').src = card.link;
      viewCard.querySelector('.popup__description').textContent = card.name;
      viewCard.classList.add('popup_opened');
    } )
    clone.querySelector('.card__description').textContent = card.name;
    clone.querySelector('.card__like').addEventListener('click', function (evt) {
        evt.target.classList.toggle('card__like_active')
    });
    clone.querySelector('.card__delete').addEventListener('click', function (evt) {
        const card = evt.target.closest('.card');
        cards.removeChild(card)
    });
    cards.prepend(clone);
}

function render() {
    initialCards.forEach((card) => {
        renderCard(card)
    })
}
render();

addCard.addEventListener('submit', function (evt) {
    evt.preventDefault();
    const formData =  {name: placeInput.value, link: linkInput.value};
    renderCard(formData);
    popupCloseAddBtn();
})

document.body.addEventListener('keydown', function (evt) {
  if (evt.keyCode === 27) {
    closePopup()
  }
})

editBtnProfile.addEventListener('click', popupOpenEditBtn);
addFormCloseButton.addEventListener('click', () => {
  addCard.classList.remove('popup_opened');
});
editFormCloseButton.addEventListener('click', () => {
  editCard.classList.remove('popup_opened');
});
viewCardCloseBtn.addEventListener('click', () => {
  viewCard.classList.remove('popup_opened');
}
)