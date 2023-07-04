import { format } from 'date-fns';
import Project from './Project';
import Task from './Task';
import Storage from './Storage';
import editImg from '../img/pencil.png';
import trashImg from '../img/trash-bin.png';

export default class UI {
    static loadHomepage() {
        UI.initAddProjectButtons();
        UI.initProjectButtons();
        UI.initEditProjectButtons();
        UI.initAddTaskButtons();
        UI.openProject('All Tasks', document.querySelector('#all-tasks'));
    }

    // CREATE PROJECT

    static clearProjects() {
        const projects = document.querySelectorAll('.sidebar-project-button');
        projects.forEach((project) => project.remove());
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
    }

    static appendButtonsToProjectButton(projectName, projectButton) {
        const projectNameContainer = document.createElement('p');
        const editProjectButton = document.createElement('button');
        const removeProjectButton = document.createElement('button');

        editProjectButton.classList.add('edit-project-button');
        removeProjectButton.classList.add('remove-project-button');

        projectNameContainer.innerText = projectName;

        editProjectButton.style.backgroundImage = `url(${editImg})`;
        editProjectButton.style.backgroundSize = 'cover';
        editProjectButton.style.width = '2em';
        editProjectButton.style.height = '2em';

        removeProjectButton.style.backgroundImage = `url(${trashImg})`;
        removeProjectButton.style.backgroundSize = 'cover';
        removeProjectButton.style.width = '2em';
        removeProjectButton.style.height = '2em';

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

        const projectToEdit = this.parentElement.parentElement.previousSibling;
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

    static loadProjectContent(projectName) {
        const mainHeader = document.querySelector('#main-header');

        mainHeader.innerText = projectName;
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

    // ADD TASK EVENT LISTENERS

    static initAddTaskButtons() {
        const addTaskButton = document.querySelector('#add-task');

        addTaskButton.addEventListener('click', UI.openAddTaskForm);
    }

    static openAddTaskForm() {
        document.querySelector('#overlay').classList.add('active');
        document.querySelector('#myForm').style.display = 'block';
        document.querySelector('#task-title').focus();

        const addTask = document.querySelector('#submit');
        const cancelTaskSubmission = document.querySelector('#cancel');

        addTask.addEventListener('click', UI.addTask);
        cancelTaskSubmission.addEventListener('click', UI.cancelTaskSubmission);
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
        console.log(Storage.getTodoList().getProjects());
        UI.closeAddTaskForm();
    }

    static cancelTaskSubmission(e) {
        e.preventDefault();
        UI.closeAddTaskForm();
    }
}
