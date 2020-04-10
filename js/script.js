//POPUP DOM ELEMENTS
popupBackground = document.querySelector('.popup')
popupFormButtons = document.querySelectorAll('.popup__form__button')
popupButtonElements = document.querySelectorAll('.btn-el')
popupPasswordInput = document.querySelector('#password')


//HANDLING EVENTS WHEN SELLER BUTTON IS CLICKED
sellerButton = document.querySelector('#seller-btn')
sellerButton.addEventListener('click', () => {
  animateFingerprint()
  popupBackground.classList.add('popup-color-bg-pink')
  popupFormButtons.forEach((el) => {
    el.classList.add('btn-neon--1')
  })
})

//HANDLING EVENTS WHEN CUSTOMER BUTTON IS CLICKED
customerButton = document.querySelector('#customer-btn')
customerButton.addEventListener('click', () => {
  animateFingerprint()
  popupBackground.classList.add('popup-color-bg-blue')
  popupFormButtons.forEach((el) => {
    el.classList.add('btn-neon--2')
  })
  popupButtonElements[0].classList = "btn-neon--2__border"
  popupButtonElements[3].classList = "btn-neon--2__border"

  //HANDLE EVENT WHEN THE LOGIN BUTTON IS CLICKED TYPING CORRECT PASSWORD
  popupFormButtons[0].addEventListener('click', () =>{
    if (popupPasswordInput.value === "697") {
      location.assign("/hack.html")
    } else {
      location.assign("/index.html")
    }
  })
})

//CLOSE THE POPUP WINDOW BY BLICKING ON THE BACKGROUND
document.querySelector('#popup').addEventListener('click', () => {
  location.assign("/index.html")
})
document.querySelector('.popup').addEventListener('click', (event) => {
  event.stopPropagation();
})
//HANDLING FINGERPRINT ANIMATION
animateFingerprint = () => {
  fingerprint = document.querySelector('#fingerprint__path')
  fingerprint.classList.add('fingerprint__path--animated')
  border = document.querySelectorAll('.fingerprint__border')
  border.forEach((el) => {
    el.classList.add('fingerprint__border--animated')
  })
}
