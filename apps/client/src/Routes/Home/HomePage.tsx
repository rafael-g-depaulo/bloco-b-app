import React, { FC, RefObject, useRef } from "react"
import { useHistory } from "react-router-dom"
import styled from 'styled-components'

import { showOQueFazemos, showPoema, showQuemSomos, showUltimosAnos } from "FeatureFlags"

import AboutUs from 'Pages/AboutUs'
import WhatWeDo from 'Pages/WhatWeDo'
import WhatWeRecentlyDo from 'Pages/WhatWeRecentlyDid'
import Poem from "./Poem"

import Wireframe from "Components/Wireframe"

import useHashUrlScroll from "Hooks/useHashUrlScroll"

import BannerImg1 from "./HomepageBanner1.jpg"
import BannerImg2 from "./HomepageBanner2.jpg"
// import BannerImg3 from "./HomepageBanner3.jpg"

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
    transform: scale(1.02);
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

      {/* SESSÃO DA ANIMAÇÃO */}
      { showPoema && <Poem /> }

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
            <img src={BannerImg1} alt=""/>
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
            <img src={BannerImg2} alt="" />
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
