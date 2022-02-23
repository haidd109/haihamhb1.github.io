function showCategories() {
  cate.getAll().then((res) => {
    //     hiện ra UI
    let body = "";
    res.forEach((cate) => {
      let htmls = `
            <tr class=cate_item-${cate.id}">
            <td class="show_cate--id">${cate.id}</td>
            <td class="show_cate--name">${cate.name}</td>
            <td class="show_btn">
            <button class="btn_edit"><a href="./edit_cate.html?id=${cate.id}">Sửa</a></button>
            <button class="btn_delete" onclick="handleDeleteCate(${cate.id})">Xóa</button>
            </td>
            </tr>
            `;
      body += htmls;
    });
    document.querySelector(".show_cate").innerHTML = body;
  });
}

showCategories();
