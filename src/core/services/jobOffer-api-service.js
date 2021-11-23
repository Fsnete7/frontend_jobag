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
        return http.put(`/joboffers/${id}`, data);
    }

    delete(id) {
        return http.delete(`/JobOffers/${id}`);
    }

    getByEmployerId(id){
        return http.get(`/joboffers/?jobOfferId=${id}`);
    }
}

export default new JobOfferApiService();
