$("document").ready(function () {
  $(".submit").on("click", function () {
    $(".order-form .required").each(function () {
      let target = $(this);
      let isValid = target.val() != "";
      // console.log("tag name", $(this).tagName());
      if (this.tagName === "DIV") {
        target = document
          .querySelector(".order-form div.required")
          .parentElement.querySelector("input");
        isValid = target.checked;
      }
      if (isValid) {
        $(this).removeClass("empty_field");
      } else {
        $(this).addClass("empty_field");
      }
    });
  });
});
