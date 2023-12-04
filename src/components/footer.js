import React from "react"
import styled from "styled-components"
import {LinkedinIcon, WhatsappIcon,GithubIcon, PlaystoreIcon} from "icons"


const Footer = ({id}) => (
  <FooterStyled id={id}>
    <FooterContainer className="container">
      <p className="message font-2-m cor-4">
        Estou disponível para novos projetos no momento. Entre em contato comigo
        e marcamos uma conversa 👋
      </p>
      <ul className="font-2-m cor-4 contact-container">
        <li>
          <a href="mailto:joaoplay16@gmail.com">joaoplay16@gmail.com</a>
        </li>
        <ul className="icons-container">
          <li>
            <a
              href="https://www.linkedin.com/in/joao-pedro-de-freitas/"
              target="_blank">
              <img src={LinkedinIcon} alt="Ícone Linkedin" />
            </a>
          </li>
          <li>
            <a href="https://github.com/joaoplay16" target="_blank">
              <img src={GithubIcon} alt="Ícone Github" />
            </a>
          </li>
          <li>
            <a
              href="https://play.google.com/store/apps/developer?id=Play+Lab"
              target="_blank">
              <img src={PlaystoreIcon} alt="Ícone Playstore" />
            </a>
          </li>
        </ul>
      </ul>
      <p className="developer font-1-s cor-4">Desenvolvido por min 🔨️</p>
    </FooterContainer>
  </FooterStyled>
)

const FooterStyled = styled("footer")`
  background-color: var(--cor-s5);
`

const FooterContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  background-color: var(--cor-s5);
  padding-top: 120px;

  .message {
    margin-top: 0px;
    max-width: 35ch;
  }

  .contact-container {
    justify-self: end;
  }

  .contact-container li {
    padding-bottom: 5px;

    img {
      filter: brightness(78%) ;
    }
  }

  .contact-container li a:hover {
    color: var(--cor-2);
    img {
      filter: brightness(95%);
    }
  }
  .phone {
    display: flex;
  }

  .phone img {
    margin-right: 3px;
  }

  .icons-container {
    display: flex;
    gap: 32px;
  }

  .icons-container img {
    padding: 20px 0px;
  }

  .developer {
    margin-top: 60px;
    align-self: bottom;
  }

  @media (max-width: 800px) {
  padding-top: 60px;
    grid-template-columns: 1fr;

    .message, 
    .contact-container {
      font: 400 1.125rem/1.33 "Roboto Mono", sans-serif;
    }

    .phone img {
    transform: scale(0.9);
  }
  
    .contact-container {
      margin-top: 20px;
      justify-self: start;
    }
  }
`

export default Footer
