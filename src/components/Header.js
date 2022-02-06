import React from 'react';
import PropTypes from 'prop-types';
import Button from './Button'

function Header({ title, onAdd, showAdd }) {
  return (
    <header className='header'>
      <h1>{title}</h1>
    </header>
  )
};

Header.defaultProps = {
  title: 'Anagramio',
}

Header.propTypes = {
  title: PropTypes.string.isRequired,
}

// const headingStyle = {
//   color: 'red',
//   backgroundColor: 'black'
// }

export default Header;
