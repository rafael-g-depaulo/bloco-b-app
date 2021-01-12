import React, { FC } from "react"
import styled from "styled-components"

import { Image } from "Utils/Image"

import { PoemString } from "."

const PoemImage = styled.img`
  margin: auto;
  height: auto;
  max-height: 95vh;
  max-width: 100%;
`
export interface CapaProps {
  onClick?: (event: React.MouseEvent<HTMLImageElement, MouseEvent>) => void,
  image: Image,
}

export const Capa: FC<CapaProps> = ({
  onClick,
  image,
}) => {
  return (
    <PoemImage
      src={image?.url ?? "#"}
      alt={image.alternativeText || PoemString}
      onClick={onClick}
    />
  )
}

export default Capa
