import { Chip, Footer, Header, Subtitle } from "components"
import React, { useState } from "react"
import styled from "styled-components"
import ComicsInfoImg from "img/comics-info.png"
import ComicsInfoImg2 from "img/comics-info.png"
import ArrowRight from "icons/slide-arrow-right.svg"
import ArrowLeft from "icons/slide-arrow-left.svg"
import PlaystoreIcon from "icons/playstore.svg"
import GithubIcon from "icons/github.svg"
const ComicsInfo = () => {
  const projectTechnologies = [
    "Kotlin",
    "Room",
    "Paging3",
    "Dagger/Hilt",
    "Room",
    "Coil",
    "Datastore",
    "MVVM",
  ]

  const [selectedImageIndex, setselectedImage] = useState(0)

  const images = [
    { src: ComicsInfoImg, alt: "Comics Info tela 1" },
    { src: ComicsInfoImg2, alt: "Comics Info tela 2" },
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
      <Container className="container" id="portfolio">
        <SlideContainer>
          <img
            id="arrow-left"
            style={{ visibility: showLeftArrow }}
            className="arrow"
            src={ArrowLeft}
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
            src={ArrowRight}
            alt=""
            onClick={handleClickArrowRight}
          />
        </SlideContainer>
        <InfoContainer>
          <h2 className="fon-1-l cor-0">Comics Info</h2>

          <p className="font-2-s cor-3">
            Comics Info, é um cliente App para a Marvel API, que obtém
            informações sobre as HQ's Marvel. Desenvolvido em Kotlin, utilizando
            o UI kit Jetpack Compose.{" "}
          </p>
          <ul>
            <li className="font-2-s cor-3">
              Utilizei a arquitetura MVVM, além de conceitos de estado da IU,
              imutabilidade e uma uma única fonte de verdade com o fluxo de
              dados unidirecional.
            </li>
            <br />
            <li className="font-2-s cor-3">
              A experiência do usuário é um aspecto muito importante de um
              produto. Eu tive a oportunidade de implementar uma paginação de
              dados offline, usando Paging3 library e Room.
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
            <LinkButton className="link-button">
              <img src={PlaystoreIcon} alt="Ícone Google Play" />
              <a
                className="font-2-xs cor-0 googleplay"
                href="https://play.google.com/store/apps/details?id=com.playlab.marvelcomicsinfo">
                ver no google play
              </a>
            </LinkButton>
            <LinkButton className="link-button">
              <img src={GithubIcon} alt="Ícone Github" />
              <a
                className="font-2-xs cor-0 googleplay"
                href="https://github.com/joaoplay16/marvel-comics-info">
                github do projeto
              </a>
            </LinkButton>
          </LinksContainer>
        </InfoContainer>
      </Container>
      <Footer id="contact" />
    </>
  )
}

const Container = styled("article")`
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

const LinkButton = styled("div")`
  display: flex;
  gap: 8px;
  align-items: flex-end;

  a {
    align-self: center;
    margin-top: 8px;
    padding: 8px 0px;
    position: relative;
  }

  a::after {
    content: "";
    display: block;
    position: absolute;
    background-color: var(--cor-0);
    width: 100%;
    height: 2px;
    top: 25px;
  }

  a::before {
    content: "";
    display: block;
    position: absolute;
    width: 32px;
    height: 32px;
    bottom: 0px;
    left: -40px;
  }
`

export default ComicsInfo
