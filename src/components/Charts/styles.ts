import styled from "styled-components";

export const Wrapper = styled.div`
  height: 380px;

  @media screen and (max-width: 960px) {
    height: 280px;
  }
`;

export const Container = styled.div`
  height: 350px;
  @media screen and (max-width: 960px) {
    height: 250px;
    width: 80%;
    margin: 0 auto;
  }
`;

export const Message = styled.div`
  font-family: Roboto, sans-serif;
  font-size: 14px;
  text-align: center;
`;
