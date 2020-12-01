import React, { FC } from "react"
import styled, { css } from "styled-components"

import mobileBreakpoint from "Utils/mobileBreakpoint"

const Container = styled.div`
  padding: 1.6em 0;
  font-size: ${props => props.theme.fontSizeHuge};
  background-color: #000000;
  color: #FFFFFF;

  display: flex;
  justify-content: center;

  /* ${mobileBreakpoint`
    background-color: pink;
  `} */
  ${mobileBreakpoint(css`
    font-size: 30px;
  `)}
`

const Title = styled.h1`
  font-size: inherit;
`

export const Banner: FC = ({
  children,
}) => {
  return (
    <Container>
      <Title>{children}</Title>
    </Container>
  )
}

export default Banner
