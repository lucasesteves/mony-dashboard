import React from "react";
import { Container } from "./styles";

interface ICard {
  id: string;
  color?: string;
  children: React.ReactNode;
}

function Card({ id, color, children }: ICard) {
  return (
    <Container color={color} id={id}>
      {children}
    </Container>
  );
}

export default Card;
