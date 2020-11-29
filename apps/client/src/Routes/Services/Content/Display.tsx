import React, { FC, Fragment } from "react"
import styled from "styled-components"

import { Fazemos } from "Api/OQueFazemos"

import Markdown from "Components/Markdown"
import List from "./List"

export const Hr = styled.hr`
  width: 95%;
  height: 1px;
  background-color: #a91e34;
  color: #a91e34;
  border-width: 0;

  margin: 2.4em auto;
`

export interface DisplayProps {
  servicos: Fazemos[],
  serviceEleRefs: React.RefObject<HTMLElement>[],
}

export const Display: FC<DisplayProps> = ({
  servicos,
  serviceEleRefs,
}) => {
  return (
    <List>
      {servicos.map(({ descricaoLonga, NomeID }, i) => (
        <Fragment key={i}>
          <article ref={serviceEleRefs[i]} id={`${NomeID}`}>
            <Markdown source={descricaoLonga}/>
          </article>
          { i !== servicos.length-1 && <Hr />}
        </Fragment>
      ))}
    </List>
  )
}

export default Display
