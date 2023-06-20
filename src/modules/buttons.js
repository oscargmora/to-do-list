import openProjectForm from './project-form-dom-controller';
import openTaskForm from './task-form-dom-controller';

const addProjectButton = document.querySelector('#add-project');
const addTaskButton = document.querySelector('#add-task');

const eventListeners = () => {
    addProjectButton.addEventListener('click', openProjectForm);
    addTaskButton.addEventListener('click', openTaskForm);
};

export default eventListeners;
