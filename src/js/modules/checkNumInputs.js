const checkNumInputs = (selector) => {
  const numInputs = document.querySelectorAll(selector);

  numInputs.forEach((item) => {
    item.addEventListener("input", () => {
      item.value = item.value.replace(/\D/, ""); // ищем не цифры и заменяем на пустую строку
    });
  });
};

export default checkNumInputs;
