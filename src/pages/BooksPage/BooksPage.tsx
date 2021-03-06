import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Books, Header, Loading, Page404 } from '../../components';
import { Wrapper } from './BooksPage.styles';
import { BookInterface } from '../../models/BookInterface'
import { getAllGoogleBooksApi, isError, isLoading } from '../../features/googleBooksAPI/googleBooksApiSlice';
import { getAllGoogleBooks, getGoogleBooks } from '../../features/googleBooks/googleBooks';

const BooksPage: React.FC = () => {

  const tab: BookInterface[] = []
  const booksGoogleApi = useSelector(getAllGoogleBooksApi)
  const booksGoogle = useSelector(getAllGoogleBooks);
  const LoadingBooks = useSelector(isLoading);
  const Error = useSelector(isError);
  const dispatch = useDispatch();

  useEffect(() => {
    booksGoogleApi.map((item) => {
      const book = {
        id: item.id,
        authors: item.volumeInfo.authors,
        title: item.volumeInfo.title,
        publishedDate: item.volumeInfo.publishedDate,
        image: 'https://cdn.pixabay.com/photo/2017/01/31/00/09/book-2022464__340.png',
        language: item.volumeInfo.language,
        link: item.volumeInfo.previewLink,
        description: item.volumeInfo.description,
        favoriteBook: false
      };

       if (typeof (item.volumeInfo.imageLinks) !== 'undefined') {
         tab.push(
          {
            id: item.id,
            authors: item.volumeInfo.authors,
            title: item.volumeInfo.title,
            publishedDate: item.volumeInfo.publishedDate,
            image: item.volumeInfo.imageLinks.thumbnail ,
            language: item.volumeInfo.language,
            link: item.volumeInfo.previewLink,
            description: item.volumeInfo.description,
            favoriteBook: false,
          }
         )
       } else {
         tab.push(book)
       }
      })
    dispatch(getGoogleBooks(tab));
  }, [booksGoogleApi]);

  return (
    <Wrapper>
      <Header />
      { LoadingBooks ? <Loading /> : <Books books={booksGoogle} />}
      { Error !== "" && <Page404 />}
    </Wrapper>
  )
}

export default BooksPage;




