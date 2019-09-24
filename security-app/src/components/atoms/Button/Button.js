import React from 'react';

export const Button = ({ id, className, onClick, children }) => (
    <>
        <button id={id} className={className} onClick={onClick}>
            {children}
        </button>
    </>
);
