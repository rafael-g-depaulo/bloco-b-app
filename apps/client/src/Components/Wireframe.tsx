import { showOQueFazemos, showPortfolio, showQuemSomos, showUltimosAnos } from "FeatureFlags"
import React, { FC, RefObject, useRef } from "react"
import Footer from "Components/Footer/Footer"
import Header from "Components/Header/Header"

import styled from "styled-components"
import NavItem from "Components/Header/NavItem"

const Content = styled.main`
  flex-grow: 1;
`

const Container = styled.div`
  height: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
`
type OnClickFn = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void

export interface WireframeProps {
  onClickHome?: OnClickFn,
  onClickSomos: OnClickFn,
  onClickServicos: OnClickFn,
  onClickUltimosAnos: OnClickFn,
  onClickContato?: OnClickFn,
}

const NavItems: FC<WireframeProps> = ({
  onClickHome,
  onClickSomos,
  onClickServicos,
  onClickUltimosAnos,
  onClickContato,
}) => (
  <>
    <NavItem to="/" onClick={onClickHome}>Home</NavItem>
      { showQuemSomos   && <NavItem to="/#sobre-nos" onClick={onClickSomos}>Quem Somos</NavItem> }
      { showOQueFazemos && <NavItem to="/services" onClick={onClickServicos}>Serviços</NavItem> }
      { showUltimosAnos && <NavItem to="/#fizemos-recentemente" onClick={onClickUltimosAnos}>O que fizemos nos últimos anos</NavItem> }
      { showPortfolio   && <NavItem to="/portifolio">Portifólio</NavItem> }
    <NavItem to="/#contato" onClick={onClickContato}>Contato</NavItem>
  </>
)

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
          <NavItems
            onClickHome={onClickHome ?? defaultOnClickHome}
            onClickSomos={onClickSomos}
            onClickServicos={onClickServicos}
            onClickUltimosAnos={onClickUltimosAnos}
            onClickContato={onClickContato ?? defaultOnClickContato}
          />
        </Header>
      </div>

      {/* body of the page */}
      <Content>
        {children}
      </Content>
      
      {/* footer */}
      <div ref={contactRef} id="contato">
        <Footer>
          <NavItems
            onClickHome={onClickHome ?? defaultOnClickHome}
            onClickSomos={onClickSomos}
            onClickServicos={onClickServicos}
            onClickUltimosAnos={onClickUltimosAnos}
            onClickContato={onClickContato ?? defaultOnClickContato}
          />
        </Footer>
      </div>
    </Container>
  )
}

export default Wireframe
