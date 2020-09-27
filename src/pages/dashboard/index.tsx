import React from 'react'
import { Wrapper, Menu, Head } from './styles';
import { useSelector } from 'react-redux';

import Header from '../../components/Header';
import Drawer from '../../components/Drawer';

import Main from '../main';
import Wins from '../wins';
import Wastes from '../wastes';

function Dashboard(){
    const page:any = useSelector<any>(state => state.auth.page)
    return(
        <Wrapper>
            <Head>
                <Header/>
            </Head>
            <Menu>
                <Drawer />
            </Menu>
            {page==='' ?
            <Main/> 
            : page==='wins' ?
            <Wins/> :
            <Wastes/>}
        </Wrapper>
    )
}

export default Dashboard;