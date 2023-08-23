export class Card {

  constructor(template, card) {
    this._template = template;
    this._card = card;
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
    
    this._element.querySelector('.card__like').addEventListener('click', this._like);
    this._element.querySelector('.card__delete').addEventListener('click', this._deleted.bind(this));
    return this._element;
  }

  // функция лайка //
  _like(evt) {
    evt.target.classList.toggle('card__like_active')
  }

  // функция удаления //
  _deleted(evt){
    this._element.remove();
  }
}