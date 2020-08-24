import styled from 'styled-components'

export const Wrapper=styled.div`
    margin-top:54px;
`;

export const Line=styled.div<{persist:boolean}>`
    display:flex;
    color:${props=>props.persist ? '#fff' :'#5159AC'} ;
    background:${props=>props.persist ? '#5159AC' :'none'};
    padding:15px 20px;
    font-size:18px;
    font-weight:400;
    font-family:Roboto, sans-serif;

    &:hover{
        color:#fff;
        background:#5159AC;
        cursor: pointer;
    }

`;

export const Item=styled.div`
    margin-left:20px;
`;