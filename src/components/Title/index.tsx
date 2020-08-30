import React from 'react';
import { Title } from './styles';

interface ITitle{
    font?:number,
    bottom?:number,
    children:any
}

function TitleComponent({ font, bottom, children}:ITitle){
    return(
        <Title font={font} bottom={bottom}>{children}</Title>
    )
}

export default TitleComponent;