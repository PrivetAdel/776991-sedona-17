var popupReview = document.querySelector(".popup__review");
var popupError = document.querySelector(".popup__error");
var formButton = document.querySelector(".form__button");
var popupButtonError = document.querySelector(".popup__button--error");
var popupButtonReview = document.querySelector(".popup__button--review");
var inputName = document.querySelector(".first-name");
var inputFamily = document.querySelector(".family");
var inputPhone = document.querySelector(".tel");
var inputEmail = document.querySelector(".email");

popupReview.classList.remove("popup__review--opened");
popupError.classList.remove("popup__error--opened");

formButton.addEventListener("click", function() {
  if (inputName.value === "") {
    popupError.classList.add("popup__error--opened");
  } else if (inputFamily.value === "") {
    popupError.classList.add("popup__error--opened");
  } else if (inputPhone.value === "") {
    popupError.classList.add("popup__error--opened");
  } else if (inputEmail.value === "") {
    popupError.classList.add("popup__error--opened");
  } else {
    popupReview.classList.add("popup__review--opened");
  }
});

popupButtonError.addEventListener("click", function () {
  popupError.classList.remove("popup__error--opened");
  popupError.classList.add("popup__error--closed");
})

popupButtonReview.addEventListener("click", function () {
  popupReview.classList.remove("popup__review--opened");
  popupReview.classList.add("popup__review--closed");
})
