import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { signIn } from '../../store/auth/actions';
import { Wrapper, Card, Title, Label, Load } from './styles';
import Input from '../../components/Input';
import Button from '../../components/Button';
import { toast } from 'react-toastify';
import { AuthenticationService } from '../../services/api/authentication';
import { ClipLoader } from "react-spinners";

function Login(){
    const history = useHistory();
    const dispatch = useDispatch();
    const [ name, setName ] = useState("");
    const [ email, setEmail ] = useState("");
    const [ password, setPassword ] = useState("");
    const [ variant, setVariant ] = useState(true);
    const [ loading, setLoading ] = useState(false); 

    const handleKeyDown = (event:any) => {
        event.key === 'Enter' && submit();
    };

    const submit= async ()=>{
        if(variant){
            setLoading(true)
            const authenticationService = new AuthenticationService();
            const user = { email, password }
            const response:any = await authenticationService.login(user)
            if(response.signed){
                dispatch(signIn(response.user.user))
                history.push({ pathname: '/' });
            }else{
                setLoading(false)
                toast.error(response.user.message)
            }
        }else{
            setLoading(true)
            const authenticationService = new AuthenticationService();
            const user = {name, email, password}
            const response:any = await authenticationService.register(user)
            if(response.signed){
                dispatch(signIn(response.user.user))
                history.push({ pathname: '/' });
            }else{
                setLoading(false)
                toast.error(response.user.message)
            }
        }
    }

    const register=()=>{
        setVariant(!variant)
    }
    
    return(
        <Wrapper>
            <Card>
                <Title bottom={variant}>Mony</Title>
                
                {!variant && <>
                    <Label>Nome:</Label>
                    <Input type={'text'} height={42} placeholder={'Ex: Jose'} value={name} data={setName} enter={handleKeyDown}   />
                </>}        
                
                <Label>Email:</Label>
                <Input type={'text'} height={42} placeholder={'Ex: email@mail.com'} value={email} data={setEmail} enter={handleKeyDown}   />
                
                <Label>Senha:</Label>
                <Input type={'password'} height={42} placeholder={'Senha'} value={password} data={setPassword} enter={handleKeyDown}   />
                
                {variant ? <div style={{marginTop:40}}/>: <div style={{marginTop:20}}/> }
                {!loading ?
                    <>
                        <Button color={'default'} height={42} block={true} onClick={submit}>{variant ? 'Entrar' : 'Cadastrar'}</Button> 

                        <div style={{marginTop:20}}/>
                        <Button color={'secondary'} height={42} block={true} onClick={register}>{variant ? 'Cadastrar' : 'Voltar'}</Button>
                    </>
                    :
                    <Load>
                        <ClipLoader
                            size={40}
                            color={"#5159AC"}
                            loading={loading}
                        />
                    </Load>    
                }
            </Card>
        </Wrapper>
    )
}

export default Login;