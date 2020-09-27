import styled from 'styled-components';

export const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 270px repeat(3, 1fr);
    grid-template-rows: 72px calc(100vh - 72px);
    grid-template-areas: 
    "h h h h"
    "d m m m"
    ;

    @media only screen and (max-width: 960px) {
      grid-template-columns: 1fr 1fr;
      grid-template-rows: 72px;
      grid-template-areas:
        "h h"
        "m m";
    }
`;

export const Head = styled.div`
    grid-area: h;
`;


export const Menu = styled.div`
    grid-area: d;
    border-right:3px solid ${props=>props.theme.colors.primary};

    @media screen and (max-width:960px){
        display:none;    
    }
`;


