import React from "react"
import styled from "styled-components"
import PortfolioItem from "components/portifolio-item"
import {
  ComicsInfoImg,
  SetimeImg,
  AnimeViewImg,
  AgendamentoWebImg,
  ProjetoVamosImg
} from "img"
import { useLocation } from "react-router-dom"
import { AGENDAMENTO_WEB, ANIME_VIEW, COMICS_INFO, PROJETO_VAMOS, SETIME } from "routes"

const Portfolio = ({ title, itemBackGroundColor }) => {
  const currentProject = useLocation().pathname.replace("/", "")
  console.log("currentProject", currentProject)

  const projects = [
    {
      id: COMICS_INFO.replace('/',''),
      component: (
        <PortfolioItem
          image={ComicsInfoImg}
          imageDescription="Aplicativo Comics Info"
          technologies={[
            "Kotlin",
            "Paging3",
            "Dagger/Hilt",
            "Room",
            "Coil",
            "Datastore",
            "MVVM",
          ]}
          link={COMICS_INFO}
          backgroundColor={itemBackGroundColor}>
          Comics Info, é um cliente App para a Marvel API, que obtém informações
          sobre as HQ's Marvel. Desenvolvido em Kotlin, utilizando o UI kit
          Jetpack Compose.
        </PortfolioItem>
      ),
    },
    {
      id: SETIME.replace('/',''),
      component: (
        <PortfolioItem
          image={SetimeImg}
          imageDescription="Aplicativo Setime"
          technologies={[
            "RecycleView",
            "Kotlin",
            "Swipe To Delete",
            "Firebase",
            "Firestore",
            "Analytics",
          ]}
          link={SETIME}
          backgroundColor={itemBackGroundColor}>
          Setime é um aplicativo de agendamento com armazenamento de dados em
          nuvem desenvolvido para um salão de beleza, para que os esteticistas
          pudessem organizar seus horários de atendim...
        </PortfolioItem>
      ),
    },
    {
      id: ANIME_VIEW.replace('/',''),
      component: (
        <PortfolioItem
          image={AnimeViewImg}
          imageDescription="Aplicativo Anime View"
          technologies={[
            "Java",
            "SQLite",
            "Content Provider",
            "Recycleview",
            "Swipe To Delete",
          ]}
          link={ANIME_VIEW}
          backgroundColor={itemBackGroundColor}>
          Anime View é um criador de lembretes dos últimos episódios de séries
          de animes assistidos, chegou a +400 downloads no Google Play,
          suportando 177 países em 4 idiomas.
        </PortfolioItem>
      ),
    },
    {
      id: AGENDAMENTO_WEB.replace('/',''),
      component: (
        <PortfolioItem
          image={AgendamentoWebImg}
          imageDescription="Sistema agendamento web"
          technologies={[
            "React",
            "MaterialUI",
            "Firestore",
            "Mercado Pago",
            "Authentication",
          ]}
          link={AGENDAMENTO_WEB}
          backgroundColor={itemBackGroundColor}>
          Agendamento Web é um sistema web de auto-agendamento para serviços de
          estética. Permite que o cliente escolha a procedimento, profissional,
          data e método de pagamento do aten...
        </PortfolioItem>
      ),
    },
    {
      id: PROJETO_VAMOS.replace('/',''),
      component: (
        <PortfolioItem
          image={ProjetoVamosImg}
          imageDescription="Sistema projeto vamos"
          technologies={[
            "React",
            "Bootstrap",
            "NodeJS",
            "JWT",
            "MongoDB",
            "MVC",
            "REST",
          ]}
          link={PROJETO_VAMOS}
          backgroundColor={itemBackGroundColor}>
          Projeto Vamos. Desenvolvido para automacão dos processos e
          gerenciamento dados da ONG para permitir uma maior praticidade na
          gestão da informação e controle de...
        </PortfolioItem>
      ),
    },
  ].filter((project) => project.id !== currentProject)

  return (
    <>
      <div className="container" id="portfolio">
        {title}
      </div>
      <PortfolioArticle className="container">
        {projects.map((project) => (
          <React.Fragment key={project.id}>{project.component}</React.Fragment>
        ))}
      </PortfolioArticle>
    </>
  )
}

const PortfolioArticle = styled("article")`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  align-items: start;
  justify-items: center;
  gap: 40px;
  padding: 30px 60px;

  @media (max-width: 1200px) {
    gap: 40 0px;
    padding: 30px;
  }
  @media (max-width: 800px) {
    gap: 40px;
  }
`

export default Portfolio
