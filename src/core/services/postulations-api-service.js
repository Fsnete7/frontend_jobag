import http from "./http-common"

class PostulantApprovedApiService{
    getAll(){
        return http.get("/postulations");
    }
}

export default new PostulantApprovedApiService();