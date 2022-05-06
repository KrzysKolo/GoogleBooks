import React, { useEffect } from 'react';
import { Container } from './Cads.styles';
import { Card } from '../';
import { BookInterface } from '../../models/BookInterface';
import { CardsProps } from '../../models/CardsProps';

const Cards: React.FC<CardsProps> = ({ books }) => {

  return (
    <Container>
      {books.map((book: BookInterface) => <Card key={book.id} book={book} />)}
    </Container>
  )
}

export default Cards;