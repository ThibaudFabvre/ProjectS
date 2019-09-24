import React from 'react';
import Task from './Task';

const list = [
    {
        title: 'To Do',
        content: "I'm a potato",
        mainColor: 'red',
    },
];

const TaskList = () => (
    <div>
        {list.map((taskDetails) => {
            <Task taskDetails />;
        })}
    </div>
);

export default TaskList;
