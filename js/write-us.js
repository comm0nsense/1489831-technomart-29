const writeUsLink = document.querySelector(".contacts-button");
const writeUsPopup = document.querySelector(".modal-write-us");
const writeUsClose = writeUsPopup.querySelector(".modal-close");

const writeUsForm = writeUsPopup.querySelector(".user-feedback-form");
const writeUsName = writeUsPopup.querySelector(".username");
const writeUsEmail = writeUsPopup.querySelector(".user-email");

let isStorageSupport = true;
let storage = "";

try {
  storage = localStorage.getItem("username");
} catch (err) {
  isStorageSupport = false;
}


writeUsLink.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.add("modal-show");

  if (storage) {
    writeUsName.value = storage;
    writeUsEmail.focus();
  } else {
    writeUsName.focus();
  }
});


writeUsClose.addEventListener("click", function (evt) {
  evt.preventDefault();
  writeUsPopup.classList.remove("modal-show");
  writeUsPopup.classList.remove("modal-error");
});


writeUsForm.addEventListener("submit", function (evt) {
  if (!writeUsName.value || !writeUsEmail.value) {
    evt.preventDefault();
    writeUsPopup.classList.add("modal-error");
    setTimeout(function (){
      writeUsPopup.classList.remove("modal-error");
    }, 2000);
  } else {
    if (isStorageSupport) {
      localStorage.setItem("username", writeUsName.value);
    }
  }
});


window.addEventListener("keydown", function (evt) {
  if (evt.keyCode === 27) {
    if (writeUsPopup.classList.contains("modal-show")) {
      evt.preventDefault();
      writeUsPopup.classList.remove("modal-show");
      writeUsPopup.classList.remove("modal-error");
    }
  }
});


