import React, { InputHTMLAttributes,KeyboardEvent } from 'react'
import { Input } from './styles';

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    placeholder:string,
    type:string,
    value?:string,
    data(e:any):any,
    enter(e:KeyboardEvent):any,
    height:number
}


const InputComponent:React.FC<InputProps>=({value, height, type, placeholder, data, enter })=>{
    return(
        <Input
            value={value}
            height={height}
            type={type}
            placeholder={placeholder}
            onChange={(e) => data(e.target.value)}
            onKeyDown={(e)=>enter(e)}
      />
    )
}
export default InputComponent;