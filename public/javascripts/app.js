// show Menu Categories
function cate() {
  BaseAPI.call(this);
  this.getAll = function () {
    return this.get(`categories`).then((data) => data.json());
  };

  this.getById = function (id) {
    return this.get(`categories/${id}`).then((data) => data.json());
  };
}

function product() {
  BaseAPI.call(this);
  this.getAll = function () {
    return this.get(`products`).then((data) => data.json());
  };

  this.getProductByCateId = function (id) {
    return this.get(`products?cate_id=${id}`).then((data) => data.json());
  };

  this.getProductById = function (id) {
    return this.get(`products/${id}`).then((data) => data.json());
  };

  this.getProductByView = function () {
    return this.get(`products?_sort=luotXem&_order=desc&_limit=8`).then(
      (data) => data.json()
    );
  };

  this.getProductByDate = function () {
    return this.get(`products?_sort=date&_order=desc&_limit=8`).then((data) =>
      data.json()
    );
  };

  this.getProductByKw = function (keyword) {
    return this.get(`products?name_like=${keyword}`).then((data) =>
      data.json()
    );
  };
}

function account() {
  BaseAPI.call(this);
  this.getAll = function () {
    return this.get(`accounts`).then((data) => data.json());
  };

  this.editAccount = function (id, AccountData) {
    return this.put(`accounts/${id}`, AccountData);
  };

  this.getAccountById = function (id) {
    return this.get(`accounts/${id}`).then((data) => data.json());
  };
}

function showCategories() {
  cate.getAll().then((data) => {
    //     hiện ra UI
    let body = `
    <li class="menu-item">
    <a href="home.html?page=home" class="menu-link">Trang chủ</a>
    </li>`;
    data.forEach((cate) => {
      let htmls = `
        <li class="menu-item">
        <a href="categories.html?id=${cate.id}" class="menu-link">
          ${cate.name}
        </a>
        </li>
              `;
      body += htmls;
    });
    body += ` <li class="menu-item">
    <a href="allProduct.html?page=allproduct" class="menu-link">Xem tất cả</a>
    </li>`;
    document.querySelector("ul").innerHTML = body;
  });
}

function showProductsNoiBat() {
  product.getAll().then((data) => {
    let listProductNoiBat = [];
    data.forEach((e) => {
      if (e.noiBat == 1) {
        listProductNoiBat.push(e);
      }
    });
    const productListDiv = document.querySelector("#product_list--noibat");
    let body = "";
    let listProductNoiBatLimit8 = listProductNoiBat.splice(0, 8);

    listProductNoiBatLimit8.forEach((data) => {
      let str = `
      <div class="product_item">
                 <span class="product_price--discount">
                 ${data.giamgia == 0 ? "" : -data.giamgia + "%"}
                 </span>
                 <div class="product_img">
                   <a href="product.html?page=product&id=${data.id}"
                   ><img src="../../public/${data.image}" alt="${data.name}" />
                   </a>
                 </div><div class="product_name">
                     <a href="#">
                       <p>${data.name}</p>
                     </a>
                   </div><div class="product_price">
                     <span class="text-red">
                       ${(
                         data.price -
                         parseFloat(
                           (Number(data.price) * Number(data.giamgia)) / 100
                         )
                       ).toLocaleString("vi-VN")}đ</span>
                       <span class="text-gray">
                       ${
                         data.giamgia == 0
                           ? ""
                           : data.price.toLocaleString("vi-VN")
                       }
                     </span>
                   </div></>
        </div>
      `;
      body += str;
    });
    if (productListDiv) productListDiv.innerHTML = body;
  });
}

function showProduct(id, range = 1000) {
  product.getAll().then((data) => {
    let body = "";
    let listProductByCategory = [];
    data.forEach((obj) => {
      if (obj.cate_id == id) {
        listProductByCategory.push(obj);
      }
    });
    listProductByCategory = listProductByCategory.splice(0, range);
    listProductByCategory.forEach((sp) => {
      let str = `
  <div class="product_item">
    <span class="product_price--discount"
      > ${sp.giamgia == 0 ? "" : -sp.giamgia + "%"}</span
    >
    <div class="product_img">
      <a href="product.html?page=product&id=${sp.id}"
        ><img src="../../public/${sp.image}" alt="${sp.name}"
      /></a>
    </div>
    <div class="product_name">
      <a href="#"><p>${sp.name}</p></a>
    </div>
    <div class="product_price">
      <span class="text-red">
      ${
        sp.giamgia !== 0
          ? (
              sp.price -
              parseFloat((Number(sp.price) * Number(sp.giamgia)) / 100)
            ).toLocaleString("vi-VN") + "đ"
          : sp.price.toLocaleString("vi-VN") + "đ"
      }
            </span
      ><span class="text-gray"
        >${
          Number(sp.giamgia) === 0
            ? ""
            : Number(sp.price).toLocaleString("vi-VN") + "đ"
        } 
        </span
      >
    </div>
  </div>
          `;
      body += str;
    });
    document.querySelector(".product_list").innerHTML = body;
  });
}

function showAllProduct() {
  product.getAll().then((data) => {
    let body = "";
    data.forEach((sp) => {
      let str = `
  <div class="product_item">
    <span class="product_price--discount"
      > ${sp.giamgia == 0 ? "" : -sp.giamgia + "%"}</span
    >
    <div class="product_img">
      <a href="product.html?page=product&id=${sp.id}"
        ><img src="../../public/${sp.image}" alt="${sp.name}"
      /></a>
    </div>
    <div class="product_name">
      <a href="#"><p>${sp.name}</p></a>
    </div>
    <div class="product_price">
      <span class="text-red">
      ${
        sp.giamgia !== 0
          ? (
              sp.price -
              parseFloat((Number(sp.price) * Number(sp.giamgia)) / 100)
            ).toLocaleString("vi-VN") + "đ"
          : sp.price.toLocaleString("vi-VN") + "đ"
      }
            </span
      ><span class="text-gray"
        >${
          Number(sp.giamgia) === 0
            ? ""
            : Number(sp.price).toLocaleString("vi-VN") + "đ"
        } 
        </span
      >
    </div>
  </div>
          `;
      body += str;
    });
    document.querySelector(".product_list").innerHTML = body;
  });
}

function showProductByCategories() {
  let url_string = window.location.href;
  var url = new URL(url_string);
  var id = url.searchParams.get("id");
  var page = url.searchParams.get("page");
  if (id) {
    switch (id) {
      case id: {
        showProduct(id);
        break;
      }
      default:
        showAllProduct();
        break;
    }
  }

  if (page == "allproduct") {
    showAllProduct();
  }
}

function renderHeader() {
  const headDiv = document.querySelector(".head");
  let str = `
  <div class="freeship_banner">
  <p>Miễn phí vận chuyển với tất cả đơn hàng</p>
</div>
<header class="header">
  <div class="container">
    <div class="header_logo">
      <a href="home.html?page=home" class="header_logo--link">
        <img src="../../public/images/logo_nike.png" alt="" />
      </a>
    </div>

    <nav class="header_bar">
      <ul class="menu"></ul>
    </nav>

    <div class="header_panel">
      <div class="panel_account panel">
        <a href="login.html"><i class="fas fa-user"></i></a>
      </div>
      <div class="panel_find panel">
        <a id="search_btn"><i class="fas fa-search"></i></a>
        <div id="search_box">
        <input type="text" id="search_keyword" placeholder="Nhập từ khóa">
        <input type="submit"  id="search_submit" value="Tìm" />
        </div>
      </div>
      <div class="panel_cart panel">
        <a href="#"><i class="fas fa-shopping-cart"></i></a>
      </div>
    </div>
  </div>
</header>
  `;
  headDiv.innerHTML = str;
}

function renderHead() {
  const head = document.querySelector("head");
  let str = `
  <meta charset="UTF-8" />
  <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Categories</title>
  <link rel="stylesheet" href="../../public/scss/style.css" />
  <link
    rel="stylesheet"
    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
    integrity="sha512-9usAa10IRO0HhonpyAIVpjrylPvoDwiPUiKdWk5t3PyolY1cOd4DSE0Ga+ri4AuTroPR5aQvXU9xC6qOPnzFeg=="
    crossorigin="anonymous"
    referrerpolicy="no-referrer"
  />
  `;
  head.innerHTML = str;
}

function renderBanner() {
  const bannerDiv = document.querySelector(".home_banner");
  let str = `
  <img src="../../public/images/banner4.jpg" alt="" />`;
  if (bannerDiv) bannerDiv.innerHTML = str;
}

function renderBreadCumb() {
  let url_string = window.location.href;
  const url = new URL(url_string);
  const id = url.searchParams.get("id");
  const page = url.searchParams.get("page");

  let breadCumbDiv = document.querySelector(".breadcumb");
  cate.getById(id).then((data) => {
    if (page != "search" || page != "product") {
      let str = `
  <a class="breadcumb_link" href="home.html?page=home"><span>Trang chủ</span></a>

          <span class="breadcumb_sup">/</span>
          <a class="breadcumb_link" href="categories.html?id=${id}"
            ><span>${data.name == undefined ? "" : data.name} </span>
          </a>
  `;
      if (breadCumbDiv) breadCumbDiv.innerHTML = str;
    }
  });
}

function renderFooter() {
  const footer = document.querySelector("footer");
  let str = `
  <div class="container">
  <div class="footer_content">
    <div class="footer">
      <div class="footer_introduction">
        <h4 class="footer_title">giới thiệu</h4>
        <p>
          Nike Chuyên cung cấp các loại sản phẩm Giày, Dép, Hàng chính
          hãng giá rẻ, Real 100%
          <br />
          382/7 Nguyễn Thị Minh Khai, Phường 5, Quận 3, Hồ Chí Minh.
          <br />
          Chuyên Order và Hàng có Sẵn.
          <br />
          0327443238. ♦️ 100% Chính Hãng.
          <br />
          THANK YOU FOR SHOPPING WITH US !!
        </p>
      </div>
      <div class="footer_question">
        <h4 class="footer_title">pháp lý & câu hỏi</h4>
        <ul>
          <li><a> - tìm kiếm </a></li>
          <li><a> - giới thiệu </a></li>
          <li><a> - chính sách mua hàng </a></li>
          <li><a> - Chính sách thanh toán </a></li>
          <li><a> - Chính sách giao hàng </a></li>
          <li><a> - Chính sách đổi trả </a></li>
          <li><a> - Chính sách bảo mật </a></li>
          <li><a> - Điều khoản dịch vụ </a></li>
        </ul>
      </div>
      <div class="footer_contact">
        <h4 class="footer_title">pháp lý & câu hỏi</h4>
        <ul>
          <li>
            - Địa chỉ: 382/7 Nguyễn Thị Minh Khai, Phường 5, Quận 3, Hồ
            Chí Minh.
          </li>
          <li>- Điện thoại: 0327443238</li>
          <li>- Mail: nike.shop@gmail.com</li>
        </ul>
      </div>
    </div>
  </div>
</div>
  `;
  footer.innerHTML = str;
}

function showProductById(id) {
  const productDiv = document.querySelector(".product");
  const productListDiv = document.querySelector(".product_list");
  product.getProductById(id).then((sp) => {
    let str = `
    <div class="product_img br24">
    <img src="../../public/${sp.image}" alt="${sp.name}" />
  </div>

  <div class="product_info">
    <div class="product_info--title">
      <h1>${sp.name}</h1>
      <div class="product_info--categories"></div>
    </div>

    <div class="product_info--price">
      <div class="discount_price">
        <span> ${sp.giamgia == 0 ? "" : -sp.giamgia + "%"} </span>
      </div>
      <div class="product_price main_price">
        <span class="">
        ${
          sp.giamgia !== 0
            ? (
                sp.price -
                parseFloat((Number(sp.price) * Number(sp.giamgia)) / 100)
              ).toLocaleString("vi-VN") + "đ"
            : sp.price.toLocaleString("vi-VN") + "đ"
        }</span>
        <span class="text-gray">
        ${
          Number(sp.giamgia) === 0
            ? ""
            : Number(sp.price).toLocaleString("vi-VN") + "đ"
        } 
          </span
        >

      </div>
    </div>

    <div class="product_info--detail">
      <p>${sp.detail}</p>
    </div>

    <div class="product_info--count">
      <span class="minus">-</span>
      <!-- <p class="count" data="1">1</p> -->
      <input type="number" value="1" class="count" />
      <span class="plus">+</span>
    </div>

    <div class="product_info--btn">
      <button>Thêm vào giỏ</button>
      <button>Mua ngay</button>
    </div>
  </div>`;

    let str2 = showProduct(sp.cate_id, 4);

    if (productDiv) productDiv.innerHTML = str;
    if (productListDiv) productListDiv.innerHTML = str2;
  });
}

function checkPage() {
  let url_string = window.location.href;
  const url = new URL(url_string);
  const page = url.searchParams.get("page");
  switch (page) {
    case "product":
      const id = url.searchParams.get("id");
      showProductById(id);
      break;
    case "search":
      showProductByKw();
      break;
    default:
      break;
  }
}

function checkLogin() {
  let emailInput = document.querySelector("input[name='email']");
  let pwInput = document.querySelector("input[name='password']");
  let eValue = emailInput.value;
  let pwValue = pwInput.value;

  let isLogin = false;

  account.getAll().then((data) => {
    data.forEach((e) => {
      if (e.email == eValue) {
        if (e.password == pwValue) {
          isLogin = true;
        } else {
          isLogin = false;
        }
      }
    });
    if (isLogin) {
      console.log("thành công");
    } else {
      console.log("thất bại");
    }
  });
}

function showProductByView() {
  product.getProductByView().then((data) => {
    const productListDiv = document.querySelector("#product_list--luotxem");
    let body = "";
    data.forEach((data) => {
      let str = `
      <div class="product_item">
                 <span class="product_price--discount">
                 ${data.giamgia == 0 ? "" : -data.giamgia + "%"}
                 </span>
                 <div class="product_img">
                   <a href="product.html?page=product&id=${data.id}"
                   ><img src="../../public/${data.image}" alt="${data.name}" />
                   </a>
                 </div><div class="product_name">
                     <a href="#">
                       <p>${data.name}</p>
                     </a>
                   </div><div class="product_price">
                     <span class="text-red">
                       ${(
                         data.price -
                         parseFloat(
                           (Number(data.price) * Number(data.giamgia)) / 100
                         )
                       ).toLocaleString("vi-VN")}đ</span>
                       <span class="text-gray">
                       ${
                         data.giamgia == 0
                           ? ""
                           : data.price.toLocaleString("vi-VN")
                       }
                     </span>
                   </div></>
        </div>
      `;
      body += str;
    });
    if (productListDiv) productListDiv.innerHTML = body;
  });
}

function showProductByDate() {
  product.getProductByDate().then((data) => {
    const productListDiv = document.querySelector("#product_list--moinhat");
    let body = "";
    data.forEach((data) => {
      let str = `
      <div class="product_item">
                 <span class="product_price--discount">
                 ${data.giamgia == 0 ? "" : -data.giamgia + "%"}
                 </span>
                 <div class="product_img">
                   <a href="product.html?page=product&id=${data.id}"
                   ><img src="../../public/${data.image}" alt="${data.name}" />
                   </a>
                 </div><div class="product_name">
                     <a href="#">
                       <p>${data.name}</p>
                     </a>
                   </div><div class="product_price">
                     <span class="text-red">
                       ${(
                         data.price -
                         parseFloat(
                           (Number(data.price) * Number(data.giamgia)) / 100
                         )
                       ).toLocaleString("vi-VN")}đ</span>
                       <span class="text-gray">
                       ${
                         data.giamgia == 0
                           ? ""
                           : data.price.toLocaleString("vi-VN")
                       }
                     </span>
                   </div></>
        </div>
      `;
      body += str;
    });
    if (productListDiv) productListDiv.innerHTML = body;
  });
}

function showProductByKw() {
  let url_string = window.location.href;
  const url = new URL(url_string);
  const kw = url.searchParams.get("kw");
  let productListDiv = document.querySelector(".product_list");
  let body = "";
  console.log(productListDiv);
  product
    .getProductByKw(kw)
    .then((data) => {
      data.forEach((sp) => {
        let str = `
      <div class="product_item">
    <span class="product_price--discount"
      > ${sp.giamgia == 0 ? "" : -sp.giamgia + "%"}</span
    >
    <div class="product_img">
      <a href="product.html?page=product&id=${sp.id}"
        ><img src="../../public/${sp.image}" alt="${sp.name}"
      /></a>
    </div>
    <div class="product_name">
      <a href="#"><p>${sp.name}</p></a>
    </div>
    <div class="product_price">
      <span class="text-red">
      ${
        sp.giamgia !== 0
          ? (
              sp.price -
              parseFloat((Number(sp.price) * Number(sp.giamgia)) / 100)
            ).toLocaleString("vi-VN") + "đ"
          : sp.price.toLocaleString("vi-VN") + "đ"
      }
            </span
      ><span class="text-gray"
        >${
          Number(sp.giamgia) === 0
            ? ""
            : Number(sp.price).toLocaleString("vi-VN") + "đ"
        } 
        </span
      >
    </div>
  </div>
      `;
        body += str;
      });
      if (productListDiv) productListDiv.innerHTML = body;
    })
    .catch((err) => {
      console.log(err);
    });
}

function searchKw() {
  let search_btn = $("#search_btn");
  let search_input = $("#search_keyword");
  let search_box = $("#search_box");
  search_btn.click(function () {
    search_box.toggle();
  });
  let search_submit = $("#search_submit");
  search_submit.click(function () {
    let kw = search_input.val();
    window.location.href = `http://127.0.0.1:5500/views/layout/allProduct.html?page=search&kw=${kw}`;
  });
}

var cate = new cate();
var product = new product();
var account = new account();
renderHead();
renderHeader();
showCategories();
renderBanner();
renderBreadCumb();
showProductsNoiBat();
showProductByCategories();
showProductByView();
showProductByDate();
checkPage();
renderFooter();
searchKw();
const btn_login = document.querySelector(".btn_login");
if (btn_login) {
  btn_login.addEventListener("click", (e) => {
    checkLogin();
  });
}
