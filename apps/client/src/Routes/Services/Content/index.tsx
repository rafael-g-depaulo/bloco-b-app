import React, { FC } from "react"
import styled from "styled-components"

import { useFazemosList } from "Api/OQueFazemos"
import Loading from "Components/Loading"
import Markdown from "Components/Markdown"

const List = styled.div`
  display: flex;
  flex-direction: column;

  padding: 40px 0.8em;

  & > article {
    margin-left: 3em;
    margin-right: 3em;
  }
`

const Hr = styled.hr`
  width: 95%;
  height: 1px;
  background-color: #a91e34;
  color: #a91e34;
  border-width: 0;

  margin: 2.4em 0;
`

export const Content: FC = () => {
  const servicesList = useFazemosList()

  const { data } = servicesList

  if (!data) return <List><Loading /></List>

  const descricoes = data.map(servico => servico.descricaoLonga)

  return (
    <List>
      {/* TODO: Add service content here */}
      {descricoes.map((descricao, i) => (
        <>
        <article key={i}>
          <Markdown source={descricao}/>
        </article>
        { i !== descricoes.length-1 && <Hr />}
        </>
      ))}
    </List>
  )
}

export default Content
