$("document").ready(function () {
  $(".submit").on("click", function () {
    let showAlert = true;
    $(".order-form .required").each(function () {
      let target = $(this);
      let isValid = target.val() != "";

      if (this.tagName === "DIV") {
        target = document
          .querySelector(".order-form div.required")
          .parentElement.querySelector("input");
        isValid = target.checked;
      }
      if (isValid) {
        $(this).removeClass("empty_field");
        showAlert = showAlert && true;
      } else {
        $(this).addClass("empty_field");
        showAlert = showAlert && false;
      }
    });
    if (showAlert) {
      alert("Ваш заказ принят!");
    }
  });
});
