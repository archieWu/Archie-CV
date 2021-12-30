import React from 'react';
import PropTypes from 'prop-types';
/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle';
import Card from '@components/Experience/Card/Card';

/* Styles */
import {SectionWrapper} from '@components/Styled/SectionWrapper.styled';
import {Column, Row} from '@components/Styled/Grid.styled';
import {Cards, Category, EducationColumn, PageWrapper} from '@components/Experience/Experience.styled';
import {MenuButton} from '@components/Styled/MenuButton.styled';


/* Images */
import {ReactComponent as EducationIcon} from '@images/experience/education.svg';
import {ReactComponent as WorkIcon} from '@images/nav/work.svg';
import {ReactComponent as MenuIcon} from '@images/nav/menu.svg';

/* Redux */
import {useDispatch, useSelector} from 'react-redux';
import {changeMenuStatus} from '@redux/reducers/menuReducer';


const Experience = () => {
  const isMenuOpen = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();

  const setMenuStatus = () => {
    dispatch(changeMenuStatus(!isMenuOpen));
  };
  return (
    <SectionWrapper Special>

      <MenuButton onClick={setMenuStatus} isMenuOpen={isMenuOpen && true}>
        <MenuIcon/>
      </MenuButton>

      <SectionTitle>
                Experience
        <span>個人閱歷</span>
      </SectionTitle>
      <PageWrapper>
        <Row>

          <Column>
            <Category>
              <WorkIcon/>
              <h3>工作經歷</h3>
              <p>2 ~ 3 年</p>
            </Category>

            <Cards>
              <Card category='work'/>
            </Cards>
          </Column>

          <EducationColumn>
            <Category>
              <EducationIcon/>
              <h3>教育程度</h3>
              <p>大學畢業</p>
            </Category>

            <Cards>
              <Card category='education'/>
            </Cards>
          </EducationColumn>

        </Row>
      </PageWrapper>

    </SectionWrapper>
  );
};

Card.defaultProps = {
  category: PropTypes.node.isRequired,
};
export default Experience;
