/* eslint-disable no-underscore-dangle */
import _ from 'lodash';

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

// Edit/Remove Button Functionality

function editProjectDOM(e) {
    const projectButton = getTargetParentElement(e);
}

function removeProjectDOM(e) {
    const projectButton = getTargetParentElement(e);
    projectButton.remove();
}

function editProjectArray(e) {
    const projectButtonDataId = getTargetParentElementId(e);
}

function removeProjectArray(e) {
    const projectButtonDataId = getTargetParentElementId(e);
    const selectedProject = findObjectInArray(projectButtonDataId);
    myProjects = _.reject(myProjects, (project) => project === selectedProject);
    removeProjectDOM(e);
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

    edit.addEventListener('click', editProjectArray);
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

export {
    editProjectArray,
    removeProjectArray,
    findObjectInArray,
    addProjectToArray
};
