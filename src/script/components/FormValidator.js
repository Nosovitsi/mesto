export class FormValidator {

  constructor(config, formSelector) {
    this._config = config;
    this._inactiveButtonClass = config.inactiveButtonClass;
    this._inputErrorClass = config.inputErrorClass;
    this._spanErrorClass = config.spanErrorClass;


    this._formElement = document.querySelector(formSelector);
    this._submitButton = this._formElement.querySelector(config.submitButtonSelector);
    this._inputElements = Array.from(this._formElement.querySelectorAll(config.inputSelector));

  }

  // Блокировка кнопки
  disabledButton() {
    this._submitButton.disabled = true;
    this._submitButton.classList.add(this._inactiveButtonClass);
  }

  // Разблокировка кнопки
  enabledButton() {
    this._submitButton.disabled = false;
    this._submitButton.classList.remove(this._inactiveButtonClass);
  }

  // Изменения состояния кнопки
  _toggleButtonState() {
    debugger
    if (this._isActive()) {
      this.enabledButton();
    } else {
      this.disabledButton();
    }
  }

  _isActive() {
    return this._inputElements.every(input => {
      return input.validity.valid
    });
  }

  _isInputValid(input) {
    return input.validity.valid;
  }

  // Объявление ошибки
  _showError(inputElement) {
    inputElement.classList.add(this._inputErrorClass);
    const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
    errorElement.textContent = inputElement.validationMessage;
    errorElement.classList.add(this._spanErrorClass);
  }

  // Сокрытие ошибки
  _hideError(inputElement) {
    inputElement.classList.remove(this._inputErrorClass);
    const errorElement = this._formElement.querySelector(`#${inputElement.name}-error`);
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
    this._checkInputValidity(e.target);
    this._toggleButtonState();
  };
  // Установка слушателя
  _setEventListener() {

    this._toggleButtonState();

    const self = this;
    this._inputElements.forEach(function (inputElement) {
      inputElement.addEventListener("input", self._inputHandler.bind(self))
    });
  }

  enableValidation() {
    this._setEventListener();
  }
}

