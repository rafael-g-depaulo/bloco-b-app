import React, { FC } from "react"

import { Portfolio } from "Api/Portfolio"
import styled from "styled-components"

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 0 auto;
`

const ProjectName = styled.span`
  font-family: Calibri;
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 0.2em;
`
const ProjectDescription = styled.p`
  font-family: Calibri;
  font-size: 16px;
  margin: 0;
`
const Image = styled.img`
  height: 250px;
  width: 250px;
  object-fit: cover;
  margin-bottom: 10px;
`

const Button = styled.button`
  border-radius: 5px;
  padding: 0.2em 0.3em;
  border: solid 2px #903032;
  color: #903032;
  font-weight: bold;
  margin-top: 10px;

  &:hover, &:focus {
    cursor: pointer;
    border-color: #6d2f30;
    color: #6d2f30;
    outline: none;
  }

  &:active {
    border-color: #a83739;
    color: #a83739;
    outline: none;
  }
`

const Link = styled.a`
  text-decoration: none;
  font-family: Calibri;
  font-size: 22px;
`

export interface PortfolioItemProps {
  portfolio: Portfolio
}

export const PortfolioItem: FC<PortfolioItemProps> = ({
  portfolio,
}) => {
  return (
    <Card>
      <Image src={portfolio.imagem.url} alt={portfolio.imagem.alternativeText} />
      <ProjectName>{portfolio.nome}</ProjectName>
      <ProjectDescription>{portfolio.descricaoCurta}</ProjectDescription>
      <Link href={portfolio?.pdf?.url} rel="noopener noreferrer" target="_blank">
        <Button>Baixar arquivo em PDF</Button>
      </Link>
    </Card>
  )
}

export default PortfolioItem
