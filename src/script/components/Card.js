export class Card {

  constructor(template, card, handleCardClick) {
    this._template = template;
    this._card = card;
    // this._popup = document.querySelector(popup);
    this._handleCardClick = handleCardClick.bind(this);
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

get _cardImage(){
  return this._element.querySelector('.card__image');
}

  generateCard() {
    this._element = this._getTemplate();
    this._cardImage.src = this._card.link;
    this._cardImage.alt = this._card.name;
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
  _image() {
    this._handleCardClick(this._card);
  }
  _setEventListeners() {
    this._element.querySelector('.card__like').addEventListener('click', this._like);
    this._element.querySelector('.card__delete').addEventListener('click', this._deleted.bind(this));
    this._element.querySelector('.card__image').addEventListener('click', this._image.bind(this));
  }
}
