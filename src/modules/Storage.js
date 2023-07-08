import Project from './Project';
import Task from './Task';
import TodoList from './TodoList';

export default class Storage {
    static saveTodoList(data) {
        localStorage.setItem('todoList', JSON.stringify(data));
    }

    static getTodoList() {
        const todoList = Object.assign(
            new TodoList(),
            JSON.parse(localStorage.getItem('todoList'))
        );

        todoList.setProjects(
            todoList
                .getProjects()
                .map((project) => Object.assign(new Project(), project))
        );

        todoList
            .getProjects()
            .forEach((project) =>
                project.setTasks(
                    project
                        .getTasks()
                        .map((task) => Object.assign(new Task(), task))
                )
            );

        return todoList;
    }

    static addProject(project) {
        const todoList = Storage.getTodoList();
        todoList.addProject(project);
        Storage.saveTodoList(todoList);
    }

    static deleteProject(projectName) {
        const todoList = Storage.getTodoList();
        todoList.deleteProject(projectName);
        Storage.saveTodoList(todoList);
    }

    static renameProject(projectName, newProjectName) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).setName(newProjectName);
        Storage.saveTodoList(todoList);
    }

    static addTask(projectName, task) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).addTask(task);
        Storage.saveTodoList(todoList);
    }

    static deleteTask(projectName, taskName) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).deleteTask(taskName);
        Storage.saveTodoList(todoList);
    }

    static clearTasks(projectName) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).clearTasks();
        Storage.saveTodoList(todoList);
    }

    static renameTask(
        projectName,
        taskName,
        newTaskName,
        newTaskDescription,
        newTaskDate
    ) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).getTask(taskName).setName(newTaskName);
        todoList
            .getProject(projectName)
            .getTask(taskName)
            .setDescription(newTaskDescription);
        todoList.getProject(projectName).getTask(taskName).setDate(newTaskDate);
        Storage.saveTodoList(todoList);
    }

    static setTaskDescription(projectName, taskName, newDescription) {
        const todoList = Storage.getTodoList();
        todoList
            .getProject(projectName)
            .getTask(taskName)
            .setDescription(newDescription);
        Storage.saveTodoList(todoList);
    }

    static setTaskDate(projectName, taskName, newDueDate) {
        const todoList = Storage.getTodoList();
        todoList.getProject(projectName).getTask(taskName).setDate(newDueDate);
        Storage.saveTodoList(todoList);
    }

    static setTaskCompletionStatus(projectName, taskName) {
        const todoList = Storage.getTodoList();
        todoList
            .getProject(projectName)
            .getTask(taskName)
            .toggleCompletionStatus();

        Storage.saveTodoList(todoList);
    }

    static updateAllTasksProject() {
        const todoList = Storage.getTodoList();
        todoList.updateAllTasksProject();
        Storage.saveTodoList(todoList);
    }

    static updateTodayProject() {
        const todoList = Storage.getTodoList();
        todoList.updateTodayProject();
        Storage.saveTodoList(todoList);
    }

    static updateWeekProject() {
        const todoList = Storage.getTodoList();
        todoList.updateWeekProject();
        Storage.saveTodoList(todoList);
    }
}
