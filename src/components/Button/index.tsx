import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import { Button } from './styles';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    height:number,
    width?:number,
    block:boolean,
    color:string,
    children:any,
    onClick():any
}

const ButtonComponent:React.FC<ButtonProps>=({height, width, color, block, children, onClick})=>{
    return(
        <Button height={height} color={color} width={width} block={block} onClick={onClick}>{children}</Button>
    )
}
export default ButtonComponent;