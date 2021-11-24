import http from "./http-common"

class UsersApiService{
   currentSession= 1;
    getById(id) {
        return http.get(`/users/${id}`);
    }
    getCurrentUser(){
        return http.get(`/users/${this.currentSession}`);
    }
    update(id, data) {
        return http.put(`/users/${id}`, data);
    }
}


export default new UsersApiService();
