import _ from 'lodash';
import editImg from '../img/pencil.png';
import trashImg from '../img/trash-bin.png';

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

function findObjectInArray(taskId) {
    const newTaskArray = myTasks.filter((task) => task.id === taskId);
    const newTask = newTaskArray[0];
    return newTask;
}

function getTargetParentElement(e) {
    const task = e.target.parentElement;
    return task;
}

function getTargetParentElementId(e) {
    const task = e.target.parentElement;
    const taskDataId = task.getAttribute('data-id');
    return taskDataId;
}

function changeCompleteStatus(e) {
    const round = getTargetParentElement(e);
    const task = round.parentElement;
    const taskId = task.getAttribute('data-id');
    const taskArray = findObjectInArray(taskId);
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
    const taskId = getTargetParentElementId(e);
    const selectedTask = findObjectInArray(taskId);
    myTasks = _.reject(myTasks, (task) => task === selectedTask);
    removeTaskDOM(e);
}

// Edit Task Functionality

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
    const task = getTargetParentElement(e);

    insertAfter(myForm, task);

    myForm.style.display = 'block';
    overlay.classList.add('active');
    taskTitle.focus();
}

function cancelTaskForm(e) {
    e.preventDefault();
    closeForm();
}

function submitTaskForm(e) {
    const taskTitle = document.querySelector('#task-edit-title');
    const description = document.querySelector('#edit-description');
    const date = document.querySelector('#edit-date');

    e.preventDefault();

    const task =
        e.target.parentElement.parentElement.parentElement.previousSibling;
    const taskId = task.getAttribute('data-id');
    const editedTask = findObjectInArray(taskId);

    editedTask.title = taskTitle.value;
    editedTask.description = description.value;
    editedTask.date = date.value;

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
