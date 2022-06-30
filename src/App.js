import React from 'react';
import { BrowserRouter, Route, Routes} from 'react-router-dom';
import { HOME } from 'routes';

const Home = React.lazy(
  () => import('pages/home')
)

function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path={HOME} element={<Home/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
