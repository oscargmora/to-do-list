import { addTaskToArray } from './task-array';

const overlay = document.querySelector('#overlay');
const myForm = document.querySelector('#myForm');
const taskTitle = document.querySelector('#task-title');
const description = document.querySelector('#description');
const date = document.querySelector('#date');

// Helper Functions

function openTaskForm() {
    myForm.style.display = 'block';
    overlay.classList.add('active');
    taskTitle.focus();
}

function closeForm() {
    myForm.style.display = 'none';
    overlay.classList.remove('active');

    taskTitle.value = '';
    description.value = '';
    date.value = '';
}

function submitTaskForm(e) {
    e.preventDefault();
    const projectId = document
        .querySelector('.selected')
        .getAttribute('data-id');
    addTaskToArray(taskTitle.value, description.value, date.value, projectId);
    closeForm();
}

function cancelTaskForm(e) {
    e.preventDefault();
    closeForm();
}

document.querySelector('#submit').addEventListener('click', submitTaskForm);
document.querySelector('#cancel').addEventListener('click', cancelTaskForm);

// Close form if clicked outside of form
// eslint-disable-next-line func-names
window.onclick = function (event) {
    if (event.target === overlay) {
        closeForm();
    }
};

export default openTaskForm;
