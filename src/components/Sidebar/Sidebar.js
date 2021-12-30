import React from 'react';
import {Link, Menu, MenuTitle} from './Sidebar.styled';
import Nav from './Navbar/Navbar.styled';
import Navbar from './Navbar/Navbar';
import {ReactComponent as GithubIcon} from '@images/github.svg';
import {useSelector} from 'react-redux';


const Sidebar = () => {
  const isMenuOpen = useSelector((state) => state.menuReducer);
  return (
    <Menu isMenuOpen={isMenuOpen && true}>
      <MenuTitle>
        <p>Archie<span> CV</span></p>
      </MenuTitle>
      <Nav>
        <Navbar/>
      </Nav>
      <Link>
        <a href="https://github.com/archieWu" target="_blank" rel="noreferrer noopener"><GithubIcon/>Archie
                    Wu</a>
        <a href="https://storyset.com/" target="_blank" rel="noreferrer noopener">Illustration by Storyset</a>

      </Link>


    </Menu>
  );
};
export default Sidebar;
