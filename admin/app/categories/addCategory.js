const btn_add = document.querySelector(".submit_add");
function addCategory() {
  let cateInput = document.querySelector("#name");
  let cateValue = cateInput.value;

  const formData = {
    name: cateValue,
  };

  cate.addCategory(formData).then((data) => {
    return console.log(data);
  });
}

btn_add.addEventListener("click", () => {
  addCategory();
});
