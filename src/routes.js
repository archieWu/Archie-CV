import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import GlobalStyle from '@components/globalStyle';
import Welcome from '@components/Welcome/Welcome';
import Sidebar from './components/Sidebar/Sidebar';
import Home from '@views/Home';
import About from '@views/About';

const AllRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Welcome/>
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        {/*  <Route path="/experience" element={Experience}/>*/}
        {/*  <Route path="/project" element={Project}/>*/}
        {/*  <Route path="/contact" element={Contact}/>*/}
      </Routes>
      <GlobalStyle/>
    </BrowserRouter>
  );
};

export default AllRoutes;
