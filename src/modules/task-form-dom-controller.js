import addTaskToArray from './task-array';

const overlay = document.querySelector('#overlay');
const myForm = document.querySelector('#myForm');
const taskTitle = document.querySelector('#task-title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');

// Helper Functions

function openForm() {
    myForm.style.display = 'block';
    overlay.classList.add('active');
}

function closeForm() {
    myForm.style.display = 'none';
    overlay.classList.remove('active');

    taskTitle.value = '';
    description.value = '';
    date.value = '';
}

function submitProjectForm(e) {
    e.preventDefault();
    addTaskToArray(taskTitle.value, description.value, date.value);
    closeForm();
}

function cancelProjectForm(e) {
    e.preventDefault();
    closeForm();
}

function openTaskForm() {
    openForm();
    taskTitle.focus();
}

document.querySelector('#submit').addEventListener('click', submitProjectForm);
document.querySelector('#cancel').addEventListener('click', cancelProjectForm);

export default openTaskForm;
