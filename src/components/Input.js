import React from 'react';

function Input({maxLength, onSubmit, inputedText}) {
    return (
        <input
            type='string'
            maxLength={String(maxLength)}
            onChange={(e) => (onSubmit(e))}
            value={inputedText}
        />
    )
};

export default Input;