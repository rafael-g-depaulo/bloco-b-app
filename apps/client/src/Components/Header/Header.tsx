import React, { FC } from "react"
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

  > nav {
    /* margin-top: 65px; */
      > button {
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
      }
  }
`;

const Img = styled.img `
  /* margin-top: 40px; */
  width: 251px;
  height: 74px;
  object-fit: contain;
`;

//To remove
  const Animation = styled.img`
  width: 100%;
  height: 600px;
  /* margin-top: 50px; */
`;

export const Header: FC = ({ children }) => {
  
  return (
    <>
      <Container>
        <HeaderContent>
          <Img src={logo} alt="Bloco B Logo" />
          <nav>
            {children}
          </nav>
        </HeaderContent>
      </Container>

      <Animation src="https://wallpaperaccess.com/full/172092.jpg" />
    </>
  )
}

export default Header