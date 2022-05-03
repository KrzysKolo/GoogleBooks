import axios, { AxiosResponse, AxiosError } from 'axios';
import GoogleBooksApi from './GoogleBooksApi';
import { BookInterface } from '../../models/BookInterface';
import GoogleBookModels from './GoogleBookModels';
import GoogleBooksAPIResults from './GoogleBooksResults';

export const ConvertGoogleBooksToBooks = (book: GoogleBooksApi): BookInterface => {
  return {
    authors: book.volumeInfo.authors,
    title: book.volumeInfo.title,
    id: book.id,
    publishedDate: book.volumeInfo.publishedDate,
    image: book.imageLinks.thumbnail,
    language: book.volumeInfo.language,
    description: book.volumeInfo.description,
  }
}

