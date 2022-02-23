const btn_add = document.querySelector(".submit_add");

function addProduct() {
  let nameInput = document.querySelector("#name");
  let priceInput = document.querySelector("#price");
  let detailInput = document.querySelector("#detail");
  let imageInput = document.querySelector("#image");
  let cate_idInput = document.querySelector("#cate_id");

  let nameValue = nameInput.value;
  let priceValue = priceInput.value;
  let detailValue = detailInput.value;
  //   xóa phần fakepath
  let imageValue = imageInput.files[0].name;
  let cate_idValue = cate_idInput.value;

  const formData = {
    name: nameValue,
    price: priceValue,
    detail: detailValue,
    image: imageValue,
    review: "",
    cate_id: cate_idValue,
  };

  product.addProduct(formData).then((data) => {
    return console.log(data);
  });
}

btn_add.addEventListener("click", (e) => {
  addProduct();
});

function showCategories() {
  cate
    .getAll()
    .then((res) => {
      //     hiện ra UI
      let body = "";
      res.forEach((cate) => {
        let htmls = `
              <option value="${cate.id}">${cate.name}</option>
                  `;
        body += htmls;
      });
      document.querySelector("#cate_id").innerHTML = body;
    })
    .then((data) => {});
}

showCategories();
