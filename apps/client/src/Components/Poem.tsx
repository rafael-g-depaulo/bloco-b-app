import React, { FC } from "react"
import styled from "styled-components"

//To remove
const Animation = styled.img`
  width: 100%;
  height: 600px;
  /* margin-top: 50px; */
`;

export const Poem: FC = () => {
  return (
    <Animation src="https://wallpaperaccess.com/full/172092.jpg" />
  )
}

export default Poem
