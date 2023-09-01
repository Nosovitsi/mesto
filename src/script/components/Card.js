import { someTest, openPopup } from "../popup.js"

export class Card {

  constructor(template, card, popup) {
    this._template = template;
    this._card = card;
    this._popup = document.querySelector(popup);
  }

  _getTemplate() {
    // забираем разметку из HTML и клонируем элемент
    const cardElement = document
      .querySelector(this._template)
      .content
      .querySelector('.card')
      .cloneNode(true);

    // вернём DOM-элемент карточки
    return cardElement;
  }
  generateCard() {
    this._element = this._getTemplate();
    this._element.querySelector('.card__image').src = this._card.link;
    this._element.querySelector('.card__image').alt = this._card.name;
    // this._element.querySelector('.card__name').textContent = this._card.name;
    this._element.querySelector('.card__description').textContent = this._card.name;


    this._setEventListeners();
    return this._element;
  }

  // функция лайка //
  _like(evt) {
    evt.target.classList.toggle('card__like_active')
  }

  // функция удаления //
  _deleted(evt) {
    this._element.remove();
  }

  // функция окрытия изображения в большом окне //
  _image(evt) {
    // this._popup.classList.add('popup_opened');
    const image = this._popup.querySelector('.popup__view-image');
    image.src = this._card.link;
    image.alt = this._card.name;
    this._popup.querySelector('.popup__description').textContent = this._card.name;
    openPopup(this._popup);
  }
  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', this._like);
    this._element.querySelector('.card__delete').addEventListener('click', this._deleted.bind(this));
    this._element.querySelector('.card__image').addEventListener('click', this._image.bind(this));
  }

// openPopup(popupEditProfile) {
//   popupEditProfile.classList.add('popup_opened');
//   document.addEventListener('click', this.clickOnOverlay.bind(this));
//   document.addEventListener('keydown', this.clickOnEsc.bind(this));
// }

// clickOnEsc(evt) {
//   if (evt.keyCode === 27) {
//     this.closePopup();
//   }
// };

// clickOnOverlay(evt) {
//   if (evt.target.classList.contains('popup')) {
//     this.closePopup();
//   }
// };

// closePopup() {
//   const openedPopup = document.querySelector('.popup_opened');
//   if (openedPopup) {
//     openedPopup.classList.remove('popup_opened');
//     document.removeEventListener('click', this.clickOnOverlay.bind(this));
//     document.removeEventListener('keydown', this.clickOnEsc.bind(this));
//   }
// }
}
