import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { COMICS_INFO, ANIME_VIEW, HOME } from 'routes';

const Home = React.lazy(
  () => import('pages/home')
)

const ComicsInfo = React.lazy(
  () => import('pages/comics-info')
)

const AnimeView = React.lazy(
  () => import('pages/anime-view')
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={HOME} element={<Home/>}/>
          <Route path={COMICS_INFO} element={<ComicsInfo/>}/>
          <Route path={ANIME_VIEW} element={<AnimeView/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
