import http from "./http-common"

class SectorsApiService{

    getById(id) {
        return http.get(`/sector/${id}`);
    }
    create(data) {
        return http.post("/sector", data);
    }
    getAll(){
        return http.get("/sector");
    }
}


export default new SectorsApiService();
