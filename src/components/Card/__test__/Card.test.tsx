import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Card from '../Card';

const cardProps = {
  name: "Sydney",
  autor: "111-111-111",
  publishedDate: "weronika@wp.pl",
  image: {
    url: "https://images.unsplash.com/photo-1548247416-ec66f4900b2e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8Y2F0fGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=1000&q=60",
    alt: " cute cat"
  },
  description: "Jakiś opis",
  favoured: false
};

describe('<Card />', () => {
  it('should show title of book', () => {
    render(
      <Card {...cardProps}    />
    );
    expect(screen.getByText(/sydney/i)).toBeDefined();
  });
  it('should show phone number', () => {
    render(
      <Card {...cardProps} />
    );
    expect(screen.getByText(/111-111-111/i)).toBeDefined();
  });
  it('should show email', () => {
    render(
      <Card {...cardProps} />
    );
    expect(screen.getByText(/weronika@wp.pl/i)).toBeDefined();
  });
  it('should show image', () => {
    render(
      <Card {...cardProps} />
    );
    expect(screen.getByAltText(/cute cat/i)).toBeDefined();
  });
  it('should show outlined heart', () => {
    render(
      <Card {...cardProps} />
    );
    expect(screen.queryByAltText(/filled heart/i)).not.toBeDefined();
    expect(screen.getByAltText(/outlined heart/i)).toBeDefined();
  });
  it('should show filled heart', () => {
    render(
      <Card {...cardProps} favoured={true} />
    );
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeDefined();
    expect(screen.getByAltText(/filled heart/i)).toBeDefined();
  });
  it('should toggle heart status', () => {
    render(<Card {...cardProps} />);
    userEvent.click(screen.getByRole('button'));
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeDefined();
    expect(screen.getByAltText(/filled heart/i)).toBeDefined();

    userEvent.click(screen.getByRole('button'));
    expect(screen.queryByAltText(/outlined heart/i)).not.toBeDefined();
    expect(screen.getByAltText(/filled heart/i)).toBeDefined();
  });
});


