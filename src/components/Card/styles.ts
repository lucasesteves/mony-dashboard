import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 10px;
    box-shadow: 6px 6px 16px rgba(79, 105, 132, 0.15), -6px -6px 16px rgba(255, 255, 255, 0.8);
    border: 1px solid #dedede;
    padding: 20px;
    background:${props=>props.color ? props.color : '#fff'};
    color:${props=>props.color ? '#fff' : '#111'};
`;

