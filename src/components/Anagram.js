import React from 'react';
import PropTypes from 'prop-types';

function Anagram({ anagram, active }) {
  const anagramStyle = {
    margin: 'auto',
    display: 'block',
    justifyContent: 'center',
    alignItems: 'center',
    fontWeight: (active) ? 'bold' : 'normal',
    fontSize: (active) ? '28px' : '16px'
  }

  return (
    <p className='anagram' style={anagramStyle}>
      {anagram}
    </p>
  )
};

Anagram.propTypes = {
  anagram: PropTypes.string,
}

export default Anagram;