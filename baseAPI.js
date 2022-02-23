function BaseAPI() {
  this.URL = "http://localhost:3000/";

  this.get = function (endPoint) {
    return fetch(`${this.URL}${endPoint}`);
  };

  this.post = function (endPoint, dataPost) {
    return fetch(`${this.URL}${endPoint}`, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPost),
    }).then((res) => {
      res.json({
        message: "Thêm thành công",
      });
    });
  };

  this.delete = function (id) {
    return fetch(`${this.URL}${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
  };

  this.put = function (endPoint, dataPut) {
    return fetch(`${this.URL}${endPoint}`, {
      method: "put",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(dataPut),
    }).then((res) => {
      res.json({
        message: "Sửa thành công",
      });
    });
  };
}
