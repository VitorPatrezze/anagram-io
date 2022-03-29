import React from 'react';

function Letter({ letter }) {
    const letterStyle = {
        display: 'block',
        alignSelf: 'center',
        justifyContent: 'center',
        padding: '0',
        fontWeight: "bold",
        fontSize: 20
    }    

    return (
        <p style={letterStyle}>{letter}</p>
    )
};



export default Letter;