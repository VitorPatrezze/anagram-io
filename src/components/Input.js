import React from 'react';

function Input({maxLength, onSubmit}) {
    return (
        <input
            type='string'
            maxLength={String(maxLength)}
            onChange={(e) => (onSubmit(e))}
        />
    )
};

export default Input;