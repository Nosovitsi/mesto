import Popup from "./Popup";

export default class PopupWithForm extends Popup {
    constructor(popupSelector, submitCallback) {
        super();
        this._popup = popupSelector;
        this._form = popupSelector;
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
        this._form.reset();
    }

    _editProfile(){

    }


}