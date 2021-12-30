import React from 'react';

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle';

/* Styles */
import {SectionWrapper} from '@components/Styled/SectionWrapper.styled';
import {Row} from '@components/Styled/Grid.styled';
import {MenuButton} from '@components/Styled/MenuButton.styled';
import {Card, ProjectColumn, ProjectInfo} from '@components/Project/Project.styled';


/* Images */
import {ReactComponent as MenuIcon} from '@images/nav/menu.svg';

/* Redux */
import {useDispatch, useSelector} from 'react-redux';
import {changeMenuStatus} from '@redux/reducers/menuReducer';


const Project = () => {
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
                Project
        <span>專案項目</span>
      </SectionTitle>

      <Row>
        <ProjectColumn $fullWidth>
          <Card>
            <ProjectInfo>
              <h3>聲明</h3>
              <p>因保密協議未能提供公開閱覽，敬請見諒。</p>
              <br/>
              <h4>1.遠東商銀多元申請平台 - React + Redux</h4>
              <p>資料傳遞加解密 / 封裝可重用組件 / 路由權限控制 / 畫面動態生成</p>
              <br/>
              <h4>2. 電商網站前後台 - Vue + React + Redux + Java + SpringBoot</h4>
              <p>前台畫面開發及調整 / 後台畫面開發及調整 / 修改並開發後端API</p>
              <br/>
              <h4>3. 勞保局系統重構案 - Java + Spring MVC + Thymeleaf</h4>
              <p>畫面開發 / 報表生成 / 開發後端API</p>
              <br/>
              <h4>4. 勞保局系統升級案 - Java Spring MVC + JSP</h4>
              <p>版本更新 / 錯誤修正 / 帶領新人</p>
              <br/>
              <h4>5. 國泰人壽(駐點人員): - Java + ebaf + JSP</h4>
              <p>撰寫批次 / 新功能開發 / 舊功能調整 / 報表生成 / JUint</p>
            </ProjectInfo>
          </Card>
        </ProjectColumn>


      </Row>


    </SectionWrapper>
  );
};

export default Project;
