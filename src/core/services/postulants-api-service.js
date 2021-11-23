import http from "./http-common"

class postulantApiService{
    getAll(){
        return http.get("/postulant");
    }
    getById(id) {
        return http.get(`/postulant/${id}`);
    }

    create(data) {
        return http.post("/postulant", data);
    }

    update(id, data) {
        return http.put(`/postulant/${id}`, data);
    }

    delete(id) {
        return http.delete(`/postulant/${id}`);
    }
}

export default new postulantApiService();