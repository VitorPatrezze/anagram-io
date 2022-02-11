import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import Letter from './Letter'
import Input from './Input'

function Answer({ length }) {
    const [letters, setLetters] = useState([])
    // const [target, setTarget] = useState()

    // useEffect(() => {
    //     const list = []
    //     for (var i = 0; i < length; i++) {
    //         list[i] = ''
    //     }
    //     setLetters(list)
    // }, [])

    // Change Letterbox and Target
    const onSubmit = (e) => {
        setLetters(e.target.value.split(""))
    }

    //AnswerBox
    var form = []
    for (var i = 0; i < length; i++) {
        form.push(<Letter key={i} id={i} letter={letters[i]}/>);
    }

    return (
        <div className="answer">
            {form}
            <Input letters={letters} maxLength={length} onSubmit={(e) => (onSubmit(e))}/> 
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