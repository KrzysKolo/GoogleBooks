import React, { useEffect, useState } from 'react';
import { Container } from './Books.styles';
import { Filter, Cards } from './../';
import { CardsProps } from '../../models/CardsProps';
import Search from '../Search';
import { isIfStatement } from 'typescript';
import { useSelector } from 'react-redux';
import { getFilterAny } from '../../features/googleBooksAPI/googleBooksSlice';
;

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

  console.log(filters)
  console.log(filteredBooks)
  console.log(books)
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

