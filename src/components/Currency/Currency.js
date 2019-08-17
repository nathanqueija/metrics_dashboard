import React from 'react';
import PropTypes from 'prop-types';
import withStyle from './Currency.style';

const Currency = ({ className, name, value }) => (
  <div className={className}>
    {name && <span className="name">{name}:</span>}
    <span>
      {value.toLocaleString('en-UD', { style: 'currency', currency: 'USD' })}{' '}
    </span>
  </div>
);

Currency.propTypes = {
  value: PropTypes.number.isRequired,
  name: PropTypes.string
};

export default withStyle(Currency);
