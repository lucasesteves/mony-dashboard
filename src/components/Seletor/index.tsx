import React from 'react';
import { Select, Option } from './styles';
import Title from '../Title';

interface ISeletor{
    font?:number,
    bottom?:number,
    title?:string
}

const months=[
    {id:'janeiro', value:'Janeiro'},
    {id:'fevereiro', value:'Fevereiro'},
    {id:'marco', value:'Março'},
    {id:'abril', value:'Abril'},
    {id:'maio', value:'Maio'},
    {id:'junho', value:'Junho'},
    {id:'julho', value:'Julho'},
    {id:'agosto', value:'Agosto'},
    {id:'setembro', value:'Setembro'},
    {id:'outubro', value:'Outubro'},
    {id:'novembro', value:'Novembro'},
    {id:'dezembro', value:'Dezembro'}
]

function Seletor({font, bottom, title} : ISeletor ){
    return(
        <>
            <Title font={font} bottom={bottom}>{title ? title : 'Seletor' }</Title>
            <Select>
                {months.map((e,index)=>(
                    <Option key={index} value={e.id}>{e.value}</Option>
                ))}
            </Select>
        </>
    )
}

export default Seletor;