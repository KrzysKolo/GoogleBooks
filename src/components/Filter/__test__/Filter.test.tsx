import { render, screen } from '@testing-library/react';
import Filter from '../';
import userEvent from '@testing-library/user-event';

describe('<Filter />', () => {
  it("should  be able value of favorued select", () => {

    render(<Filter filters={{}} setFilters={() => {}} />);
    const select = screen.getByLabelText(/favourite/i);

    userEvent.selectOptions(select, 'favoured');
    expect((screen.getByText('Favoured') as HTMLOptionElement).selected).toBeTruthy();

    userEvent.selectOptions(select, 'not favoured');
    expect((screen.getByText('Not Favoured') as HTMLOptionElement).selected).toBeTruthy();
  });
   it("should  be able value of language select", () => {
    render(<Filter filters={{}} setFilters={() => {}} />);
     const select = screen.getByLabelText(/language/i);

    userEvent.selectOptions(select, 'pl');
    expect((screen.getByText('Polish') as HTMLOptionElement).selected).toBeTruthy();

    userEvent.selectOptions(select, 'en');
    expect((screen.getByText('English') as HTMLOptionElement).selected).toBeTruthy();
  });
});
