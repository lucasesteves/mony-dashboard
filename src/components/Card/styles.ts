import styled from 'styled-components';

export const Container = styled.div`
    border-radius: 10px;
    box-shadow: 6px 6px 16px rgba(79, 105, 132, 0.15), -6px -6px 16px rgba(255, 255, 255, 0.8);
    border: 1px solid #dedede;
    padding: 20px;
    background:${props=>{
        return props.color === 'default' ? 
            props.theme.colors.primary 
        : props.color === 'good' ? 
            props.theme.colors.success
        : props.color === 'bad' ?
            props.theme.colors.danger  
        : props.theme.colors.background     
    }};
    color:${props=>props.color ? '#fff' : '#111'};
`;

