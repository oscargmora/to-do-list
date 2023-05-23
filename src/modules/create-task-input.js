const overlay = document.getElementById('overlay');
const myForm = document.getElementById('myForm');

class Task {
    constructor(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
    }
}

function createTaskInput(event) {
    event.preventDefault();

    myForm.style.display = 'block';
    overlay.classList.add('active');

    const titleInput = document.querySelector('#title');
    const descriptionInput = document.querySelector('#description');
    const dateInput = document.querySelector('#date');

    const titleText = titleInput.value;
    const descriptionText = descriptionInput.value;
    const dateText = dateInput.value;

    const newTask = new Task(titleText, descriptionText, dateText);

    const task = document.querySelector('#task');

    const div = document.createElement('div');
    div.textContent = newTask.title;
    task.appendChild(div);

    titleInput.value = '';
    descriptionInput.value = '';
    dateInput.value = '';
}

function closeForm() {
    myForm.style.display = 'none';
    overlay.classList.remove('active');
}

// eslint-disable-next-line func-names
window.onclick = function (event) {
    if (event.target === overlay) {
        closeForm();
    }
};

myForm.addEventListener('submit', createTaskInput);

export default createTaskInput;
