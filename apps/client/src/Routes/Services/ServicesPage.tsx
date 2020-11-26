import React, { FC } from "react"

import Wireframe from "Components/Wireframe"
import useDynamicScroll from "Hooks/useDynamicScroll"

export const Services: FC = () => {

  useDynamicScroll()

  return (
    <Wireframe
      onClickServicos={() => {
        document.querySelector("#root")?.scrollIntoView({ behavior: "smooth" })
      }}
      onClickSomos={() => {}}
      onClickUltimosAnos={() => {}}
    >
      asdssss
    </Wireframe>
  )
}

export default Services
