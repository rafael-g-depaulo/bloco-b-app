import { showOQueFazemos, showQuemSomos, showUltimosAnos } from "FeatureFlags"
import React, { FC, RefObject, useRef } from "react"
import Footer from "Components/Footer/Footer"
import Header from "Components/Header/Header"

import styled from "styled-components"
import Link from "Components/EmptyLink"
import NavItem from "./Header/NavItem"

const Content = styled.main`
  flex-grow: 1;
`

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`

export interface WireframeProps {
  onClickHome?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  onClickSomos: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  onClickServicos: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  onClickUltimosAnos: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
  onClickContato?: (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void,
}

export const Wireframe: FC<WireframeProps> = ({
  onClickHome,
  onClickSomos,
  onClickServicos,
  onClickUltimosAnos,
  onClickContato,
  children,
}) => {
  
  const contactRef = useRef<HTMLDivElement>(null);
  const homeRef = useRef<HTMLDivElement>(null);
  const handleScroll = (ref: RefObject<HTMLDivElement>) => ref.current?.scrollIntoView({ behavior: 'smooth' }); 
  const defaultOnClickContato = () => handleScroll(contactRef)
  const defaultOnClickHome = () => handleScroll(homeRef)
  return (
    <Container>
      
      {/* header */}
      <div ref={homeRef}>
        <Header>
          <NavItem to="/" onClick={onClickHome ?? defaultOnClickHome}>Home</NavItem>
          { showQuemSomos   && <NavItem to="/#sobre-nos" onClick={onClickSomos}>Quem Somos</NavItem> }
          { showOQueFazemos && <NavItem to="/services" onClick={onClickServicos}>Serviços</NavItem> }
          { showUltimosAnos && <NavItem to="/#fizemos-recentemente" onClick={onClickUltimosAnos}>O que fizemos nos últimos anos</NavItem> }
          <NavItem to="/#contato" onClick={onClickContato ?? defaultOnClickContato}>Contato</NavItem>
        </Header>
      </div>


      {/* body of the page */}
      <Content>
        {children}
      </Content>
      
      {/* footer */}
      <div ref={contactRef} id="contato">
        <Footer>
          <NavItem to="/" onClick={onClickHome ?? defaultOnClickHome}>Home</NavItem>
          { showQuemSomos   && <NavItem to="/#sobre-nos" onClick={onClickSomos}>Quem Somos</NavItem> }
          { showOQueFazemos && <NavItem to="/services" onClick={onClickServicos}>Serviços</NavItem> }
          { showUltimosAnos && <NavItem to="/#fizemos-recentemente" onClick={onClickUltimosAnos}>O que fizemos nos últimos anos</NavItem> }
          <NavItem to="/#contato" onClick={onClickContato ?? defaultOnClickContato}>Contato</NavItem>
        </Footer>
      </div>
    </Container>
  )
}

export default Wireframe
