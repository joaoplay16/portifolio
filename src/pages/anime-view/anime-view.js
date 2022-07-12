import { Chip, Footer, Header, LinkButton, Subtitle } from "components"
import React, { useState } from "react"
import styled from "styled-components"
import { AnimeViewImg, AnimeViewImg_2, AnimeViewImg_3 } from "img"
import {
  SlideArrowLeftIcon,
  SlideArrowRightIcon,
  PlaystoreIcon,
  GithubIcon,
} from "icons"
import Portfolio from "pages/home/portifolio/portfolio"
const AnimeView = () => {
  const projectTechnologies = [
    "Java",
    "SQLite",
    "Content Provider",
    "Recycleview",
    "Swipe To Delete",
  ]

  const [selectedImageIndex, setselectedImage] = useState(0)

  const images = [
    { src: AnimeViewImg, alt: "Comics Info tela 1" },
    { src: AnimeViewImg_2, alt: "Comics Info tela 2" },
    { src: AnimeViewImg_3, alt: "Comics Info tela 3" },
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
          <h2 className="fon-1-l cor-0">Anime View</h2>

          <p className="font-2-s cor-3">
            Anime View é um criador de lembretes dos últimos episódios de séries
            de animes assistidos, chegou a +400 downloads no Google Play,
            suportando 177 países em 4 idiomas.
          </p>
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
                href="https://play.google.com/store/apps/details?id=com.playlab.animeview"
                target="_blank">
                ver no google play
              </LinkButton>
            </LinkButtonWithIcon>
            <LinkButtonWithIcon className="link-button">
              <img src={GithubIcon} alt="Ícone Github" />
              <LinkButton
                className="font-2-xs cor-0 googleplay"
                href="https://github.com/joaoplay16/animeview"
                target="_blank">
                github do projeto
              </LinkButton>
            </LinkButtonWithIcon>
          </LinksContainer>
        </InfoContainer>
      </ProjectContainer>
      <PortifolioContainer>
        <Portfolio title={<Subtitle>Mais Projetos</Subtitle>} />
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

export default AnimeView
