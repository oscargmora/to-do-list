import getProjects from './project-array';
import {
    editProjectArray,
    removeProjectArray,
    findObjectInArray
} from './edit-and-remove-buttons';

const getMyProjects = getProjects();

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

export default addProjectToDom;
