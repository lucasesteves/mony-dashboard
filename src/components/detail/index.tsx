import React from 'react'
import { Title, Number, Row, Column, Month } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd, faReceipt, faDollarSign } from '@fortawesome/free-solid-svg-icons'

interface IDetail{
    title:string,
    value:number,
}


function Detail({title, value}:IDetail){

    return(
        <Row>
            <Column>
                <Title>{title}</Title>
                <Number>R$ {value}</Number>
                <Month>Agosto</Month>
            </Column>
            <Column>
                <FontAwesomeIcon 
                    style={{color:'#ccc',opacity:'.5',height:100,width:160}} 
                    icon={title === 'Entrada' ? faHandHoldingUsd : title === 'Saída' ? faReceipt : faDollarSign}
                />
            </Column>
        </Row>
    )
}

export default Detail;