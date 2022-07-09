import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { COMICS_INFO, HOME } from 'routes';

const Home = React.lazy(
  () => import('pages/home')
)

const ComicsInfo = React.lazy(
  () => import('pages/comics-info')
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={HOME} element={<Home/>}/>
          <Route path={COMICS_INFO} element={<ComicsInfo/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
