import http from "./http-common"

class CompanyProfilesApiService{


    getById(id){
        return http.get(`/companyprofile/${id}`);
    }
    getByEmployerId(id) {
        return http.get(`/companyprofile/?employerId=${id}`);
    }
    update(id, data) {
        return http.put(`/companyprofile/${id}`, data);
    }
}


export default new CompanyProfilesApiService();
