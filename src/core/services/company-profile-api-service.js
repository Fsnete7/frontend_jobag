import http from "./http-common"

class CompanyProfilesApiService{
    getAll(){
        return http.get("/companyprofile");
    }

    getById(id){
        return http.get(`/companyprofile/${id}`);
    }
    getByEmployerId(id) {
        return http.get(`/companyprofile/?employerId=${id}`);
    }
    update(id, data) {
        return http.put(`/companyprofile/${id}`, data);
    }
    create(data) {
        return http.post("/companyprofile", data);
    }
    delete(id) {
        return http.delete(`/companyprofile/${id}`);
    }
}


export default new CompanyProfilesApiService();
