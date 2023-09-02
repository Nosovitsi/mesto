import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super(popupElement);
    }

  getInputValues() {
    const formData = new FormData(this._form);
    return { name: formData.get('input-place'), link: formData.get('input-link') }
  }

    open(card) {
        super.open();
        const popupImage = this._popup.querySelector('.popup__view-image');
        popupImage.src = card.link;
        popupImage.alt = card.name;
        
    }
}