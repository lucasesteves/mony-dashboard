import React, { useState, useEffect } from 'react';
import { Main } from './styles';
import Card from '../../components/Card';
import Detail from '../../components/Detail';
import Button from '../../components/Button';
import Title from '../../components/Title';
import Table from '../../components/Table';
import Modal from '../../components/Modal';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux'
import { allLoss, totalLoss, deleteLoss } from '../../store/dashboard/actions';

function Wastes(){
    const dispatch = useDispatch<Dispatch<ITypeSelect>>()
    const [ open, setOpen ] = useState<boolean>(false);
    const user:IUser = useSelector<any,IUser>(state => state.auth.user)
    const month:string = useSelector<any,string>(state => state.auth.month)
    const loss:Array<ListElement> = useSelector<any,Array<ListElement>>(state => state.dashboard.loss)
    const total:number = useSelector<any,number>(state => state.dashboard.sumOfLoss)
    
    useEffect(()=>{
        dispatch(allLoss({userId:user.id,month}))
        dispatch(totalLoss({userId:user.id,month}))
    },[])
    
    useEffect(()=>{
        loss && dispatch(totalLoss({userId:user.id,month}))
    },[loss])


    const removeLoss = async (_id:string) =>{
        await dispatch(deleteLoss(_id))
    }

    const handlerModal=()=>{
        setOpen(!open);
    }

    return(
        <Main>
            <Card id="c1">
                <Title>Despesas</Title>
                <Button color={'default'} height={52} width={200} block={false} onClick={handlerModal}>Saída</Button>
            </Card>
            <Card id="c2" color={'bad'}>
                <Detail title="Saldo" value={total} />
            </Card>
            <Card id="li">
            <Table list={loss || []} remove={(_id:string)=>removeLoss(_id)} />
            </Card>
            <Modal open={open} title={'Adicionar gasto'} variant={'loss'} onClose={handlerModal} />
        </Main>
    )
}

export default Wastes;