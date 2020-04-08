//select buttons in popup form
popupFormButtons = document.querySelectorAll('.popup__form__button')
popupButtonElements = document.querySelectorAll('.btn-el')
popup = document.querySelector('.popup')

//start a fingerprint animation when seller or customer button are clicked
sellerButton = document.querySelector('#seller-btn')
sellerButton.addEventListener('click', () => {
  animateFingerprint()
  popup.classList.remove('popup-color-bg-blue')
  popup.classList.add('popup-color-bg-pink')
})

//fingerprint animation function by adding classes containing animation
animateFingerprint = () => {
  const fingerprint = document.querySelector('#fingerprint__path')
  fingerprint.classList.add('fingerprint__path--animated')
  const border = document.querySelectorAll('.fingerprint__border')
  border.forEach((el) => {
    el.classList.add('fingerprint__border--animated')
  })
}

//changing buttons' class names in customer form
customerButton = document.querySelector('#customer-btn')
customerButton.addEventListener('click', () => {
  animateFingerprint()
  popup.classList.remove('popup-color-bg-pink')
  popup.classList.add('popup-color-bg-blue')
  popupFormButtons.forEach((el) => {
    if(el.classList.contains('btn-neon--1')) {
      el.classList.remove('btn-neon--1')
      el.classList.add('btn-neon--2')
    }
  })

  popupButtonElements[0].classList = "btn-neon--2__border"
  popupButtonElements[1].classList = "btn-neon--2__bg"
  popupButtonElements[2].classList = "btn-neon--2__text"
  popupButtonElements[3].classList = "btn-neon--2__border"
  popupButtonElements[4].classList = "btn-neon--2__bg"
  popupButtonElements[5].classList = "btn-neon--2__text"
})
// console.log(window.getComputedStyle(document.querySelector('.popup'), ':before').setProperty('background-color', "yellow"))