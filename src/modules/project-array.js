/* eslint-disable no-underscore-dangle */
import _ from 'lodash';
import editImg from '../img/pencil.png';
import trashImg from '../img/trash-bin.png';
import {
    myTasks,
    removeTaskFromArray,
    openForm,
    createCheckBox
} from './task-array';

const editProjectForm = document.querySelector('.edit-project-form');
const taskContainer = document.querySelector('#task');

let myProjects = [];

class Project {
    constructor(name) {
        this.name = name;
        this.id = `${Date.now()}`;
        this._tasks = [];
    }
}

// Append Tasks to Project Array

function createTaskDiv(task) {
    const taskDiv = document.createElement('div');
    const checkboxDiv = createCheckBox();
    const title = document.createElement('p');
    const date = document.createElement('date');
    const editButton = document.createElement('button');
    const removeButton = document.createElement('button');

    taskDiv.setAttribute('data-id', task.id);
    taskDiv.classList.add('taskCard');

    title.innerText = task.title;
    date.innerText = task.date;

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

function displayTasksForProject() {
    const projectId = this.getAttribute('data-id');
    const projectTasks = myTasks.filter((task) => task.projectId === projectId);

    // Clear the task container
    taskContainer.innerHTML = '';

    // Create and append task cards for each task in the project
    projectTasks.forEach((task) => {
        const taskDiv = createTaskDiv(task);
        taskContainer.appendChild(taskDiv);
    });
    console.log(myProjects);
}

function appendTasksToProjectArray() {
    const projectId = this.getAttribute('data-id');
    const projectTasks = myTasks.filter((task) => task.projectId === projectId);

    const chosenProjectArray = myProjects.findIndex(
        (project) => project.id === projectId
    );

    projectTasks.forEach((task) => {
        if (chosenProjectArray !== -1) {
            myProjects[chosenProjectArray]._tasks.push(task);
        }
    });
}

// Helper Functions

function findObjectInArray(projectId) {
    const newProjectArray = myProjects.filter(
        (project) => project.id === projectId
    );
    const newProject = newProjectArray[0];
    return newProject;
}

function getTargetParentElement(e) {
    const projectButton = e.target.parentElement;
    return projectButton;
}

function getTargetParentElementId(e) {
    const projectButton = e.target.parentElement;
    const projectButtonDataId = projectButton.getAttribute('data-id');
    return projectButtonDataId;
}

function insertAfter(newNode, existingNode) {
    existingNode.parentNode.insertBefore(newNode, existingNode.nextSibling);
}

// Edit/Remove Button Functionality

function removeProjectDOM(e) {
    const projectButton = getTargetParentElement(e);
    projectButton.remove();
}

function removeProjectArray(e) {
    const projectButtonDataId = getTargetParentElementId(e);
    const selectedProject = findObjectInArray(projectButtonDataId);
    myProjects = _.reject(myProjects, (project) => project === selectedProject);
    removeProjectDOM(e);
}

function addEditToDOM(projectButton, selectedProjectName) {
    const name = projectButton.firstChild;
    const editProjectInput = document.querySelector('#edit-project-input');

    name.innerText = selectedProjectName;
    editProjectInput.value = '';

    editProjectForm.classList.add('hidden');
    projectButton.classList.remove('hidden');
}

function editProjectArray(e) {
    e.preventDefault();
    const editProjectInput = document.querySelector('#edit-project-input');
    const projectButton =
        getTargetParentElement(e).parentElement.previousSibling;
    const projectButtonDataId = projectButton.getAttribute('data-id');
    const selectedProject = findObjectInArray(projectButtonDataId);
    selectedProject.name = editProjectInput.value;
    addEditToDOM(projectButton, selectedProject.name);
}

function editProjectFormOpener(e) {
    const projectButton = getTargetParentElement(e);
    const editProjectInput = document.querySelector('#edit-project-input');
    insertAfter(editProjectForm, projectButton);
    projectButton.classList.add('hidden');
    editProjectForm.classList.remove('hidden');
    editProjectInput.value = e.target.previousSibling.innerText;
    editProjectInput.focus();
}

function cancelEditProject(e) {
    e.preventDefault();
    const projectButton =
        getTargetParentElement(e).parentElement.previousSibling;
    const editProjectInput = document.querySelector('#edit-project-input');
    editProjectInput.value = '';
    projectButton.classList.remove('hidden');
    editProjectForm.classList.add('hidden');
}

function createElementsInProjectButton(newProject, projectButton) {
    const name = document.createElement('p');
    const edit = document.createElement('button');
    const remove = document.createElement('button');

    edit.classList.add('edit-project-button');
    remove.classList.add('remove-project-button');

    name.innerText = newProject.name;
    edit.innerText = 'Edit';
    remove.innerText = 'Remove';

    edit.addEventListener('click', editProjectFormOpener);
    remove.addEventListener('click', removeProjectArray);

    projectButton.append(name, edit, remove);
}

function addProjectToDom(projectId) {
    const newProject = findObjectInArray(projectId);

    const projectContainer = document.querySelector('#project');

    // Create Project Element

    const projectButton = document.createElement('button');

    projectButton.classList.add('sidebar-button');
    projectButton.classList.add('main-header-title');
    projectButton.setAttribute('data-id', projectId);

    createElementsInProjectButton(newProject, projectButton);

    projectButton.addEventListener('click', displayTasksForProject);

    // Append New Project Elements

    projectContainer.append(projectButton);
}

function addProjectToArray(userInput) {
    const newProject = new Project(userInput);
    const projectId = newProject.id;
    myProjects.push(newProject);
    addProjectToDom(projectId);
}

document
    .querySelector('#edit-sidebar-submit')
    .addEventListener('click', editProjectArray);

document
    .querySelector('#edit-sidebar-cancel')
    .addEventListener('click', cancelEditProject);

export {
    editProjectArray,
    removeProjectArray,
    findObjectInArray,
    addProjectToArray
};
