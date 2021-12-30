import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
/* Styles */
import GlobalStyle from '@components/globalStyle';

/* Components */
import Welcome from '@components/Welcome/Welcome';
import Sidebar from '@components/Sidebar/Sidebar';

/* Views */
import Home from '@views/Home';
import About from '@views/About';
import Skills from '@views/Skills';
import Experience from '@views/Experience';
import Project from '@views/Project';
import Contact from '@views/Contact';

/* Redux */
import {useDispatch} from 'react-redux';
import {changeMenuStatus} from '@redux/reducers/menuReducer';

/* Hooks */
import useRWD from '@utilities/hooks/useRWD';


const AllRoutes = () => {
  const dispatch = useDispatch();


  if (useRWD()) {
    dispatch(changeMenuStatus(false));
  }


  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Welcome/>
      <Sidebar/>
      <Routes>
        <Route exact path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/skills" element={<Skills/>}/>
        <Route path="/experience" element={<Experience/>}/>
        <Route path="/project" element={<Project/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <GlobalStyle/>
    </BrowserRouter>
  );
};

export default AllRoutes;
