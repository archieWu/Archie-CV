import React from 'react';
import PropTypes from 'prop-types';

import {experienceCardInfo as cardInfo} from '@utilities/experienceCardInfo';

/* Styles */
import {CardTitle, CardWrapper} from './Card.styled';


const Card = ({category}) => {
  const cardElement = (item, index) => (
    <CardWrapper key={index}>
      <p>{item.from} ~ {item.to}</p>
      <CardTitle>
        <h3>{item.title}</h3>
        <p>{item.subtitle}</p>
      </CardTitle>
      <div>
        <p>{item.content}</p>
      </div>
      <h4>{item.state}</h4>
    </CardWrapper>
  );

  const renderCard = (cardCategory) => (
    cardCategory.map((item, index) => cardElement(item, index))
  );

  return (
    <>
      {renderCard(cardInfo[category])}
    </>
  );
};

Card.propTypes = {
  category: PropTypes.node.isRequired,
};
export default Card;
