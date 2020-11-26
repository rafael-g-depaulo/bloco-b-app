import { useEffect } from "react"
import { useHistory } from "react-router-dom"

const scrollToTop = () => {
  document.querySelector("#root")?.scrollIntoView({ behavior: "smooth" })
}

const useDynamicScroll = () => {
  
  const history = useHistory()
  const { hash } = history.location
  useEffect(() => {
    const element = hash !== "" && document.querySelector(hash)
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 800)
    } else {
      scrollToTop()
    }
  }, [hash])

}

export default useDynamicScroll