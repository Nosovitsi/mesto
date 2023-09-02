import Popup from "./Popup";

export default class PopupWithForm extends Popup {
  constructor(popupElement, submitCallback) {
      super();
    this._popup = popupElement;
    this._form = popupElement.querySelector(".popup__form");
    this._submitBtn = this._popup.querySelector(".popup__submit");
    this._submitCallback = submitCallback;
    }

    getInputValues() {
     
    const formData = new FormData(this._form);
      // return { name: formData.get('input-place'), link: formData.get('input-link') }
      const object = {};
      formData.forEach(function (value, key) {
        object[key] = value;
      });
      return object;
    }

    setEventListeners() {
        super.setEventListeners();
        this._form.addEventListener("submit", this._submitCallback);
    }

    close() {
      debugger
        super.close();
        this._form.reset();
        this._submitBtn.setAttribute("disabled", true);
        this._submitBtn.classList.add('popup__submit_inactive');
    }
}