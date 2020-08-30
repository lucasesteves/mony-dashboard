import styled from 'styled-components';

export const Wrapper = styled.div`
    background:#5159AC;
    height:100vh;
    display:flex;
    align-items:center;
    justify-content:center;

    @media screen and (max-width:960px) {
        /* background:#0B4470; */
    }
`;

export const Card = styled.div`
    width:400px;
    height:500px;
    padding:32px;
    background:#fff;
    border-radius:10px;
    box-shadow: 0px 30px 60px #5159AC;

    @media (max-width:600px){
        background:none;
    }
`

export const Title = styled.h2`
    font-size:32px;
    font-family:Roboto, sans-serif; 
    color:#212121;
    display:flex;
    margin:32px 0 52px 0;
    justify-content:center;

    @media (max-width:600px){
        color:#fff;
    }

`

export const Label = styled.p`
    font-size:16px;
    font-family:Roboto, sans-serif; 
    font-weight:700;
    color:#000;
    display:flex;
    margin:28px 0 8px 0;
    justify-content:left;

    @media (max-width:600px){
        color:#fff;
    }

`

