import React from "react"
import { Subtitle } from "components"
import styled from "styled-components"
import { MeritAwardImg } from "img"
import { TranslateIcon } from "icons"
const Formacao = () => (
  <EducationSection id="education">
    <div className="container">
      <Subtitle>Formação</Subtitle>
    </div>
    <EducationContainer className="container">
      <img
        width={400}
        height={530}
        src={MeritAwardImg}
        alt="Prêmio de Honra ao Mérito, segundo lugar"
      />

      <EducationInfoContainer>
        <p className="history font-2-m cor-2">
          Meu primeiro contato com o mundo do desenvolvimento de software foi na
          faculdade, onde descobri as coisas incríveis que poderia criar através
          da programação. Poder transformar uma idéia em algo real, é uma
          experiência única. Não parei por aí, estou sempre aprendendo e criando
          coisas novas, e nunca vou me cansar disso :).
        </p>
        <CollegeContainer>
          <span className="graduation cor-6">Tecnólogo</span>
          <span className="course cor-1">Sistemas para Internet</span>
          <span className="date cor-6">Junho 2015 a Dezembro 2017</span>
          <span className="college cor-6">
            Faculdade de Educação de Bacabal - FEBAC
          </span>
        </CollegeContainer>
        <LanguagesContainer>
          <h6 className="languages-subtitle font-1-xs-b cor-6">Idiomas</h6>
          <p className="language font-2-s cor-1">
            Inglês<span className="level font-2-s cor-6"> / Básico</span>
          </p>
        </LanguagesContainer>
      </EducationInfoContainer>
    </EducationContainer>
  </EducationSection>
)

const EducationSection = styled("section")`
  background-color: var(--cor-s4);
  margin-top: 72px;
  padding-top: 60px;
  padding-bottom: 20px;
`

const EducationContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;
  align-items: start;
  gap: 20px;
  padding: 30px 60px;

  img {
    max-width: 100%;
    max-height: 530px;
    object-fit: cover;
    object-position: left;
    border-radius: 15px;
    box-shadow: 0 0px 4px 0.5px rgb(10, 39, 55, 0.5);
  }

  .history{
    margin-top: 0px;
  }

  @media (max-width: 1200px) {
    gap: 40px;
    .history {
      font: 400 1.125rem/1.33 "Roboto Mono", sans-serif;
    }
  }

  @media (max-width: 860px) {
    padding: 40px 20px;
    grid-template-columns: 1fr;

    .history {
      padding: 0px 0px;
    }
  }
`

const EducationInfoContainer = styled('div')`
  display: grid;
  grid-template-columns: auto;
  grid-auto-flow: row;
`

const LanguagesContainer = styled("div")`
  padding: 15px;

  .languages-subtitle {
    text-transform: uppercase;
    margin-bottom: 12px;
    position: relative;
  }

  .languages-subtitle::before {
    content: "";
    display: block;
    position: absolute;
    width: 24px;
    height: 24px;
    background: url(${TranslateIcon});
    top: -6px;
    left: -30px;
  }
`

const CollegeContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  background-color: var(--cor-s5);
  max-width: 600px;
  max-height: 195px;
  padding: 20px 12px;
  border-radius: 5px;
  position: relative;

  ::before {
    content: "";
    display: block;
    position: absolute;
    width: 4px;
    height: 20px;
    background: linear-gradient(180deg, #71f2d3 0%, #21bc97 100%);
    top: 58px;
    left: -10px;
  }

  .graduation {
    grid-column: 1/-1;
    font: 400 1rem/0.8 "Archivo", sans-serif;
    padding: 5px 0px;
    text-transform: uppercase;
  }

  .course {
    font: 700 1.5rem/1.08 "Archivo", sans-serif;
  }

  .date {
    font: 400 1rem/1.08 "Roboto Mono", sans-serif;
    justify-self: end;
    text-align: end;
    max-width: 13ch;
  }

  .college {
    padding-top: 30px;
    font: 400 1rem/1.08 "Roboto Mono", sans-serif;
    grid-column: 1/-1;
  }
`

export default Formacao
