import _ from 'lodash';
import getProjects from './project-array';

let getMyProjects = getProjects();

function findObjectInArray(projectId) {
    const newProjectArray = getMyProjects.filter(
        (project) => project.id === projectId
    );
    console.log(newProjectArray[0]);
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

function editProject(e) {
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
    getMyProjects = _.reject(
        getMyProjects,
        (project) => project === selectedProject
    );
    removeProjectDOM(e);
}

export { editProjectArray, removeProjectArray, findObjectInArray };
