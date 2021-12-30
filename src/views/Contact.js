import React from 'react';

/* Components */
import SectionTitle from '@components/SectionTitle/SectionTitle';

/* Styles */
import {SectionWrapper} from '@components/Styled/SectionWrapper.styled';
import {Column, Row} from '@components/Styled/Grid.styled';
import {Card, TextContent} from '@components/Contact/Contact.styled';
import {MenuButton} from '@components/Styled/MenuButton.styled';

/* Images */
import {ReactComponent as MenuIcon} from '@images/nav/menu.svg';
import {ReactComponent as MailIcon} from '@images/contact/mail.svg';
import {ReactComponent as PhoneIcon} from '@images/contact/phone.svg';
import {ReactComponent as LinkedIcon} from '@images/contact/linkedin.svg';

import {ReactComponent as CVIcon} from '@images/contact/vector.svg';
/* Redux */
import {useDispatch, useSelector} from 'react-redux';
import {changeMenuStatus} from '@redux/reducers/menuReducer';

const Contact = () => {
  const isMenuOpen = useSelector((state) => state.menuReducer);
  const dispatch = useDispatch();

  const setMenuStatus = () => {
    dispatch(changeMenuStatus(!isMenuOpen));
  };


  return (
    <SectionWrapper>

      <MenuButton onClick={setMenuStatus} isMenuOpen={isMenuOpen && true}>
        <MenuIcon/>
      </MenuButton>

      <SectionTitle>
                Contact
        <span>聯絡方式</span>
      </SectionTitle>

      <Row>
        <Column>
          <Card href="mailto:yij1471@gmail.com">
            <MailIcon/>
          </Card>
        </Column>
        <Column>
          <Card href="tel:0979334968">
            <PhoneIcon/>
          </Card>
        </Column>
        <Column>
          <Card href="https://www.linkedin.com/in/%E6%94%BF%E6%A8%BA-%E5%90%B3-871798218/" target='_blank'>
            <LinkedIcon/>
          </Card>
        </Column>
        <Column>
          <Card href="https://pda.104.com.tw/profile/share/jHHKOx2meucITQGi3cGjiMooLWdKm0uc" target='_blank'>
            <CVIcon/>
          </Card>
        </Column>
        <Column $fullWidth>
          <TextContent>
            <h3>Thank you</h3>
          </TextContent>
        </Column>
      </Row>


    </SectionWrapper>
  );
};

export default Contact;
