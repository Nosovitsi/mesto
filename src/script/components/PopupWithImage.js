import Popup from "./Popup";

export default class PopupWithImage extends Popup {
    constructor(popupSelector, popupImage) {

        super(popupSelector);
        this._popup = popupSelector;
        this._popupImage = popupImage;
    }

    open(element) {
        super.open();

        this._popupImage.src = element.link;
        this._popupImage.alt = element.alt;
    }
}