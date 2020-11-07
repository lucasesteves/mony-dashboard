import {instance} from './api'

class AuthenticationService {
    async login (data:LoginConfig) {
        try{
            const result = await instance.post<Promise<object>>('/login',data)
            return result
        }catch(err){
            return err.response  
        }
    }

    async register (data:RegisterConfig) {
        try{
            const result = await instance.post<Promise<object>>('/register',data);
            return result
        }catch(err){
            return err.message
        }
    }
}

export default new AuthenticationService();