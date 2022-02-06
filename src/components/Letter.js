import React, { useState } from 'react';

function Letter({id, letter, onSubmit}) {
    return (
        <input
            className='letter'
            type='char'
            id={id}
            value={letter}
            onChange={(e) => (onSubmit(e))} />
    )
};

export default Letter;