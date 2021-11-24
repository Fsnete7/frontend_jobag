import http from "./http-common"

class PostulationsApiService{
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
export default new PostulationsApiService();