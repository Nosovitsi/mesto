export class FormValidator{

  constructor(config, formElement) {
  this._config = config;
  this._inputElement  = config.inputElement;
  this._inputError = config.inputError;
  this._errorElement = config.errorElement;
  this._formElement = formElement;
  this._inputList = formElement.querySelectorAll(config.inputSelector);
  this._buttonElement  = config.buttonElement;
  this._submitButtonElement = formElement.querySelector(config.submitButtonSelector);
}

  // Блокировка кнопки
  disabledButton() {
    this._buttonElement.disabled = 'disabled';
    this._buttonElement.classList.add(this._inActiveButtonClass);
  }

  // Разблокировка кнопки
  enabledButton() {
    this._buttonElement.disabled = false;
    this._buttonElement.classList.remove(this._inActiveButtonClass);
  }

  // Изменения состояния кнопки
  _toggleButtonState() {
    if (this._isActive()) {
      this._enabledButton(this._buttonElement);
    } else {
      this._disabledButton(this._buttonElement);
    }
  }

  _isActive() {
    return this._inputElement.validity.valid;
  }

  // Объявление ошибки
  _showError(inputElement, errorElement, config) {
    this._inputElement.classList.add(config.inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.add(config.spanErrorClass);
  }

  // Сокрытие ошибки
  _hideError(inputElement, errorElement, config) {
    this._inputElement.classList.remove(config.inputErrorClass);
    this._errorElement.textContent = inputElement.validationMessage;
    this._errorElement.classList.remove(config.spanErrorClass);
  }

  // Проверка инпута на валидность
    _chekInputValidity(inputElement) {
      inputElement.setCustomValidity("");

      const isInputValid = inputElement.validity.valid;
      const errorElement = formElement.querySelector(`#${inputElement.name}-error`);

      if (this._isInputValid) {
        this._hideError(inputElement, errorElement, config);
      } else {
        this._showError(inputElement, errorElement, config);
      }
    }

  // Установка слушателя
  _setEventListener(formElement, config) {
    
    this._toggleButtonState();

    this._inputList.forEach(function (inputElement) {
      inputElement.addEventListener("input", function () {
        this._toggleButtonState( submitButtonElement, formElement.checkValidity(), config);
        this._chekInputValidity(inputElement, formElement, config);
      });
    });

    formElement.addEventListener("submit", (evt) => {
      evt.preventDefault();
      if (!this._formElement.checkValidity()) return;
      this.disabledButton();
    });
  }
}


