import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupElement, submitCallback) {
      super();
    this._popup = popupElement;
    this._form = popupElement.querySelector(".popup__form");
    this._submitBtn = this._popup.querySelector(".popup__submit");
    this._submitCallback = submitCallback;
    }

    _getInputValues() {
    const formData = new FormData(this._form);
      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      return object;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", this._sendForm);
    }

    _sendForm = (evt)  => {
      evt.preventDefault();
      const inputValues = this._getInputValues();
if (this._submitCallback){
  this._submitCallback(inputValues);
}    
    }

    close() {
        super.close();
        this._form.reset();
      
    }
}