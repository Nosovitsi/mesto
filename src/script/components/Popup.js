export default class Popup {
    constructor(popupSelector) {
        this._popup = popupSelector;
        this._btnClose = document.querySelector(".popup__close-button");
        console.log(popupSelector);
    }

    open() {
        this._popup.classList.add("popup_opened");
        document.addEventListener('keydown', this._handleEscClose);
    }

    close() {
        this._popup.classList.remove("popup_opened");
        document.removeEventListener('keydown', this._handleEscClose);
    }

    _handleEscClose(evt) {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._btnClose.addEventListener('click', (evt) => this.close(evt));
        this._popup.addEventListener('click', (evt) => this._closeByClickOnOverlay(evt));
    }

    _closeByClickOnOverlay(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    }
}