import React, { FC } from "react"
import { Link } from "react-router-dom";
import styled from 'styled-components'
import logo from '../Header/logo-bloco-b.png'

const Container = styled.header`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 20px 5%;
  background-color: #ffffff;
`;

const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  width: 100%;
  max-width: 1120px;

  margin: 0 auto;

  @media(max-width: 992px), (max-width: 767.98px), (max-width: 640px){
    flex-direction: column;

  }
  

  > nav {
    /* margin-top: 65px; */
      button {
        cursor: pointer;
        border: 0;
        background: transparent;
        transition: color .3s ease-out;
        color: #111;
        font-size: 18px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: 2.22;
        letter-spacing: normal;
        text-align: right;

        &:hover {
          color: #000;
        }

        @media(max-width: 992px){
          padding: 11px 11px;
          margin-top: 18px;

        }

        @media(max-width: 767.98px){
          padding: 7px 6px;
          margin-top: 15px;
          font-size: 17px;
        }

        @media(max-width: 640px){
          padding: 5px 4px 0px 5px;
          margin-top: 15px;
        
        }

      }
  }
`;

const Img = styled.img `
  /* margin-top: 40px; */
  width: 251px;
  height: 74px;
  object-fit: contain;
`;


export const Header: FC = ({ children }) => {
  
  return (
    <>
      <Container>
        <HeaderContent>
          <Link to="/">
            <Img src={logo} alt="Bloco B Logo" />
          </Link>
          <nav>
            {children}
          </nav>
        </HeaderContent>
      </Container>
    </>
  )
}

export default Header