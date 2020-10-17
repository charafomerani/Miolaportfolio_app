import axios from 'axios';

class AdminService{
    verifyEmailAndPassword(log){
        return axios.post("http://localhost:8080/api/v1/admin",log);
    }
}
export default new AdminService()