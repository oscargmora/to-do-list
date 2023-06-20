const myTasks = [];

class Task {
    constructor(title, description, date) {
        this.title = title;
        this.description = description;
        this.date = date;
        this.id = `${Date.now()}`;
    }
}

function addTaskToArray(titleInput, descriptionInput, dateInput) {
    const newTask = new Task(titleInput, descriptionInput, dateInput);
    const taskId = newTask.id;
    myTasks.push(newTask);
    console.log(myTasks);
    // addTaskToDom(taskId);
}

export default addTaskToArray;
