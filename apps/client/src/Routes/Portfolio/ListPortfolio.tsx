import React, { FC } from "react"

import Wireframe from "Components/Wireframe"
import Banner from "Components/PageBanner"

import styled from "styled-components"
import { Portfolio } from "Api/Portfolio"
import PortfolioItem from "./PortfolioItem"

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
  const aaaaaa: Portfolio = {
    name: "name",
    description: "ssssssssssssssssssss",
    image: {url: "https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708"},
    pdf: {},
  } as Portfolio

  return (
    <Wireframe
      onClickServicos={() => {}}
      onClickUltimosAnos={() => {}}
      onClickSomos={() => {}}
    >
      <Banner>Portifólio</Banner>
      <Content>
        {Array(7).fill(null).map((_, i) => <PortfolioItem portfolio={aaaaaa} key={i}/>)}
      </Content>
    </Wireframe>
  )
}

export default ListPortfolio
