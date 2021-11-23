import http from "./http-common"

class JobOfferApiService{
    getAll(){
        return http.get("/joboffers");
    }
    getById(id) {
        return http.get(`/joboffers/${id}`);
    }

    create(data) {
        return http.post("/joboffers", data);
    }

    update(id, data) {
        return http.put(`/joboffers/${id}`, data);
    }

    delete(id) {
        return http.delete(`/joboffers/${id}`);
    }

    getByEmployerId(id){
        return http.get(`/joboffers?employerId=${id}`);
    }

    getPostulants(id){
        return http.get(`/joboffer/${id}/postulations`);
    }
}

export default new JobOfferApiService();
