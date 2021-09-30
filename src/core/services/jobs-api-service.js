import http from "./http-common"

class JobApiService{
    getAll(){
        return http.get("/jobs");
    }
    getById(id) {
        return http.get(`/jobs/${id}`);
    }

    create(data) {
        return http.post("/patients", data);
    }

    update(id, data) {
        return http.put(`/patients/${id}`, data);
    }

    delete(id) {
        return http.delete(`/patients/${id}`);
    }
}

export default new JobApiService();