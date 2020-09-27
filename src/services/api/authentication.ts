import instance from './api'
import { loginAuth } from '../../services/auth';

export class AuthenticationService {
    async login (data:object) {
        let response;
        await instance.post('/login',data).then((res) => {
            if(res.status===200){
                loginAuth(res.data.token)
                response = { user:res.data, signed:true }
            } 
        }).catch((error) => {
            if(error.response){
                if(error.response.status === 401){
                    response = { user:error.response.data, signed:false }
                }else{
                    response=error.response
                }
            }
        });

        return response;
    }

    async register (data:object) {
        let response;
        await instance.post('/register',data).then((res) => {
            if(res.status===200){
                loginAuth(res.data.token)
                response = { user:res.data, signed:true }
            } 
        }).catch((error) => {
            if(error.response){
                if(error.response.status === 401){
                    response = { user:error.response.data, signed:false }
                }else{
                    response=error.response
                }
            }
        });
        return response;
    }

    getUser (userId:string) {
        let response;
        instance.get(`/user/${userId}`).then((res) => {
            response = res;
        }).catch((err) => {
            response = err.response;
        });
        return response;
    }
}