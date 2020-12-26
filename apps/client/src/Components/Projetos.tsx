import React, { FC } from "react"
import styled from "styled-components"

import Dropdown from "react-bootstrap/Dropdown"
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
`

const MyDropdownMenu = styled(Dropdown.Menu)`
  display: flex;
  flex-direction: column;
`
export interface ProjetosInterface {
  blackBg?: boolean;
}
export const Projetos: FC<ProjetosInterface> = ({
  blackBg,
}) => {
  const data = Math.random() > 0.5 ? [{ text: "1" }, { text: "2" }, { text: "3" }] : undefined
  return (
    <MyDropdown blackBg={blackBg} drop={blackBg === false ? "down" : "up" }>
      <MyDropdown.Toggle  variant="success" id="dropdown-basic">
        Projetos
      </MyDropdown.Toggle>
    
      <MyDropdownMenu>
        {
          // if loading
          !data ? <Loading /> :

          // if has data
          data.map(item => (            
            <MyDropdown.Item>{item.text}</MyDropdown.Item>
          ))
        }
      </MyDropdownMenu>
    </MyDropdown>
  )
}

export default Projetos
