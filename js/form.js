// function validateForm() {
//   var inputs = document.forms["myForms"]["required"].value;
//   if (inputs == null || inputs == "") {
//     document.get;
//   }
// }

$("document").ready(function () {
  $(".submit").on("click", function () {
    $(".order-form .required").each(function () {
      let target = $(this);
      // console.log("tag name", $(this).tagName());
      if (this.tagName === "DIV") {
        target = $(
          document.querySelector(".order-form div.required").parentElement
            .firstChild
        );
        console.log(
          document.querySelector(".order-form div.required").parentElement
            .firstChild
        );
      }
      if (target.val() != "") {
        // Если поле не пустое удаляем класс-указание
        $(this).removeClass("empty_field");
      } else {
        // Если поле пустое добавляем класс-указание
        $(this).addClass("empty_field");
      }
    });
  });
});
