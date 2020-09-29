import styled from 'styled-components';

export const Input = styled.input<{height:number}>`
    height:${props => `${props.height}px`};
    border: 1px solid rgba(135, 135, 135, 0.3);
    border-color: ${props=>props.theme.colors.grey};
    outline: none;
    border-radius: 4px;
    width:100%;
    padding: 9px 10px;
    font-weight: 300;
    font-size: 16px;
    font-family: Roboto, sans-serif;
    font-style: normal;

    &:focus{
        border-color:${props=>props.theme.colors.primary};
    }
    ::placeholder {
        color: #9FA0A9;
        font-size: 15px;
      }
`;


