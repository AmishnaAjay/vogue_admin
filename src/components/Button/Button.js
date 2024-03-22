import React from 'react';
import { Main, BtnText } from './ButtonElements';

const Button = ({title, onClick}) => {
  return (
    <Main>
        <BtnText onClick={onClick}>{title}</BtnText>
    </Main>
  );
};

export default Button;