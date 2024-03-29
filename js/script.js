const body = document.querySelector(".body")

const createPopupWindow = (backgroundColor, buttonColor, reference) => {
  const markup = 
  `<div class="popup-enviroment" id="popup">
    <div class="popup ${backgroundColor}">
      <div class="popup__heading">
          <h3 class="popup__heading__tittle"> Login here </h3>
          <svg class="popup__heading__svg" width="156px" height="156.333px" viewBox="-2.417 -2 156 156.333">
              <path class="fingerprint__path--animated" fill="none" stroke="#DDDDDD" stroke-width="3" stroke-linecap="round" stroke-miterlimit="3" d="M82.088,30.517
                  c-31.813-2.665-53.002,19.758-52.961,46.37c0.016,7.476,3.746,14.475-2.449,20.917 M98.688,28.99
                  c-24.584-10.706-48.119-5.734-65.879,16.09 M106.379,33.309c15.024,11.572,22.532,25.211,22.508,44.189 M28.434,52.564
                  c-5.997,11.818-7.246,22.962-4.271,36.927 M36.459,69.735c8.772-44.905,73.41-44.349,79.273,3.905 M61.576,46.631
                  c13.044-5.862,24.919-4.288,35.552,4.676 M89.572,32.25c27.226,8.971,37.311,32.927,33.048,69.171 M37.962,114.283
                  c4.199-3.579,8.16-8.216,10.157-13.919 M43.402,118.284c12.105-9.935,14.674-24.847,13.139-35.465
                  c-4.215-21.65,13.267-26.899,21.333-26.048 M30.104,103.697c10.674-10.204,5.671-19.151,5.75-25.778 M34.025,109.201
                  c22.461-22.184-5.345-33.318,20.664-58.196 M55.038,125.736c5.169-5.067,9.137-11.229,11.612-18.031 M49.105,122.253
                  C59.62,112.151,65.688,97.286,63.183,81.77 M77.683,129.784c6.267-9.607,10.34-20.512,12.185-32.768 M90.304,89.094
                  c2.205-34.128-25.768-29.292-27.511-14.801 M113.346,114.697c2.735-11.517,4.199-22.613,3.324-32.618 M94.79,126.381
                  c2.427-4.948,4.78-10.85,5.95-16.026 M103.865,121.879c8.956-21.054,7.811-54.147-1.152-64.876 M62.038,127.972
                  c12.009-13.354,17.346-31.368,13.839-51.213 M69.434,129.3c16.814-22.421,14.66-43.617,12.932-53.035
                  c-1.726-9.409-13.227-7.396-12.94,0.939c0.294,8.336,2.012,11.216-0.287,22.135 M85.922,128.79
                  c16.273-29.284,13.498-63.063-0.334-69.648 M102.211,103.283c12.2-66.586-48.055-63.532-52.875-30.278
                  c-1.065,10.164,1.766,11.581,0.604,20.448"/>
              <path class="fingerprint__border--animated" fill="none" stroke="#DDDDDD" stroke-width="4" stroke-linecap="round" stroke-miterlimit="3" d="M76.266,2.084h69.484
                  c2.209,0,4,1.831,4,4.089v70.245v70.576c0,2.259-1.791,4.09-4,4.09H76.141"/>
              <path class="fingerprint__border--animated" fill="none" stroke="#DDDDDD" stroke-width="4" stroke-linecap="round" stroke-miterlimit="3" d="M75.516,151.084H5.75
                  c-2.209,0-4-1.831-4-4.09V76.751V6.173c0-2.258,1.791-4.089,4-4.089h70"/>
          </svg>
          <a href="index.html" class="popup__heading__close-button">&times;</a>
      </div>
      <form class="popup__form"> 
        <div class="popup__form__container">
            <input type="email" id="email" class="popup__form__container__input" placeholder="Email address" onfocus="this.placeholder=''" onblur="this.placeholder='Email address'">
            <label for="email" class="popup__form__container__label">Email address</label>
        </div>
    
        <div class="popup__form__container">  
            <input type="password" id="password" class="popup__form__container__input"  placeholder="Password" onfocus="this.placeholder=''" onblur="this.placeholder='Password'">
            <label for="password" class="popup__form__container__label">Password</label>
        </div>
        
        <a class="btn-neon ${buttonColor}" ${reference}>
            <svg width="340px" height="74px" viewBox="0 0 350 76">
                <rect class="${buttonColor}__border" width="350" height="76"/>
                <rect class="${buttonColor}__bg" width="350" height="76"/>
                <text class="${buttonColor}__text" transform="matrix(1 0 0 1 125.4106 49.666)">LOGIN</text>
            </svg>
        </a>
        <a class="btn-neon ${buttonColor}" href="index.html">
            <svg width="340px" height="74px" viewBox="0 0 350 76">
                <rect class="${buttonColor}__border" width="350" height="76"/>
                <rect class="${buttonColor}__bg" width="350" height="76"/>
                <text class="${buttonColor}__text" transform="matrix(1 0 0 1 60.4106 49.666)">NEW ACCOUNT</text>
            </svg>
        </a>
        <div class="popup__form__container"> 
            <p>Forgotten Password: 
            <a href="index.html">Click here</a>
            </p>
        </div>
      </form> 
    </div>
  </div>`
  body.insertAdjacentHTML("beforeend", markup)

  //CLOSE THE POPUP WINDOW BY BLICKING ON THE BACKGROUND
  document.querySelector("#popup").addEventListener("click", () => {
    location.assign("index.html")
  })
  document.querySelector(".popup").addEventListener("click", (event) => {
    event.stopPropagation();
  })
  
  //GET AN ACCESS TO SECRET ACCOUNT
  const hackButton = document.querySelector("#hack-button")
  if (hackButton) {
    hackButton.addEventListener("click", () => {
      const popupPasswordInput = document.querySelector("#password")
      const popupEmailInput = document.querySelector("#email")
      if (popupPasswordInput.value === "697" && popupEmailInput.value === "" ) {
        location.assign("hack.html")
      } else {
        location.assign("index.html")
      }
    })
  }
}

const deleteMarkup = () => {
  if (document.querySelector("#popup")) {
    const markup = document.querySelector("#popup")
    markup.parentElement.removeChild(markup)
  }
}

//HANDLING EVENTS WHEN SELLER BUTTON IS CLICKED
sellerButton = document.querySelector("#seller-btn")
sellerButton.addEventListener("click", () => {
  deleteMarkup()
  createPopupWindow("popup__before-el---pink", "btn-neon--1", "href=/index.html")
})

//HANDLING EVENTS WHEN CUSTOMER BUTTON IS CLICKED
customerButton = document.querySelector("#customer-btn")
customerButton.addEventListener("click", () => {
  deleteMarkup()
  createPopupWindow("popup__before-el--blue", "btn-neon--2", "id='hack-button'")
})


