headerNavOpenerClick();
function headerNavOpenerClick() {
  const bodyEl = document.querySelector("body");
  const headerNavOpener = document.querySelector(".js-header__opener");
  if (!bodyEl || !headerNavOpener) {
    return;
  }
  headerNavOpener.addEventListener("click", function () {
    if (!this.classList.contains("is-open")) {
      bodyEl.classList.add("is-nav-open");
      this.classList.add("is-open");
    } else {
      bodyEl.classList.remove("is-nav-open");
      this.classList.remove("is-open");
    }
  });
}

$(function () {
  $(document).on("click", function (event) {
    if (!$(event.target).closest(".nav-item").length) {
      $(".nav-item").removeClass("active");
    }
  });

  $(".nav-link").on("click", function (event) {
    const $currentMenuList = $(this).closest(".nav-item");

    $(".nav-item").not($currentMenuList).removeClass("active");

    $currentMenuList.toggleClass("active");

    event.stopPropagation();
  });
});
