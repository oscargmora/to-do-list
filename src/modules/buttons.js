import createForm from './create-form-input';
import createTaskInput from './create-task-input';
import closeForm from './create-task';

const addProjectButton = document.querySelector('#add-project');
const addTaskButton = document.querySelector('#add-task');
const submitTaskButton = document.querySelector('#submit');
const cancelTaskButton = document.querySelector('#cancel');

const clickButton = () => {
    addProjectButton.addEventListener('click', (event) => {
        createForm(event);
    });
    addTaskButton.addEventListener('click', (event) => {
        createTaskInput(event);
    });
    submitTaskButton.addEventListener('click', (event) => {
        closeForm(event);
    });
    cancelTaskButton.addEventListener('click', (event) => {
        closeForm(event);
    });
};

export default clickButton;
