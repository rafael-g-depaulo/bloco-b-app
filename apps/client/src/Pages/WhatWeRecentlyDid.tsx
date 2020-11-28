import React from 'react'
import styled from 'styled-components'

import { useProjetos } from "Api/Projetos"
import Loading from 'Components/Loading';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0 30px 0;
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 1.11;
  text-align: center;
  color: #000000;
  margin-bottom: 0;
`;

const Images = styled.div`
  display: grid; 
  grid-template-columns: repeat(3, 345px); 
  grid-auto-rows: 336px;
  /* margin: auto; */
  gap: 15px;

  @media(max-width: 1199.98px){
    grid-template-columns: repeat(3, 330px); 
    grid-auto-rows: 336px;
  }

  @media(max-width: 992px){
    grid-template-columns: repeat(2, 340px); 
    grid-auto-rows: 336px;
    gap: 20px;

  }

  @media(max-width: 767.98px){
    grid-template-columns: repeat(2, 337px); 
    grid-auto-rows: 336px; 
  }

  @media(max-width: 640px){
    grid-template-columns: repeat(1, minmax(90vw, 415px));
    grid-auto-rows: 336px;
  }

`;

const ImageContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  margin-top: 55px;
  background-color: #000;
  
  cursor: pointer;
`;

const Image = styled.img`
  object-fit: cover;
  object-position: center center;
  width: 90%;
  height: 90%;
`

const WhatWeRecentlyDid: React.FC = () => {
  const { data } = useProjetos()

  if (!data || data.length === 0) return <Container><Loading /></Container>

  return (
    <Container>
      <Title>O QUE FIZEMOS NOS ÚLTIMOS ANOS</Title>
      <Images>
        {data.map(({ Logo, id }) => (
          <ImageContainer key={id}>
            <Image
              src={Logo.url}
              alt={Logo.alternativeText}
            />
          </ImageContainer>
        ))}
      </Images>
    </Container>
  );
}

export default WhatWeRecentlyDid