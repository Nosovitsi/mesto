export class FormValidator {

  constructor(config, formSelector) {
    this._config = config;
    this._inputElements = Array.from(document.querySelectorAll(config.inputSelector));
    this._submitButton = document.querySelector(config.submitButtonSelector);
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._spanErrorClass = config.spanErrorClass;
    this._errorSelector = config.errorSelector;


    this._formElement = document.querySelector(formSelector);

    this._setEventListener();
  }

  // Блокировка кнопки
  disabledButton() {
    this._submitButton.disabled = 'disabled';
    this._submitButton.classList.add(this._inactiveButtonClass);
  }

  // Разблокировка кнопки
  enabledButton() {
    this._submitButton.disabled = false;
    this._submitButton.classList.remove(this._inactiveButtonClass);
  }

  // Изменения состояния кнопки
  _toggleButtonState() {
    if (this._isActive()) {
      this.enabledButton();
    } else {
      this.disabledButton();
    }
  }

  _isActive() {
    return this._inputElements.every(input => input.validity.valid);
  }

  _isInputValid(input) {
    return input.validity.valid;
  }

  // Объявление ошибки
  _showError(inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    const errorElement = inputElement.closest(this.errorSelector);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._spanErrorClass);
  }

  // Сокрытие ошибки
  _hideError(inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    const errorElement = inputElement.closest(this.errorSelector);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._spanErrorClass);
  }

  // Проверка инпута на валидность
  _checkInputValidity(inputElement) {
    inputElement.setCustomValidity("");

    if (this._isInputValid(inputElement)) {
      this._hideError(inputElement);
    } else {
      this._showError(inputElement);
    }
  }

  _inputHandler(e) {
    this._toggleButtonState();
    this._checkInputValidity(e.target);
  };
  // Установка слушателя
  _setEventListener() {

    this._toggleButtonState();


    const self = this;
    this._inputElements.forEach(function (inputElement) {
      inputElement.addEventListener("input", function (e) {
        this._inputHandler(e).bind(self);
      }.bind(self));
    });

    this._formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (!this._formElement.checkValidity()) return;
      this.disabledButton();
    });
  }
}


