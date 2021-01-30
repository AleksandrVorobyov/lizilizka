const formButton = document.querySelectorAll("[data-form]");
const formPosht = document.querySelector("#form");
const formExit = document.querySelectorAll("[data-exit]");
const formSubmit = document.querySelector("#form-submit");
const success = document.querySelector('.form-success');

function closeForm() {
    formPosht.style.display = "none";
    body.classList.remove('lock');
}

function unlockForm() {
    formPosht.style.display = "block";
    body.classList.add('lock');
}

function validateEmail(email) {
    var pattern = /^[\w-\.]+@[\w-]+\.[a-z]{2,4}$/i;
    return pattern.test(email);
}

formButton.forEach(function (item) {
    item.addEventListener("click", function () {

    unlockForm();
  });
});

formExit.forEach(function (item) {
    item.addEventListener("click", function () {

    closeForm();
  });
});

formSubmit.addEventListener("click", function (e) {
    const formName = document.getElementById('form-name');
    const formEmail = document.getElementById('form-email');
    const formTel = document.getElementById('form-tel');
    const formMessage = document.getElementById('form-message');
    
    if (formName.value.length > 0 && formTel.value.length > 0 && formMessage.value.length > 0 && validateEmail(formEmail.value)) {
        success.classList.add('form-success--active');
        setTimeout(() => success.classList.remove('form-success--active'), 5000);
        closeForm();
    } else {
        e.preventDefault();
    }
});
