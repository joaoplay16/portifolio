import { Chip, Footer, Header, LinkButton, Subtitle } from "components"
import React, { useState } from "react"
import styled from "styled-components"
import {
  EscapeRoomTimerTimerRunning,
  EscapeRoomTimerTimerStopped,
  EscapeRoomTimerSettings,
  EscapeRoomTimerGif,
} from "img"
import {
  SlideArrowLeftIcon,
  SlideArrowRightIcon,
  GithubIcon,
  PlaystoreIcon,
} from "icons"
import Portfolio from "pages/home/portifolio/portfolio"
const EscapeRoomTimer = () => {
  const projectTechnologies = ["Kotlin", "Jetpack Compose", "MVVM", "MediaPlayer Api", "Coroutines"]

  const [selectedImageIndex, setSelectedImage] = useState(0)

  const images = [
    { src: EscapeRoomTimerGif, alt: "Escape Room Timer home, gif" },
    { src: EscapeRoomTimerSettings, alt: "Escape Room Timer, settings" },
    {
      src: EscapeRoomTimerTimerStopped,
      alt: "Escape Room Timer, timer stoped",
    },
    {
      src: EscapeRoomTimerTimerRunning,
      alt: "Escape Room Timer, timer stoped",
    },
  ]

  const hasNext = selectedImageIndex < images.length - 1
  const hasPrev = selectedImageIndex > 0
  const showLeftArrow = hasPrev ? "visible" : "hidden"
  const showRightArrow = hasNext ? "visible" : "hidden"

  const handleClickArrowRight = (e) => {
    if (hasNext) {
      setSelectedImage((prevState) => prevState + 1)
    }
  }

  const handleClickArrowLeft = (e) => {
    if (hasPrev) {
      setSelectedImage((prevState) => prevState - 1)
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
          <h2 className="fon-1-l cor-0">Escape Room Timer</h2>

          <p className="font-2-s cor-3">
            Escape Room Timer é um app que simula uma bomba relógio, tente desarmá-la
            antes que exploda, erre o código e o tempo encurtará e tudo irá
            pelos ares. Pode ser usado em partidas de Airsoft, Paintball ou em
            casa. Feito para divertir com os amigos.
          </p>
          <ul>
            <li className="font-2-s cor-3">
              Utilizei Api MediaPlayer em conjunto com Kotlin Coroutines para reproduzir
              os efeitos sonoros.
            </li>
            <br />
            <li className="font-2-s cor-3">
              Utilizei a arquitetura MVVM, além de conceitos de estado da IU,
              imutabilidade e uma uma única fonte de verdade com o fluxo de
              dados unidirecional.
            </li>
            <br />
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
                href="https://play.google.com/store/apps/details?id=com.playlab.escaperoomtimer" target="_blank">
                ver no google play
              </LinkButton>
            </LinkButtonWithIcon>
            <LinkButtonWithIcon className="link-button">
              <img src={GithubIcon} alt="Ícone Github" />
              <LinkButton
                className="font-2-xs cor-0 googleplay"
                href="https://github.com/joaoplay16/escape-room-timer" target="_blank">
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

export default EscapeRoomTimer
