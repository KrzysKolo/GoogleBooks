import React, { useEffect, useState } from 'react';
import { Container } from './Books.styles';
import { Filter, Cards } from './../';
import { CardsProps } from '../../models/CardsProps';
import { Header } from './../';
import { changeFavoriteBook } from '../../features/favoriteBooks/favoriteBooksSlice';


const Books: React.FC<CardsProps> = ({ books }) => {

  const [filters, setFilters] = useState<string | boolean>("any");
  const [filteredBooks, setFillteredBooks] = useState(books)

  useEffect(() => {
    let booksFiltered = [...books];
    if (filters !== "any") {
      booksFiltered = booksFiltered.filter(
        (book) => {
          console.log(
            book.favoriteBook,
            filters,
            book.favoriteBook === filters
          );
          return (
            book.favoriteBook === (filters === "favoured" ? true : false)
          )})
    }
    console.log(booksFiltered)
    setFillteredBooks(booksFiltered);
   }, [filters])



   console.log(filters)
   console.log(filteredBooks)

  return (
    <Container>
      <Header />
      <Filter filters={filters} setFilters={setFilters} />
      {filters === "any"
        ? <Cards books={books} />
        : <Cards books={filteredBooks} /> }
    </Container>
  )
}

export default Books;

