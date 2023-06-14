import openProjectForm from './project-form-dom-controller';

const addProjectButton = document.querySelector('#add-project');

const eventListeners = () => {
    addProjectButton.addEventListener('click', openProjectForm);
};

export default eventListeners;
