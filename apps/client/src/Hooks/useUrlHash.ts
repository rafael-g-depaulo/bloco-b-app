import { useEffect } from "react"
import { useHistory } from "react-router-dom"
// hook to set url hash based on given string

interface Options {
  disable?: boolean
}

export default (hash: string, { disable = false }: Options) => {

  const history = useHistory()
  useEffect(() => {
    if (!disable) {
      if (hash === "") history.replace(`${history.location.pathname}`)
      else history.replace(`${history.location.pathname}#${hash}`)
    }
  }, [hash, history, disable])
}
