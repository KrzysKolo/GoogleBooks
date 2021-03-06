import { render, screen, fireEvent } from '@testing-library/react';
import  Search  from './../';

describe('<Search />', () => {

    it('Renders the component', () => {
      render(<Search />);
      screen.getByPlaceholderText('Search');
    });

  it('Displays books when search phrase is matching', async () => {
    const onSearchChange = jest.fn();
      render(<Search />);
      const valueSearch = await screen.findByText("Search");
      fireEvent.change(valueSearch, { target: { value: "test" } });
      expect(onSearchChange).toHaveBeenCalledWith("test");
  })
})