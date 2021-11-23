import http from "./http-common"

class EmployersApiService{
    getAll(){
        return http.get("/employer");
    }
    getById(id) {
        return http.get(`/employer/${id}`);
    }

    create(data) {
        return http.post("/employer", data);
    }

    update(id, data) {
        return http.put(`/employer/${id}`, data);
    }

    delete(id) {
        return http.delete(`/employer/${id}`);
    }
}

export default new EmployersApiService();