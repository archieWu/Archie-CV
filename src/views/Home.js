import React from 'react';


/* Images */
import homeBackground from '@images/homeBackground.png';
import {Avatar, LinkButton, Section} from '@components/Home/Home.styled';
import {BackgroundBlock, BackgroundImage} from '@components/Home/HomeBackground.styled';
import avatar from '@images/about/avatar.png';
import Info from '@components/Home/Info/Info';


const Home = () => {
  /* Background animation */

  return (
    <Section>

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
