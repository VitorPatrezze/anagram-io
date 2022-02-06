import React from 'react';
import PropTypes from 'prop-types';
import Letter from './Letter'
 
function Answer({ length }) {
    var letters = []
    for (var i = 0; i < length; i++) {
        letters.push(<Letter key={i} />);
    }
    return (letters)
};

Answer.propTypes = {
  length: PropTypes.string.isRequired,
}

export default Answer;

// //for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }