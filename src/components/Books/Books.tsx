import React, { useEffect, useState } from 'react';
import { Container } from './Books.styles';
import { Filter, Cards } from './../';
import { CardsProps } from '../../models/CardsProps';
;

const Books: React.FC<CardsProps> = ({ books }) => {

  const [filters, setFilters] = useState<string | any>({ language: "any", favoured: "any" });
  const [filteredBooks, setFillteredBooks] = useState(books)
  useEffect(() => {
    if (filters.language !== "any") {
      setFillteredBooks(books.filter(
        (item) => item.language === filters.language
      ));
    }
   /*  if (filters.favoured !== "any") {
      setFillteredBooks(books.filter(
        (item) => item.favoured === filters.favoured
        ));
    } */
    else {
      setFillteredBooks(books)
    }

    }, [filters])

console.log(filters)
  return (
    <Container>
      <Filter filters={filters} setFilters={setFilters} />
      <Cards books={books} />
    </Container>
  )
}

export default Books;
