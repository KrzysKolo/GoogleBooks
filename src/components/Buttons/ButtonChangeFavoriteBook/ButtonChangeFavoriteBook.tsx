import React from 'react';
import { ButtonChangeFavoriteBookProps } from '../../../models/ButtonChangeFavoriteBookProps';
import { Container, HeaderFavoriteBookImg } from './ButtonChangeFavoriteBook.styles';

const ButtonChangeFavoriteBook: React.FC<ButtonChangeFavoriteBookProps> = ({ photo, onClick, alternativeText }) => {
  return (
    <Container onClick={onClick}>
      <HeaderFavoriteBookImg src={photo} alt={alternativeText} />
    </Container>
  )
}

export default ButtonChangeFavoriteBook;