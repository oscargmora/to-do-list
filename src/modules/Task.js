export default class Task {
    constructor(name, description, dueDate) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.complete = false;
    }

    getName() {
        return this.name;
    }

    setName(name) {
        this.name = name;
    }

    getDescription() {
        return this.description;
    }

    setDescription(description) {
        this.description = description;
    }

    getDate() {
        return this.dueDate;
    }

    setDate(dueDate) {
        this.dueDate = dueDate;
    }

    getCompleteStatus() {
        return this.complete;
    }

    toggleCompletionStatus() {
        this.complete = !this.complete;
    }
}
