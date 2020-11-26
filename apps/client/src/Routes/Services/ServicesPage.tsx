import React, { FC } from "react"
import styled from "styled-components"

import Wireframe from "Components/Wireframe"
import useDynamicScroll from "Hooks/useDynamicScroll"

import Banner from "./Banner"
import Content from "./Content"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Services: FC = () => {

  useDynamicScroll()

  return (
    <Wireframe
      onClickServicos={() => {
        document.querySelector("#root")?.scrollIntoView({ behavior: "smooth" })
      }}
      onClickSomos={() => {}}
      onClickUltimosAnos={() => {}}
    >
      <Container>
        <Banner />
        <Content />
      </Container>
    </Wireframe>
  )
}

export default Services
