import React from 'react'
import styled from 'styled-components';
import { useFazemosList } from "Api/OQueFazemos"
import Loading from "Components/Loading"
import Link from 'Components/EmptyLink'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  margin: auto;

  padding: 95px;
  @media (max-width: 540px){
    padding: 5%;
  }
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 1.11;
  text-align: center;
  color: #000000;
`;

const Images = styled.div`
  display: flex;
  justify-content: space-around;

  padding-top: 35px;
  width: 100%;
  max-width: 950px;
  margin: auto;

  > * {
    margin-left: 0.8em;
  }

  @media (max-width: 700px) {
    flex-direction: column;
    > * {
      margin: 0.8em auto;
    }
  }
`;

const ImageContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  width: 265px;
  height: 253px;
  margin: auto;
  background-color: rgba(115, 44, 44, 0.72);
  
  cursor: pointer;
  overflow: hidden;

  @media(max-width: 1199.98px){
    width: 252px;
  }

  @media(max-width: 992px){
    width: 245px;
  }

  @media(max-width: 790px){
    width: 210px;
    /* max-width: 75%; */
  }

  @media(max-width: 700px){
    width: 75%;
    min-width: 245px;
  }

  > img {
    user-select: none;
    z-index: -1;
    width: 100%;
    height: 100%;
    transition: all .2s ease-out;
    object-fit: cover;
  }

  > div {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    color: #fff;
      text-align: center;
    > strong {
      font-size: 18px;
      margin-bottom: 8px;
    }

    > span {
      font-size: 18px;
      font-family: OpenSans;
      font-weight: normal;
      font-stretch: normal;
      font-style: italic;
      line-height: 1;
      letter-spacing: normal;
    }
  }

  &:hover {
    > img {
      transform: scale(1.15);
    }
  }
`;

const MyLink = styled(Link)`
  /* & + * {
    margin-left: 8px;
  } */
  width: auto;
`

const WhatWeDo: React.FC = () => {
  
  const { data, error, isLoading } = useFazemosList()

  // if is loading data
  if (isLoading) return <Loading />

  // if there were any errors
  if (error) return <div>error: { error?.message ?? "" }</div>

  // if reached here, we know that data is loaded and there is no error
  const img = data!

  if (img.length === 0) return <div></div>

  return (
    <Container>
      <Title>O QUE FAZEMOS</Title>
      <Images>
      {img.map((img, i) => (
        <MyLink to={`/services#${img.NomeID}`}>
          <ImageContainer key={`${i}.${img.Titulo}`}>
            <img src={img.imagem.url} alt="bloco-b-app" />
            <div>
              <strong>{img.Titulo}</strong>
              <span>{img.descricaoCurta}</span>
            </div>
          </ImageContainer>
        </MyLink>
      ))}
      </Images>
    </Container>
  );
}

export default WhatWeDo