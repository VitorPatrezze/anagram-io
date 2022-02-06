import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'
import Letter from './Letter'

function Anagram({ anagram, onRefresh }) {
  return (
    <h1 className='anagram'>
      {anagram}
      <Button color='blue' text='Refresh' onClick={onRefresh} />
    </h1>
  )
};

Anagram.propTypes = {
  anagram: PropTypes.string.isRequired,
}

export default Anagram;

//{anagram.split('').map((l) => (<Letter key={l+anagram.split().indexOf(l)} letter={l}/>))}