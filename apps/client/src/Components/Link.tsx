import React, { FC } from "react"
import styled from "styled-components"


const MyLink = styled.a`
  color: #2b3eeb;

  text-decoration: none !important;

  &:hover, &:focus {
    color: #5464f8;
  }

  &:active {
    color: #5b6bff;
  }
`

export const Link: FC<{href: string}> = ({
  ...props
}) => {
  return (
    <MyLink
      target="_blank"
      rel="noopener"
      {...props}
    />
  )
}

export default Link
