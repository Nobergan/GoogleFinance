$(document).ready(function () {
  "use strict";
  $(".test-step .next-btn").on("click", function (e) {
    e.preventDefault();
    $("#video_player").remove();
    $(this).parents(".test-step").fadeOut(500);
    setTimeout(
      function () {
        $(this).parents(".test-step").next().addClass("active");
      }.bind(this),
      800
    );
  });
  $(".test-step label").on("click", function (e) {
    setTimeout(
      function () {
        // const input = document.querySelector(".form-group .form-control");
        // const popup = document.querySelector(".popup");
        // if (input.checked) {
        //   popup.classList.remove("is-hidden");
        // }
        
        $(this).parents(".test-step").fadeOut(500);
        setTimeout(
          function () {
            $(this).parents(".test-step").next().addClass("active");
            const backdrop = document.querySelector(".modal-backdrop");
            backdrop.classList.remove("modal-backdrop");
          }.bind(this),
          500
        );
      }.bind(this),
      5000
    );
  });
  $("#video_main").on("click", function (e) {
    $("#video_player").prop("muted", false);
  });

  $(".test-step .prev-btn").on("click", function (e) {
    e.preventDefault();
    $(this).parents(".test-step").prev().addClass("active");
    $(this).parents(".test-step").removeClass("active");
  });
});

const checkBoxes = [...document.querySelectorAll(".megaCheckBox")];

checkBoxes.forEach((checkBox) => checkBox.addEventListener("click", (e) => {
  const id = e.target.dataset.target;
  $(id).modal("show");
}));