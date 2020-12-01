import React, { FC } from "react"
import styled from "styled-components"

import Wireframe from "Components/Wireframe"
import Banner from "Components/PageBanner"

import { usePortfolioList } from "Api/Portfolio"

import PortfolioItem from "./PortfolioItem"
import Loading from "Components/Loading"

const Content = styled.div`
  /* padding */
  padding: 2.4em 4em;
  @media (max-width: 400px) {
    padding: 1.6em 2.0em;
  }

  /* center content */
  margin: auto;
  width: min-content;

  /* grid */
  display: grid;
  column-gap: 10px;
  row-gap: 30px;

  /* 3 columns on larger screens */
  @media (min-width: 870.01px) {
    --columns: 3;
  }
  /* 2 columns on tablet */
  @media (max-width: 870px) {
    --columns: 2;
  }
  /* 1 column on mobile */
  @media (max-width: 600px) {
    --columns: 1;
  }

  grid-template-columns: repeat(var(--columns), min-content);
`

export const ListPortfolio: FC = () => {
  
  const { data } = usePortfolioList()

  if (!data) return <Loading />

  return (
    <Wireframe
      onClickServicos={() => {}}
      onClickUltimosAnos={() => {}}
      onClickSomos={() => {}}
    >
      <Banner>Portifólio</Banner>
      <Content>
        {data.map((item, i) => <PortfolioItem portfolio={item} key={i}/>)}
      </Content>
    </Wireframe>
  )
}

export default ListPortfolio
