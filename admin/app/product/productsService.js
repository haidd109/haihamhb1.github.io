function product() {
  BaseAPI.call(this);
  this.getAll = function () {
    return this.get(`products`).then((data) => data.json());
  };

  this.addProduct = function (productData) {
    return this.post(`products`, productData);
  };

  this.deleteProduct = function (id) {
    return this.delete(`products/${id}`);
  };

  this.editProduct = function (id, productData) {
    return this.put(`products/${id}`, productData);
  };

  this.getProductById = function (id) {
    return this.get(`products/${id}`).then((data) => data.json());
  };
}

var product = new product();

// Lấy id + name của cate truyền vào option
function cate() {
  BaseAPI.call(this);
  this.getAll = function () {
    return this.get(`categories`).then((data) => data.json());
  };
  this.getCateById = function (id) {
    return this.get(`categories/${id}`).then((data) => data.json());
  };
}

var cate = new cate();
