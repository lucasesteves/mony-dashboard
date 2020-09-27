import React from 'react'
import { Number, Row, Column, Month, Icon } from './styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHandHoldingUsd, faReceipt, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import Title from '../Title';
import { useSelector } from 'react-redux';

interface IDetail{
    title:string,
    value:number
}

function Detail({title, value}:IDetail){
    const month:any = useSelector<any>(state => state.auth.month)

    return(
        <Row>
            <Column>
                <Title>{title}</Title>
                <Number>R$ {value}</Number>
                <Month>{month}</Month>
            </Column>
            <Icon>
                <FontAwesomeIcon 
                    style={{height:100,width:100}} 
                    icon={title === 'Entrada' ? faHandHoldingUsd : title === 'Saída' ? faReceipt : faDollarSign}
                />
            </Icon>
        </Row>
    )
}

export default Detail;