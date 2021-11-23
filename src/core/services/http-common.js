import axios from "axios";

export default axios.create({
    baseURL: "https://jobagapi.mybluemix.net/api/v1/",
    headers: {"Content-type": "application/json"}
});
