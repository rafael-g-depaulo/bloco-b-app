import React, { FC } from "react"

import Wireframe from "Components/Wireframe"

export interface ListPortfolioProps {
  
}

export const ListPortfolio: FC<ListPortfolioProps> = ({
  
}) => {
  return (
    <Wireframe
      onClickServicos={() => {}}
      onClickUltimosAnos={() => {}}
      onClickSomos={() => {}}
    >
      portfolio
    </Wireframe>
  )
}

export default ListPortfolio
