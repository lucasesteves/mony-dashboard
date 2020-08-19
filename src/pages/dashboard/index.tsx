import React from 'react'
import { logout } from '../../services/auth';
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

interface IUser{
    userId:number,
    name:string,
    email:string
}

const Dashboard:React.FC=()=>{
    const history=useHistory();
    const profile:any = useSelector<any>(state => state.profile.profile.user)
    const exit=()=>{
        logout()
        history.push('/login')
    }
    
    return(
        <>
            <h2>Dashboard</h2>
            <button onClick={exit}>sair</button>
            <p>{profile?.userId}</p>
            <p>{profile?.name}</p>
            <p>{profile?.email}</p>
        </>
    )
}

export default Dashboard;