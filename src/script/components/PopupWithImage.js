import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupElement) {
    super();
    this._popup = popupElement;
    this._popupImage = this._popup.querySelector(".popup__view-image");
    }

  _getInputValues() {
    const formData = new FormData(this._form);
    return { name: formData.get('input-place'), link: formData.get('input-link') }
  }

    open =  (card) =>{
      super.open();
        this._popupImage.src = card.link;
        this._popupImage.alt = card.name;
        
    }
}