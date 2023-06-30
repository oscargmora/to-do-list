import { toDate, isToday, isThisWeek } from 'date-fns';

export default class Project {
    constructor(name) {
        this.name = name;
        this.tasks = [];
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getTasks() {
        return this.tasks;
    }

    setTasks(tasks) {
        this.tasks = tasks;
    }

    getTask(taskName) {
        return this.tasks.find((task) => task.getName() === taskName);
    }

    contains(taskName) {
        return this.tasks.some((task) => task.getName() === taskName);
    }

    addTask(newTask) {
        this.tasks.push(newTask);
    }

    deleteTask(taskName) {
        this.tasks = this.tasks.find((task) => task.getName() !== taskName);
    }

    getTasksToday() {
        return this.tasks.filter((task) => {
            const taskDate = new Date(task.getDateFormatted());
            return isToday(toDate(taskDate));
        });
    }

    getTasksThisWeek() {
        return this.tasks.filter((task) => {
            const taskDate = new Date(task.getDateFormatted());
            return isThisWeek(toDate(taskDate));
        });
    }
}
