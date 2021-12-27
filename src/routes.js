import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import GlobalStyle from '@components/globalStyle';
import Welcome from '@components/Welcome/Welcome';
import Sidebar from './components/Sidebar/Sidebar';
import Home from '@views/Home';

const AllRoutes = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Welcome/>
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        {/*  <Route path="/about" component={About}/>*/}
        {/*  <Route path="/experience" component={Experience}/>*/}
        {/*  <Route path="/project" component={Project}/>*/}
        {/*  <Route path="/contact" component={Contact}/>*/}
      </Routes>
      <GlobalStyle/>
    </BrowserRouter>
  );
};

export default AllRoutes;
