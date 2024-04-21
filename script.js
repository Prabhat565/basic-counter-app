const countValue = document.querySelector(".counter");

let value = parseInt(countValue.textContent);
const decrement = () => {
  value--;
  countValue.textContent = value;
};

const increment = () => {
  value++;
  countValue.textContent = value;
};
