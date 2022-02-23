// Sửa
const btn_edit = document.querySelector(".submit_edit");
console.log(btn_edit);
let params = new URLSearchParams(location.search);
let id = params.get("id");

function handleEditCate(id) {
  const nameInput = document.querySelector("#name");
  const nameValue = nameInput.value;

  const formData = {
    name: nameValue,
  };

  console.log(formData);

  cate.editCategory(id, formData).then((data) => {
    console.log("data:" + data);
  });
}

btn_edit.addEventListener("click", (e) => {
  handleEditCate(id);
});

function ShowCategoryById(id) {
  const nameInput = document.querySelector("#name");
  cate.getById(id).then((data) => {
    nameInput.setAttribute("value", data.name);
  });
}

ShowCategoryById(id);
