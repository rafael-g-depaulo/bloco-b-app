import React, { FC } from "react"
import styled from "styled-components"
import Dropdown from "react-bootstrap/Dropdown"

import { usePortfolioList } from "Api/Portfolio"
import Loading from "Components/Loading"

const MyDropdown = styled(Dropdown)<{ blackBg: boolean }>`
  display: inline-block;
  height: fit-content;

  .dropdown-toggle, .btn {
    background: none !important;
    background-color: ${props => props.blackBg ? "black" : "white" } !important;
  }

  .btn-success.dropdown-toggle {
    color: ${props => props.blackBg ? "white" : "black" } !important;
  }

  .btn-success.focus, .btn-success:focus {
    outline: auto;
    box-shadow: 0 0 0px 0.1rem rgb(0 0 0 / 50%) !important;
  }
`

const MyDropdownMenu = styled(Dropdown.Menu)`
  display: flex;
  flex-direction: column;
`
export interface PortifolioInterface {
  blackBg?: boolean;
}
export const Portifolio: FC<PortifolioInterface> = ({
  blackBg,
}) => {
  const { data } = usePortfolioList()
  return (
    <MyDropdown blackBg={blackBg} drop={blackBg === false ? "down" : "up" }>
      <MyDropdown.Toggle  variant="success" id="dropdown-basic">
        Portifolio
      </MyDropdown.Toggle>
    
      <MyDropdownMenu>
        {
          // if loading
          !data ? <Loading /> :

          // if has data
          data
          // .filter(({ pdf }) => pdf)
          .map(({ nome, pdf }) => (
            <MyDropdown.Item key={`${nome}.${pdf?.id}`} href={pdf?.url ?? "#"} target="none">{nome}</MyDropdown.Item>
          ))
        }
      </MyDropdownMenu>
    </MyDropdown>
  )
}

export default Portifolio
