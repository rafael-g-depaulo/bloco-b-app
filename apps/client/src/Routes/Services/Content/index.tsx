import React, { FC } from "react"
import styled from "styled-components"

import { useFazemosList } from "Api/OQueFazemos"

const List = styled.div`
  display: flex;
  flex-direction: column;
`

export const Content: FC = () => {
  const servicesList = useFazemosList()

  const { data } = servicesList

  if (!data) return <div>a</div>

  return (
    <List>
      {/* TODO: Add service content here */}
      <pre>{JSON.stringify(data[0], null, 2)}</pre>
    </List>
  )
}

export default Content
