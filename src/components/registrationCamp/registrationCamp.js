window.onload = function () {
  const select = document.getElementById('validationCustom');
  const buttons = document.querySelectorAll('button[type="submit"]');

  if (select) {
    const updateButtonsState = () => {
      if (select.value) {
        buttons.forEach((button) => button.removeAttribute('disabled'));
      } else {
        buttons.forEach((button) => button.setAttribute('disabled', 'disabled'));
      }
    };

    select.addEventListener('change', updateButtonsState);

    updateButtonsState();
  } else {
    console.warn('Элемент с id "validationCustom" не найден на странице.');
  }
};
