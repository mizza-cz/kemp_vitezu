jQuery(document).ready(function ($) {
  window.onload = function () {
    $(".bts-popup").delay(1000).addClass("is-visible");
  };

  $(".bts-popup-trigger").on("click", function (event) {
    event.preventDefault();
    $(".bts-popup").addClass("is-visible");
  });

  $(".bts-popup").on("click", function (event) {
    if ($(event.target).closest(".popup-content").length === 0) {
      $(this).removeClass("is-visible");
    }
  });

  $(".bts-popup-close").on("click", function (event) {
    event.preventDefault();
    $(".bts-popup").removeClass("is-visible");
  });

  $(document).on("keyup", function (event) {
    if (event.key === "Escape") {
      $(".bts-popup").removeClass("is-visible");
    }
  });
});
