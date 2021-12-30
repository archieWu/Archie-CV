import React from 'react';
import {NavLink} from 'react-router-dom';
import {routeLink} from '@utilities/routeLink';
import {useDispatch, useSelector} from 'react-redux';
import {changeMenuStatus} from '@redux/reducers/menuReducer';

const Navbar = () => {
  const dispatch = useDispatch();
  const isMenuOpen = useSelector((state) => state.menuReducer);
  const setMenuStatus = () => {
    dispatch(changeMenuStatus(!isMenuOpen));
  };
  const element = (item, index) => (
    <li key={index} onClick={setMenuStatus}>
      <NavLink to={item.link}>
        <item.icon/>
        {item.text}
      </NavLink>
    </li>
  );

  const renderNavbar = () => (
    routeLink.map((item, index) => element(item, index))
  );

  return (
    <ul>
      {renderNavbar()}
    </ul>
  );
};

export default Navbar;
