import React from 'react';
import styled from 'styled-components';
import LogoYoutube from '../Footer/youtubelogo.png';
import LogoInstagram from '../Footer/instagramlogo.png';
import LogoFacebook from '../Footer/facebooklogo.png';
import { useContact } from "Api/Contato"
import Loading from "Components/Loading"
import logoImg from '../Footer/logoimg.png';

const Container = styled.footer`
  display: flex;
  flex-direction: column;
  font-size: 18px;

  width: 100%;
`;

const TopSide = styled.section`
  flex: 1;

  width: 100%;
  background-color: #858475;
  padding: 32px 0;
  height: 288px;
`;

const TopSideContent = styled.div`
  display: flex;

  max-width: 1120px;
  width: 100%;

  margin: 0 auto;
`;

const AddressAndEmail = styled.div`
  display: flex;
  flex-direction: column;

  > div {
    color: #fff;

    > strong {
      margin-bottom: 4px;
    }

    > p {
      color: #ffffffdd;
      font-size: 16px;
    }

    & + div {
      margin-top: 16px;
    }
  }
`;

const SocialMedias = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  margin: 0 24px;

  > strong {
    color: #fff;
  }

  > div {
    display: flex;

    margin-top: 24px;

    > a {
      width: 50px;
      height: 50px;
      text-decoration: none;

      > img {
        width: 100%;
        height: 100%;
        border-radius: 50%;
        filter: brightness(100%);
        transition: filter .3s ease;

        &:hover {
          filter: brightness(90%);
        }
      }

      & + a {
        margin-left: 4px
      }
    }
  }
`;

const BlocoBContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > img {
    margin: auto;
  }

  > strong {
    font-weight: 600;
    font-size: 16px;
    color: #fff;
  }
`;

const BottomSide = styled.section`
  display: flex;
  align-items: center;

  background-color: #000000;
  width: 100%;
  height: 60px;
`;

const BottomSideContent = styled.div`
  display: flex;
  justify-content: space-between;

  max-width: 1120px;
  width: 100%;

  margin: 0 auto;

  color: #fff;

  > nav {
    > button {
      font-size: 18px;
      cursor: pointer;
      border: 0;
      background: transparent;
      transition: color .3s ease-out;
      color: #fff;

      &:hover {
        color: #ddd;
      }
    }
  }
`;

const Footer: React.FC = ({ children }) => {

  const { data, error, isLoading } = useContact()

  // if is loading data
  if (isLoading) return <Loading />

  // if there were any errors
  if (error) return <div>error!</div>


  // if reached here, we know that data is loaded and there is no error
  const endereco = data!
  return (
    <Container>
      <TopSide>
        <TopSideContent>
          <AddressAndEmail>
          <div>
            <strong>Endereço</strong>
            <p>{endereco.endereco}</p>
          </div>
          <div>
            <strong>E-mail</strong>
            <p>{endereco.email}</p>
          </div>
          </AddressAndEmail>
          <SocialMedias>
            <strong>Siga nossas redes sociais</strong>

            <div>
              <a href={endereco.facebookLink}  rel="noopener noreferrer" target="_blank">
                <img src={LogoFacebook} alt="Facebook"/>
              </a>
              <a href={endereco.instagramLink} rel="noopener noreferrer" target="_blank">
                <img src={LogoInstagram} alt="Instagram"/>
              </a>
              <a href={endereco.youtubeLink} rel="noopener noreferrer" target="_blank">
                <img src={LogoYoutube} alt="Youtube"/>
              </a>
            </div>
          </SocialMedias>
          <BlocoBContainer>
            <img src={logoImg} alt="Bloco B Logo" />
            <strong>Fale conosco  e fique por dentro de tudo que a Bloco B está fazendo:</strong>
          </BlocoBContainer>
        </TopSideContent>
      </TopSide>
      <BottomSide>
        <BottomSideContent>
          <strong>©2020 TODOS OS DIREITOS RESERVADOS - blocob.com.br</strong>

          <nav>
            {children}
          </nav>
        </BottomSideContent>
      </BottomSide>
    </Container>
  );
}

export default Footer;