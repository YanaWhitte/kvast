const myButtons = document.querySelectorAll(".no-link");
myButtons.forEach((button) => {
  button.addEventListener("click", (event) => event.preventDefault());
});
