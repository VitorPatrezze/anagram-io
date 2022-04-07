import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Box from './Box'
import Input from './Input'

function Answer({ length, word, setNextActive }) {
    const [letters, setLetters] = useState(Array.apply(null, Array(length)))
    const [inputedText, setInputedText] = useState("")

    const answerStyle = {
        display: 'flex',
        textAlign: 'center',
        margin: 10,
        height: 70,
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'stretch'
    }

    // Change Letterbox and Target
    const onSubmit = (e) => {
        setInputedText(e.target.value)
        setLetters(e.target.value.split(""))
    }

    //AnswerBox
    var answerDisplay = []
    for (var i = 0; i < length; i++) {
        var backgroundColor = "transparent"
        if (letters[i] === word.charAt(i)) {
            backgroundColor = "green"
            if (letters.join('') === word) {
                setNextActive()
                setLetters(Array.apply(null, Array(length)))
                setInputedText("")
            }
        }
        answerDisplay.push(<Box key={i} id={i} letter={letters[i]} backgroundColor={backgroundColor}/>);
    }

    return (
        <section className="answerSection" >
            <div className="answer" style={answerStyle}>
                {answerDisplay} 
            </div>
            <Input id="input-form" letters={letters} maxLength={length} onSubmit={(e) => (onSubmit(e))} inputedText={inputedText}/>
        </section>
    )
};

Answer.propTypes = {
    length: PropTypes.number,
    word: PropTypes.string,
}
  
export default Answer;