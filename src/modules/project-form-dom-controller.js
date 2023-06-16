import addProjectToArray from './append-project-to-array';

const projectForm = document.querySelector('#project-form');
const projectInput = document.querySelector('#project-input');

function openProjectForm() {
    projectForm.classList.remove('hidden');
    projectInput.focus();
}

function hideProjectForm() {
    projectInput.value = '';
    projectForm.classList.add('hidden');
}

function submitProjectForm(e) {
    e.preventDefault();
    addProjectToArray(projectInput.value);
    hideProjectForm();
}

function cancelProjectForm(e) {
    e.preventDefault();
    hideProjectForm();
}

document
    .querySelector('#sidebar-submit')
    .addEventListener('click', submitProjectForm);

document
    .querySelector('#sidebar-cancel')
    .addEventListener('click', cancelProjectForm);

export default openProjectForm;
