import React, { FC } from "react"
import styled from "styled-components"

import Wireframe from "Components/Wireframe"
import Banner from "Components/PageBanner"

import Content from "./Content"

const Container = styled.div`
  display: flex;
  flex-direction: column;
`

export const Services: FC = () => {

  return (
    <Wireframe
      onClickServicos={() => document.querySelector("#root")?.scrollIntoView({ behavior: "smooth" })}
    >
      <Container>
        <Banner>Serviços</Banner>
        <Content />
      </Container>
    </Wireframe>
  )
}

export default Services
