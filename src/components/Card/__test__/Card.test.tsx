import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../Card';
import { BookInterface } from '../../../models/BookInterface';

const book: BookInterface  = {
  "id": "1",
  "authors": "J. R. R. Tolkien",
  "title": "Hobbit czyli tam i z powrotem",
  "publishedDate": "2015-01",
  "image": "http://books.google.com/books/content?id=8S6WtgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api",
  "language": "pl",
  "description": "To kolejne wydanie wyczerpującego, kompleksowego przewodnika po języku JavaScript oraz jego najważniejszych klienckich i serwerowych interfejsach API",

};

describe('<Card />', () => {
  it('should show title of book', () => {
    render(
      <Card book={book}  />
    );
    expect(screen.getByText(/hobbit czyli tam i z powrotem/i)).toBeDefined();
  });
  it('should show phone authors', () => {
    render(
      <Card book={book} />
    );
    expect(screen.getByText(/j. r. r. tolkien/i)).toBeDefined();
  });
  it('should show publishedDate', () => {
    render(
      <Card book={book} />
    );
    expect(screen.getByText(/2015-01/i)).toBeDefined();
  });
  it('should show image', () => {
    render(
      <Card book={book} />
    );
    const image = screen.getByRole('img');
    expect(image).toHaveAttribute('src', "http://books.google.com/books/content?id=8S6WtgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api")
  });
  it('should show outlined heart', () => {
    render(
      <Card book={book}  />
    );
    expect(screen.queryByAltText(/filled heart/i)).not.toBeDefined();
    expect(screen.getByAltText(/outlined heart/i)).toBeDefined();
  });
  it('should show filled heart', () => {
    render(
      <Card book={book} />
    );
    expect((screen.queryByAltText(/outlined heart/i)  as HTMLElement)).toBeFalsy();
    expect(screen.getByAltText(/filled heart/i)).toBeDefined();
  });
  it('should toggle heart status', () => {
    render(<Card book={book} />);
    userEvent.click(screen.getByRole('button'));
    expect((screen.queryByAltText(/outlined heart/i) as HTMLElement)).toBeFalsy();
    expect(screen.getByAltText(/filled heart/i)).toBeDefined();

    userEvent.click(screen.getByRole('button'));
    expect((screen.queryByAltText(/outlined heart/i)as HTMLElement)).toBeFalsy();
    expect(screen.getByAltText(/filled heart/i)).toBeDefined();
  });
});


