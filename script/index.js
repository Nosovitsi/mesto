// Находим форму в DOM

const popup = document.querySelector('.popup');
  // Находим поля формы в DOM
const nameValue = document.querySelector('.profile__name');
const jobValue = document.querySelector('.profile__job');
const popupEdit = document.querySelector('.popup_edit');
const closeEditButton = popupEdit.querySelector('.popup__close-button');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_job');


    // Обработчик «отправки» формы, хотя пока
    // она никуда отправляться не будет
      function popupOpen() {
        popup.classList.add('popup_opened');
      }

      function popupClose() {
        popup.classList.remove('popup_opened');
      }
      // Эта строчка отменяет стандартную отправку формы.
      // Так мы можем определить свою логику отправки.
      // О том, как это делать, расскажем позже.

      // Получите значение полей jobInput и nameInput из свойства value

      // Выберите элементы, куда должны быть вставлены значения полей

      // Вставьте новые значения с помощью textContent
        editButton.addEventListener('click', function () {
          nameInput.value = nameValue.textContent;
          jobInput.value = jobValue.textContent;
          openPopup(popupEdit);
        });


// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', handleFormSubmit);