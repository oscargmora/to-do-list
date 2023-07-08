import { compareAsc, toDate } from 'date-fns';
import Project from './Project';
import Task from './Task';

export default class TodoList {
    constructor() {
        this.projects = [];
        this.projects.push(new Project('All Tasks'));
        this.projects.push(new Project('Today'));
        this.projects.push(new Project('This Week'));
    }

    getProjects() {
        return this.projects;
    }

    setProjects(projects) {
        this.projects = projects;
    }

    getProject(projectName) {
        return this.projects.find(
            (project) => project.getName() === projectName
        );
    }

    contains(projectName) {
        return this.projects.some(
            (project) => project.getName() === projectName
        );
    }

    addProject(newProject) {
        this.projects.push(newProject);
    }

    deleteProject(projectName) {
        const projectToDelete = this.projects.find(
            (project) => project.getName() === projectName
        );
        this.projects.splice(this.projects.indexOf(projectToDelete), 1);
    }

    updateAllTasksProject() {
        this.getProject('All Tasks').tasks = [];

        this.projects.forEach((project) => {
            if (
                project.getName() === 'All Tasks' ||
                project.getName() === 'Today' ||
                project.getName() === 'This Week'
            ) {
                return;
            }

            const allTasks = project.getAllTasks();
            allTasks.forEach((task) => {
                const taskName = `${task.getName()} (Project: ${project.getName()})`;
                if (task.complete === true) {
                    const newTask = new Task(
                        taskName,
                        task.description,
                        task.dueDate
                    );
                    newTask.toggleCompletionStatus();
                    this.getProject('All Tasks').addTask(newTask);
                } else {
                    this.getProject('All Tasks').addTask(
                        new Task(taskName, task.description, task.dueDate)
                    );
                }
            });
        });
    }

    updateTodayProject() {
        this.getProject('Today').tasks = [];

        this.projects.forEach((project) => {
            if (
                project.getName() === 'All Tasks' ||
                project.getName() === 'Today' ||
                project.getName() === 'This Week'
            ) {
                return;
            }

            const todayTasks = project.getTasksToday();
            todayTasks.forEach((task) => {
                const taskName = `${task.getName()} (Project: ${project.getName()})`;
                if (task.complete === true) {
                    const newTask = new Task(
                        taskName,
                        task.description,
                        task.dueDate
                    );
                    newTask.toggleCompletionStatus();
                    this.getProject('Today').addTask(newTask);
                } else {
                    this.getProject('Today').addTask(
                        new Task(taskName, task.description, task.dueDate)
                    );
                }
            });
        });
    }

    updateWeekProject() {
        this.getProject('This Week').tasks = [];

        this.projects.forEach((project) => {
            if (
                project.getName() === 'All Tasks' ||
                project.getName() === 'Today' ||
                project.getName() === 'This Week'
            ) {
                return;
            }

            const weekTasks = project.getTasksThisWeek();
            weekTasks.forEach((task) => {
                const taskName = `${task.getName()} (Project: ${project.getName()})`;
                if (task.complete === true) {
                    const newTask = new Task(
                        taskName,
                        task.description,
                        task.dueDate
                    );
                    newTask.toggleCompletionStatus();
                    this.getProject('This Week').addTask(newTask);
                } else {
                    this.getProject('This Week').addTask(
                        new Task(taskName, task.description, task.dueDate)
                    );
                }
            });
        });

        this.getProject('This Week').setTasks(
            this.getProject('This Week')
                .getTasks()
                .sort((taskA, taskB) =>
                    compareAsc(
                        toDate(new Date(taskA.getDate())),
                        toDate(new Date(taskB.getDate()))
                    )
                )
        );
    }
}
