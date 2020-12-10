// Disable buttons

const myButtons = document.querySelectorAll(".no-link");
myButtons.forEach((button) => {
  button.addEventListener("click", (event) => event.preventDefault());
});

// Phone inputs for numbers only

document.querySelectorAll("#phone, #extra-phone").forEach(function (element) {
  element.onkeydown = function (e) {
    return !/^[А-Яа-яA-Za-z &^%$#@!~`()*+-\/?]$/.test(e.key);
  };
});
