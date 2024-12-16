let elForm = document.querySelector(".login-form");
let elBtn = document.querySelector(".login-btn");

elForm.addEventListener("submit", function (e) {
  e.preventDefault();
  const data = {
    username: e.target.username.value,
    password: e.target.password.value,
  };

  elBtn.innerHTML = `<img class="scale-[1.5] w-[20px] mx-auto" src="./images/loading.png" alt="Loading ..." width="38" height="37">`;

  if (data.username === "qwer" && data.password === "123") {
    setTimeout(() => {
      elBtn.innerHTML = "Войти";
      location.pathname = "./product.html";
    }, 1000);
  } else {
    setTimeout(() => {
        elBtn.innerHTML = "Ошибка пароля";
    }, 1000);
    setTimeout(() => {
        elBtn.innerHTML = "Войти";
      }, 1000);
  }
});
