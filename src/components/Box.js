import React from 'react';
import Letter from './Letter'

function Box({ letter, backgroundColor }) {
    const boxStyle = {
        display: 'inline-block',
        textAlign: 'center',
        border: '2px solid steelblue',
        margin: '3px 3px',
        width: '7%',
        borderRadius: '5px',
        backgroundColor: backgroundColor
    }

    return (
        <div
            className='box'
            style={boxStyle}
        >
            <Letter letter={letter}/>
        </div>
    )
};

Box.defaultProps = {
    backgroundColor: 'transparent',
}

export default Box;