import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 95px;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 1.11;
  text-align: center;
  color: #000000;
`;

const Images = styled.div`
  display: grid; /* Organiza em quadradinhos iguais */
  grid-template-columns: repeat(3, 337px); /* 3 colunas de 337px */
  grid-auto-rows: 336px; /* Independente de quantas fileiras, todas vao ter 336 px */
  gap: 8px; /* Distancia tudo em 8px */
`;

const ImageContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 55px;
  background-color: #000;
  
  /* cursor: pointer; */
`;

const WhatWeRecentlyDid: React.FC = () => {
  return (
    <Container>
      <Title>O QUE FIZEMOS NOS ÚLTIMOS ANOS</Title>
      <Images>
        <ImageContainer />
        <ImageContainer />
        <ImageContainer />

        <ImageContainer />
        <ImageContainer />
        <ImageContainer />
      </Images>
    </Container>
  );
}

export default WhatWeRecentlyDid