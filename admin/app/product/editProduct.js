// Sửa
const btn_edit = document.querySelector(".submit_edit");
let params = new URLSearchParams(location.search);
let id = params.get("id");

function getApiProductById(id) {
  product.getProductById(id).then((data) => {
    console.log(data);
    return data;
  });
}

function handleEditProduct(id) {
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

  cate.editProduct(id, formData).then((data) => {
    console.log("data:" + data);
  });
}

btn_edit.addEventListener("click", (e) => {
  handleEditProduct(id);
});

function ShowProductById(id) {
  const nameInput = document.querySelector("#name");
  const priceInput = document.querySelector("#price");
  const detailInput = document.querySelector("#detail");
  const cate_idInput = document.querySelector("#cate_id");

  product
    .getProductById(id)
    .then((data) => {
      nameInput.setAttribute("value", data.name);
      priceInput.setAttribute("value", data.price);
      detailInput.innerHTML = `${data.detail}`;

      console.log(data.cate_id);
    })
    .then((data) => {});
}

function showCategories() {
  cate
    .getAll()
    .then((res) => {
      //     hiện ra UI
      let body = "";
      res.forEach((cate) => {
        let htmls = `
                    <option value="${cate.id} "  class="option_item--${cate.id}">${cate.name}</option>
                        `;
        body += htmls;
      });
      document.querySelector("#cate_id").innerHTML = body;
    })
    .then(async (data) => {
      ShowProductById(id);
      const productItem = await getApiProductById(id);
      return productItem;
    })
    .then((data) => {
      console.log("productitem " + data);
    });
}
showCategories();
