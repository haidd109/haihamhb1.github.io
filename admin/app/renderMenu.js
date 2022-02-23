const menu = ["products", "categories", "accounts", "orders", "order_details"];

const menuDiv = document.querySelector(".nav-links");
let body = ` <li>
<a href="index.html" class="active">
  <i class="bx bx-grid-alt"></i>
  <span class="links_name">Trang chủ</span>
</a>
</li>`;
menu.forEach((menu) => {
  htmls = `
<li>
  <a href="/admin/${menu}.html">
    <i class="bx bx-box"></i>
    <span class="links_name">${menu}</span>
  </a>
</li>

<li class="log_out">
  <a href="#">
    <i class="bx bx-log-out"></i>
    <span class="links_name">Log out</span>
  </a>
</li>
        `;

  body += htmls;
});
menuDiv.innerHTML = body;
