function cate() {
  BaseAPI.call(this);
  this.getAll = function () {
    return this.get(`categories`).then((data) => data.json());
  };

  this.addCategory = function (categoryData) {
    return this.post(`categories`, categoryData);
  };

  this.deleteCategory = function (id) {
    return this.delete(`categories/${id}`);
  };

  this.editCategory = function (id, categoryData) {
    return this.put(`categories/${id}`, categoryData);
  };

  this.getById = function (id) {
    return this.get(`categories/${id}`).then((data) => data.json());
  };
}

var cate = new cate();
