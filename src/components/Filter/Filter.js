import PropTypes from 'prop-types';
import { FilterBox, FilterLabel, FilterInput } from './Filter.styled';

export const Filter = ({ value, onChange }) => {
  return (
    <FilterBox>
      <FilterLabel htmlFor="filter">Find contact by name</FilterLabel>
      <FilterInput type="text" id="filter" value={value} onChange={onChange} />
    </FilterBox>
  );
};

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func.isRequired,
};
