import { RefObject } from "react"

export const getLowestElementOverTop = (elementRefs: RefObject<HTMLElement>[]) => {
  
  // list of elements whose top is over the top of the screen, sorted by closest to the top
  const elementsOverTop = elementRefs
    .filter(ele => ele.current)
    .map(ele => ele.current!)
    .map(ele => ({ ele, rec: ele.getBoundingClientRect() }))
    .filter(({ rec }) => rec.y && rec.y <= 0)
    .sort(({ rec: a }, { rec: b}) => b.y - a.y)

  // if there is at least one element above the screem, return it
  // if there isnt, return null
  return (elementsOverTop.length > 0) 
    ? elementsOverTop[0].ele
    : null

}