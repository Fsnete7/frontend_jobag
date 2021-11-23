import http from "./http-common"

class ProfessionalProfileApiService{
    Home(){
        return http.get("/home-employer");
    }
}
export default new ProfessionalProfileApiService();