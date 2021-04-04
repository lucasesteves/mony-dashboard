import { instance } from './api'

class AuthenticationService {
    async login (data:LoginConfig) {
        try{
            const result = await instance.post<Promise<object>>('/login',data)
            return result
        }catch(error){
            return error.response
        }
    }

    async register (data:RegisterConfig) {
        try{
            const result = await instance.post<Promise<object>>('/register',data);
            return result
        }catch(error){
            return error.response
        }
    }
}

export default new AuthenticationService();