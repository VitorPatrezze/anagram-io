import React from 'react';
import PropTypes from 'prop-types';

function Letter({letter}) {
  return (
    <h1 className='letter'>
      {letter}
    </h1>
  )
};

Letter.propTypes = {
  letter: PropTypes.string.isRequired,
}

export default Letter;