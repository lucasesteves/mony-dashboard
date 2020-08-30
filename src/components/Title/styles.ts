import styled from 'styled-components';

export const Title = styled.h2<{font?:number,bottom?:number}>`
    font-size:${props=>props.font ? `${props.font}px` : '24px'};
    font-weight:900;
    font-family:Roboto, sans-serif;
    margin-bottom:${props=>props.bottom ? `${props.bottom}px`: '20px' };
`;