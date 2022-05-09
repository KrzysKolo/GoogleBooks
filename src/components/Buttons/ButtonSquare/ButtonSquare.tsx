import React from 'react';
import { ButtonSquareProps } from '../../../models/ButtonSquareProps';
import { Container, ImgButton } from './ButtonSquare.styles';

const ButtonSquare: React.FC<ButtonSquareProps> = ({ photo, onClick, alternativeText }) => {
  return (
    <Container onClick={onClick}>
      <ImgButton src={photo} alt={alternativeText} />
    </Container>
  )
}

export default ButtonSquare;