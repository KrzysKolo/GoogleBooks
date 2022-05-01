import React from 'react';
import { Card } from '../../components';
import { Wrapper } from './Books.styles';

const Books: React.FC = () => {
  return (
    <Wrapper>
      <Card
        name="Hobbit czyli tam i z powrotem"
        autor="J. R. R. Tolkien"
        publishedDate="2015-01"
        image={{
          url: "http://books.google.com/books/content?id=8S6WtgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
          alt: " cute cat"
        }}
        description="To kolejne wydanie wyczerpującego, kompleksowego przewodnika po języku JavaScript oraz jego najważniejszych klienckich i serwerowych interfejsach API"
        favoured={false}
        />
    </Wrapper>
  )
}

export default Books;