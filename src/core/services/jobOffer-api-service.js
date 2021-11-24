import http from "./http-common"

class JobOfferApiService{
    getAll(){
        return http.get("/JobOffers");
    }
    getById(id) {
        return http.get(`/JobOffers/${id}`);
    }

    create(data) {
        return http.post("/JobOffers", data);
    }

    update(id, data) {
        return http.put(`/JobOffers/${id}`, data);
    }

    delete(id) {
        return http.delete(`/JobOffers/${id}`);
    }

    getByEmployerId(id){
        return http.get(`/JobOffers/?EmployerId=${id}`);
    }
}

export default new JobOfferApiService();
