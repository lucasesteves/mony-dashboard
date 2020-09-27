import React, { useState } from 'react';
import { logout } from '../../services/auth';
import { useHistory } from 'react-router-dom';
import { Wrapper, Title, Button, Icon, MobileDrawer, MobileWrapper } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

import Drawer from '../Drawer';

function Header(){
    const history = useHistory();
    const [open,setOpen] = useState<boolean>(false);
    
    const exit=()=>{
        logout()
        history.push('/login')
    }

    const handlerOpen=()=>{
        setOpen(true)
    }

    const handlerClose=()=>{
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