import { Routes, Route } from 'react-router-dom'
import React from 'react';
import Home from "./component/netflix/Pages/Home";
import Navs from './component/netflix/Pages/Navs';
import Faq from './component/netflix/Pages/faq';
import Jobs from './component/netflix/Pages/jobs';
import Privacy from './component/netflix/Pages/privacy';
function App() {
  return (
    <>
      <Navs />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/jobs' element={<Jobs />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/my-list' element={<div>My List Page</div>} />
        <Route path='*' element={<div>404 - Page Not Found</div>} />
      </Routes>
    </>
  );
}

export default App;
