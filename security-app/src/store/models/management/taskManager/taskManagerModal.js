export const taskManagerModal = {
    state: {
        tasksList: [],
    },
    reducers: {
        //Todo addCategory

        //Todo removeCategory

        addTask(state, task) {
            return {
                ...state,
                tasksList: state.tasksList.concat({ name: task.name, path: task.filePath }),
            };
        },
        removeTask(state, task) {
            state.taskList.splice(task, 1);
            return {
                ...state,
            };
        },

        //Todo setTaskBackground

        //Todo addSubtask

        //Todo removeSubtask

        //Todo addLabel

        //Todo addDescription
    },
    effects: () => ({}),
};
