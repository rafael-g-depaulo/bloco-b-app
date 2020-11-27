import React, { createRef, FC, Fragment, RefObject, useEffect, useState } from "react"
import styled from "styled-components"

import { useFazemosList } from "Api/OQueFazemos"
import Loading from "Components/Loading"
import Markdown from "Components/Markdown"
import { useScrollPosition } from "Hooks/useScrollPosition"
import { useHistory } from "react-router-dom"
import { getLowestElementOverTop } from "Utils/getLowestElementOverTop"
import useDynamicScroll from "Hooks/useDynamicScroll"
import useRefs from "Hooks/useRefs"
import useCurrentlyScrolledElement from "Hooks/useCurrentlyScrolledElement"
import useMsPassed from "Hooks/useMsPassed"

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

  margin: 2.4em auto;
`

export const Content: FC = () => {
  const servicesList = useFazemosList()
  const { data } = servicesList

  // create refs for all articles
  const elRefs = useRefs(data?.length)
  
  // set current scrolled-out element
  const currentArticle = useCurrentlyScrolledElement(elRefs, { wait: 200 })
  const curArticleId = currentArticle?.id ?? ""

  // stop path replacer for the first second, while page loads and scrolls into correct initial section
  const hasScrolledLoad = useMsPassed(1000)
    
  // update path when current scrolled article changes
  const history = useHistory()
  useEffect(() => {
    if (hasScrolledLoad) {
      console.log("changing shit")
      if (curArticleId === "") history.replace(`${history.location.pathname}`)
      else history.replace(`${history.location.pathname}#${curArticleId}`)
    }
  }, [curArticleId, history])

  useDynamicScroll(750)

  if (!data) return <List><Loading /></List>

  return (
    <List>
      {/* <pre>{JSON.stringify(data, null, 2)}</pre> */}
      {data.map(({ descricaoLonga, Titulo, id }, i) => (
        <Fragment key={i}>
          {/* <article ref={elRefs[i]} id={Titulo.replaceAll(" ", "-")}> */}
          <article ref={elRefs[i]} id={`service-${id}`}>
            <Markdown source={descricaoLonga}/>
            { Titulo }
          </article>
          { i !== data.length-1 && <Hr />}
        </Fragment>
      ))}
    </List>
  )
}

export default Content
