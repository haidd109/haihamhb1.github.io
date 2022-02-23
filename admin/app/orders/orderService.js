function order() {
  BaseAPI.call(this);
  this.getAll = function () {
    return this.get(`orders`).then((data) => data.json());
  };

  this.addOrder = function (OrderData) {
    return this.post(`orders`, OrderData);
  };

  this.deleteOrder = function (id) {
    return this.delete(`orders/${id}`);
  };

  this.editOrder = function (id, OrderData) {
    return this.put(`orders/${id}`, OrderData);
  };

  this.getOrderById = function (id) {
    return this.get(`orders/${id}`).then((data) => data.json());
  };
}

var order = new order();
