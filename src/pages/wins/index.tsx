import React, { useState, useEffect } from 'react';
import { Main } from './styles';
import Card from '../../components/Card';
import Detail from '../../components/Detail';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import { useSelector } from 'react-redux';


interface IWin{
    gain:number
}

interface IWinList{
    list:[]
}

function Wins(){
    const [ open, setOpen ] = useState<boolean>(false);
    // const [ getIn, setGetIn ] = useState(0);
    // const [ listOfWin, setListOfWin ] = useState([]);
    // const month:any = useSelector<any>(state => state.auth.month)

    

    const handlerModal=()=>{
        setOpen(!open);
    }

    return(
        <Main>
            <Card id="c1">
                <Title>Lucro</Title>
                <Button color={'default'} height={52} width={200} block={false} onClick={handlerModal}>Entrada</Button>
            </Card>
            <Card id="c2" color={'good'}>
                <Detail title="Saldo" value={1200.00} />
            </Card>
            <Card id="li">
                <Table/>
            </Card>
            <Modal open={open} title={'Adicionar lucro'} onClose={handlerModal} />
        </Main>
    )
}

export default Wins;