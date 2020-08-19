import React from 'react'
import { loginAuth } from '../../services/auth';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin } from '../../store/actions/Profile';

const Login:React.FC=()=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const submit=()=>{
        const token = 'asd123'
        loginAuth(token);
        const user={userId:11,name:'neymar',email:'adultoney@mail.com'}
        dispatch(signin(user))
        history.push({ pathname: '/' });
    }
    
    return(
        <>
            <h2>Login</h2>
            <button onClick={submit}>Login</button>
        </>
    )
}

export default Login;