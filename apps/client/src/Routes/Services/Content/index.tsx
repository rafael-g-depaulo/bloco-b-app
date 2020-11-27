import React, { FC } from "react"

import { useFazemosList } from "Api/OQueFazemos"

import Loading from "Components/Loading"
import Display from "./Display"
import List from "./List"

import useCurrentlyScrolledElement from "Hooks/useCurrentlyScrolledElement"
import useMsPassed from "Hooks/useMsPassed"
import useUrlHash from "Hooks/useUrlHash"
import useRefs from "Hooks/useRefs"
import useDynamicScroll from "Hooks/useDynamicScroll"

interface ContentProps {
  dynamicScrollDelay?: number,
}

export const Content: FC<ContentProps> = ({
  dynamicScrollDelay = 300
}) => {
  const servicesList = useFazemosList()
  const { data } = servicesList

  // create refs for all articles
  const elRefs = useRefs(data?.length)
  
  // set current scrolled-out element
  const currentArticle = useCurrentlyScrolledElement(elRefs, { wait: 100, margin: 5 })
  const curArticleId = currentArticle?.id ?? ""

  // stop path replacer for the first second, while page loads and scrolls into correct initial section
  const hasScrolledLoad = useMsPassed(750)

  // update path when current scrolled article changes
  useUrlHash(curArticleId, { disable: !hasScrolledLoad })

  useDynamicScroll(dynamicScrollDelay)

  if (!data) return <List><Loading /></List>

  return (
    <Display
      servicos={data}
      serviceEleRefs={elRefs}
    />
  )
}

export default Content
