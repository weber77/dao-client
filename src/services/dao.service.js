import http from "../http-common";

class DaoDataService {
  getAll() {
    return http.get("dao/findAll");
  }

  get(id) {
    return http.get(`dao/findById?id=${id}`);
  }

  getSocial(id) {
    return http.get(`/findById?id=${id}`);
  }

  create(data) {
    return http.post("dao/create", data);
  }

  addSocialMedia(id, data) {
    return http.post(`dao/addSocialMedia?id=${id}`, data);
  }

  update(id, data) {
    return http.put(`dao/update?id=${id}`, data);
  }

  delete(id) {
    return http.delete(`/dao/delete?id=${id}`);
  }


}

export default new DaoDataService();