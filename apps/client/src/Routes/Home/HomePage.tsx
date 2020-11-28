import React, { FC, RefObject, useRef } from "react"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'

import { showOQueFazemos, showQuemSomos, showUltimosAnos } from "FeatureFlags"

import AboutUs from 'Pages/AboutUs'
import WhatWeDo from 'Pages/WhatWeDo'
import WhatWeRecentlyDo from 'Pages/WhatWeRecentlyDid'

import Wireframe from "Components/Wireframe"

import useHashUrlScroll from "Hooks/useHashUrlScroll"

const ImgContainer = styled.div`
width: 100%;
height: 417px;
cursor: pointer;
overflow: hidden;

> img {
  width: 100%;
  height: 100%;
  transition: all .2s ease-out;
  object-fit: cover;
}

&:hover {
  > img {
    transform: scale(1.1);
  }
}
`;

export const HomePage: FC = () => {
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const whatWeRecentlyDidRef = useRef<HTMLDivElement>(null);
  const eleRefs = [
    aboutUsRef,
    whatWeDoRef,
    whatWeRecentlyDidRef,
  ]

  function handleScroll(ref: RefObject<HTMLDivElement>) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }
  
  // history (for links)
  const history = useHistory()
  const { hash } = history.location

  // handle dynamic scroll
  useHashUrlScroll(eleRefs)

  return (
    <Wireframe
      onClickSomos={() => history.location.pathname === "/" && hash === "#sobre-nos" && handleScroll(aboutUsRef)}
      onClickServicos={() => history.location.pathname === "/" && hash === "#o-que-fazemos" && handleScroll(whatWeDoRef)}
      onClickUltimosAnos={() => history.location.pathname === "/" && hash === "#fizemos-recentemente" && handleScroll(whatWeRecentlyDidRef)}
    >

      {/* SESSÃO DE QUEM SOMOS */}
      { showQuemSomos &&
      <>
          <div ref={aboutUsRef} id="sobre-nos">
            <AboutUs />
          </div>
        </>
      }

      {/* SESSÃO DE O QUE FAZEMOS (SERVIÇOS) */}
      { showOQueFazemos &&
      <>
          <ImgContainer>
            <img src="https://d12dkjq56sjcos.cloudfront.net/pub/media/magefan_blog/l/o/louvre-museum-paris-big-bus-tours-jan-2017.jpg" alt=""/>
          </ImgContainer>
          <div ref={whatWeDoRef} id="o-que-fazemos" >
            <WhatWeDo />
          </div>
        </>
      }

      {/* SESSÃO DE O QUE FIZEMOS NOS ULTIMOS ANOS */}
      { showUltimosAnos &&
      <>
          <ImgContainer>
            <img src="https://tul.imgix.net/content/article/things-to-do-queenstown-1.jpg?auto=format,compress&w=1200&h=630&fit=crop" alt="Queenstown" />
          </ImgContainer>
          <div ref={whatWeRecentlyDidRef} id="fizemos-recentemente" >
            <WhatWeRecentlyDo />
          </div>
        </>
      }

    </Wireframe>
  )
}

export default HomePage
