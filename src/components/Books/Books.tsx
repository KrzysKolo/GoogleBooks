import React, { useEffect, useState } from 'react';
import { Container } from './Books.styles';
import { Filter, Cards } from './../';
import { CardsProps } from '../../models/CardsProps';
import { Header } from './../';
import { changeFavoriteBook } from '../../features/favoriteBooks/favoriteBooksSlice';
import { useSelector } from 'react-redux';
import { getUpdateGoogleBooks } from '../../features/googleBooks/googleBooks';


const Books: React.FC<CardsProps> = ({ books }) => {

  const favoriteGoogleBooks = useSelector(getUpdateGoogleBooks);
  const [filters, setFilters] = useState<string | boolean>("any");
  const [filteredBooks, setFillteredBooks] = useState(favoriteGoogleBooks)

  useEffect(() => {
    let booksFiltered = [...favoriteGoogleBooks];
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
    setFillteredBooks(booksFiltered);
   }, [filters])

  return (
    <Container>
      <Filter filters={filters} setFilters={setFilters} />
      {filters === "any"
        ? <Cards books={favoriteGoogleBooks} />
        : <Cards books={filteredBooks} /> }
    </Container>
  )
}

export default Books;

