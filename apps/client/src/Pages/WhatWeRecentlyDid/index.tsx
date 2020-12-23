import React from 'react'
import styled from 'styled-components'

import { useProjetos } from "Api/FizemosUltimosAnos"
import Loading from 'Components/Loading';
import Projeto from './Projeto';

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
  padding-top: 40px;
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

const WhatWeRecentlyDid: React.FC = () => {
  const { data } = useProjetos()

  if (!data || data.length === 0) return <Container><Loading /></Container>

    return (
      <Container>
      <Title>O QUE FIZEMOS NOS ÚLTIMOS ANOS</Title>
      <Images>
        {data
          // use recently publiched projects first
          .sort((a, b) => b?.published_at?.getTime() - a?.published_at?.getTime())
          .map(({ Logo, id, Texto }, i) => (
            <Projeto key={id ?? i} Logo={Logo} text={Texto} />
          ))
        }
      </Images>
    </Container>
  );
}

export default WhatWeRecentlyDid