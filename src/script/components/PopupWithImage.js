import Popup from "./Popup";

export default class PopupWithImage extends Popup {
  constructor(popupElement, popupImage) {

    super(popupElement);
    this._popupImage = popupImage;
    }

    open(element) {
        super.open();

        this._popupImage.src = element.link;
        this._popupImage.alt = element.alt;
    }
}