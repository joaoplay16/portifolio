import { Chip, Footer, Header, LinkButton, Subtitle } from "components"
import React, { useState } from "react"
import styled from "styled-components"
import { 
  BussolaAgilDarkGif,
  BussolaAgilLightGif,
  BussolaAgilImg_2,
  BussolaAgilImg_3,
  BussolaAgilImg_5,
  BussolaAgilImg_6,
} from "img"
import {
  SlideArrowLeftIcon,
  SlideArrowRightIcon,
  GithubIcon,
  PlaystoreIcon,
} from "icons"
import Portfolio from "pages/home/portifolio/portfolio"
const BussolaAgil = () => {
  const projectTechnologies = [
    "Kotlin",
    "Jetpack Compose",
    "Navigation Compose",
    "Sensor Manager",
    "Datastore",
  ]

  const [selectedImageIndex, setselectedImage] = useState(0)

  const images = [
    { src: BussolaAgilLightGif, alt: "Bússola Ágil, tema claro, gif" },
    { src: BussolaAgilImg_5, alt: "Bússola Ágil, home, tema claro, widget minimalista" },
    { src: BussolaAgilImg_6, alt: "Bússola Ágil, tema claro, tela de seleção de widget" },
    { src: BussolaAgilDarkGif, alt: "Bússola Ágil, tema escuro, gif" },
    { src: BussolaAgilImg_2, alt: "Bússola Ágil, home, tema escuro, widget minimalista" },
    { src: BussolaAgilImg_3, alt: "Bússola Ágil, tema escuro, tela de seleção de widget" }
  ]

  const hasNext = selectedImageIndex < images.length - 1
  const hasPrev = selectedImageIndex > 0
  const showLeftArrow = hasPrev ? "visible" : "hidden"
  const showRightArrow = hasNext ? "visible" : "hidden"

  const handleClickArrowRight = (e) => {
    if (hasNext) {
      setselectedImage((prevState) => prevState + 1)
    }
  }

  const handleClickArrowLeft = (e) => {
    if (hasPrev) {
      setselectedImage((prevState) => prevState - 1)
    }
  }

  return (
    <>
      <Header />
      <ProjectContainer className="container">
        <SlideContainer>
          <img
            id="arrow-left"
            style={{ visibility: showLeftArrow }}
            className="arrow"
            src={SlideArrowLeftIcon}
            alt=""
            onClick={handleClickArrowLeft}
          />
          <ProjectImages selectedImageIndex={selectedImageIndex}>
            {images?.map((image) => (
              <img key={image.alt} src={image.src} alt={image.alt} />
            ))}
          </ProjectImages>
          <img
            id="arrow-right"
            style={{ visibility: showRightArrow }}
            className="arrow"
            src={SlideArrowRightIcon}
            alt=""
            onClick={handleClickArrowRight}
          />
        </SlideContainer>
        <InfoContainer>
          <h2 className="fon-1-l cor-0">Bússola Ágil</h2>

          <p className="font-2-s cor-3">
            Bússola Ágil é um app de bússola simples e preciso com um design
            bonito e moderno, possui tema escuro e diferentes estilos de bússola.
            Desenvolvido em Kotlin, utilizando o UI kit Jetpack Compose.
          </p>
          <ul>
            <li className="font-2-s cor-3">
              Neste projeto utilizei a classe SensorManager para obter acesso
              aos sensores de campo geomagnético e acelerômetro do dispositivo e
              com as leituras destes dois sensores, determinar a posição do
              dispositivo em relação o polo norte magnético.
            </li>
            <br />
            <li className="font-2-s cor-3">
              Utilizei DataStore como solução de armazenamento de dados para
              salvar o widget de bússola selecionado.
            </li>
          </ul>
          <TechnologiesContainer>
            {projectTechnologies?.map((tech) => (
              <Chip
                key={tech}
                className="font-1-xs cor-p2"
                color="--cor-p2"
                paddingY={2}
                paddingX={10}
                lineWidth={2}
                borderRadius={15}>
                {tech}
              </Chip>
            ))}
          </TechnologiesContainer>
          <LinksContainer>
            <LinkButtonWithIcon className="link-button">
              <img src={PlaystoreIcon} alt="Ícone Google Play" />
              <LinkButton
                className="font-2-xs cor-0 googleplay"
                href="https://play.google.com/store/apps/details?id=com.playlab.bussolaagil"
                target="_blank">
                ver no google play
              </LinkButton>
            </LinkButtonWithIcon>
            <LinkButtonWithIcon className="link-button">
              <img src={GithubIcon} alt="Ícone Github" />
              <LinkButton
                className="font-2-xs cor-0 googleplay"
                href="https://github.com/joaoplay16/bussola-agil"
                target="_blank">
                repositório do projeto
              </LinkButton>
            </LinkButtonWithIcon>
          </LinksContainer>
        </InfoContainer>
      </ProjectContainer>
      <PortifolioContainer>
        <Portfolio
          itemBackGroundColor="--cor-s2"
          title={<Subtitle>Mais Projetos</Subtitle>}
        />
      </PortifolioContainer>
      <Footer id="contact" />
    </>
  )
}

const ProjectContainer = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
  justify-items: center;
  align-items: start;
  gap: 0px 60px;
  padding: 0px 20px 60px 20px;

  @media (max-width: 900px) {
    justify-content: center;
    grid-template-columns: 1fr;
    row-gap: 40px;
    padding-bottom: 10px;
  }
`

const SlideContainer = styled("div")`
  display: grid;
  grid-template-columns: auto 1fr auto;
  gap: 0px 20px;
  align-items: center;
  justify-items: center;

  .arrow {
    padding: 0px 10px;
  }
`

const ProjectImages = styled("div")`
  --selected-image: calc(
    ${({ selectedImageIndex }) => -(selectedImageIndex * 100)}%
  );
  display: flex;
  overflow: hidden;
  max-width: 300px;
  max-height: 600px;

  img {
    padding-right: 5px;
    transform: ${({ selectedImageIndex }) => {
      if (selectedImageIndex == 0) return "none"
      else return "translateX(var(--selected-image))"
    }};
    transition: 0.3s;
  }
`

const InfoContainer = styled("div")`
  ul {
    list-style: disc;
    margin-left: 25px;
  }
`

const TechnologiesContainer = styled("article")`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  justify-content: start;
  align-items: center;
  padding-top: 34px;

  @media (max-width: 480px) {
    justify-content: center;
  }
`

const LinksContainer = styled("div")`
  display: flex;
  flex-wrap: wrap;
  column-gap: 16px;
  justify-content: space-between;
  padding: 40px 0px;

  @media (max-width: 480px) {
    justify-content: center;
  }
`

const LinkButtonWithIcon = styled("div")`
  display: flex;
  gap: 8px;
  align-items: flex-end;
`

const PortifolioContainer = styled("article")`
  background-color: var(--cor-s4);
  padding-top: 60px;
  padding-bottom: 30px;

  @media (max-width: 800px) {
    padding-top: 40px;
  }
`

export default BussolaAgil
