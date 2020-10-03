import React, { useState } from 'react';
import { Wrapper, Content, Icon, Header, Title, Label, Space, Line } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import Button from '../Button';
import Seletor from '../Seletor';
import { useSelector, useDispatch } from 'react-redux';
import { Dispatch } from 'redux'
import { newGain, newLoss } from '../../store/dashboard/actions';
import { toast } from 'react-toastify';

interface IModal{
    open:boolean,
    title:string,
    variant:string,
    onClose:()=>void
}

function Modal({ open, title, variant, onClose}: IModal){
    const dispatch = useDispatch<Dispatch<ITypeSelect>>();
    const [ name, setName ] =  useState<string>('')
    const [ money, setMoney ] =  useState<string>('')
    const user:IUser = useSelector<any,IUser>(state => state.auth.user)
    const month:string = useSelector<any,string>(state => state.auth.month)
    
    const handleKeyDown = (event:any):void => {
        event.key === 'Enter' && onClose();
    };

    const save = () =>{
        if(!name || !money){
            return toast.error('Preencha todos os campos!')
        }  
        if(variant=='gain'){
            setName('')
            setMoney('')
            dispatch(newGain({userId:user.id,name,value:money,month}))
            onClose();
        }
        if(variant=='loss'){
            setName('')
            setMoney('')
            dispatch(newLoss({userId:user.id,name,value:money,month}))
            onClose();
        }
    }

    return(
        <Wrapper open={open}>
            <Content>
                <Header>
                    <Title>{title}</Title>
                    <Icon onClick={onClose}>
                        <FontAwesomeIcon 
                            style={{height:16,width:16}} 
                            icon={faTimes}
                        />
                    </Icon>
                </Header>
                <Line/>
                <Label>Descrição</Label>
                <Input type={'text'} height={42} value={name} placeholder={'Ex: Comprei roupas'} data={setName} enter={handleKeyDown} />
                <Label>Valor</Label>
                <Input type={'text'} height={42} value={money} placeholder={'Ex: 200'} data={setMoney} enter={handleKeyDown} />
                <Space />
                <Seletor font={16} bottom={16} title={'Mês'} />
                <Space />
                <Button color={'default'} height={42} block={true} onClick={save}>Confirmar</Button>
            </Content>
        </Wrapper>
    )
}

export default Modal;