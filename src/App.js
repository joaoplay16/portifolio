import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  COMICS_INFO,
  ANIME_VIEW,
  HOME,
  SETIME,
  AGENDAMENTO_WEB,
  PROJETO_VAMOS,
} from "routes"

const Home = React.lazy(() => import("pages/home"))

const ComicsInfo = React.lazy(() => import("pages/comics-info"))

const AnimeView = React.lazy(() => import("pages/anime-view"))

const Setime = React.lazy(() => import("pages/setime"))

const AgendamentoWeb = React.lazy(() => import("pages/agendamento-web"))

const ProjetoVamos = React.lazy(() => import("pages/projeto-vamos"))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={COMICS_INFO} element={<ComicsInfo />} />
        <Route path={ANIME_VIEW} element={<AnimeView />} />
        <Route path={SETIME} element={<Setime />} />
        <Route path={AGENDAMENTO_WEB} element={<AgendamentoWeb />} />
        <Route path={PROJETO_VAMOS} element={<ProjetoVamos />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
