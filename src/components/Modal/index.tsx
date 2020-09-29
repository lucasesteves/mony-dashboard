import React, { useState } from 'react';
import { Wrapper, Content, Icon, Header, Title, Label, Space, Line } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import Input from '../Input';
import Button from '../Button';
import Seletor from '../Seletor';

interface IModal{
    open:boolean,
    title:string,
    onClose:()=>void
}

function Modal({ open, title, onClose}: IModal){
    const [ name, setName ] =  useState<string>('')
    const [ value, setValue ] =  useState<number>(0)
    
    const handleKeyDown = (event:any) => {
        event.key === 'Enter' && onClose();
    };

    const save = () =>{

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
                <Input type={'text'} height={42} placeholder={'Ex: Comprei roupas'} data={setName} enter={handleKeyDown} />
                <Label>Valor</Label>
                <Input type={'text'} height={42} placeholder={'Ex: 200'} data={setValue} enter={handleKeyDown} />
                <Space />
                <Seletor font={16} bottom={16} title={'Mês'} />
                <Space />
                <Button color={'default'} height={42} block={true} onClick={save}>Confirmar</Button>
            </Content>
        </Wrapper>
    )
}

export default Modal;