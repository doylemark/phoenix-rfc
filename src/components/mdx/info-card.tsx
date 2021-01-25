import React from "react";
import styled from "styled-components";

const colors = {
  info: "#cff3ff",
  warning: "#fffecf",
  danger: "#ffcfcf",
};

type Level = keyof typeof colors;

const Container = styled.section<{ level: Level }>`
  padding: 0.5rem;
  background-color: ${({ level }) => colors[level]};
`;

const Title = styled.h5`
  font-size: 1.15rem;
  font-weight: bold;
  margin: 0;
`;

const Description = styled.p``;

interface InfoCardProps {
  level: Level;
  title: string;
  message: string;
}

const InfoCard = ({ level, title, message }: InfoCardProps) => {
  return (
    <Container level={level}>
      <Title>{title}</Title>
      <Description>{message}</Description>
    </Container>
  );
};

export default InfoCard;
