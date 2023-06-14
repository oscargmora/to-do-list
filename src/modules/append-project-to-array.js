/* eslint-disable no-underscore-dangle */
import getProjects from './project-array';

const getMyProjects = getProjects();

class Project {
    constructor(name) {
        this.name = name;
        this.id = `${Date.now()}`;
        this._tasks = [];
    }

    addTask(task) {
        this._tasks.push(task);
    }

    removeTask(task, taskId) {
        this._tasks = this._tasks.filter((t) => t.id !== taskId);
    }
}

function addProjectToArray(userInput) {
    const newProject = new Project(userInput);
    const projectId = newProject.id;
    console.log(projectId);
}

export default addProjectToArray;
