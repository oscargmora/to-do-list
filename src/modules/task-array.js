import _ from 'lodash';
import editImg from '../img/pencil.png';
import trashImg from '../img/trash-bin.png';

// figure out how to export this array to project-array to link tasks with projects

let myTasks = [];

class Task {
    constructor(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.id = `${Date.now()}`;
        this.complete = false;
    }
}

// Helper Functions

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

function findObjectInArray(task) {
    const taskId = task.getAttribute('data-id');
    const newTaskArray = myTasks.filter((newTask) => newTask.id === taskId);
    const newTask = newTaskArray[0];
    return newTask;
}

function getTargetParentElement(e) {
    const task = e.target.parentElement;
    return task;
}

function changeCompleteStatus(e) {
    const round = getTargetParentElement(e);
    const task = round.parentElement;
    const taskArray = findObjectInArray(task);
    taskArray.complete = !taskArray.complete;
}

function createCheckBox() {
    const div = document.createElement('div');
    const checkbox = document.createElement('input');
    const label = document.createElement('label');

    div.classList.add('round');

    checkbox.setAttribute('type', 'checkbox');
    checkbox.setAttribute('id', 'checkbox');

    label.setAttribute('for', 'checkbox');

    checkbox.addEventListener('click', changeCompleteStatus);

    div.append(checkbox, label);

    return div;
}

// Remove Task Functionality

function removeTaskDOM(e) {
    const task = getTargetParentElement(e);
    task.remove();
}

function removeTaskFromArray(e) {
    const task = getTargetParentElement(e);
    const selectedTask = findObjectInArray(task);
    myTasks = _.reject(
        myTasks,
        (modifiedTask) => modifiedTask === selectedTask
    );
    removeTaskDOM(e);
}

// Edit Task Functionality

function addEditToDOM(task, title, date) {
    const titleDOM = task.firstChild.nextSibling;
    const dateDOM = titleDOM.nextSibling;

    titleDOM.innerText = title;
    dateDOM.innerText = date;
}

function addEditToArray(e) {
    const taskTitle = document.querySelector('#task-edit-title');
    const description = document.querySelector('#edit-description');
    const date = document.querySelector('#edit-date');

    const task =
        e.target.parentElement.parentElement.parentElement.previousSibling;
    const editedTask = findObjectInArray(task);

    editedTask.title = taskTitle.value;
    editedTask.description = description.value;
    editedTask.date = date.value;

    addEditToDOM(task, editedTask.title, editedTask.date);
}

function closeForm() {
    const overlay = document.querySelector('#overlay');
    const myForm = document.querySelector('#myEditForm');
    const taskTitle = document.querySelector('#task-edit-title');
    const description = document.querySelector('#edit-description');
    const date = document.querySelector('#edit-date');

    overlay.classList.remove('active');
    myForm.style.display = 'none';

    taskTitle.value = '';
    description.value = '';
    date.value = '';
}

function openForm(e) {
    const overlay = document.querySelector('#overlay');
    const myForm = document.querySelector('#myEditForm');
    const taskTitle = document.querySelector('#task-edit-title');
    const editDescription = document.querySelector('#edit-description');
    const editDate = document.querySelector('#edit-date');
    const task = getTargetParentElement(e);
    const userInputtedForm = findObjectInArray(task);

    taskTitle.value = userInputtedForm.title;
    editDescription.value = userInputtedForm.description;
    editDate.value = userInputtedForm.date;

    insertAfter(myForm, task);

    myForm.style.display = 'block';
    overlay.classList.add('active');
    taskTitle.focus();

    // Close form if clicked outside of form
    // eslint-disable-next-line func-names
    window.onclick = function (event) {
        if (event.target === overlay) {
            closeForm();
        }
    };
}

function cancelTaskForm(e) {
    e.preventDefault();
    closeForm();
}

function submitTaskForm(e) {
    e.preventDefault();
    addEditToArray(e);
    closeForm();
}

// Create New Task

function createElementsInTaskDiv(taskId, titleInput, dateInput) {
    const taskDiv = document.createElement('div');
    const checkboxDiv = createCheckBox();
    const title = document.createElement('p');
    const date = document.createElement('date');
    const editButton = document.createElement('button');
    const removeButton = document.createElement('button');

    taskDiv.setAttribute('data-id', taskId);

    title.innerText = titleInput;
    date.innerText = dateInput;

    removeButton.style.backgroundImage = `url(${trashImg})`;
    removeButton.style.backgroundSize = 'cover';
    removeButton.style.width = '3em';
    removeButton.style.height = '3em';

    editButton.style.backgroundImage = `url(${editImg})`;
    editButton.style.backgroundSize = 'cover';
    editButton.style.width = '3em';
    editButton.style.height = '3em';

    removeButton.addEventListener('click', removeTaskFromArray);
    editButton.addEventListener('click', openForm);

    taskDiv.append(checkboxDiv, title, date, editButton, removeButton);
    return taskDiv;
}

function addTaskToDom(taskId, titleInput, dateInput) {
    const taskContainer = document.querySelector('#task');
    const task = createElementsInTaskDiv(taskId, titleInput, dateInput);

    task.classList.add('taskCard');

    taskContainer.appendChild(task);
}

function addTaskToArray(titleInput, descriptionInput, dateInput) {
    const newTask = new Task(titleInput, descriptionInput, dateInput);
    const taskId = newTask.id;
    myTasks.push(newTask);
    addTaskToDom(taskId, titleInput, dateInput);
}

document
    .querySelector('#edit-submit')
    .addEventListener('click', submitTaskForm);
document
    .querySelector('#edit-cancel')
    .addEventListener('click', cancelTaskForm);

export default addTaskToArray;
