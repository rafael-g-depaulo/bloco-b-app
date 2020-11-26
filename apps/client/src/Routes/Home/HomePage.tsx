import React, { FC, RefObject, useEffect, useRef } from "react"
import styled from 'styled-components';
// import Header from 'Components/Header/Header'
import AboutUs from 'Pages/AboutUs'
import WhatWeDo from 'Pages/WhatWeDo'
import WhatWeRecentlyDo from 'Pages/WhatWeRecentlyDid'
// import Footer from 'Components/Footer/Footer'
import { showOQueFazemos, showQuemSomos, showUltimosAnos } from "FeatureFlags";
import Wireframe from "Components/Wireframe";
import { useHistory, useLocation } from "react-router-dom";


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

  function handleScroll(ref: RefObject<HTMLDivElement>) {
    ref.current?.scrollIntoView({ behavior: 'smooth' });
  }

  // handle scroll
  const history = useHistory()
  const { hash } = history.location
  useEffect(() => {
    const element = hash !== "" && document.querySelector(hash)
    if (element) {
      setTimeout(() => element.scrollIntoView({ behavior: 'smooth' }), 800)
    }
  }, [hash])

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
