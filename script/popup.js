const viewCardCloseBtn = document.querySelector("#close-card");
export function someTest(test){
  console.log("Testing");
}

export function openPopup(popupEditProfile) {
  popupEditProfile.classList.add('popup_opened');
  document.addEventListener('click', clickOnOverlay);
  document.addEventListener('keydown', clickOnEsc);
}

 function clickOnEsc(evt) {
  if (evt.keyCode === 27) {
    closePopup();
  }
};

 function clickOnOverlay(evt) {
  if (evt.target.classList.contains('popup')) {
    closePopup();
  }
};

export function closePopup() {
  const openedPopup = document.querySelector('.popup_opened');
  if (openedPopup) {
    openedPopup.classList.remove('popup_opened');
    document.removeEventListener('click', clickOnOverlay);
    document.removeEventListener('keydown', clickOnEsc);
  }

}