import React from 'react';
import {SectionTitleStyled} from './SectionTitle.styled';
import PropTypes from 'prop-types';

const SectionTitle = ({children}) => {
  return (
    <SectionTitleStyled>
      <h2>{children}</h2>
    </SectionTitleStyled>
  );
};

SectionTitle.propTypes = {
  children: PropTypes.node.isRequired,
};
export default SectionTitle;
