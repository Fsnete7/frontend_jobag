import http from "./http-common"

class ProfessionalProfileApiService{
    Home(){
        return http.get("/home-employer");
    }

    getById(id){
        return http.get(`/professionalprofile/${id}`)
    }
    update(id, data) {
        return http.put(`/professionalprofile/${id}`, data);
    }
}
export default new ProfessionalProfileApiService();
