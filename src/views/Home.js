import React from 'react';

/* Components */
import Info from '@components/Home/Info/Info';

/* Styles */
import {Avatar, LinkButton, Section} from '@components/Home/Home.styled';
import {BackgroundBlock, BackgroundImage} from '@components/Home/HomeBackground.styled';
import {MenuButton} from '@components/Styled/MenuButton.styled';

/* Images */
import avatar from '@images/about/avatar.png';
import homeBackground from '@images/homeBackground.png';
import {ReactComponent as MenuIcon} from '@images/nav/menu.svg';

/* Redux */
import {changeMenuStatus} from '@redux/reducers/menuReducer';
import {useDispatch, useSelector} from 'react-redux';


const Home = () => {
  const isMenuOpen = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();

  const setMenuStatus = () => {
    dispatch(changeMenuStatus(!isMenuOpen));
  };

  return (
    <Section>
      <MenuButton onClick={setMenuStatus} isMenuOpen={isMenuOpen && true}>
        <MenuIcon/>
      </MenuButton>
      <BackgroundBlock>
        <BackgroundImage
          src={homeBackground}
          alt="background"
        />
      </BackgroundBlock>
      <Avatar src={avatar} alt="avatar"/>
      <Info/>
      <LinkButton to='/contact'>聯絡我</LinkButton>

    </Section>
  );
};

export default Home;
