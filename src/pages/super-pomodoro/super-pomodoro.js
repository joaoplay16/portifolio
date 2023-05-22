import { Chip, Footer, Header, LinkButton, Subtitle } from "components"
import React, { useState } from "react"
import styled from "styled-components"
import {
  SuperPomodoroChat,
  SuperPomodoroConversation,
  SuperPomodoroGames,
  SuperPomodoroHome,
  SuperPomodoroSettings,
} from "img"
import {
  SlideArrowLeftIcon,
  SlideArrowRightIcon,
  GithubIcon,
  PlaystoreIcon,
} from "icons"
import Portfolio from "pages/home/portifolio/portfolio"
const SuperPomodoro = () => {
  const projectTechnologies = [
    "Kotlin",
    "Jetpack Compose",
    "Firebase",
    "Authentication",
    "Dagger/Hilt",
    "Datastore",
    "Coil",
    "MVVM"
  ]

  const [selectedImageIndex, setSelectedImage] = useState(0)

  const images = [
    { src: SuperPomodoroHome, alt: "Super Pomodoro, home" },
    { src: SuperPomodoroSettings, alt: "Super Pomodoro, configurações" },
    { src: SuperPomodoroChat, alt: "Super Pomodoro, chat" },
    { src: SuperPomodoroConversation, alt: "Super Pomodoro, conversa" },
    { src: SuperPomodoroGames, alt: "Super Pomodoro, games" },
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
          <h2 className="fon-1-l cor-0">Super Pomodoro</h2>

          <p className="font-2-s cor-3">
            O Super Pomodoro é um aplicativo de gerenciamento de tempo projetado
            para aumentar a produtividade dos usuários por meio da técnica do
            Pomodoro. Com recursos avançados, como chat em grupo e jogos para os
            momentos de pausa, o Super Pomodoro oferece uma experiência única e
            enriquecedora. Veja abaixo uma descrição detalhada dos principais
            recursos do aplicativo:
          </p>
          <ul>
            <li className="font-2-s cor-3">
              Chat em Grupo: Além da funcionalidade principal do Pomodoro, o
              Super Pomodoro oferece um recurso de chat em grupo. Os usuários
              podem criar salas de chat temáticas, convidar colegas de trabalho
              ou amigos e compartilhar ideias, desafios e motivação. Essa
              funcionalidade promove a colaboração e o compartilhamento de
              experiências, criando um ambiente virtual de apoio e crescimento
              mútuo. Implementei o banco de dados Cloud Firestore com Firebase.
            </li>
            <br />
            <li className="font-2-s cor-3">
              Jogos para Momentos de Pausa: Reconhecendo a importância do
              descanso durante os intervalos entre os pomodoros, o Super
              Pomodoro inclui uma coleção de jogos interativos e envolventes. Os
              usuários podem desfrutar de uma variedade de jogos cativantes,
              desde quebra-cabeças desafiadores até jogos de memória
              estimulantes. Esses jogos são projetados para ajudar a relaxar e
              recarregar a mente, proporcionando momentos de lazer produtivo
              durante as pausas.
            </li>
            <br />
            <li className="font-2-s cor-3">
              Interface Moderna e Intuitiva: O Super Pomodoro foi desenvolvido
              com uma interface moderna e intuitiva, proporcionando uma
              experiência de usuário agradável e fluida. Utilizando a tecnologia
              Jetpack Compose, a aplicação apresenta um design atraente,
              animações suaves e transições elegantes, tornando o uso do
              aplicativo uma experiência visualmente agradável e atraente.
            </li>
            <br />
            <li className="font-2-s cor-3">
              Integração com Firebase: O aplicativo faz uso dos serviços do
              Firebase, incluindo Firebase Authentication, Firebase Firestore e
              Firebase Storage. O Firebase Authentication permite que os
              usuários se registrem e façam login de forma segura, protegendo
              suas informações pessoais. O Firebase Firestore é utilizado para
              armazenar e sincronizar dados em tempo real, possibilitando a
              colaboração entre os usuários em tempo real. O Firebase Storage é
              usado para armazenar recursos como imagens de perfil dos usuários.
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
                borderRadius={15}
              >
                {tech}
              </Chip>
            ))}
          </TechnologiesContainer>
          <LinksContainer>
            <LinkButtonWithIcon className="link-button">
              <img src={PlaystoreIcon} alt="Ícone Google Play" />
              <LinkButton
                className="font-2-xs cor-0 googleplay"
                href="https://play.google.com/store/apps/details?id=com.playlab.superpomodoro"
                target="_blank"
              >
                ver no google play
              </LinkButton>
            </LinkButtonWithIcon>
            <LinkButtonWithIcon className="link-button">
              <img src={GithubIcon} alt="Ícone Github" />
              <LinkButton
                className="font-2-xs cor-0 googleplay"
                href="https://github.com/joaoplay16/super-pomodoro"
                target="_blank"
              >
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

export default SuperPomodoro
