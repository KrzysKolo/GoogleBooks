import { render, screen } from '@testing-library/react';
import Cards from '../';
import books from '../../../mocks/books.json';

describe('<Cards />', () => {
  it('should render five card components', () => {
    render(<Cards books={books} favoriteBook={false} />);
    expect((screen.getAllByRole("article")).length).toBe(5);
  });
});