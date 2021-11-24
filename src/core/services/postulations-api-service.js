import http from "./http-common"

class PostulationsApiService{
    getAll(){
        return http.get("/postulations");
    }
}
export default new PostulationsApiService();