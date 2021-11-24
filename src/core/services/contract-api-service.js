import http from "./http-common"

class ContractsApiService{

    create(data) {
        return http.post("/contracts", data);
    }

}

export default new ContractsApiService();