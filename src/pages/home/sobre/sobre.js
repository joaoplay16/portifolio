import React from "react"
import ProfileImg from "img/profile.png"
import IconDecorator from "icons/decorator1.svg"
import styled from "styled-components"

const Sobre = () => {
  return (
    <Introducao className="container">
      <img src={ProfileImg} alt="Foto do perfil" width={290} height={400} />
      <div>
        <h1 className="font-1-xxl cor-1">
          Desenvolvedor <br />
          Fullstack
        </h1>
        <p className="font-1-m cor-2">
          Sou um profissional motivado e autodidata que gosta de resolver
          problemas. Tenho paixão pela usabilidade e experiência do usuário e
          conhecimentos técnicos para criar boas experiências digitais.
        </p>
      </div>
    </Introducao>
  )
}

const Introducao = styled("main")`
  display: grid;
  grid-template-columns: 1fr 2fr;
  gap: 50px;
  align-items: center;
  margin-bottom: 72px;

  h1 {
    position: relative;
  }

  h1::before {
    content: "";
    display: block;
    position: absolute;
    width: 90px;
    height: 115px;
    background: url(${IconDecorator}) no-repeat center;
    top: -20px;
    left: -10px;
    z-index: -1;
  }

  p {
    max-width: 40ch;
  }

  @media (max-width: 1200px) {
    h1 {
      font-size: 4rem;
    }
    h1::before {
      top: -32px;
      left: -23px;
      transform: scale(0.7);
    }
  }

  @media (max-width: 800px) {
    gap: 0 40px;

    h1 {
      font-size: 3rem;
    }

    p {
      font-size: 1.125rem;
    }

    h1::before {
      top: -39px;
      left: -28px;
      transform: scale(0.5);
    }
  }

  @media (max-width: 600px) {
    img {
      display: none;
    }
    align-items: center;
    grid-template-columns: 1fr;
    h1 {
      font-size: 2.5rem;
    }
    h1::before {
      top: -42px;
      left: -30px;
    }
  }
`

export default Sobre
