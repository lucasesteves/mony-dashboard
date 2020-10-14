import React, { useState, useEffect } from 'react';
import { Select, Option } from './styles';
import Title from '../Title';
import { getMonths } from '../../services/months';
import { currentMonth } from '../../services/months';
import { useDispatch, useSelector } from 'react-redux';
import { selectMonth } from '../../store/auth/actions';
import { Dispatch } from 'redux';

interface ISeletor{
    font?:number,
    bottom?:number,
    title?:string
}

function Seletor({font, bottom, title} : ISeletor ){
    const dispatch = useDispatch<Dispatch<ITypeSelect>>();
    const [ current, setCurrent ] = useState<string>('');
    const month = useSelector((state:ApplicationService) => state.auth.month)

    useEffect(()=>{
        if(!month){
            const nameMonth = currentMonth()
            setCurrent(nameMonth)
            dispatch(selectMonth(nameMonth))
        }
    },[])

    useEffect(()=>{
        setCurrent(month)
    },[month])

    const change = (value:string):void => {
        setCurrent(value)
        dispatch(selectMonth(value))
    }

    return(
        <>
            <Title font={font} bottom={bottom}>{title ? title : 'Seletor' }</Title>
            <Select onChange={(e)=>change(e.target.value)} value={current}>
                {getMonths().map((e,index)=>(
                    <Option key={index} value={e.name}>{e.name}</Option>
                ))}
            </Select>
        </>
    )
}

export default Seletor;