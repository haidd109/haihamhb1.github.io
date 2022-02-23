function showOrder() {
  order
    .getAll()
    .then((res) => {
      //     hiện ra UI
      let body = "";
      res.forEach((order) => {
        let htmls = `
              <tr class=order_item-${order.id}">
              <td class="show_cate--id">${order.id}</td>
              <td class="show_cate--name">${order.account_name}</td>
              <td class="show_account--address">${order.account_address}</td>
              <td class="show_account--status">${order.status}</td>
              <td class="show_account--email">${order.account_email}</td>
              <td class="show_account--name">${order.date}</td>
              <td class="show_account--address">${order.account_phone}</td>
              <td class="show_btn">
              <button class="btn_edit"><a href="./edit_order.html?id=${order.id}">Sửa</a></button>
              <button class="btn_delete" onclick="handleDeleteOrder(${order.id})">Xóa</button></td>
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
showOrder();
