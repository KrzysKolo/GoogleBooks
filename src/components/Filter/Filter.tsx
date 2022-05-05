import React from 'react';
import { FilterProps } from '../../models/FilterProps';
import { Container } from './Filter.styles';

const Filter: React.FC<FilterProps> = ({ setFilters}) => {
  return (
    <Container>
      <label htmlFor="language">Language</label>
      <select
        name="language"
        id="language"
        onChange={(e) => setFilters(e.target.value)
        }
      >
        <option className="option" value="any">Choose...</option>
        <option className="option" value="pl">Polish</option>
        <option className="option" value="en">English</option>
      </select>
    </Container>
  )
}

export default Filter;