import React from "react"
import { Header, Subtitle } from "components"
import Sobre from "./sobre"
import Portfolio from "./portifolio"

const Home = () => {
  return (
    <>
      <Header />
      <Sobre />
      <div className="container">
        <Subtitle>Portfólio</Subtitle>
      </div>
      <Portfolio />
    </>
  )
}

export default Home
