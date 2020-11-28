import React, { FC } from "react"

import { useFazemosList } from "Api/OQueFazemos"

import Loading from "Components/Loading"
import Display from "./Display"
import List from "./List"

import useHashUrlScroll from "Hooks/useHashUrlScroll"
import useRefs from "Hooks/useRefs"

export const Content: FC = () => {
  const servicesList = useFazemosList()
  const { data } = servicesList

  // create refs for all articles
  const elRefs = useRefs(data?.length)
  
  // handle dynamic scrolling and url hash
  useHashUrlScroll(elRefs)

  if (!data) return <List><Loading /></List>

  return (
    <Display
      servicos={data}
      serviceEleRefs={elRefs}
    />
  )
}

export default Content
