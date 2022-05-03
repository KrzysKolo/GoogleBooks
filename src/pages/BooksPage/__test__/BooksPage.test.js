import { render, screen } from '@testing-library/react';
import BooksPage from '../BooksPage';
import { rest } from 'msw';
import { setupServer } from 'msw/node';
import books from '../../../mocks/books.json';
import userEvent from '@testing-library/user-event';

const server = setupServer(
  rest.get("https://www.googleapis.com/books/v1/volumes?q=cat", (req, res, ctx) => {
    return res(
      ctx.status(200),
      ctx.json(books),
    )
  })
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

describe('<BooksPage />', () => {
  it('should render the correct about of cards', async () => {
    render(<BooksPage />)
    const cards = await screen.findAllByRole('article');
    expect(cards.length).toBe(5);
  });
  it('should filter for language books',async () => {
    render(<BooksPage />)
    const cards = await screen.findAllByRole('article');
    userEvent.selectOptions(screen.getByText(/polish/i), "pl");
    expect(screen.getAllByRole("article")).toStrictEqual([cards[0], cards[2]]);

  })
});