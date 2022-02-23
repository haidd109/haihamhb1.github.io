function showProducts() {
  product
    .getAll()
    .then((res) => {
      //     hiện ra UI
      let body = "";
      res.forEach((product) => {
        let htmls = `
            <tr class=product_item-${product.id}">
            <td class="show_cate--id">${product.id}</td>
            <td class="show_cate--name">${product.name}</td>
            <td class="show_product--price">${product.price}</td>
            <td class="show_product--detail">${product.detail}</td>
            <td class="show_product--image"><img src="../public/images/${product.image}"></td>
            <td class="show_product--cate_id">${product.cate_id}</td>
            <td class="show_btn">
            <button class="btn_edit"><a href="./edit_product.html?id=${product.id}">Sửa</a></button>
            <button class="btn_delete" onclick="handleDeleteProduct(${product.id})">Xóa</button>
            </td>
            </tr>
            `;

        body += htmls;
      });
      document.querySelector(".show_cate").innerHTML = body;
    })
    .then((res, data) => {})
    .catch((err) => {
      console.log(err);
    });
}
// xuất sp done
showProducts();
