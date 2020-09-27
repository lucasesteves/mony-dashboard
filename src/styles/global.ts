import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;
    }

    body{
        background:${props=>props.theme.colors.background};
    }

    &::-webkit-scrollbar {
        width: 5px;
    }

    &::-webkit-scrollbar-track {
        box-shadow: inset 0 0 5px ${props=>props.theme.colors.grey}; 
        border-radius: 5px;
    }
    
    &::-webkit-scrollbar-thumb {
        background: ${props=>props.theme.colors.primary}; 
        border-radius: 5px;
    }
  

`