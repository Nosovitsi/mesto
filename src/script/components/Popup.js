export default class Popup {
  constructor(popupElement) {
    this._popup = popupElement;
    this._btnClose = document.querySelector(".popup__close-button");
    console.log(popupElement);
    }

    open() {
        this._popup.classList.add("popup_opened");
    }

    close() {
        this._popup.classList.remove("popup_opened");

    }

    _handleEscClose = (evt) => {
        if (evt.key === "Escape") {
            this.close();
        }
    }

    setEventListeners() {
        this._btnClose.addEventListener('click', (evt) => this.close(evt));
        this._popup.addEventListener('click', (evt) => this._closeByClickOnOverlay(evt));
        document.addEventListener('keydown', this._handleEscClose);
    }

    _closeByClickOnOverlay(evt) {
        if (evt.target.classList.contains('popup_opened')) {
            this.close();
        }
    } 
}