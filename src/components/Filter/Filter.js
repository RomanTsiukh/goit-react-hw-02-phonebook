import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const Title = styled.p`
  padding-bottom: ${p => p.theme.space[2]}px;
`;

const Filter = ({ value, onChange }) => {
  return (
    <>
      <Title>Find contacts by name</Title>
      <input type="text" value={value} onChange={onChange} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
