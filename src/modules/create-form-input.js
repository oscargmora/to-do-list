const form = document.querySelector('#project-form');

class Project {
    constructor(name) {
        this.name = name;
    }
}

function createForm(event) {
    event.preventDefault();

    form.classList.remove('hidden');
}

form.addEventListener('submit', createForm);

export default createForm;
