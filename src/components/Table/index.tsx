import React from 'react'
import { Wrapper, Line, Item, Icon } from './styles';
import Title from '../Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

function Table(){

    const remove=(id:number)=>{

    }

    return(
        <Wrapper>
            <Title>Histórico</Title>
            {[1,2,3,4,5,6,7,8,9].map((e,index)=>(
                <Line key={index}>
                    <Item>Roupa</Item>
                    <Item>200.00</Item>
                    <Icon onClick={()=>remove(index)}>
                    <FontAwesomeIcon 
                        style={{height:16,width:16}} 
                        icon={faTrash}
                    />
                    </Icon>
                </Line>
            ))}
        </Wrapper>
    )
}

export default Table;