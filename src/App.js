// import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
// import react from 'react';
import About from './component/netflix/header';
import Blog from './component/netflix/Batch';
import Chats from './component/netflix/footer';
// import Home from './component/netflix/Pages/Home';
// import Navs from './component/netflix/Pages/Navs';


function App() {
  return (
    <>
      {/* <Router>
        <Navs />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/blog' element={<Blog />} />
          <Route path='/chats' element={<Chats />} />
        </Routes>
      </Router> */}
      <About/>
      <Blog/>
      <Chats/>


    </>
  );
}

export default App;

