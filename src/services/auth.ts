import jwtDecode from 'jwt-decode'
import moment from 'moment'

interface IToken {
    name: string;
    exp: number;
}

const TOKEN_KEY = 'persist:/token';

export const loginAuth = (token:string) => {
    localStorage.setItem(TOKEN_KEY, token);
}

export const logout = () => {
    localStorage.clear();
}

export const checkToken=()=>{
    try{
        const token:string = <string> getToken()
        const decoded = jwtDecode<IToken>(token);
        
        const now=moment().format("DD/MM/YYYY HH:mm")
        const end=moment.unix(decoded.exp).format("DD/MM/YYYY HH:mm")
        if(now<end){
            return true
        }
        localStorage.clear();
        return false
        
    }catch{
        return false
    }  
} 

export const getToken = () =>{
    return localStorage.getItem(TOKEN_KEY)
}

export const isLogin = () => {
    if (getToken()) {
        return true;
    }
    // if (getToken() && checkToken()) {
    //     return true;
    // }
    return false;
}