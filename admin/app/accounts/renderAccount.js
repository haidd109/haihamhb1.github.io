function showAccounts() {
  account
    .getAll()
    .then((res) => {
      //     hiện ra UI
      let body = "";
      res.forEach((account) => {
        let htmls = `
        <tr class=account_item-${account.id}">
        <td class="show_cate--id">${account.id}</td>
        <td class="show_cate--name ">${account.name}</td>
        <td class="show_account--address">${account.email}</td>
        <td class="show_cate--id">${account.status}</td>
        <td class="show_account--name_show">${account.name_show}</td>
        <td class="show_account--spam">${account.spam}</td>
        <td class="show_account--address">${account.address}</td>
        <td class="show_account--phone">${account.phone}</td>
        <td class="show_account--rank">${account.rank}</td>
        <td class="show_btn">
        <button class="btn_edit"><a href="./edit_acc.html?id=${account.id}">Sửa</a></button>
        <button class="btn_delete" onclick="handleDeleteAccount(${account.id})">Xóa</button></td>
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
showAccounts();
