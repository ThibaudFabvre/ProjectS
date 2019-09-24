import React from 'react';
import { Button, Title } from 'src/components/atoms';
import TaskList from './TaskList';

const TaskPage = () => (
    <>
        <Title>TaskList</Title>
        <Button>Add</Button>
        <TaskList />;
    </>
);
export default TaskPage;
