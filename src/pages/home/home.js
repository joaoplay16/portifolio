import React from "react"
import { Header, Footer, Subtitle } from "components"
import Sobre from "./sobre"
import Portfolio from "./portifolio"
import Formacao from "./formacao"
import Skills from "./skills"


const Home = () => {
  return (
    <>
      <Header/>
      <Sobre/>
      <Portfolio title={<Subtitle>Portfólio</Subtitle>}/>
      <Formacao/>
      <Skills 
        title={<Subtitle>Skills</Subtitle>}
        skillList={
          ['Android', 'Kotlin', 'Java','Javascript','ReactJS',
          'NodeJS','REST', 'SQLite','MySQL','MongoDB']
        }
      />
      <Footer id="contact"/>
    </>
  )
}

export default Home
