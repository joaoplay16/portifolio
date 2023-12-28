import { Chip, Footer, Header, LinkButton, Subtitle } from "components"
import React, { useState } from "react"
import styled from "styled-components"
import {
  AgendamentoWebImg_2,
  AgendamentoWebImg_3,
  AgendamentoWebImg_4,
  AgendamentoWebImg_5,
  AgendamentoWebImg_6,
  AgendamentoWebImg_7,
  AgendamentoWebImg_8,
  AgendamentoWebImg_9,
  AgendamentoWebImg_10,
} from "img"

import { LinkIcon } from "icons"

import { SlideArrowLeftIcon, SlideArrowRightIcon, GithubIcon } from "icons"
import Portfolio from "pages/home/portifolio"
const AgendamentoWeb = () => {
  const projectTechnologies = [
    "React",
    "MaterialUI",
    "Firestore",
    "Mercado Pago",
    "Authentication",
  ]

  const [selectedImageIndex, setSelectedImage] = useState(0)

  const images = [
    { src: AgendamentoWebImg_10, alt: "Agendamento Web tela 10" },
    { src: AgendamentoWebImg_2, alt: "Agendamento Web tela 2" },
    { src: AgendamentoWebImg_3, alt: "Agendamento Web tela 3" },
    { src: AgendamentoWebImg_4, alt: "Agendamento Web tela 4" },
    { src: AgendamentoWebImg_5, alt: "Agendamento Web tela 5" },
    { src: AgendamentoWebImg_6, alt: "Agendamento Web tela 6" },
    { src: AgendamentoWebImg_7, alt: "Agendamento Web tela 7" },
    { src: AgendamentoWebImg_8, alt: "Agendamento Web tela 8" },
    { src: AgendamentoWebImg_9, alt: "Agendamento Web tela 9" },
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
          <ProjectImages
            id="project-images"
            selectedImageIndex={selectedImageIndex}>
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
          <h2 className="fon-1-l cor-0">Agendamento Web</h2>

          <p className="font-2-s cor-3">
            Agendamento Web é um sistema web de auto-agendamento para serviços
            de estética. Permite que o cliente escolha a procedimento,
            profissional, data e método de pagamento do atendimento. Além disso
            possui dashboard para definição de datas disponíveis, profissionais
            e valores de procedimentos. Fase final de construção.
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
              <img src={GithubIcon} alt="Ícone Github" />
              <LinkButton
                className="font-2-xs cor-0 googleplay"
                href="https://github.com/joaoplay16/agendamento-web"
                target="_blank">
                repositório do projeto
              </LinkButton>
            </LinkButtonWithIcon>
            <LinkButtonWithIcon className="link-button demo-link">
              <img src={LinkIcon} alt="Ícone de corrente" />
              <LinkButton
                className="font-2-xs cor-0 googleplay"
                href="https://agendamento-web-mu.vercel.app/"
                target="_blank">
                demonstração
              </LinkButton>
            </LinkButtonWithIcon>
          </LinksContainer>
        </InfoContainer>
      </ProjectContainer>
      <PortifolioContainer>
        <Portfolio itemBackGroundColor="--cor-s2" title={<Subtitle>Mais Projetos</Subtitle>} />
      </PortifolioContainer>
      <Footer id="contact" />
    </>
  )
}

const ProjectContainer = styled("div")`
  display: grid;
  grid-template-columns: 1fr;
  justify-items: center;
  align-items: start;
  gap: 40px 60px;
  padding: 0px 20px 60px 20px;

  @media (max-width: 900px) {
    justify-content: center;
    grid-template-columns: 1fr;
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

  @media (max-width: 800px) {
    grid-template-columns: 1fr 1fr;
    row-gap: 20px;

    #arrow-left {
      grid-area: 2/1;
    }

    #arrow-right {
      grid-area: 2/2;
    }

    #project-images {
      grid-column: 1/-1;
    }
  }
`

const ProjectImages = styled("div")`
  --selected-image: calc(
    ${({ selectedImageIndex }) => -(selectedImageIndex * 100)}%
  );
  display: flex;
  overflow: hidden;
  max-width: 800px;
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

  .demo-link {
    gap: 0px;
  }

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

export default AgendamentoWeb
