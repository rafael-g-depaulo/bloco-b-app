import { useEffect } from "react"
import { useHistory } from "react-router-dom"

const scrollToTop = () => {
  document.querySelector("#root")?.scrollIntoView({ behavior: "smooth" })
}

const useDynamicScroll = (delay: number = 750) => {
  
  const history = useHistory()
  const { hash } = history.location
  useEffect(() => {
    const element = hash !== "" && document.querySelector(hash)
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), delay)
    } else {
      scrollToTop()
    }
  }, [hash, delay])

}

export default useDynamicScroll