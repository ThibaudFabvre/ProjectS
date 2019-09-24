import React from 'react';

const Task = (title, content, mainColor = 'white') => (
    <div bgcolor={mainColor}>
        <h6>{title}</h6>
        <p>{content}</p>
    </div>
);

export default Task;
