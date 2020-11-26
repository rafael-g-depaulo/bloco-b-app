import React from 'react'
import styled, { css } from 'styled-components'

import { PulseLoader } from 'react-spinners'

const Centralize = styled.div<{ fullpage: boolean }>`
  display: flex;

  justify-content: center;
  align-items: center;

  width: 100%;
  max-height: 100%;
  height: 100%;

  padding: 3em;

  ${({ fullpage }) => fullpage && css`height: 100vh;` }
`

export const Loading = ({
  fullpage = false,
  ...props
}) => {

  const size = 
    fullpage ? 80 :
    undefined
  
  const margin = 
    fullpage ? 20 :
    undefined

  return (
    <Centralize fullpage={fullpage} {...props}>
      <PulseLoader
        color="#d12b15"
        size={size}
        margin={margin}
      />
    </Centralize>
    // <div>loading...</div>
  )
}

export default Loading
