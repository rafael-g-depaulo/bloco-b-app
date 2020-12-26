import React, { FC } from "react"
import styled from "styled-components"

import Dropdown from "react-bootstrap/Dropdown"
import Loading from "Components/Loading"

const MyDropdown = styled(Dropdown)`
  display: inline-block;
  height: fit-content;

  .dropdown-toggle, .btn {
    background: none !important;
    background-color: white !important;
    /* margin: ; */
  }

  .btn-success.dropdown-toggle {
    color: black !important;
  }
`

const MyDropdownMenu = styled(Dropdown.Menu)`
  display: flex;
  flex-direction: column;
`

export const Projetos: FC = () => {
  const data = Math.random() > 0.5 ? [{ text: "1" }, { text: "2" }, { text: "3" }] : undefined
  return (
    <MyDropdown>
      <MyDropdown.Toggle variant="success" id="dropdown-basic">
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
