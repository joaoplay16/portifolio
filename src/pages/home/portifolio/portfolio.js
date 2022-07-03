import React from "react"
import styled from "styled-components"
import PortfolioItem from "components/portifolio-item"
import ComicsInfoCover from "img/comics-info.png"
import AnimeViewCover from "img/animeview.webp"
import SetimeCover from "img/setme.png"
import AgendamentoWebCover from "img/agendamento-web.jpg"
import ProjetoVamosCover from "img/projeto-vamos.jpg"
const Portfolio = () => {
  return (
    <PortfolioArticle className="container">
      <PortfolioItem
        image={ComicsInfoCover}
        imageDescription="Aplicativo Comics Info"
        technologies={[
          "Kotlin",
          "Room",
          "Paging3",
          "Dagger/Hilt",
          "Room",
          "Coil",
          "Datastore",
          "MVVM",
        ]}
        link="/">
        Comics Info, é um cliente App para a Marvel API, que obtém informações
        sobre as HQ's Marvel. Desenvolvido em Kotlin, utilizando o UI kit
        Jetpack Compose.
      </PortfolioItem>
      <PortfolioItem
        image={SetimeCover}
        imageDescription="Aplicativo Setime"
        technologies={[
          "RecycleView",
          "Kotlin",
          "Swipe To Delete",
          "Firebase",
          "Firestore",
          "Analytics",
        ]}
        link="/">
        Setime é um aplicativo de agendamento com armazenamento de dados em
        nuvem desenvolvido para um salão de beleza, para que os esteticistas
        pudessem organizar seus horários de atendim...
      </PortfolioItem>
      <PortfolioItem
        image={AnimeViewCover}
        imageDescription="Aplicativo Anime View"
        technologies={[
          "Java",
          "SQLite",
          "Content Provider",
          "Recycleview",
          "Swipe To Delete",
        ]}
        link="/">
        Anime View é um criador de lembretes dos últimos episódios de séries de
        animes assistidos, chegou a +400 downloads no Google Play, suportando
        177 países em 4 idiomas.
      </PortfolioItem>
      <PortfolioItem
        image={AgendamentoWebCover}
        imageDescription="Sistema agendamento web"
        technologies={[
          "React",
          "MaterialUI",
          "Firestore",
          "Mercado Pago",
          "Authentication",
        ]}
        link="/">
        Agendamento Web é um sistema web de auto-agendamento para serviços de
        estética. Permite que o cliente escolha a procedimento, profissional,
        data e método de pagamento do aten...
      </PortfolioItem>
      <PortfolioItem
        image={ProjetoVamosCover}
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
        link="/">
        Projeto Vamos. Desenvolvido para automacão dos processos e gerenciamento
        dados da ONG para permitir uma maior praticidade na gestão da informação
        e controle de...
      </PortfolioItem>
    </PortfolioArticle>
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
