import React, { FC, useCallback, useState } from "react"
import styled, { css } from "styled-components"

import { Image } from "Utils/Image"

const ImageContainer = styled.div`
  position: relative;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: #000;
  
  cursor: pointer;
`

const ImgBackground = styled.div<{ src: string }>`
  background-size: cover;
  background-position: center center;
  background-image: url("${props => props.src}");
  width: 90%;
  height: 90%;

  transition: 300ms ease-out;

  /* &:hover, &:active, &:focus {
    filter: blur(5px);
  } */

  // props => props.blur && css\`
  //   filter: blur(5px);
  // \`

`

const ShadedBg = styled.div<{ show?: boolean }>`
  height: 100%;
  transition: 300ms ease-out;

  background: rgba(0, 0, 0, 0.5);
  color: #fff;
  font-size: ${({ theme }) => theme.fontSize};

  padding: 0.8em;

  /* show on hover */
  ${props => 
    props.show === true ? css`opacity: 1;` :
    props.show === false ? css`opacity: 0;` :
    css`
      opacity: 0;
      &:hover, &:active, &:focus { opacity: 1; }
    `
  }

  overflow-y: auto;
`

export interface ProjetoProps {
  Logo: Image,
  text: string,
}

export const Projeto: FC<ProjetoProps> = ({
  Logo,
  text,
}) => {

  const [ active, setActive ] = useState<boolean | undefined>()
  const toggleActive = useCallback(() => {
    setActive(a => !a)
  }, [])
  const resetActive = useCallback(() => {
    setActive(a => a ? a : undefined)
  }, [])

  return (
    <ImageContainer onClick={toggleActive} onMouseLeave={resetActive}>
      <ImgBackground
        src={Logo.url}
      >
        <ShadedBg
          show={active}
        >
          {text}
        </ShadedBg>
      </ImgBackground>
    </ImageContainer>
  )
}

export default Projeto
