/* eslint-disable no-underscore-dangle */
import _ from 'lodash';

const editProjectForm = document.querySelector('.edit-project-form');

let myProjects = [];

class Project {
    constructor(name) {
        this.name = name;
        this.id = `${Date.now()}`;
        this._tasks = [];
    }

    addTask(task) {
        this._tasks.push(task);
    }

    removeTask(task, taskId) {
        this._tasks = this._tasks.filter((t) => t.id !== taskId);
    }
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
    editProjectInput.value = '';
    console.log(myProjects);
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
    editProjectInput.focus();
}

function cancelEditProject(e) {
    e.preventDefault();
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
    projectButton.setAttribute('data-id', projectId);

    createElementsInProjectButton(newProject, projectButton);

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
