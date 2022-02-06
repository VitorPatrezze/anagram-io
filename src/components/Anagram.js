import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'

function Anagram({ anagram, onRefresh}) {
  return (
    <div className='header'>
      <h1>{anagram}</h1>
      <Button color='blue' text='Refresh' onClick={onRefresh} />
    </div>
  )
};

Anagram.propTypes = {
  anagram: PropTypes.string.isRequired,
}

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Anagram;
