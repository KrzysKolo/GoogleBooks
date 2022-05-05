import React, { useEffect, useState } from 'react';
import { Container } from './Books.styles';
import { Filter, Cards } from './../';
import { CardsProps } from '../../models/CardsProps';
import Search from '../Search';

const Books: React.FC<CardsProps> = ({ books }) => {

  const [filters, setFilters] = useState<string >("any");
  const [filteredBooks, setFillteredBooks] = useState(books)

   useEffect(() => {
    let booksFiltered = [...books];
    if (filters !== "any") {
      booksFiltered = booksFiltered.filter(
        (book) => book.language === filters
      );
    }
    setFillteredBooks(booksFiltered);
    }, [filters])

  return (
    <Container>
      <Search />
      <Filter filters={filters} setFilters={setFilters} />
      {filters === "any"
        ? <Cards books={books} />
        : <Cards books={filteredBooks} /> }
    </Container>
  )
}

export default Books;

