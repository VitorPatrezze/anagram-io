import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from './Box'
import Input from './Input'

function Answer({ length, word }) {
    const [letters, setLetters] = useState(Array.apply(null, Array(length)))
    // const [target, setTarget] = useState()

    // Change Letterbox and Target
    const onSubmit = (e) => {
        setLetters(e.target.value.split(""))
    }

    //AnswerBox
    var answerDisplay = []
    for (var i = 0; i < length; i++) {
        var backgroundColor = "transparent"
        if (letters[i] === word.charAt(i)) {
            backgroundColor = "green"
        }
        answerDisplay.push(<Box key={i} id={i} letter={letters[i]} backgroundColor={backgroundColor}/>);
    }

    return (
        <section className="answerSection" >
            <div className="answer">
                {answerDisplay} 
            </div>
            <Input letters={letters} maxLength={length} onSubmit={(e) => (onSubmit(e))}/>
        </section>
    )
};

Answer.propTypes = {
    length: PropTypes.number,
    word: PropTypes.string,
}
  
export default Answer;