import http from "./http-common"

class PostulantApprovedApiService{
    getAll(){
        return http.get("/postulant-approved");
    }
    getById(id) {
        return http.get(`/postulant-approved/${id}`);
    }

    create(data) {
        return http.post("/postulant-approved", data);
    }

    update(id, data) {
        return http.put(`/postulant-approved/${id}`, data);
    }

    delete(id) {
        return http.delete(`/postulant-approved/${id}`);
    }
}

export default new PostulantApprovedApiService();