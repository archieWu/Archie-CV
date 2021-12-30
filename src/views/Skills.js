import React from 'react';

/* Components */
/* Styles */
import {MenuButton} from '@components/Styled/MenuButton.styled';
import {SectionWrapper} from '@components/Styled/SectionWrapper.styled';
import SectionTitle from '@components/SectionTitle/SectionTitle';
import {Column, Row} from '@components/Styled/Grid.styled';

/* Images */
import {ReactComponent as MenuIcon} from '@images/nav/menu.svg';
/* Redux */
import {changeMenuStatus} from '@redux/reducers/menuReducer';
import {useDispatch, useSelector} from 'react-redux';
import {SkillTag, SkillText} from '../components/Skills/Skills.styled';
import {backEndSkills, cryptoSkills, dbSkills, fontEndSkills, serverSkills, systemSkills} from '@utilities/skillTag';


const Skills = () => {
  const isMenuOpen = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();

  const skillTagsElement = (item, index) => (
    <p key={index}>{item}</p>
  );

  const renderSkillTags = (skills) => (
    skills.map((item, index) => {
      return skillTagsElement(item, index);
    })
  );

  const setMenuStatus = () => {
    dispatch(changeMenuStatus(!isMenuOpen));
  };
  return (
    <SectionWrapper>
      <MenuButton onClick={setMenuStatus} isMenuOpen={isMenuOpen && true}>
        <MenuIcon/>
      </MenuButton>
      <SectionTitle>
                Skills
        <span>專業能力</span>
      </SectionTitle>
      <Row>
        <Column>
          <SkillText>前端</SkillText>
          <SkillTag>
            {renderSkillTags(fontEndSkills)}
          </SkillTag>
        </Column>
        <Column>
          <SkillText>後端</SkillText>
          <SkillTag>
            {renderSkillTags(backEndSkills)}
          </SkillTag>
        </Column>
        <Column>
          <SkillText>伺服器</SkillText>
          <SkillTag>
            {renderSkillTags(serverSkills)}
          </SkillTag>
        </Column>
        <Column>
          <SkillText>資料庫</SkillText>
          <SkillTag>
            {renderSkillTags(dbSkills)}
          </SkillTag>
        </Column>
        <Column>
          <SkillText>作業系統</SkillText>
          <SkillTag>
            {renderSkillTags(systemSkills)}
          </SkillTag>
        </Column>
        <Column>
          <SkillText>區塊練</SkillText>
          <SkillTag>
            {renderSkillTags(cryptoSkills)}
          </SkillTag>
        </Column>
      </Row>


    </SectionWrapper>
  );
};

export default Skills;
