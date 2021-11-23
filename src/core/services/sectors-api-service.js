import http from "./http-common"

class SectorsApiService{

    getById(id) {
        return http.get(`/Sectors/${id}`);
    }
}


export default new SectorsApiService();
