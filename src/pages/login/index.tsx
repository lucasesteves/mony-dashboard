import React, { useState } from 'react'
import { loginAuth } from '../../services/auth';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signin, select } from '../../store/actions/Profile';
import { Wrapper, Card, Title, Label } from './styles';
import Input from '../../components/input';
import Button from '../../components/button';

const Login:React.FC=()=>{
    const history = useHistory();
    const dispatch = useDispatch();
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ variant, setVariant ] = useState(true);

    const handleKeyDown = (event:any) => {
        event.key === 'Enter' && submit();
    };

    const submit=()=>{
        if(variant){
            const token = 'asd123'
            loginAuth(token);
            const user={userId:11,name:'neymar',email:'adultoney@mail.com'}
            dispatch(signin(user))
            // dispatch(select(''))
            history.push({ pathname: '/' });
        }else{
            //register
        }
    }

    const register=()=>{
        setVariant(!variant)
    }
    
    return(
        <Wrapper>
            <Card>
                <Title>Mony</Title>
                <Label>Nome:</Label>
                <Input type={'text'} height={24} placeholder={'Ex: Jose'} value={name} data={setName} enter={handleKeyDown}   />
                {!variant && <>
                    <Label>Email:</Label>
                    <Input type={'text'} height={24} placeholder={'Ex: email@mail.com'} value={name} data={setName} enter={handleKeyDown}   />
                </>}        
                <Label>Senha:</Label>
                <Input type={'password'} height={24} placeholder={'Senha'} value={password} data={setPassword} enter={handleKeyDown}   />
                
                {variant ? <div style={{marginTop:40}}/>: <div style={{marginTop:20}}/> }
                <Button color={'#5159AC'} height={42} block={true} onClick={submit}>{variant ? 'Entrar' : 'Cadastrar'}</Button>

                <div style={{marginTop:20}}/>
                <Button color={'#2CA0C1'} height={42} block={true} onClick={register}>{variant ? 'Cadastrar' : 'Voltar'}</Button>
            </Card>
        </Wrapper>
    )
}

export default Login;