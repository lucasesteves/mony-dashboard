import styled from 'styled-components';

export const Input = styled.input`
    height:${(props) => props.height && `${props.height}px`};
    border: 1px solid rgba(135, 135, 135, 0.3);
    border-color: '#dedede';
    outline: none;
    border-radius: 4px;
    width:calc(100% - 22px);
    padding: 9px 10px;
    font-weight: 300;
    font-size: 16px;
    font-family: Roboto, sans-serif;
    font-style: normal;

    &:focus{
        border-color:#2CA0C1;
    }
    ::placeholder {
        color: #9FA0A9;
        font-size: 15px;
      }
`;


