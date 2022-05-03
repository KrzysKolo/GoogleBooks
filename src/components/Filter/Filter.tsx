import React from 'react';
import { FilterProps } from '../../models/FilterProps';
import { Container } from './Filter.styles';

const Filter: React.FC<FilterProps> = ({ filters, setFilters}) => {
  return (
    <Container>
      <label htmlFor="favourite">Favourite</label>
      <select
        name="favourite"
        id="favourite"
        onChange={(e) => {
          setFilters({
            ...filters,
            favoured: e.target.value,
          });
        }}
      >
        <option className="option" value="any">Choose...</option>
        <option className="option" value="favoured">Favoured</option>
        <option className="option" value="not favoured">Not Favoured</option>
      </select>
      <label htmlFor="language">Language</label>
      <select
        name="language"
        id="language"
        onChange={(e) => {
          setFilters({
            ...filters,
            language: e.target.value,
          });
        }}
      >
        <option className="option" value="any">Choose...</option>
        <option className="option" value="pl">Polish</option>
        <option className="option" value="en">English</option>
      </select>
    </Container>
  )
}

export default Filter;