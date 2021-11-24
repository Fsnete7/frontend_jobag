import http from "./http-common"

class PostulantApprovedApiService{
    getAll(){
        return http.get("/postulations");
    }

    getAllPostulationsByJobOfferId(id){
        return http.get(`/postulant/${id}/postulations`);
    }

    getAllPostulationsByPostulantId(id){
        return http.get(`/joboffer/${id}/postulations`);
    }
}
export default new PostulantApprovedApiService();