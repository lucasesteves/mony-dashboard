import React, { useState } from 'react';
import { Main } from './styles';
import Card from '../../components/Card';
import Detail from '../../components/Detail';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Table from '../../components/Table';
import Modal from '../../components/Modal';

function Wastes(){
    const [ open, setOpen ] = useState<boolean>(false);
    
    const handlerModal=()=>{
        setOpen(!open);
    }

    return(
        <Main>
            <Card id="c1">
                <Title>Despesas</Title>
                <Button color={'#5159AC'} height={52} width={200} block={false} onClick={handlerModal}>Saída</Button>
            </Card>
            <Card id="c2" color={'#EF5837'}>
                <Detail title="Saldo" value={1200.00} />
            </Card>
            <Card id="li">
                <Table/>
            </Card>
            <Modal open={open} title={'Adicionar gasto'} onClose={handlerModal} />
        </Main>
    )
}

export default Wastes;