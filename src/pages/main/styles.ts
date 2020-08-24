import styled from 'styled-components';

export const Wrapper = styled.div`
    grid-area: m;

    display: grid;
    grid-template-columns: repeat(6, 1fr);
    grid-template-rows: 160px calc(calc(100vh - 72px) - 160px - 60px);
    padding:20px;
    grid-template-areas: 
    "c1 c1 c2 c2 c3 c3"
    "se se ch ch ch ch";
    row-gap:20px;
    column-gap: 20px;

    #c1{
        grid-area: c1;
    }

    #c2{
        grid-area: c2;
    }

    #c3{
        grid-area: c3;
    }

    #se{
        grid-area:se;
    }

    #ch{
        grid-area:ch;
    }

    @media only screen and (max-width: 960px) {
        grid-template-columns: 1fr;
        grid-template-rows: repeat(3, 160px) repeat(2, 300px);
        grid-template-areas:
            "c1"
            "c2"
            "c3"
            "se"
            "ch";
    }
`;