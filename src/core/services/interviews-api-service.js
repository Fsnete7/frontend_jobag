import http from "./http-common"

class InterviewsApiService{
    getAll(){
        return http.get("/interviews");
    }
}

export default new InterviewsApiService();