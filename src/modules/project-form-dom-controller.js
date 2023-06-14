import addProjectToArray from './append-project-to-array';

const projectForm = document.querySelector('#project-form');
const projectInput = document.querySelector('#project-input');

function openProjectForm() {
    projectForm.classList.remove('hidden');
    projectInput.focus();
}

function hideProjectForm() {
    projectForm.classList.add('hidden');
}

function submitProjectForm(e) {
    e.preventDefault();
    addProjectToArray(projectInput.value);
}

function cancelProjectForm(e) {
    e.preventDefault();
    projectInput.value = '';
    hideProjectForm();
}

document
    .querySelector('#sidebar-submit')
    .addEventListener('click', submitProjectForm);

document
    .querySelector('#sidebar-cancel')
    .addEventListener('click', cancelProjectForm);

export default openProjectForm;
