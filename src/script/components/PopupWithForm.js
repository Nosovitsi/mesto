import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupElement, submitCallback) {
      super();
    this._popup = popupElement;
    this._form = popupElement;
    this._submitBtn = document.querySelector(".popup__submit");
    this._submitCallback = submitCallback;
    }

    _getInputValues() {

    }

    setEventListeners() {
        super.setEventListeners();
        this._submitBtn.addEventListener("click", this._submitCallback);
    }

    close() {
        super.close();
        // this._form.reset();
    }
}