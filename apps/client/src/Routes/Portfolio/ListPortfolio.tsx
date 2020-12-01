import React, { FC } from "react"

import Wireframe from "Components/Wireframe"
import Banner from "Components/PageBanner"

export const ListPortfolio: FC = () => {
  return (
    <Wireframe
      onClickServicos={() => {}}
      onClickUltimosAnos={() => {}}
      onClickSomos={() => {}}
    >
      <Banner>Portifólio</Banner>
    </Wireframe>
  )
}

export default ListPortfolio
