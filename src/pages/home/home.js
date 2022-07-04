import React from "react"
import { Header, Footer,Subtitle } from "components"
import Sobre from "./sobre"
import Portfolio from "./portifolio"
import Formacao from "./formacao"
import Skills from "./skills"


const Home = () => {
  return (
    <>
      <Header />
      <Sobre />
      <div className="container">
        <Subtitle>Portfólio</Subtitle>
      </div>
      <Portfolio />
      <Formacao/>
      <Skills 
        title={<Subtitle>Skills</Subtitle>}
        skillList={
          ['Android', 'Kotlin', 'Java','javascript','ReactJS',
          'NodeJS','REST', 'SQLite','MySQL','MongoDB']
        }
      />
      <Footer/>
    </>
  )
}

export default Home
