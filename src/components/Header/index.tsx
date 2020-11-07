import React, { useState } from 'react';
import { logout } from '../../services/auth';
import { useHistory, Redirect } from 'react-router-dom';
import { Wrapper, Title, Button, Icon, MobileDrawer, MobileWrapper } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { logoutAccount } from '../../store/auth/actions';
import { Dispatch } from 'redux';
import { persistor } from '../../store';

import Drawer from '../Drawer';
import { useDispatch } from 'react-redux';

function Header(){
    const history = useHistory();
    const dispatch = useDispatch<Dispatch<ITypeSelect>>();
    const [open,setOpen] = useState<boolean>(false);
    
    const exit = ()=>{
        // logout()
        localStorage.clear();
        // persistor.purge();
        // history.push('/login')
        return <Redirect to="/login" />
        // dispatch(logoutAccount())
    }

    const handlerOpen=():void=>{
        setOpen(true)
    }

    const handlerClose=():void=>{
        setOpen(false)
    }

    return(
        <Wrapper>
            <Icon onClick={handlerOpen}>
                <FontAwesomeIcon style={{color:'#fff',height:32,width:18}} icon={faBars}/>
            </Icon>
            <Title>Mony</Title>
            <Button onClick={exit}>Sair</Button>
            <MobileDrawer open={open}>
                <MobileWrapper>
                    <Title>Menu</Title>
                    <Icon onClick={handlerClose}>
                        <FontAwesomeIcon style={{color:'#fff',height:32,width:18}} icon={faTimes}/>
                    </Icon>
                </MobileWrapper>
                <Drawer/>
            </MobileDrawer>
        </Wrapper>
    )
}

export default Header;