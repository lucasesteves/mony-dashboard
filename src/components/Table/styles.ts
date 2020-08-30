import styled from 'styled-components';

export const Wrapper=styled.div`
    height:calc(calc(100vh - 72px) - 180px - 100px);  
    overflow-y:scroll;
`; 

export const Line=styled.div`
    display:flex;
    justify-content:space-between;
    border:1px solid #dedede;
    border-radius:4px;
    margin-bottom:12px;
    padding:10px 20px;
`;

export const Item=styled.div`
    font-family:Roboto, sans-serif;
    font-size:14px;
`;

export const Icon = styled.div`
    color:#EF5837;

    &:hover{
        cursor: pointer;
    }
`;