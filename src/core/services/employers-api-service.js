import http from "./http-common"

class EmployersApiService{
    getAll(){
        return http.get("/employers");
    }
    getById(id) {
        return http.get(`/employers/${id}`);
    }

    create(data) {
        return http.post("/employers", data);
    }

    update(id, data) {
        return http.put(`/employers/${id}`, data);
    }

    delete(id) {
        return http.delete(`/employers/${id}`);
    }
}

export default new EmployersApiService();