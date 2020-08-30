import styled from 'styled-components';

export const Button = styled.button<{height:number,width?:number,block:boolean}>`
    cursor: pointer;
    height:${(props) => (props.height ? `${props.height}px` : `${36}px`)};
    width:${(props) => {
      if (props.block) {
        return '100%';
      }
      return props.width && `${props.width}px`;
    }};
    border-radius:4px;
    padding:9px 20px;
    font-weight:900;
    box-shadow:none;
    background-color:${(props) => props.color};
    color:#fff;
    outline:none;
    border:none;
    
    &:hover{
        opacity: 0.85;
        box-shadow:none;
    }

    @media screen and (max-width:960px) {
        width:100%;
    }
`;


