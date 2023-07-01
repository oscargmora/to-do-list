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
        return this.getDate;
    }

    setDate(dueDate) {
        this.dueDate = dueDate;
    }

    toggleCompletionStatus() {
        this.complete = !this.complete;
    }

    getDateFormatted() {
        const day = this.dueDate.splice('/')[0];
        const month = this.dueDate.splice('/')[1];
        const year = this.dueDate.splice('/')[2];
        return `${day}/${month}/${year}`;
    }
}
