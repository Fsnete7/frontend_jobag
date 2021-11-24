import http from "./http-common"

class ProfessionalProfileApiService{

    getById(id){
        return http.get(`/professionalprofile/${id}`)
    }
    update(id, data) {
        return http.put(`/professionalprofile/${id}`, data);
    }
}
export default new ProfessionalProfileApiService();
