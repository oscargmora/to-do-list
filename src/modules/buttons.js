import createForm from './create-form-input';

const addProjectButton = document.querySelector('#add-project');

const clickButton = () => {
    addProjectButton.addEventListener('click', (event) => {
        createForm(event);
    });
};

export default clickButton;
