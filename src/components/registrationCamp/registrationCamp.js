window.addEventListener("load", function () {
  const select = document.getElementById("validationCustom");
  const buttons = document.querySelectorAll('button[type="submit"]');

  if (!select) {
    console.warn('Element s id "validationCustom" nebyl na stránce nalezen.');
    return;
  }

  const updateButtonsState = () => {
    const hasValue = !!select.value;
    buttons.forEach((button) => {
      button.toggleAttribute("disabled", !hasValue);
    });
  };

  select.addEventListener("change", updateButtonsState);
  updateButtonsState();
});
