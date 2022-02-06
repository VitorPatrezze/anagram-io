import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Letter from './Letter'
 
function Answer({ length }) {
    const [letters, setLetters] = useState()
    useEffect(()=>{
        const list = []
        for (var i = 0; i < length; i++) {
            list[i] = ''
        }
        setLetters(list)
    },[])

    var form = []
    const onSubmit = (e) => {
        letters[e.target.id] = e.target.value
        console.log(e.target.id)
    }
    
    for (var i = 0; i < length; i++) {
        form.push(<Letter key={i} id={i} letter={letters[i]} onSubmit={onSubmit}/>);
    }
    return (
        <div className="answer">
            {form}
        </div>
    )
};

Answer.propTypes = {
  length: PropTypes.number.isRequired,
}

export default Answer;

// //for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
// }