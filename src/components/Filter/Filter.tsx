import React from 'react';
import { FilterProps } from '../../models/FilterProps';
import { Container } from './Filter.styles';

const Filter: React.FC<FilterProps> = ({ setFilters }) => {

  return (
    <Container>
      <label htmlFor="favoured">Filter:</label>
      <select
        name="favoured"
        id="favoured"
        onChange={(e) => setFilters(e.target.value)
        }
      >
        <option className='option' value="any">Choose...</option>
        <option className='option' value="favoured">Favoured</option>
        <option className='option' value="no-favoured">No Favoured</option>
      </select>
    </Container>
  )
}

export default Filter;