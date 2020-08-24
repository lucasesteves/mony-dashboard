import styled from 'styled-components';

export const Wrapper = styled.div`
    display:flex;
    justify-content:space-between;
    padding:20px;
`;

export const Title = styled.h2`
    color:#fff;
    font-size:28px;
    font-weight:500;
    font-family:Roboto, sans-serif; 
`;

export const Button = styled.button`
    color:#fff;
    font-size:18px;
    font-weight:500;
    font-family:Roboto, sans-serif;
    background:none;
    border:none; 

    &:hover{
        cursor: pointer;
        opacity: 0.85;
    }
`;

export const Icon = styled.div`
    display:none;
    &:hover{
        cursor:pointer;
    }

    @media screen and (max-width:960px)  {
        display:block; 
    }
`; 

export const MobileDrawer = styled.div<{open:boolean}>`
    height: 100%;
    width: ${props=>props.open ? '250px': '0'};
    position: fixed;
    z-index: 1;
    top: 0;
    left: 0;
    background-color: #111;
    overflow-x: hidden;
    transition: 0.5s;
    /* padding-top: 20px; */
`; 

export const MobileWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    padding:20px;
`;