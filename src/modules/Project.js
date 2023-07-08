import { toDate, isToday, isThisWeek, addDays } from 'date-fns';

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
        this.tasks = this.tasks.filter((task) => task.getName() !== taskName);
    }

    getAllTasks() {
        return this.tasks.map((task) => task);
    }

    getTasksToday() {
        return this.tasks.filter((task) => {
            const taskDate = addDays(new Date(task.getDate()), 1);
            return isToday(toDate(taskDate));
        });
    }

    getTasksThisWeek() {
        return this.tasks.filter((task) => {
            const taskDate = addDays(new Date(task.getDate()), 1);
            return isThisWeek(toDate(taskDate));
        });
    }
}
