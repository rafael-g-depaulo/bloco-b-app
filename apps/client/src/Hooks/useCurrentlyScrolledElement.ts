import { RefObject, useState } from "react"
import useScrollPosition, { Options } from "Hooks/useScrollPosition"
import { getLowestElementOverTop } from "Utils/getLowestElementOverTop"

// hook to select from a list of elements which one, if any,
// has the top of it's containing rectangle above the top of the
// screen. if there are multiple elements in the array that pass
// this condition, the one closest to the top is selected
export default (refs: RefObject<HTMLElement>[], opt: Options) => {
  
  // setup state variable
  const [currentScrolled, setCurrentScrolled] = useState<HTMLElement|null>(null)

  // on scroll, check if current scrolled element has changed
  useScrollPosition(() => {
    const element = getLowestElementOverTop(refs)
    setCurrentScrolled(element)
  }, opt)

  // return element
  return currentScrolled
}