import Project from './Project';
import Task from './Task';
import Storage from './Storage';
import editImg from '../img/pencil.png';
import trashImg from '../img/trash-bin.png';

export default class UI {
    // LOAD CONTENT

    static loadHomepage() {
        UI.loadProjects();
        UI.initProjectButtons();
        UI.openProject('All Tasks', document.querySelector('#all-tasks'));
    }

    static loadProjects() {
        Storage.getTodoList()
            .getProjects()
            .forEach((project) => {
                if (
                    project.name === 'All Tasks' ||
                    project.name === 'Today' ||
                    project.name === 'This Week'
                )
                    return;
                UI.createProjectButton(project.name);
            });
        UI.initAddProjectButtons();
        UI.initEditProjectButtons();
    }

    static loadProjectContent(projectName) {
        const mainHeader = document.querySelector('#main-header');

        mainHeader.innerText = projectName;

        UI.clearTasks();
        UI.loadTasks(projectName);
    }

    static loadTasks(projectName) {
        Storage.getTodoList()
            .getProject(projectName)
            .getTasks()
            .forEach((task) =>
                UI.createTaskCard(projectName, task.name, task.dueDate)
            );
        if (
            projectName !== 'All Tasks' &&
            projectName !== 'Today' &&
            projectName !== 'This Week'
        ) {
            UI.initAddTaskButtons();
        }
    }

    // CREATE PROJECT

    static clearProjects() {
        const projects = document.querySelectorAll('.sidebar-project-button');
        projects.forEach((project) => project.remove());
    }

    static editProject(e) {
        const projectName = this.previousSibling.innerText;
        UI.openEditProjectForm(projectName, e);
    }

    static deleteProject() {
        const projectName = this.previousSibling.previousSibling.innerText;
        Storage.deleteProject(projectName);
        UI.clearProjects();
        UI.loadProjects();
        UI.openProject('All Tasks', document.querySelector('#all-tasks'));
    }

    static appendButtonsToProjectButton(projectName, projectButton) {
        const projectNameContainer = document.createElement('p');
        const editProjectButton = document.createElement('button');
        const removeProjectButton = document.createElement('button');

        editProjectButton.classList.add('edit-project-button');
        removeProjectButton.classList.add('remove-project-button');

        projectNameContainer.innerText = projectName;
        editProjectButton.innerText = 'Edit';
        removeProjectButton.innerText = 'Remove';

        editProjectButton.addEventListener('click', UI.editProject);
        removeProjectButton.addEventListener('click', UI.deleteProject);

        projectButton.append(
            projectNameContainer,
            editProjectButton,
            removeProjectButton
        );
    }

    static createProjectButton(projectName) {
        const projectButton = document.createElement('button');

        projectButton.classList.add('sidebar-project-button');

        UI.appendButtonsToProjectButton(projectName, projectButton);

        document.querySelector('#project').appendChild(projectButton);

        UI.initProjectButtons();
    }

    // ADD PROJECT EVENT LISTENERS

    static initAddProjectButtons() {
        const addProjectButton = document.querySelector('#add-project');
        const submitProjectButton = document.querySelector('#sidebar-submit');
        const cancelProjectButton = document.querySelector('#sidebar-cancel');

        addProjectButton.addEventListener('click', UI.openProjectForm);
        submitProjectButton.addEventListener('click', UI.addProject);
        cancelProjectButton.addEventListener(
            'click',
            UI.cancelProjectSubmission
        );
    }

    static openProjectForm() {
        document.querySelector('#project-form').classList.remove('hidden');
        document.querySelector('#project-input').focus();
    }

    static addProject(e) {
        e.preventDefault();
        const projectName = document.querySelector('#project-input').value;
        Storage.addProject(new Project(projectName));
        UI.createProjectButton(projectName);
        UI.closeProjectForm();
    }

    static cancelProjectSubmission(e) {
        e.preventDefault();
        UI.closeProjectForm();
    }

    static closeProjectForm() {
        console.log('closed');
        document.querySelector('#project-form').classList.add('hidden');
        document.querySelector('#project-input').value = '';
    }

    // EDIT PROJECT FORM

    static initEditProjectButtons() {
        const submitProjectEdit = document.querySelector(
            '#edit-sidebar-submit'
        );
        const cancelProjectEdit = document.querySelector(
            '#edit-sidebar-cancel'
        );

        submitProjectEdit.addEventListener('click', UI.addProjectEdit);
        cancelProjectEdit.addEventListener('click', UI.cancelProjectEdit);
    }

    static addProjectEdit(e) {
        e.preventDefault();

        const projectToEdit =
            this.parentElement.parentElement.previousSibling.firstElementChild;
        const projectName = projectToEdit.innerText;
        const newProjectName = document.querySelector(
            '#edit-project-input'
        ).value;

        Storage.renameProject(projectName, newProjectName);

        UI.closeProjectEditForm();

        UI.clearProjects();
        UI.loadProjects();

        projectToEdit.style.display = 'grid';
    }

    static openEditProjectForm(projectName, e) {
        const projectToEdit = e.target.parentElement;
        const editProjectForm = document.querySelector('.edit-project-form');
        const editProjectInput = document.querySelector('#edit-project-input');

        projectToEdit.style.display = 'none';

        // Insert Form after projectToEdit
        projectToEdit.parentNode.insertBefore(
            editProjectForm,
            projectToEdit.nextSibling
        );

        editProjectForm.classList.remove('hidden');

        editProjectInput.value = projectName;
        editProjectInput.focus();
    }

    static cancelProjectEdit(e) {
        e.preventDefault();
        UI.closeProjectEditForm();
        this.parentElement.parentElement.previousSibling.style.display = 'grid';
    }

    static closeProjectEditForm() {
        document.querySelector('.edit-project-form').classList.add('hidden');
        document.querySelector('#edit-project-input').value = '';
    }

    // PROJECT EVENT LISTENERS

    static initProjectButtons() {
        const allTasksProjectsButton = document.querySelector('#all-tasks');
        const todayProjectsButton = document.querySelector('#today');
        const weekProjectsButton = document.querySelector('#this-week');
        const projectButtons = document.querySelectorAll(
            '.sidebar-project-button'
        );

        allTasksProjectsButton.addEventListener(
            'click',
            UI.openAllTasksProjectsButton
        );
        todayProjectsButton.addEventListener(
            'click',
            UI.openTodayProjectsButton
        );
        weekProjectsButton.addEventListener('click', UI.openWeekProjectsButton);
        projectButtons.forEach((projectButton) =>
            projectButton.addEventListener('click', UI.handleProjectButton)
        );
    }

    static openAllTasksProjectsButton() {
        Storage.updateAllTasksProject();
        UI.openProject('All Tasks', this);
    }

    static openTodayProjectsButton() {
        Storage.updateTodayProject();
        UI.openProject('Today', this);
    }

    static openWeekProjectsButton() {
        Storage.updateWeekProject();
        UI.openProject('This Week', this);
    }

    static openProject(projectName, projectButton) {
        const defaultProjectButtons =
            document.querySelectorAll('.sidebar-buttons');
        const projectButtons = document.querySelectorAll(
            '.sidebar-project-button'
        );
        const buttons = [...defaultProjectButtons, ...projectButtons];

        buttons.forEach((button) => button.classList.remove('selected'));
        projectButton.classList.add('selected');

        if (projectButton.classList.contains('sidebar-button')) {
            document.querySelector('#add-task').style.display = 'none';
        } else {
            document.querySelector('#add-task').style.display = 'block';
        }

        UI.loadProjectContent(projectName);
    }

    static handleProjectButton(e) {
        if (
            e.target.classList.contains('edit-project-button') ||
            e.target.classList.contains('remove-project-button')
        )
            return;
        const projectName = this.firstElementChild.innerText;

        UI.openProject(projectName, this);
    }

    // CREATE TASK

    static clearTasks() {
        const taskContainer = document.querySelector('#task');
        taskContainer.innerHTML = '';
    }

    static changeCompleteStatus() {
        const projectName = document.querySelector('#main-header').innerText;
        const taskName = this.parentElement.nextSibling.innerText;
        Storage.setTaskCompletionStatus(projectName, taskName);
    }

    static createCheckBox(projectName, taskName) {
        const completeStatus = Storage.getTodoList()
            .getProject(document.querySelector('#main-header').innerText)
            .getTask(taskName)
            .getCompleteStatus();
        const div = document.createElement('div');
        const checkbox = document.createElement('input');
        const label = document.createElement('label');

        div.classList.add('round');

        checkbox.setAttribute('type', 'checkbox');
        checkbox.setAttribute('id', `checkbox-${taskName}`);

        label.setAttribute('for', `checkbox-${taskName}`);
        label.addEventListener('click', UI.changeCompleteStatus);

        if (completeStatus === true) {
            checkbox.click();
        }

        if (
            projectName === 'All Tasks' ||
            projectName === 'Today' ||
            projectName === 'This Week'
        ) {
            checkbox.disabled = true;
            label.classList.add('disabled-checkbox');
        }

        div.append(checkbox, label);

        return div;
    }

    static removeTask() {
        const projectName = document.querySelector('#main-header').innerText;
        const taskName =
            this.previousSibling.previousSibling.previousSibling.innerText;
        Storage.deleteTask(projectName, taskName);
        UI.clearTasks();
        UI.loadTasks(projectName);
    }

    static createTaskCardButtons(taskContainer, projectName, taskName, date) {
        const checkBox = UI.createCheckBox(projectName, taskName);
        const taskNameContainer = document.createElement('p');
        const dateContainer = document.createElement('p');
        const editTaskButton = document.createElement('button');
        const removeTaskButton = document.createElement('button');

        taskNameContainer.innerText = taskName;
        dateContainer.innerText = date;

        editTaskButton.classList.add('edit-task-button');
        removeTaskButton.classList.add('remove-task-button');

        editTaskButton.addEventListener('click', UI.openEditTaskForm);
        removeTaskButton.addEventListener('click', UI.removeTask);

        editTaskButton.style.backgroundImage = `url(${editImg})`;
        editTaskButton.style.backgroundSize = 'cover';
        editTaskButton.style.width = '2.8em';
        editTaskButton.style.height = '2.8em';

        removeTaskButton.style.backgroundImage = `url(${trashImg})`;
        removeTaskButton.style.backgroundSize = 'cover';
        removeTaskButton.style.width = '2.8em';
        removeTaskButton.style.height = '2.8em';

        if (
            projectName === 'All Tasks' ||
            projectName === 'Today' ||
            projectName === 'This Week'
        ) {
            taskContainer.append(checkBox, taskNameContainer, dateContainer);
        } else {
            taskContainer.append(
                checkBox,
                taskNameContainer,
                dateContainer,
                editTaskButton,
                removeTaskButton
            );
        }
    }

    static createTaskCard(projectName, taskName, date) {
        const taskContainer = document.createElement('div');

        UI.createTaskCardButtons(taskContainer, projectName, taskName, date);

        taskContainer.classList.add('taskCard');

        document.querySelector('#task').appendChild(taskContainer);
    }

    // EDIT TASK FORM

    static openEditTaskForm() {
        const taskToEdit = this.parentElement;
        const taskName =
            this.previousElementSibling.previousElementSibling.innerText;
        const task = Storage.getTodoList()
            .getProject(document.querySelector('#main-header').innerText)
            .getTask(taskName);
        const editTaskSubmitButton = document.querySelector('#edit-submit');
        const cancelEditTaskButton = document.querySelector('#edit-cancel');

        editTaskSubmitButton.addEventListener('click', UI.editTask);
        cancelEditTaskButton.addEventListener(
            'click',
            UI.cancelEditTaskSubmission
        );

        document.querySelector('#task-edit-title').value = task.name;
        document.querySelector('#edit-description').value = task.description;
        document.querySelector('#edit-date').value = task.dueDate;
        document.querySelector('#overlay').classList.add('active');
        document.querySelector('#myEditForm').style.display = 'block';

        // Insert Form after taskToEdit
        taskToEdit.parentNode.insertBefore(
            document.querySelector('#myEditForm'),
            taskToEdit.nextSibling
        );
    }

    static editTask(e) {
        e.preventDefault();

        const projectName = document.querySelector('#main-header').innerText;
        const taskToEdit =
            this.parentElement.parentElement.parentElement
                .previousElementSibling;
        const taskName =
            taskToEdit.firstElementChild.nextElementSibling.innerText;
        const newTaskName = document.querySelector('#task-edit-title').value;
        const newTaskDescription =
            document.querySelector('#edit-description').value;
        const newTaskDate = document.querySelector('#edit-date').value;

        Storage.renameTask(
            projectName,
            taskName,
            newTaskName,
            newTaskDescription,
            newTaskDate
        );

        UI.closeEditTaskForm();

        UI.clearTasks();
        UI.loadTasks(projectName);
    }

    static closeEditTaskForm() {
        const myEditForm = document.querySelector('#myEditForm');

        document.querySelector('#task-edit-title').value = '';
        document.querySelector('#edit-description').value = '';
        document.querySelector('#edit-date').value = '';
        document.querySelector('#overlay').classList.remove('active');

        myEditForm.style.display = 'none';

        // Insert Form after addTaskForm to not delete it when clearing tasks
        document
            .querySelector('#myForm')
            .parentNode.insertBefore(
                myEditForm,
                document.querySelector('#myForm').nextSibling
            );
    }

    static cancelEditTaskSubmission(e) {
        e.preventDefault();
        UI.closeEditTaskForm();
    }

    // ADD TASK EVENT LISTENERS

    static initAddTaskButtons() {
        const addTaskButton = document.querySelector('#add-task');

        addTaskButton.addEventListener('click', UI.openAddTaskForm);
    }

    static openAddTaskForm() {
        document.querySelector('#overlay').classList.add('active');
        document.querySelector('#myForm').style.display = 'block';
        document.querySelector('#task-title').focus();

        const addTaskButton = document.querySelector('#submit');
        const cancelTaskButton = document.querySelector('#cancel');

        addTaskButton.addEventListener('click', UI.addTask);
        cancelTaskButton.addEventListener('click', UI.cancelTaskSubmission);
    }

    static closeAddTaskForm() {
        document.querySelector('#task-title').value = '';
        document.querySelector('#description').value = '';
        document.querySelector('#date').value = '';
        document.querySelector('#overlay').classList.remove('active');
        document.querySelector('#myForm').style.display = 'none';
    }

    static addTask(e) {
        e.preventDefault();

        const projectName = document.querySelector('#main-header').innerText;
        const taskName = document.querySelector('#task-title').value;
        const description = document.querySelector('#description').value;
        const date = document.querySelector('#date').value;

        Storage.addTask(projectName, new Task(taskName, description, date));
        UI.createTaskCard(projectName, taskName, date);
        UI.closeAddTaskForm();
    }

    static cancelTaskSubmission(e) {
        e.preventDefault();
        UI.closeAddTaskForm();
    }
}
