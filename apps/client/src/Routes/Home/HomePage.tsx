import React, { FC, RefObject, useRef } from "react"
import styled from 'styled-components';
import Header from 'Components/Header/Header'
import AboutUs from 'Pages/AboutUs'
import WhatWeDo from 'Pages/WhatWeDo'
import WhatWeRecentlyDo from 'Pages/WhatWeRecentlyDid'
import Footer from 'Components/Footer/Footer'


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
  const homeRef = useRef<HTMLDivElement>(null);
  const aboutUsRef = useRef<HTMLDivElement>(null);
  const whatWeDoRef = useRef<HTMLDivElement>(null);
  const whatWeRecentlyDidRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);


  function handleScroll(ref: RefObject<HTMLDivElement>) {
    ref.current?.scrollIntoView({ behavior: 'smooth' }); 
  }

  return (
    <div>
      <div ref={homeRef}>
        <Header>
          <button type="button" onClick={() => handleScroll(homeRef)}>Home</button>
          <button type="button" onClick={() => handleScroll(aboutUsRef)}>Quem Somos</button>
          <button type="button" onClick={() => handleScroll(whatWeDoRef)}>Serviços</button> 
          <button type="button" onClick={() => handleScroll(whatWeRecentlyDidRef)}>O que fizemos nos últimos anos</button>
          <button type="button" onClick={() => handleScroll(contactRef)}>Contato</button>
        </Header>
      </div>

      <div ref={aboutUsRef}>
        <AboutUs />
      </div>
      <ImgContainer>
        <img src="https://d12dkjq56sjcos.cloudfront.net/pub/media/magefan_blog/l/o/louvre-museum-paris-big-bus-tours-jan-2017.jpg" alt=""/>
      </ImgContainer>
      <div ref={whatWeDoRef}>
        <WhatWeDo />
      </div>
      <ImgContainer>
        <img src="https://tul.imgix.net/content/article/things-to-do-queenstown-1.jpg?auto=format,compress&w=1200&h=630&fit=crop" alt="Queenstown" />
      </ImgContainer>
      <div ref={whatWeRecentlyDidRef}>
        <WhatWeRecentlyDo />
      </div>
      <div ref={contactRef}>
        <Footer>
          <button type="button" onClick={() => handleScroll(homeRef)}>Home</button>
          <button type="button" onClick={() => handleScroll(aboutUsRef)}>Quem Somos</button>
          <button type="button" onClick={() => handleScroll(whatWeDoRef)}>Serviços</button> 
          <button type="button" onClick={() => handleScroll(whatWeRecentlyDidRef)}>O que fizemos nos últimos anos</button>
          <button type="button" onClick={() => handleScroll(contactRef)}>Contato</button>
        </Footer>
      </div>
    </div>
    
  )
}

export default HomePage
