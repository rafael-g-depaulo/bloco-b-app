import { useCallback, useLayoutEffect, useState } from "react"
import { useHistory } from "react-router-dom"

// const scrollToTop = () => {
//   document.querySelector("#root")?.scrollIntoView({ behavior: "smooth" })
// }

const useDynamicScroll = (delay: number = 750) => {
  
  const history = useHistory()
  const { hash } = history.location

  console.log(`hash "${hash}"`)

  // scroll to element (or root) only once
  const [hasScrolled, setScrolled] = useState(false)
  const scrollToElement = useCallback((element: Element | null) => {
    element = element ?? document.querySelector("#root")
    if (!hasScrolled) {
      setScrolled(true)
      element?.scrollIntoView({ behavior: "smooth" })
    }
  }, [hasScrolled])

  useLayoutEffect(() => {
    // wait until window & content loads and then search for element and scroll to it
    setTimeout(() => {
      try {
        const element = hash === "" ? null : document.querySelector(hash)
        scrollToElement(element)
        console.log("scrolling to element", element, hash)
      } catch (e) {
        scrollToElement(null)
        console.log(e, "scrolling to root, because im a dumb boy", hash)
      }
    }, delay)
  }, [delay, hash, scrollToElement])

}

export default useDynamicScroll