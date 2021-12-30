import React from 'react';
import PropTypes from 'prop-types';

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle';
import InfoItems from '@components/About/InfoItems/InfoItems';

/* Styles */
import {SectionWrapper} from '@components/Styled/SectionWrapper.styled';
import {Column, Row} from '@components/Styled/Grid.styled';
import {AboutImageWrapper} from '@components/About/About.styled';
import {MenuButton} from '@components/Styled/MenuButton.styled';

/* Images */
import AboutPageImage from '@images/about/about.svg';
import {ReactComponent as MenuIcon} from '@images/nav/menu.svg';

/* Redux */
import {useDispatch, useSelector} from 'react-redux';
import {changeMenuStatus} from '@redux/reducers/menuReducer';

const About = () => {
  const details = useSelector((state) => state.detailsReducer);
  const isMenuOpen = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();
  const {cnName, enName} = details;

  const setMenuStatus = () => {
    dispatch(changeMenuStatus(!isMenuOpen));
  };
  return (
    <SectionWrapper>
      <MenuButton onClick={setMenuStatus} isMenuOpen={isMenuOpen && true}>
        <MenuIcon/>
      </MenuButton>
      <SectionTitle>
                About
        <span>個人資料</span>
      </SectionTitle>

      <h3>{cnName} {enName}</h3>

      <Row>

        <Column>
          <InfoItems/>
        </Column>

        <Column>
          <AboutImageWrapper>
            <img src={AboutPageImage} alt="about"/>
          </AboutImageWrapper>
        </Column>

        <Column $fullWidth>
          <p>擅長使用的前端技術為 React ( with Hooks ) 搭配 styled-components 建構專案。曾參與多人的協作專案開發，也有從 0 完整建置專案的經驗。</p>
          <br/>
          <p>擅長使用的後端技術為 Java 搭配 Spring boot 或 Spring MVC 建構專案。曾參與 50 多人的團隊協作專案開發。</p>
          <br/>
          <p>至今仍持續學習更深入的前端技術，短期目標是學習 TypeScript & Next.js 和自動化測試，長期目標是學習 AWS、CI/CD。</p>
          <br/>
          <p>本人個性開朗、求知慾旺盛，在資源有限的情況下也盡力將成果做到最好。</p>
          <br/>
          <p>工作認真負責，學習速度快，可塑性高，喜歡接觸新的事物，開發上具有獨當一面的能力，</p>
          <p>且在團隊合作及溝通上更是展現以上優點，合作過的廠商及公司皆有不錯的評價，在工作上時常短時間獲得主管的肯定，並且賦予帶領團隊的任務。</p>
          <br/>
          <p>平時喜愛關注新趨勢和學習新技術，工作之餘也持續進修。除了技術部分，硬體部分也熟悉 MacOS 系統，並了解基本 Linux 指令操作。</p>
        </Column>
      </Row>


    </SectionWrapper>
  );
};
SectionTitle.defaultProps = {
  children: PropTypes.node.isRequired,
};
export default About;
