import http from "./http-common"

class UsersApiService{
   currentSession= 1;
    getById(id) {
        return http.get(`/users/${id}`);
    }
    getCurrentUser(){
        return http.get(`/users/${this.currentSession}`);
    }
    create(data) {
        return http.post("/users", data);
    }
    getAll(){
        return http.get(`/users`);
    }
}


export default new UsersApiService();
