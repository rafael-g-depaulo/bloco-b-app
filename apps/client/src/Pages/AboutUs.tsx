import React, { FC } from "react"
import styled from 'styled-components'
import { useFazemosItem } from "Api/QuemSomos"
import Loading from "Components/Loading"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
`;

const Row = styled.div`
  display: flex;
  width: 80%;
  height: 180px;
  font-size: 18px;
  margin-top: 20px;

  color: #000000;

  div {
    flex: 1;
    & + div {
      margin-left: 24px;
    }}
`;

const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  line-height: 1.11;
  text-align: center;
  color: #000000;
  margin-top: 95px;
`;

const Stripe = styled.div`
  width: 30px;
  height: 2px;
  margin: 5px 12px 67px 16px;
  background-color: #a91e34;
`;

export const AboutUs: FC = () => {
  const { data, error, isLoading } = useFazemosItem()

  // if is loading data
  if (isLoading) return <Loading />

  // if there were any errors
  if (error) return <div>error!</div>


  // if reached here, we know that data is loaded and there is no error
  const message = data!

  return (
      <Container>
        <Title>QUEM SOMOS</Title>
        <Row>
          <div>
          {message.text.substring(0, 517)}
          </div>
          <div>
          {message.text.substring(518, 859)}
          </div>
          </Row>
        
          <Stripe />
      </Container>
  
  )
}

export default AboutUs