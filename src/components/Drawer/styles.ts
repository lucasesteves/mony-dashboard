import styled from 'styled-components'

export const Wrapper=styled.div`
    margin-top: 10px;
`;

export const Line=styled.div<{persist:boolean}>`
    display:flex;
    color:${props=>props.persist ?  props.theme.colors.white: props.theme.colors.primary} ;
    background:${props=>props.persist && props.theme.colors.primary};
    padding:15px 20px;
    font-size:18px;
    font-weight:400;
    font-family:Roboto, sans-serif;

    &:hover{
        color:#fff;
        background:${props=>props.theme.colors.primary};
        cursor: pointer;
    }

`;

export const Item = styled.div`
    margin-left:20px;
`;

export const Name = styled.h2`
    font-size:16px;
    font-family:Roboto, sans-serif;
    padding: 15px 20px;
    color: ${props=>props.theme.colors.text};

    @media screen and (max-width:960px){
        color: ${props=>props.theme.colors.white};
    }
`;