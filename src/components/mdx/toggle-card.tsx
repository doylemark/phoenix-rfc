import React, { useState } from "react";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

const Buttons = styled.div`
  display: flex;
`;

const Button = styled.button`
  margin: 2rem;
  padding: 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

interface ToggleCardProps {
  items: { title: string; description: string }[];
}

const ToggleCard = ({ items }: ToggleCardProps) => {
  const [active, setActive] = useState(0);

  return (
    <Container>
      <Buttons>
        {items.map((item, i) => (
          <Button onClick={() => setActive(i)}>{item.title}</Button>
        ))}
      </Buttons>
      <p>{items[active].description}</p>
    </Container>
  );
};

export default ToggleCard;
