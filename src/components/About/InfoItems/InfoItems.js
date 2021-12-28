import React from 'react';
import {ageGenerator} from '@utilities/generator';

import {InfoItem, InfoTitle} from './InfoItems.styled';
import {useSelector} from 'react-redux';


const InfoItems = () => {
  const details = useSelector((state) => state.detailsReducer);
  const {birth, isMarried, phone, email} = details;


  return (
    <>
      <InfoItem>
        <InfoTitle>年齡</InfoTitle>
        <p>{`${ageGenerator(birth)} 歲`}</p>
      </InfoItem>
      <InfoItem>
        <InfoTitle>婚姻狀態</InfoTitle>
        <p>{isMarried ? '已婚' : '未婚'}</p>
      </InfoItem>
      <InfoItem>
        <InfoTitle>駕駛執照</InfoTitle>
        <p>普通重型機車駕照、普通小型車駕照</p>
      </InfoItem>
      <InfoItem>
        <InfoTitle>聯絡電話</InfoTitle>
        <p>{phone}</p>
      </InfoItem>
      <InfoItem>
        <InfoTitle>Email</InfoTitle>
        <p>{email}</p>
      </InfoItem>
    </>
  );
};

export default InfoItems;
