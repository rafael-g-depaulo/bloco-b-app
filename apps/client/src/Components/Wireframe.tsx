import { showOQueFazemos, showQuemSomos, showUltimosAnos } from "FeatureFlags"
import React, { FC, RefObject, useRef } from "react"
import Footer from "Components/Footer/Footer"
import Header from "Components/Header/Header"

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
    <div>
      
      {/* header */}
      <div ref={homeRef}>
        <Header>
          <button type="button" onClick={onClickHome ?? defaultOnClickHome}>Home</button>
          { showQuemSomos && <button type="button" onClick={onClickSomos}>Quem Somos</button> }
          { showOQueFazemos && <button type="button" onClick={onClickServicos}>Serviços</button> }
          { showUltimosAnos && <button type="button" onClick={onClickUltimosAnos}>O que fizemos nos últimos anos</button> }
          <button type="button" onClick={onClickContato ?? defaultOnClickContato}>Contato</button>
        </Header>
      </div>


      {/* body of the page */}
      {children}
      
      {/* footer */}
      <div ref={contactRef}>
        <Footer>
          <button type="button" onClick={onClickHome ?? defaultOnClickHome}>Home</button>
          { showQuemSomos && <button type="button" onClick={onClickSomos}>Quem Somos</button> }
          { showOQueFazemos && <button type="button" onClick={onClickServicos}>Serviços</button> }
          { showUltimosAnos && <button type="button" onClick={onClickUltimosAnos}>O que fizemos nos últimos anos</button> }
          <button type="button" onClick={onClickContato ?? defaultOnClickContato}>Contato</button>
        </Footer>
      </div>
    </div>
  )
}

export default Wireframe
