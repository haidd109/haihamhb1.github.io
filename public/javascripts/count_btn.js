const minus = document.querySelector(".minus");
const plus = document.querySelector(".plus");
const count = document.querySelector(".count");

let countValue = Number(count.value);

minus.addEventListener("click", () => {
  if (countValue > 1) {
    countValue--;
    count.setAttribute("value", countValue);
  }
});

plus.addEventListener("click", () => {
  countValue++;
  count.setAttribute("value", countValue);
});
