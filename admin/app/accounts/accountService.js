function account() {
  BaseAPI.call(this);
  this.getAll = function () {
    return this.get(`accounts`).then((data) => data.json());
  };

  this.addAccount = function (AccountData) {
    return this.post(`accounts`, AccountData);
  };

  this.deleteAccount = function (id) {
    return this.delete(`accounts/${id}`);
  };

  this.editAccount = function (id, AccountData) {
    return this.put(`accounts/${id}`, AccountData);
  };

  this.getAccountById = function (id) {
    return this.get(`accounts/${id}`).then((data) => data.json());
  };
}

var account = new account();
