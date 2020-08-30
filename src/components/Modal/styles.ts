import styled from 'styled-components';

export const Wrapper = styled.div<{open:boolean}>`
    display: ${props=>props.open ? 'block' : 'none' }; 
    position: fixed; 
    z-index: 1; 
    padding-top: 100px; 
    left: 0;
    top: 0;
    width: 100%; 
    height: 100%; 
    overflow: auto; 
    background-color: rgb(0,0,0); 
    background-color: rgba(0,0,0,0.4); 
`;

export const Content = styled.div`
    background-color: #fefefe;
    margin: auto;
    padding: 20px;
    border: 1px solid #888;
    border-radius:4px;
    width: 600px;

    @media screen and (max-width:600px) {
        width: calc(100vw - 80px);
    } 
`;

export const Icon = styled.div`
    color: #aaaaaa;
    font-weight: bold;

    &:hover, &:focus {
        color: #000;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const Header = styled.div`
    display:flex;
    justify-content:space-between;
`;

export const Title = styled.h2`
    font-size:18px;
    font-family:Roboto, sans-serif;
    color:#212121;

`;

export const Label = styled.p`
    font-size:16px;
    font-family:Roboto, sans-serif; 
    font-weight:700;
    color:#000;
    display:flex;
    margin:16px 0 8px 0;
    justify-content:left;
`;

export const Space = styled.div`
    margin-bottom:16px;
`;

export const Line = styled.hr`
    border:.5px solid rgba(0,0,0,.1);
    margin:16px 0;
`;