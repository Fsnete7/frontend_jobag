import http from "./http-common"

class CompanyProfilesApiService{

    getByEmployerId(id) {
        return http.get(`/CompanyProfiles/?EmployerId=${id}`);
    }
}


export default new CompanyProfilesApiService();
