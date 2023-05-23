const form = document.querySelector('#project-form');

class Project {
    constructor(name) {
        this.name = name;
    }
}

function createForm(event) {
    event.preventDefault();

    form.classList.remove('hidden');

    const input = document.querySelector('#project-input');
    const inputText = input.value;

    const newProject = new Project(inputText);

    const project = document.querySelector('#project');

    const button = document.createElement('button');
    button.classList.add('sidebar-project-button');
    button.textContent = newProject.name;
    project.appendChild(button);

    input.value = '';
}

form.addEventListener('submit', createForm);

export default createForm;
