import BussolaAgil from "pages/bussola-agil"
import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import {
  COMICS_INFO,
  ANIME_VIEW,
  HOME,
  SETIME,
  BUSSOLA_AGIL,
  AGENDAMENTO_WEB,
  PROJETO_VAMOS,
  ESCAPE_ROOM_TIMER,
} from "routes"

const Home = React.lazy(() => import("pages/home"))

const ComicsInfo = React.lazy(() => import("pages/comics-info"))

const AnimeView = React.lazy(() => import("pages/anime-view"))

const Setime = React.lazy(() => import("pages/setime"))

const AgendamentoWeb = React.lazy(() => import("pages/agendamento-web"))

const ProjetoVamos = React.lazy(() => import("pages/projeto-vamos"))

const EscapeRoomTimer = React.lazy(() => import("pages/escape-room-timer"))

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={HOME} element={<Home />} />
        <Route path={COMICS_INFO} element={<ComicsInfo />} />
        <Route path={ANIME_VIEW} element={<AnimeView />} />
        <Route path={BUSSOLA_AGIL} element={<BussolaAgil />} />
        <Route path={SETIME} element={<Setime />} />
        <Route path={AGENDAMENTO_WEB} element={<AgendamentoWeb />} />
        <Route path={PROJETO_VAMOS} element={<ProjetoVamos />} />
        <Route path={ESCAPE_ROOM_TIMER} element={<EscapeRoomTimer />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
