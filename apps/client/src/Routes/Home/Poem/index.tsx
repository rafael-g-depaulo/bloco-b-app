import React, { FC, useCallback, useState } from "react"
import styled from "styled-components"

import { usePoem } from "Api/Poem"

import Capa from "./Capa"
import Video from "./Video"

export const PoemString = `
Cabe muito na Bloco B

Cabe Brasília
Múltipla
Diversa
Com sua arquitetura do futuro
Dos espaços vazios
Das tesourinhas
Planos, eixos, retas concretas
Dos horizontes descomedidos
Azul sem limite

Cabe cultura
Todos os ritmos
A leveza do movimento
O riso
O drama
Nossas origens e sonhos

Cabe o Brasil
Da diversidade
Da tradição
Da inovação

Cabe tudo
Cabem todos
Na Bloco B
`

const Container = styled.div`
  max-height: 95vh;
  height: 95vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`

export const Poem: FC = () => {
  const [playVideo, setBright] = useState(false)
  const toggleVideo = useCallback(() => setBright(play => !play), [setBright])

  // fetch video url from API
  const { data } = usePoem()

  // if no data, render nothing
  if (!data) return <div></div>

  return (
    <Container>
      { playVideo
        ? <Video onClick={toggleVideo} video={data.video} />
        : <Capa onClick={toggleVideo} image={data.imagem} />
      }
    </Container>
  )
}

export default Poem
