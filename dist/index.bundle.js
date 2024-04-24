"use strict";
(self["webpackChunkto_do_list"] = self["webpackChunkto_do_list"] || []).push([["index"],{

/***/ "./src/modules/Project.js":
/*!********************************!*\
  !*** ./src/modules/Project.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Project)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/addDays/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isToday/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/isThisWeek/index.js");

class Project {
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
    return this.tasks.find(task => task.getName() === taskName);
  }
  contains(taskName) {
    return this.tasks.some(task => task.getName() === taskName);
  }
  addTask(newTask) {
    this.tasks.push(newTask);
  }
  deleteTask(taskName) {
    this.tasks = this.tasks.filter(task => task.getName() !== taskName);
  }
  getAllTasks() {
    return this.tasks.map(task => task);
  }
  getTasksToday() {
    return this.tasks.filter(task => {
      const taskDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(task.getDate()), 1);
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_1__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(taskDate));
    });
  }
  getTasksThisWeek() {
    return this.tasks.filter(task => {
      const taskDate = (0,date_fns__WEBPACK_IMPORTED_MODULE_0__["default"])(new Date(task.getDate()), 1);
      return (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])(taskDate));
    });
  }
}

/***/ }),

/***/ "./src/modules/Storage.js":
/*!********************************!*\
  !*** ./src/modules/Storage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Storage)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _TodoList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./TodoList */ "./src/modules/TodoList.js");



class Storage {
  static saveTodoList(data) {
    localStorage.setItem('todoList', JSON.stringify(data));
  }
  static getTodoList() {
    const todoList = Object.assign(new _TodoList__WEBPACK_IMPORTED_MODULE_2__["default"](), JSON.parse(localStorage.getItem('todoList')));
    todoList.setProjects(todoList.getProjects().map(project => Object.assign(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](), project)));
    todoList.getProjects().forEach(project => project.setTasks(project.getTasks().map(task => Object.assign(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](), task))));
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
  static renameTask(projectName, taskName, newTaskName, newTaskDescription, newTaskDate) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTask(taskName).setDescription(newTaskDescription);
    todoList.getProject(projectName).getTask(taskName).setDate(newTaskDate);
    todoList.getProject(projectName).getTask(taskName).setName(newTaskName);
    Storage.saveTodoList(todoList);
  }
  static setTaskDescription(projectName, taskName, newDescription) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTask(taskName).setDescription(newDescription);
    Storage.saveTodoList(todoList);
  }
  static setTaskDate(projectName, taskName, newDueDate) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTask(taskName).setDate(newDueDate);
    Storage.saveTodoList(todoList);
  }
  static setTaskCompletionStatus(projectName, taskName) {
    const todoList = Storage.getTodoList();
    todoList.getProject(projectName).getTask(taskName).toggleCompletionStatus();
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

/***/ }),

/***/ "./src/modules/Task.js":
/*!*****************************!*\
  !*** ./src/modules/Task.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Task)
/* harmony export */ });
class Task {
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

/***/ }),

/***/ "./src/modules/TodoList.js":
/*!*********************************!*\
  !*** ./src/modules/TodoList.js ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ TodoList)
/* harmony export */ });
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/compareAsc/index.js");
/* harmony import */ var date_fns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! date-fns */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");



class TodoList {
  constructor() {
    this.projects = [];
    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('All Tasks'));
    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('Today'));
    this.projects.push(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"]('This Week'));
  }
  getProjects() {
    return this.projects;
  }
  setProjects(projects) {
    this.projects = projects;
  }
  getProject(projectName) {
    return this.projects.find(project => project.getName() === projectName);
  }
  contains(projectName) {
    return this.projects.some(project => project.getName() === projectName);
  }
  addProject(newProject) {
    this.projects.push(newProject);
  }
  deleteProject(projectName) {
    const projectToDelete = this.projects.find(project => project.getName() === projectName);
    this.projects.splice(this.projects.indexOf(projectToDelete), 1);
  }
  updateAllTasksProject() {
    this.getProject('All Tasks').tasks = [];
    this.projects.forEach(project => {
      if (project.getName() === 'All Tasks' || project.getName() === 'Today' || project.getName() === 'This Week') {
        return;
      }
      const allTasks = project.getAllTasks();
      allTasks.forEach(task => {
        const taskName = `${task.getName()} (Project: ${project.getName()})`;
        if (task.complete === true) {
          const newTask = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, task.description, task.dueDate);
          newTask.toggleCompletionStatus();
          this.getProject('All Tasks').addTask(newTask);
        } else {
          this.getProject('All Tasks').addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, task.description, task.dueDate));
        }
      });
    });
  }
  updateTodayProject() {
    this.getProject('Today').tasks = [];
    this.projects.forEach(project => {
      if (project.getName() === 'All Tasks' || project.getName() === 'Today' || project.getName() === 'This Week') {
        return;
      }
      const todayTasks = project.getTasksToday();
      todayTasks.forEach(task => {
        const taskName = `${task.getName()} (Project: ${project.getName()})`;
        if (task.complete === true) {
          const newTask = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, task.description, task.dueDate);
          newTask.toggleCompletionStatus();
          this.getProject('Today').addTask(newTask);
        } else {
          this.getProject('Today').addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, task.description, task.dueDate));
        }
      });
    });
  }
  updateWeekProject() {
    this.getProject('This Week').tasks = [];
    this.projects.forEach(project => {
      if (project.getName() === 'All Tasks' || project.getName() === 'Today' || project.getName() === 'This Week') {
        return;
      }
      const weekTasks = project.getTasksThisWeek();
      weekTasks.forEach(task => {
        const taskName = `${task.getName()} (Project: ${project.getName()})`;
        if (task.complete === true) {
          const newTask = new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, task.description, task.dueDate);
          newTask.toggleCompletionStatus();
          this.getProject('This Week').addTask(newTask);
        } else {
          this.getProject('This Week').addTask(new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, task.description, task.dueDate));
        }
      });
    });
    this.getProject('This Week').setTasks(this.getProject('This Week').getTasks().sort((taskA, taskB) => (0,date_fns__WEBPACK_IMPORTED_MODULE_2__["default"])((0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(taskA.getDate())), (0,date_fns__WEBPACK_IMPORTED_MODULE_3__["default"])(new Date(taskB.getDate())))));
  }
}

/***/ }),

/***/ "./src/modules/UI.js":
/*!***************************!*\
  !*** ./src/modules/UI.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ UI)
/* harmony export */ });
/* harmony import */ var _Project__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Project */ "./src/modules/Project.js");
/* harmony import */ var _Task__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Task */ "./src/modules/Task.js");
/* harmony import */ var _Storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Storage */ "./src/modules/Storage.js");
/* harmony import */ var _img_pencil_png__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../img/pencil.png */ "./src/img/pencil.png");
/* harmony import */ var _img_trash_bin_png__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../img/trash-bin.png */ "./src/img/trash-bin.png");





class UI {
  // LOAD CONTENT

  static loadHomepage() {
    UI.loadProjects();
    UI.initProjectButtons();
    UI.openProject('All Tasks', document.querySelector('#all-tasks'));
  }
  static loadProjects() {
    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList().getProjects().forEach(project => {
      if (project.name === 'All Tasks' || project.name === 'Today' || project.name === 'This Week') return;
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
    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList().getProject(projectName).getTasks().forEach(task => UI.createTaskCard(projectName, task.name, task.dueDate));
    if (projectName !== 'All Tasks' && projectName !== 'Today' && projectName !== 'This Week') {
      UI.initAddTaskButtons();
    }
  }

  // CREATE PROJECT

  static clearProjects() {
    const projects = document.querySelectorAll('.sidebar-project-button');
    projects.forEach(project => project.remove());
  }
  static editProject(e) {
    const projectName = this.previousSibling.innerText;
    UI.openEditProjectForm(projectName, e);
  }
  static deleteProject() {
    const projectName = this.previousSibling.previousSibling.innerText;
    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].deleteProject(projectName);
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
    projectButton.append(projectNameContainer, editProjectButton, removeProjectButton);
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
    cancelProjectButton.addEventListener('click', UI.cancelProjectSubmission);
  }
  static openProjectForm() {
    document.querySelector('#project-form').classList.remove('hidden');
    document.querySelector('#project-input').focus();
  }
  static addProject(e) {
    e.preventDefault();
    const projectName = document.querySelector('#project-input').value;
    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addProject(new _Project__WEBPACK_IMPORTED_MODULE_0__["default"](projectName));
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
    const submitProjectEdit = document.querySelector('#edit-sidebar-submit');
    const cancelProjectEdit = document.querySelector('#edit-sidebar-cancel');
    submitProjectEdit.addEventListener('click', UI.addProjectEdit);
    cancelProjectEdit.addEventListener('click', UI.cancelProjectEdit);
  }
  static addProjectEdit(e) {
    e.preventDefault();
    const projectToEdit = this.parentElement.parentElement.previousSibling.firstElementChild;
    const projectName = projectToEdit.innerText;
    const newProjectName = document.querySelector('#edit-project-input').value;
    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].renameProject(projectName, newProjectName);
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
    projectToEdit.parentNode.insertBefore(editProjectForm, projectToEdit.nextSibling);
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
    const projectButtons = document.querySelectorAll('.sidebar-project-button');
    allTasksProjectsButton.addEventListener('click', UI.openAllTasksProjectsButton);
    todayProjectsButton.addEventListener('click', UI.openTodayProjectsButton);
    weekProjectsButton.addEventListener('click', UI.openWeekProjectsButton);
    projectButtons.forEach(projectButton => projectButton.addEventListener('click', UI.handleProjectButton));
  }
  static openAllTasksProjectsButton() {
    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].updateAllTasksProject();
    UI.openProject('All Tasks', this);
  }
  static openTodayProjectsButton() {
    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].updateTodayProject();
    UI.openProject('Today', this);
  }
  static openWeekProjectsButton() {
    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].updateWeekProject();
    UI.openProject('This Week', this);
  }
  static openProject(projectName, projectButton) {
    const defaultProjectButtons = document.querySelectorAll('.sidebar-buttons');
    const projectButtons = document.querySelectorAll('.sidebar-project-button');
    const buttons = [...defaultProjectButtons, ...projectButtons];
    buttons.forEach(button => button.classList.remove('selected'));
    projectButton.classList.add('selected');
    if (projectButton.classList.contains('sidebar-button')) {
      document.querySelector('#add-task').style.display = 'none';
    } else {
      document.querySelector('#add-task').style.display = 'block';
    }
    UI.loadProjectContent(projectName);
  }
  static handleProjectButton(e) {
    if (e.target.classList.contains('edit-project-button') || e.target.classList.contains('remove-project-button')) return;
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
    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].setTaskCompletionStatus(projectName, taskName);
  }
  static createCheckBox(projectName, taskName) {
    const completeStatus = _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList().getProject(document.querySelector('#main-header').innerText).getTask(taskName).getCompleteStatus();
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
    if (projectName === 'All Tasks' || projectName === 'Today' || projectName === 'This Week') {
      checkbox.disabled = true;
      label.classList.add('disabled-checkbox');
    }
    div.append(checkbox, label);
    return div;
  }
  static removeTask() {
    const projectName = document.querySelector('#main-header').innerText;
    const taskName = this.previousSibling.previousSibling.previousSibling.innerText;
    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].deleteTask(projectName, taskName);
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
    editTaskButton.style.backgroundImage = `url(${_img_pencil_png__WEBPACK_IMPORTED_MODULE_3__})`;
    editTaskButton.style.backgroundSize = 'cover';
    editTaskButton.style.width = '2.8em';
    editTaskButton.style.height = '2.8em';
    removeTaskButton.style.backgroundImage = `url(${_img_trash_bin_png__WEBPACK_IMPORTED_MODULE_4__})`;
    removeTaskButton.style.backgroundSize = 'cover';
    removeTaskButton.style.width = '2.8em';
    removeTaskButton.style.height = '2.8em';
    if (projectName === 'All Tasks' || projectName === 'Today' || projectName === 'This Week') {
      taskContainer.append(checkBox, taskNameContainer, dateContainer);
    } else {
      taskContainer.append(checkBox, taskNameContainer, dateContainer, editTaskButton, removeTaskButton);
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
    const taskName = this.previousElementSibling.previousElementSibling.innerText;
    const task = _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].getTodoList().getProject(document.querySelector('#main-header').innerText).getTask(taskName);
    const editTaskSubmitButton = document.querySelector('#edit-submit');
    const cancelEditTaskButton = document.querySelector('#edit-cancel');
    editTaskSubmitButton.addEventListener('click', UI.editTask);
    cancelEditTaskButton.addEventListener('click', UI.cancelEditTaskSubmission);
    document.querySelector('#task-edit-title').value = task.name;
    document.querySelector('#edit-description').value = task.description;
    document.querySelector('#edit-date').value = task.dueDate;
    document.querySelector('#overlay').classList.add('active');
    document.querySelector('#myEditForm').style.display = 'block';

    // Insert Form after taskToEdit
    taskToEdit.parentNode.insertBefore(document.querySelector('#myEditForm'), taskToEdit.nextSibling);
  }
  static editTask(e) {
    e.preventDefault();
    const projectName = document.querySelector('#main-header').innerText;
    const taskToEdit = this.parentElement.parentElement.parentElement.previousElementSibling;
    const taskName = taskToEdit.firstElementChild.nextElementSibling.innerText;
    const newTaskName = document.querySelector('#task-edit-title').value;
    const newTaskDescription = document.querySelector('#edit-description').value;
    const newTaskDate = document.querySelector('#edit-date').value;
    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].renameTask(projectName, taskName, newTaskName, newTaskDescription, newTaskDate);
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
    document.querySelector('#myForm').parentNode.insertBefore(myEditForm, document.querySelector('#myForm').nextSibling);
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
    _Storage__WEBPACK_IMPORTED_MODULE_2__["default"].addTask(projectName, new _Task__WEBPACK_IMPORTED_MODULE_1__["default"](taskName, description, date));
    UI.createTaskCard(projectName, taskName, date);
    UI.closeAddTaskForm();
  }
  static cancelTaskSubmission(e) {
    e.preventDefault();
    UI.closeAddTaskForm();
  }
}

/***/ }),

/***/ "./src/modules/index.js":
/*!******************************!*\
  !*** ./src/modules/index.js ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.css */ "./src/modules/style.css");
/* harmony import */ var _UI__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UI */ "./src/modules/UI.js");


const overlay = document.querySelector('#overlay');
document.addEventListener('DOMContentLoaded', _UI__WEBPACK_IMPORTED_MODULE_1__["default"].loadHomepage);
window.onclick = event => {
  if (event.target === overlay) {
    _UI__WEBPACK_IMPORTED_MODULE_1__["default"].closeAddTaskForm();
    _UI__WEBPACK_IMPORTED_MODULE_1__["default"].closeEditTaskForm();
  }
};

/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/modules/style.css":
/*!*********************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/modules/style.css ***!
  \*********************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! ../fonts/Roboto/Roboto-Thin.ttf */ "./src/fonts/Roboto/Roboto-Thin.ttf"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `/* http://meyerweb.com/eric/tools/css/reset/ 
    v2.0 | 20110126
    License: none (public domain)
*/

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
}
/* HTML5 display-role reset for older browsers */
article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
    display: block;
}
body {
    line-height: 1;
}
ol,
ul {
    list-style: none;
}
blockquote,
q {
    quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
    content: '';
    content: none;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}

/* Prevents Error Display on Browser Screen */

/*
iframe {
    display: none;
}

*/

/* Custom Font */

@font-face {
    font-family: 'roboto';
    src: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

/* Overall Styling */

:root {
    --textColor: #eaebec;
}

body {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: stretch;
    height: 100vh;
    width: 100vw;
    font-family: 'roboto';
}

header,
footer {
    grid-column-start: 1;
    grid-column-end: 3;
}

.hidden {
    top: 0;
    left: 0;
    pointer-events: none !important;
    position: absolute !important;
    max-height: 0 !important;
    transition: max-height 1s ease-out !important;
    opacity: 0 !important;
}

/* Header */

header {
    display: flex;
    align-items: center;
    padding: 0.8em 0.8em;
    background-color: #233647;
    color: var(--textColor);
}

.header-container {
    font-size: 2em;
}

.header-img {
    height: 4em;
    width: 4em;
    margin-right: 1em;
}

/* Sidebar */

sidebar {
    padding: 0.8em 1.8em 0.8em 1.8em;
    display: flex;
    flex-direction: column;
    gap: 1em;
    background-color: #1b2a37;
    color: var(--textColor);
    box-shadow: inset 0 9px 9px -9px #233647;
}

.sidebar-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
}

hr {
    border-color: #9fa0a1;
    background-color: #9fa0a1;
    color: #9fa0a1;
    width: 100%;
    border-top: 1px;
}

#project {
    display: flex;
    flex-direction: column;
}

#project-content {
    width: 100%;
}

#project-form,
#edit-project-form {
    padding: 0.5em;
    border-radius: 4px;
}

#project-form:hover,
#edit-project-form:hover {
    background-color: #233647;
}

#project-input,
#edit-project-input {
    border: none;
    border-radius: 4px;
    width: 99%;
    height: 1.5em;
    appearance: none;
    background: none;
    border: 2px solid rgba(90, 90, 90, 0.443);
    color: #eff0f3a6;
}

#project-input:focus,
#edit-project-input {
    outline: none;
    border: 2px solid #3aabb6;
}

#project-input::--webkit-input-placeholder,
#edit-project-input::--webkit-input-placeholder {
    color: black;
}

#sidebar-form-button-container,
#edit-sidebar-form-button-container {
    display: flex;
    justify-content: center;
    gap: 2em;
    margin-top: 0.5em;
}

.sidebar-form-button {
    border: none;
    border-radius: 2px;
    height: 2em;
    width: 100%;
    color: #dbdbdb;
    font-weight: bold;
}

.sidebar-button,
.sidebar-project-button,
#add-task {
    padding: 0.5em;
    background: none;
    border: none;
    border-radius: 4px;
    font-family: 'roboto';
    color: var(--textColor);
    width: 100%;
    text-align: start;
    display: grid;
    grid-template-columns: 4fr 1fr 1fr;
    align-items: center;
}

.sidebar-button:hover,
.sidebar-project-button:hover,
#add-task:hover {
    background-color: #2d4356;
    cursor: pointer;
}

.remove-project-button,
.edit-project-button {
    background: none;
    border: none;
    color: var(--textColor);
    font-family: roboto;
}

.remove-project-button:hover,
.edit-project-button:hover {
    cursor: pointer;
    color: rgba(255, 255, 255, 0.528);
}

/* Main */

main {
    display: grid;
    grid-template-columns: 1fr 3fr;
    flex-grow: 1;
    box-shadow: inset 0 9px 9px -9px #233647;
    background-color: #192734;
    color: var(--textColor);
}

#task-content {
    display: flex;
    flex-direction: column;
}

.overlay.active {
    display: block;
}

.overlay {
    position: fixed;
    top: 0;
    left: 0;
    display: none;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
}

.form-popup {
    display: none;
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    z-index: 9;
    border-radius: 10px;
}

#form-container,
.form-edit-container {
    max-width: 280px;
    padding: 20px;
    background-color: #192734;
    border-radius: 20px;
    font-family: 'roboto';
}

#form-header,
#form-edit-header {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 0.5em;
    font-size: 2em;
    text-align: center;
}

#form-container input[type='text'],
#form-container textarea,
#form-container input[type='date'],
.form-edit-container input[type='text'],
.form-edit-container textarea,
.form-edit-container input[type='date'] {
    width: 18.5em;
    padding: 15px;
    margin: 5px 0 20px 0;
    border: none;
    background: #233647;
    border-radius: 10px;
    font-family: roboto;
    color: #dbdbdb;
}

#form-container textarea,
.form-edit-container textarea {
    height: 91px;
    resize: none;
}

#task-title::placeholder,
#description::placeholder,
#task-edit-title::placeholder,
#edit-description::placeholder {
    color: #dbdbdb;
    opacity: 1; /* Firefox */
}

#task-title::-ms-input-placeholder,
#description::-ms-input-placeholder,
#task-edit-title::-ms-input-placeholder,
#edit-description::-ms-input-placeholder {
    /* Internet Explorer 10-11 */
    color: #dbdbdb;
}

#task-title::-ms-input-placeholder,
#description::-ms-input-placeholder,
#task-edit-title::-ms-input-placeholder,
#edit-description::-ms-input-placeholder {
    /* Microsoft Edge */
    color: #dbdbdb;
}

#task-title::-webkit-calendar-picker-indicator,
#description::-webkit-calendar-picker-indicator,
#task-edit-title::-webkit-calendar-picker-indicator,
#edit-description::-webkit-calendar-picker-indicator {
    filter: invert(1);
}

.task-form-button-div {
    display: flex;
    justify-content: center;
    gap: 1em;
}

.task-form-button {
    margin-top: 0.5em;
    border: none;
    border-radius: 2px;
    height: 2.6em;
    width: 100%;
    color: #dbdbdb;
    font-weight: bold;
}

#submit,
#sidebar-submit,
#edit-sidebar-submit,
#edit-submit {
    background-color: #1f8d4d;
}

#submit:hover,
#sidebar-submit:hover,
#edit-sidebar-submit:hover,
#edit-submit:hover {
    cursor: pointer;
    background-color: #1c7842;
}

#cancel,
#sidebar-cancel,
#edit-sidebar-cancel,
#edit-cancel {
    background-color: #be0404;
}

#cancel:hover,
#sidebar-cancel:hover,
#edit-sidebar-cancel:hover,
#edit-cancel:hover {
    cursor: pointer;
    background-color: #a50505;
}

#add-task {
    font-size: 1em;
}

/* Main Content */

main-content {
    padding: 0.8em 1.8em 0.8em 1.8em;
}

#main-header {
    margin-bottom: 1em;
    background-color: #233647;
    border-radius: 4px;
    padding: 1em;
}

.taskCard {
    display: grid;
    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;
    margin-bottom: 1em;
    gap: 2em;
    padding: 1em;
    border: #b9bcbe 2px solid;
    border-radius: 12px;
    position: relative;
    height: 2.5em;
}

.taskCard label {
    background-color: #fff0;
    border: 2px solid #ccc;
    border-radius: 50%;
    cursor: pointer;
    height: 36px;
    left: 15px;
    position: absolute;
    top: 15px;
    width: 36px;
}

.taskCard label.disabled-checkbox {
    cursor: default;
}

.taskCard label:after {
    border: 2px solid #fff;
    border-top: none;
    border-right: none;
    content: '';
    height: 10px;
    left: 9px;
    opacity: 0;
    position: absolute;
    top: 10px;
    transform: rotate(-45deg);
    width: 17px;
}

.taskCard input[type='checkbox'] {
    visibility: hidden;
}

.taskCard input[type='checkbox']:checked + label {
    background-color: #5baa5f;
    border-color: #5baa5f;
}

.taskCard input[type='checkbox']:checked + label:after {
    opacity: 1;
}

.taskCard p,
.taskCard date {
    align-self: center;
}

.titleCard,
.dateCard {
    align-self: center;
}

.dateCard {
    justify-self: center;
}

.taskCard button {
    border: none;
    background: none;
    justify-self: center;
}

.taskCard button:hover {
    cursor: pointer;
}

/* Footer */

footer {
    background-color: #233647;
    padding: 0.8em 1em 0.8em 1em;
}

#github-link {
    text-align: center;
    color: black;
    text-decoration: none;
    color: #eaebec;
}

#github-link:hover {
    color: #d2d4d5;
    text-decoration: none;
}

/* Styling for Phone */

@media (max-width: 540px) {
    main {
        display: flex;
        flex-direction: column;
    }

    .taskCard {
        height: auto;
    }

    .round {
        align-items: center;
    }
}
`, "",{"version":3,"sources":["webpack://./src/modules/style.css"],"names":[],"mappings":"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","sourcesContent":["/* http://meyerweb.com/eric/tools/css/reset/ \n    v2.0 | 20110126\n    License: none (public domain)\n*/\n\nhtml,\nbody,\ndiv,\nspan,\napplet,\nobject,\niframe,\nh1,\nh2,\nh3,\nh4,\nh5,\nh6,\np,\nblockquote,\npre,\na,\nabbr,\nacronym,\naddress,\nbig,\ncite,\ncode,\ndel,\ndfn,\nem,\nimg,\nins,\nkbd,\nq,\ns,\nsamp,\nsmall,\nstrike,\nstrong,\nsub,\nsup,\ntt,\nvar,\nb,\nu,\ni,\ncenter,\ndl,\ndt,\ndd,\nol,\nul,\nli,\nfieldset,\nform,\nlabel,\nlegend,\ntable,\ncaption,\ntbody,\ntfoot,\nthead,\ntr,\nth,\ntd,\narticle,\naside,\ncanvas,\ndetails,\nembed,\nfigure,\nfigcaption,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\noutput,\nruby,\nsection,\nsummary,\ntime,\nmark,\naudio,\nvideo {\n    margin: 0;\n    padding: 0;\n    border: 0;\n    font-size: 100%;\n    font: inherit;\n    vertical-align: baseline;\n}\n/* HTML5 display-role reset for older browsers */\narticle,\naside,\ndetails,\nfigcaption,\nfigure,\nfooter,\nheader,\nhgroup,\nmenu,\nnav,\nsection {\n    display: block;\n}\nbody {\n    line-height: 1;\n}\nol,\nul {\n    list-style: none;\n}\nblockquote,\nq {\n    quotes: none;\n}\nblockquote:before,\nblockquote:after,\nq:before,\nq:after {\n    content: '';\n    content: none;\n}\ntable {\n    border-collapse: collapse;\n    border-spacing: 0;\n}\n\n/* Prevents Error Display on Browser Screen */\n\n/*\niframe {\n    display: none;\n}\n\n*/\n\n/* Custom Font */\n\n@font-face {\n    font-family: 'roboto';\n    src: url('../fonts/Roboto/Roboto-Thin.ttf');\n}\n\n/* Overall Styling */\n\n:root {\n    --textColor: #eaebec;\n}\n\nbody {\n    display: flex;\n    flex-direction: column;\n    justify-content: space-between;\n    align-items: stretch;\n    height: 100vh;\n    width: 100vw;\n    font-family: 'roboto';\n}\n\nheader,\nfooter {\n    grid-column-start: 1;\n    grid-column-end: 3;\n}\n\n.hidden {\n    top: 0;\n    left: 0;\n    pointer-events: none !important;\n    position: absolute !important;\n    max-height: 0 !important;\n    transition: max-height 1s ease-out !important;\n    opacity: 0 !important;\n}\n\n/* Header */\n\nheader {\n    display: flex;\n    align-items: center;\n    padding: 0.8em 0.8em;\n    background-color: #233647;\n    color: var(--textColor);\n}\n\n.header-container {\n    font-size: 2em;\n}\n\n.header-img {\n    height: 4em;\n    width: 4em;\n    margin-right: 1em;\n}\n\n/* Sidebar */\n\nsidebar {\n    padding: 0.8em 1.8em 0.8em 1.8em;\n    display: flex;\n    flex-direction: column;\n    gap: 1em;\n    background-color: #1b2a37;\n    color: var(--textColor);\n    box-shadow: inset 0 9px 9px -9px #233647;\n}\n\n.sidebar-container {\n    display: flex;\n    flex-direction: column;\n    align-items: flex-start;\n}\n\nhr {\n    border-color: #9fa0a1;\n    background-color: #9fa0a1;\n    color: #9fa0a1;\n    width: 100%;\n    border-top: 1px;\n}\n\n#project {\n    display: flex;\n    flex-direction: column;\n}\n\n#project-content {\n    width: 100%;\n}\n\n#project-form,\n#edit-project-form {\n    padding: 0.5em;\n    border-radius: 4px;\n}\n\n#project-form:hover,\n#edit-project-form:hover {\n    background-color: #233647;\n}\n\n#project-input,\n#edit-project-input {\n    border: none;\n    border-radius: 4px;\n    width: 99%;\n    height: 1.5em;\n    appearance: none;\n    background: none;\n    border: 2px solid rgba(90, 90, 90, 0.443);\n    color: #eff0f3a6;\n}\n\n#project-input:focus,\n#edit-project-input {\n    outline: none;\n    border: 2px solid #3aabb6;\n}\n\n#project-input::--webkit-input-placeholder,\n#edit-project-input::--webkit-input-placeholder {\n    color: black;\n}\n\n#sidebar-form-button-container,\n#edit-sidebar-form-button-container {\n    display: flex;\n    justify-content: center;\n    gap: 2em;\n    margin-top: 0.5em;\n}\n\n.sidebar-form-button {\n    border: none;\n    border-radius: 2px;\n    height: 2em;\n    width: 100%;\n    color: #dbdbdb;\n    font-weight: bold;\n}\n\n.sidebar-button,\n.sidebar-project-button,\n#add-task {\n    padding: 0.5em;\n    background: none;\n    border: none;\n    border-radius: 4px;\n    font-family: 'roboto';\n    color: var(--textColor);\n    width: 100%;\n    text-align: start;\n    display: grid;\n    grid-template-columns: 4fr 1fr 1fr;\n    align-items: center;\n}\n\n.sidebar-button:hover,\n.sidebar-project-button:hover,\n#add-task:hover {\n    background-color: #2d4356;\n    cursor: pointer;\n}\n\n.remove-project-button,\n.edit-project-button {\n    background: none;\n    border: none;\n    color: var(--textColor);\n    font-family: roboto;\n}\n\n.remove-project-button:hover,\n.edit-project-button:hover {\n    cursor: pointer;\n    color: rgba(255, 255, 255, 0.528);\n}\n\n/* Main */\n\nmain {\n    display: grid;\n    grid-template-columns: 1fr 3fr;\n    flex-grow: 1;\n    box-shadow: inset 0 9px 9px -9px #233647;\n    background-color: #192734;\n    color: var(--textColor);\n}\n\n#task-content {\n    display: flex;\n    flex-direction: column;\n}\n\n.overlay.active {\n    display: block;\n}\n\n.overlay {\n    position: fixed;\n    top: 0;\n    left: 0;\n    display: none;\n    width: 100%;\n    height: 100%;\n    background-color: rgba(0, 0, 0, 0.5);\n}\n\n.form-popup {\n    display: none;\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    transform: translate(-50%, -50%);\n    z-index: 9;\n    border-radius: 10px;\n}\n\n#form-container,\n.form-edit-container {\n    max-width: 280px;\n    padding: 20px;\n    background-color: #192734;\n    border-radius: 20px;\n    font-family: 'roboto';\n}\n\n#form-header,\n#form-edit-header {\n    display: flex;\n    justify-content: center;\n    align-items: center;\n    margin-bottom: 0.5em;\n    font-size: 2em;\n    text-align: center;\n}\n\n#form-container input[type='text'],\n#form-container textarea,\n#form-container input[type='date'],\n.form-edit-container input[type='text'],\n.form-edit-container textarea,\n.form-edit-container input[type='date'] {\n    width: 18.5em;\n    padding: 15px;\n    margin: 5px 0 20px 0;\n    border: none;\n    background: #233647;\n    border-radius: 10px;\n    font-family: roboto;\n    color: #dbdbdb;\n}\n\n#form-container textarea,\n.form-edit-container textarea {\n    height: 91px;\n    resize: none;\n}\n\n#task-title::placeholder,\n#description::placeholder,\n#task-edit-title::placeholder,\n#edit-description::placeholder {\n    color: #dbdbdb;\n    opacity: 1; /* Firefox */\n}\n\n#task-title::-ms-input-placeholder,\n#description::-ms-input-placeholder,\n#task-edit-title::-ms-input-placeholder,\n#edit-description::-ms-input-placeholder {\n    /* Internet Explorer 10-11 */\n    color: #dbdbdb;\n}\n\n#task-title::-ms-input-placeholder,\n#description::-ms-input-placeholder,\n#task-edit-title::-ms-input-placeholder,\n#edit-description::-ms-input-placeholder {\n    /* Microsoft Edge */\n    color: #dbdbdb;\n}\n\n#task-title::-webkit-calendar-picker-indicator,\n#description::-webkit-calendar-picker-indicator,\n#task-edit-title::-webkit-calendar-picker-indicator,\n#edit-description::-webkit-calendar-picker-indicator {\n    filter: invert(1);\n}\n\n.task-form-button-div {\n    display: flex;\n    justify-content: center;\n    gap: 1em;\n}\n\n.task-form-button {\n    margin-top: 0.5em;\n    border: none;\n    border-radius: 2px;\n    height: 2.6em;\n    width: 100%;\n    color: #dbdbdb;\n    font-weight: bold;\n}\n\n#submit,\n#sidebar-submit,\n#edit-sidebar-submit,\n#edit-submit {\n    background-color: #1f8d4d;\n}\n\n#submit:hover,\n#sidebar-submit:hover,\n#edit-sidebar-submit:hover,\n#edit-submit:hover {\n    cursor: pointer;\n    background-color: #1c7842;\n}\n\n#cancel,\n#sidebar-cancel,\n#edit-sidebar-cancel,\n#edit-cancel {\n    background-color: #be0404;\n}\n\n#cancel:hover,\n#sidebar-cancel:hover,\n#edit-sidebar-cancel:hover,\n#edit-cancel:hover {\n    cursor: pointer;\n    background-color: #a50505;\n}\n\n#add-task {\n    font-size: 1em;\n}\n\n/* Main Content */\n\nmain-content {\n    padding: 0.8em 1.8em 0.8em 1.8em;\n}\n\n#main-header {\n    margin-bottom: 1em;\n    background-color: #233647;\n    border-radius: 4px;\n    padding: 1em;\n}\n\n.taskCard {\n    display: grid;\n    grid-template-columns: 1fr 2fr 1fr 1fr 1fr;\n    margin-bottom: 1em;\n    gap: 2em;\n    padding: 1em;\n    border: #b9bcbe 2px solid;\n    border-radius: 12px;\n    position: relative;\n    height: 2.5em;\n}\n\n.taskCard label {\n    background-color: #fff0;\n    border: 2px solid #ccc;\n    border-radius: 50%;\n    cursor: pointer;\n    height: 36px;\n    left: 15px;\n    position: absolute;\n    top: 15px;\n    width: 36px;\n}\n\n.taskCard label.disabled-checkbox {\n    cursor: default;\n}\n\n.taskCard label:after {\n    border: 2px solid #fff;\n    border-top: none;\n    border-right: none;\n    content: '';\n    height: 10px;\n    left: 9px;\n    opacity: 0;\n    position: absolute;\n    top: 10px;\n    transform: rotate(-45deg);\n    width: 17px;\n}\n\n.taskCard input[type='checkbox'] {\n    visibility: hidden;\n}\n\n.taskCard input[type='checkbox']:checked + label {\n    background-color: #5baa5f;\n    border-color: #5baa5f;\n}\n\n.taskCard input[type='checkbox']:checked + label:after {\n    opacity: 1;\n}\n\n.taskCard p,\n.taskCard date {\n    align-self: center;\n}\n\n.titleCard,\n.dateCard {\n    align-self: center;\n}\n\n.dateCard {\n    justify-self: center;\n}\n\n.taskCard button {\n    border: none;\n    background: none;\n    justify-self: center;\n}\n\n.taskCard button:hover {\n    cursor: pointer;\n}\n\n/* Footer */\n\nfooter {\n    background-color: #233647;\n    padding: 0.8em 1em 0.8em 1em;\n}\n\n#github-link {\n    text-align: center;\n    color: black;\n    text-decoration: none;\n    color: #eaebec;\n}\n\n#github-link:hover {\n    color: #d2d4d5;\n    text-decoration: none;\n}\n\n/* Styling for Phone */\n\n@media (max-width: 540px) {\n    main {\n        display: flex;\n        flex-direction: column;\n    }\n\n    .taskCard {\n        height: auto;\n    }\n\n    .round {\n        align-items: center;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }
  if (!url) {
    return url;
  }
  url = String(url.__esModule ? url.default : url);

  // If url is already wrapped in quotes, remove them
  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }
  if (options.hash) {
    url += options.hash;
  }

  // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls
  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }
  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];
  if (!cssMapping) {
    return content;
  }
  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    return [content].concat([sourceMapping]).join("\n");
  }
  return [content].join("\n");
};

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js":
/*!****************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/defaultOptions/index.js ***!
  \****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getDefaultOptions: () => (/* binding */ getDefaultOptions),
/* harmony export */   setDefaultOptions: () => (/* binding */ setDefaultOptions)
/* harmony export */ });
var defaultOptions = {};
function getDefaultOptions() {
  return defaultOptions;
}
function setDefaultOptions(newOptions) {
  defaultOptions = newOptions;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js":
/*!**************************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/requiredArgs/index.js ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ requiredArgs)
/* harmony export */ });
function requiredArgs(required, args) {
  if (args.length < required) {
    throw new TypeError(required + ' argument' + (required > 1 ? 's' : '') + ' required, but only ' + args.length + ' present');
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/_lib/toInteger/index.js":
/*!***********************************************************!*\
  !*** ./node_modules/date-fns/esm/_lib/toInteger/index.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toInteger)
/* harmony export */ });
function toInteger(dirtyNumber) {
  if (dirtyNumber === null || dirtyNumber === true || dirtyNumber === false) {
    return NaN;
  }
  var number = Number(dirtyNumber);
  if (isNaN(number)) {
    return number;
  }
  return number < 0 ? Math.ceil(number) : Math.floor(number);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/addDays/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/addDays/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ addDays)
/* harmony export */ });
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");



/**
 * @name addDays
 * @category Day Helpers
 * @summary Add the specified number of days to the given date.
 *
 * @description
 * Add the specified number of days to the given date.
 *
 * @param {Date|Number} date - the date to be changed
 * @param {Number} amount - the amount of days to be added. Positive decimals will be rounded using `Math.floor`, decimals less than zero will be rounded using `Math.ceil`.
 * @returns {Date} - the new date with the days added
 * @throws {TypeError} - 2 arguments required
 *
 * @example
 * // Add 10 days to 1 September 2014:
 * const result = addDays(new Date(2014, 8, 1), 10)
 * //=> Thu Sep 11 2014 00:00:00
 */
function addDays(dirtyDate, dirtyAmount) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  var amount = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])(dirtyAmount);
  if (isNaN(amount)) {
    return new Date(NaN);
  }
  if (!amount) {
    // If 0 days, no-op to avoid changing times in the hour before end of DST
    return date;
  }
  date.setDate(date.getDate() + amount);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/compareAsc/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/compareAsc/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ compareAsc)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name compareAsc
 * @category Common Helpers
 * @summary Compare the two dates and return -1, 0 or 1.
 *
 * @description
 * Compare the two dates and return 1 if the first date is after the second,
 * -1 if the first date is before the second or 0 if dates are equal.
 *
 * @param {Date|Number} dateLeft - the first date to compare
 * @param {Date|Number} dateRight - the second date to compare
 * @returns {Number} the result of the comparison
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Compare 11 February 1987 and 10 July 1989:
 * const result = compareAsc(new Date(1987, 1, 11), new Date(1989, 6, 10))
 * //=> -1
 *
 * @example
 * // Sort the array of dates:
 * const result = [
 *   new Date(1995, 6, 2),
 *   new Date(1987, 1, 11),
 *   new Date(1989, 6, 10)
 * ].sort(compareAsc)
 * //=> [
 * //   Wed Feb 11 1987 00:00:00,
 * //   Mon Jul 10 1989 00:00:00,
 * //   Sun Jul 02 1995 00:00:00
 * // ]
 */
function compareAsc(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeft = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRight = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  var diff = dateLeft.getTime() - dateRight.getTime();
  if (diff < 0) {
    return -1;
  } else if (diff > 0) {
    return 1;
    // Return 0 if diff is 0; return NaN if diff is NaN
  } else {
    return diff;
  }
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameDay/index.js":
/*!******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameDay/index.js ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameDay)
/* harmony export */ });
/* harmony import */ var _startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfDay/index.js */ "./node_modules/date-fns/esm/startOfDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameDay
 * @category Day Helpers
 * @summary Are the given dates in the same day (and year and month)?
 *
 * @description
 * Are the given dates in the same day (and year and month)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @returns {Boolean} the dates are in the same day (and year and month)
 * @throws {TypeError} 2 arguments required
 *
 * @example
 * // Are 4 September 06:00:00 and 4 September 18:00:00 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4, 6, 0), new Date(2014, 8, 4, 18, 0))
 * //=> true
 *
 * @example
 * // Are 4 September and 4 October in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2014, 9, 4))
 * //=> false
 *
 * @example
 * // Are 4 September, 2014 and 4 September, 2015 in the same day?
 * const result = isSameDay(new Date(2014, 8, 4), new Date(2015, 8, 4))
 * //=> false
 */
function isSameDay(dirtyDateLeft, dirtyDateRight) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft);
  var dateRightStartOfDay = (0,_startOfDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight);
  return dateLeftStartOfDay.getTime() === dateRightStartOfDay.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isSameWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isSameWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isSameWeek)
/* harmony export */ });
/* harmony import */ var _startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../startOfWeek/index.js */ "./node_modules/date-fns/esm/startOfWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isSameWeek
 * @category Week Helpers
 * @summary Are the given dates in the same week (and month and year)?
 *
 * @description
 * Are the given dates in the same week (and month and year)?
 *
 * @param {Date|Number} dateLeft - the first date to check
 * @param {Date|Number} dateRight - the second date to check
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the dates are in the same week (and month and year)
 * @throws {TypeError} 2 arguments required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // Are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4))
 * //=> true
 *
 * @example
 * // If week starts with Monday,
 * // are 31 August 2014 and 4 September 2014 in the same week?
 * const result = isSameWeek(new Date(2014, 7, 31), new Date(2014, 8, 4), {
 *   weekStartsOn: 1
 * })
 * //=> false
 *
 * @example
 * // Are 1 January 2014 and 1 January 2015 in the same week?
 * const result = isSameWeek(new Date(2014, 0, 1), new Date(2015, 0, 1))
 * //=> false
 */
function isSameWeek(dirtyDateLeft, dirtyDateRight, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(2, arguments);
  var dateLeftStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateLeft, options);
  var dateRightStartOfWeek = (0,_startOfWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDateRight, options);
  return dateLeftStartOfWeek.getTime() === dateRightStartOfWeek.getTime();
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isThisWeek/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/isThisWeek/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isThisWeek)
/* harmony export */ });
/* harmony import */ var _isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameWeek/index.js */ "./node_modules/date-fns/esm/isSameWeek/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isThisWeek
 * @category Week Helpers
 * @summary Is the given date in the same week as the current date?
 * @pure false
 *
 * @description
 * Is the given date in the same week as the current date?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @param {Object} [options] - the object with options
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Boolean} the date is in this week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // If today is 25 September 2014, is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21))
 * //=> true
 *
 * @example
 * // If today is 25 September 2014 and week starts with Monday
 * // is 21 September 2014 in this week?
 * const result = isThisWeek(new Date(2014, 8, 21), { weekStartsOn: 1 })
 * //=> false
 */

function isThisWeek(dirtyDate, options) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameWeek_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now(), options);
}

/***/ }),

/***/ "./node_modules/date-fns/esm/isToday/index.js":
/*!****************************************************!*\
  !*** ./node_modules/date-fns/esm/isToday/index.js ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ isToday)
/* harmony export */ });
/* harmony import */ var _isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../isSameDay/index.js */ "./node_modules/date-fns/esm/isSameDay/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name isToday
 * @category Day Helpers
 * @summary Is the given date today?
 * @pure false
 *
 * @description
 * Is the given date today?
 *
 * > ⚠️ Please note that this function is not present in the FP submodule as
 * > it uses `Date.now()` internally hence impure and can't be safely curried.
 *
 * @param {Date|Number} date - the date to check
 * @returns {Boolean} the date is today
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // If today is 6 October 2014, is 6 October 14:00:00 today?
 * const result = isToday(new Date(2014, 9, 6, 14, 0))
 * //=> true
 */
function isToday(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  return (0,_isSameDay_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate, Date.now());
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfDay/index.js":
/*!*******************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfDay/index.js ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfDay)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name startOfDay
 * @category Day Helpers
 * @summary Return the start of a day for the given date.
 *
 * @description
 * Return the start of a day for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @returns {Date} the start of a day
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // The start of a day for 2 September 2014 11:55:00:
 * const result = startOfDay(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Tue Sep 02 2014 00:00:00
 */
function startOfDay(dirtyDate) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(dirtyDate);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/startOfWeek/index.js":
/*!********************************************************!*\
  !*** ./node_modules/date-fns/esm/startOfWeek/index.js ***!
  \********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ startOfWeek)
/* harmony export */ });
/* harmony import */ var _toDate_index_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../toDate/index.js */ "./node_modules/date-fns/esm/toDate/index.js");
/* harmony import */ var _lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../_lib/toInteger/index.js */ "./node_modules/date-fns/esm/_lib/toInteger/index.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");
/* harmony import */ var _lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/defaultOptions/index.js */ "./node_modules/date-fns/esm/_lib/defaultOptions/index.js");




/**
 * @name startOfWeek
 * @category Week Helpers
 * @summary Return the start of a week for the given date.
 *
 * @description
 * Return the start of a week for the given date.
 * The result will be in the local timezone.
 *
 * @param {Date|Number} date - the original date
 * @param {Object} [options] - an object with options.
 * @param {Locale} [options.locale=defaultLocale] - the locale object. See [Locale]{@link https://date-fns.org/docs/Locale}
 * @param {0|1|2|3|4|5|6} [options.weekStartsOn=0] - the index of the first day of the week (0 - Sunday)
 * @returns {Date} the start of a week
 * @throws {TypeError} 1 argument required
 * @throws {RangeError} `options.weekStartsOn` must be between 0 and 6
 *
 * @example
 * // The start of a week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0))
 * //=> Sun Aug 31 2014 00:00:00
 *
 * @example
 * // If the week starts on Monday, the start of the week for 2 September 2014 11:55:00:
 * const result = startOfWeek(new Date(2014, 8, 2, 11, 55, 0), { weekStartsOn: 1 })
 * //=> Mon Sep 01 2014 00:00:00
 */
function startOfWeek(dirtyDate, options) {
  var _ref, _ref2, _ref3, _options$weekStartsOn, _options$locale, _options$locale$optio, _defaultOptions$local, _defaultOptions$local2;
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_0__["default"])(1, arguments);
  var defaultOptions = (0,_lib_defaultOptions_index_js__WEBPACK_IMPORTED_MODULE_1__.getDefaultOptions)();
  var weekStartsOn = (0,_lib_toInteger_index_js__WEBPACK_IMPORTED_MODULE_2__["default"])((_ref = (_ref2 = (_ref3 = (_options$weekStartsOn = options === null || options === void 0 ? void 0 : options.weekStartsOn) !== null && _options$weekStartsOn !== void 0 ? _options$weekStartsOn : options === null || options === void 0 ? void 0 : (_options$locale = options.locale) === null || _options$locale === void 0 ? void 0 : (_options$locale$optio = _options$locale.options) === null || _options$locale$optio === void 0 ? void 0 : _options$locale$optio.weekStartsOn) !== null && _ref3 !== void 0 ? _ref3 : defaultOptions.weekStartsOn) !== null && _ref2 !== void 0 ? _ref2 : (_defaultOptions$local = defaultOptions.locale) === null || _defaultOptions$local === void 0 ? void 0 : (_defaultOptions$local2 = _defaultOptions$local.options) === null || _defaultOptions$local2 === void 0 ? void 0 : _defaultOptions$local2.weekStartsOn) !== null && _ref !== void 0 ? _ref : 0);

  // Test if weekStartsOn is between 0 and 6 _and_ is not NaN
  if (!(weekStartsOn >= 0 && weekStartsOn <= 6)) {
    throw new RangeError('weekStartsOn must be between 0 and 6 inclusively');
  }
  var date = (0,_toDate_index_js__WEBPACK_IMPORTED_MODULE_3__["default"])(dirtyDate);
  var day = date.getDay();
  var diff = (day < weekStartsOn ? 7 : 0) + day - weekStartsOn;
  date.setDate(date.getDate() - diff);
  date.setHours(0, 0, 0, 0);
  return date;
}

/***/ }),

/***/ "./node_modules/date-fns/esm/toDate/index.js":
/*!***************************************************!*\
  !*** ./node_modules/date-fns/esm/toDate/index.js ***!
  \***************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ toDate)
/* harmony export */ });
/* harmony import */ var _babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/typeof */ "./node_modules/@babel/runtime/helpers/esm/typeof.js");
/* harmony import */ var _lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../_lib/requiredArgs/index.js */ "./node_modules/date-fns/esm/_lib/requiredArgs/index.js");


/**
 * @name toDate
 * @category Common Helpers
 * @summary Convert the given argument to an instance of Date.
 *
 * @description
 * Convert the given argument to an instance of Date.
 *
 * If the argument is an instance of Date, the function returns its clone.
 *
 * If the argument is a number, it is treated as a timestamp.
 *
 * If the argument is none of the above, the function returns Invalid Date.
 *
 * **Note**: *all* Date arguments passed to any *date-fns* function is processed by `toDate`.
 *
 * @param {Date|Number} argument - the value to convert
 * @returns {Date} the parsed date in the local time zone
 * @throws {TypeError} 1 argument required
 *
 * @example
 * // Clone the date:
 * const result = toDate(new Date(2014, 1, 11, 11, 30, 30))
 * //=> Tue Feb 11 2014 11:30:30
 *
 * @example
 * // Convert the timestamp to date:
 * const result = toDate(1392098430000)
 * //=> Tue Feb 11 2014 11:30:30
 */
function toDate(argument) {
  (0,_lib_requiredArgs_index_js__WEBPACK_IMPORTED_MODULE_1__["default"])(1, arguments);
  var argStr = Object.prototype.toString.call(argument);

  // Clone the date
  if (argument instanceof Date || (0,_babel_runtime_helpers_esm_typeof__WEBPACK_IMPORTED_MODULE_0__["default"])(argument) === 'object' && argStr === '[object Date]') {
    // Prevent the date to lose the milliseconds when passed to new Date() in IE10
    return new Date(argument.getTime());
  } else if (typeof argument === 'number' || argStr === '[object Number]') {
    return new Date(argument);
  } else {
    if ((typeof argument === 'string' || argStr === '[object String]') && typeof console !== 'undefined') {
      // eslint-disable-next-line no-console
      console.warn("Starting with v2.0.0-beta.1 date-fns doesn't accept strings as date arguments. Please use `parseISO` to parse strings. See: https://github.com/date-fns/date-fns/blob/master/docs/upgradeGuide.md#string-arguments");
      // eslint-disable-next-line no-console
      console.warn(new Error().stack);
    }
    return new Date(NaN);
  }
}

/***/ }),

/***/ "./src/modules/style.css":
/*!*******************************!*\
  !*** ./src/modules/style.css ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./style.css */ "./node_modules/css-loader/dist/cjs.js!./src/modules/style.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};

/* istanbul ignore next  */
function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target);

    // Special case to return head of iframe instead of iframe itself
    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }
    memo[target] = styleTarget;
  }
  return memo[target];
}

/* istanbul ignore next  */
function insertBySelector(insert, style) {
  var target = getTarget(insert);
  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }
  target.appendChild(style);
}
module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;
  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ "./src/fonts/Roboto/Roboto-Thin.ttf":
/*!******************************************!*\
  !*** ./src/fonts/Roboto/Roboto-Thin.ttf ***!
  \******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a732a12eb07742232407.ttf";

/***/ }),

/***/ "./src/img/pencil.png":
/*!****************************!*\
  !*** ./src/img/pencil.png ***!
  \****************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "59d4c14d9db8a89389c1.png";

/***/ }),

/***/ "./src/img/trash-bin.png":
/*!*******************************!*\
  !*** ./src/img/trash-bin.png ***!
  \*******************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "3064958e440239dc1a1d.png";

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/typeof.js":
/*!***********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/typeof.js ***!
  \***********************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ _typeof)
/* harmony export */ });
function _typeof(obj) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, _typeof(obj);
}

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/modules/index.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFrRDtBQUM5Riw4QkFBOEIsbUZBQTJCLENBQUMsNEZBQXFDO0FBQy9GLHlDQUF5QyxzRkFBK0I7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZUFBZSxtQ0FBbUM7QUFDbEQ7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTywwRkFBMEYsTUFBTSxxRkFBcUYsV0FBVyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksTUFBTSxZQUFZLGdCQUFnQixVQUFVLE1BQU0sS0FBSyxVQUFVLE1BQU0sTUFBTSxZQUFZLE1BQU0sTUFBTSxVQUFVLE1BQU0sUUFBUSxVQUFVLFVBQVUsTUFBTSxLQUFLLFlBQVksYUFBYSxPQUFPLGFBQWEsVUFBVSxNQUFNLGFBQWEsTUFBTSxZQUFZLGFBQWEsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsWUFBWSxPQUFPLE1BQU0sWUFBWSxhQUFhLE9BQU8sS0FBSyxVQUFVLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxhQUFhLE9BQU8sV0FBVyxLQUFLLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxPQUFPLEtBQUssVUFBVSxVQUFVLFlBQVksT0FBTyxXQUFXLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsT0FBTyxLQUFLLFlBQVksYUFBYSxXQUFXLFVBQVUsVUFBVSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE1BQU0sTUFBTSxVQUFVLFlBQVksT0FBTyxNQUFNLFlBQVksT0FBTyxNQUFNLFVBQVUsWUFBWSxXQUFXLFVBQVUsWUFBWSxhQUFhLGFBQWEsYUFBYSxPQUFPLE1BQU0sVUFBVSxZQUFZLE9BQU8sTUFBTSxVQUFVLE9BQU8sTUFBTSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLE9BQU8sVUFBVSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLFdBQVcsWUFBWSxhQUFhLE9BQU8sT0FBTyxZQUFZLFdBQVcsT0FBTyxNQUFNLFlBQVksV0FBVyxZQUFZLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxPQUFPLFdBQVcsS0FBSyxVQUFVLFlBQVksV0FBVyxZQUFZLGFBQWEsYUFBYSxPQUFPLEtBQUssVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFVBQVUsVUFBVSxZQUFZLE9BQU8sS0FBSyxVQUFVLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLE9BQU8sTUFBTSxZQUFZLFdBQVcsWUFBWSxhQUFhLGFBQWEsT0FBTyxNQUFNLFVBQVUsWUFBWSxhQUFhLGFBQWEsV0FBVyxZQUFZLE9BQU8sVUFBVSxVQUFVLFVBQVUsWUFBWSxXQUFXLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxNQUFNLFVBQVUsVUFBVSxPQUFPLFFBQVEsVUFBVSxvQkFBb0IsT0FBTyxRQUFRLFlBQVksV0FBVyxPQUFPLFFBQVEsWUFBWSxXQUFXLE9BQU8sUUFBUSxZQUFZLE9BQU8sS0FBSyxVQUFVLFlBQVksV0FBVyxNQUFNLEtBQUssWUFBWSxXQUFXLFlBQVksV0FBVyxVQUFVLFVBQVUsWUFBWSxPQUFPLFFBQVEsWUFBWSxPQUFPLFFBQVEsVUFBVSxZQUFZLE9BQU8sUUFBUSxZQUFZLE9BQU8sUUFBUSxVQUFVLFlBQVksT0FBTyxLQUFLLFVBQVUsT0FBTyxhQUFhLE1BQU0sWUFBWSxPQUFPLEtBQUssWUFBWSxhQUFhLGFBQWEsV0FBVyxPQUFPLEtBQUssVUFBVSxZQUFZLGFBQWEsV0FBVyxVQUFVLFlBQVksYUFBYSxhQUFhLFdBQVcsT0FBTyxLQUFLLFlBQVksYUFBYSxhQUFhLFdBQVcsVUFBVSxVQUFVLFlBQVksV0FBVyxVQUFVLE1BQU0sS0FBSyxVQUFVLE9BQU8sS0FBSyxZQUFZLGFBQWEsYUFBYSxXQUFXLFVBQVUsVUFBVSxVQUFVLFlBQVksV0FBVyxZQUFZLFdB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Q2JlO0FBQ2Y7O0FBRUE7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBLEdBQUc7QUFDSCIsInNvdXJjZXMiOlsid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9Qcm9qZWN0LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9TdG9yYWdlLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9UYXNrLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9Ub2RvTGlzdC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvVUkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL3NyYy9tb2R1bGVzL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9zcmMvbW9kdWxlcy9zdHlsZS5jc3MiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9nZXRVcmwuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vX2xpYi90b0ludGVnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vYWRkRGF5cy9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9jb21wYXJlQXNjL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzU2FtZURheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9pc1NhbWVXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL2lzVGhpc1dlZWsvaW5kZXguanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9kYXRlLWZucy9lc20vaXNUb2RheS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL2RhdGUtZm5zL2VzbS9zdGFydE9mRGF5L2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3N0YXJ0T2ZXZWVrL2luZGV4LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvZGF0ZS1mbnMvZXNtL3RvRGF0ZS9pbmRleC5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vc3JjL21vZHVsZXMvc3R5bGUuY3NzPzUyYzMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanMiLCJ3ZWJwYWNrOi8vdG8tZG8tbGlzdC8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzIiwid2VicGFjazovL3RvLWRvLWxpc3QvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly90by1kby1saXN0Ly4vbm9kZV9tb2R1bGVzL0BiYWJlbC9ydW50aW1lL2hlbHBlcnMvZXNtL3R5cGVvZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyB0b0RhdGUsIGlzVG9kYXksIGlzVGhpc1dlZWssIGFkZERheXMgfSBmcm9tICdkYXRlLWZucyc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2plY3Qge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHtcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcbiAgICAgICAgdGhpcy50YXNrcyA9IFtdO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0VGFza3MoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzO1xuICAgIH1cblxuICAgIHNldFRhc2tzKHRhc2tzKSB7XG4gICAgICAgIHRoaXMudGFza3MgPSB0YXNrcztcbiAgICB9XG5cbiAgICBnZXRUYXNrKHRhc2tOYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbmQoKHRhc2spID0+IHRhc2suZ2V0TmFtZSgpID09PSB0YXNrTmFtZSk7XG4gICAgfVxuXG4gICAgY29udGFpbnModGFza05hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3Muc29tZSgodGFzaykgPT4gdGFzay5nZXROYW1lKCkgPT09IHRhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBhZGRUYXNrKG5ld1Rhc2spIHtcbiAgICAgICAgdGhpcy50YXNrcy5wdXNoKG5ld1Rhc2spO1xuICAgIH1cblxuICAgIGRlbGV0ZVRhc2sodGFza05hbWUpIHtcbiAgICAgICAgdGhpcy50YXNrcyA9IHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB0YXNrLmdldE5hbWUoKSAhPT0gdGFza05hbWUpO1xuICAgIH1cblxuICAgIGdldEFsbFRhc2tzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50YXNrcy5tYXAoKHRhc2spID0+IHRhc2spO1xuICAgIH1cblxuICAgIGdldFRhc2tzVG9kYXkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnRhc2tzLmZpbHRlcigodGFzaykgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFza0RhdGUgPSBhZGREYXlzKG5ldyBEYXRlKHRhc2suZ2V0RGF0ZSgpKSwgMSk7XG4gICAgICAgICAgICByZXR1cm4gaXNUb2RheSh0b0RhdGUodGFza0RhdGUpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0VGFza3NUaGlzV2VlaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMudGFza3MuZmlsdGVyKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXNrRGF0ZSA9IGFkZERheXMobmV3IERhdGUodGFzay5nZXREYXRlKCkpLCAxKTtcbiAgICAgICAgICAgIHJldHVybiBpc1RoaXNXZWVrKHRvRGF0ZSh0YXNrRGF0ZSkpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcbmltcG9ydCBUb2RvTGlzdCBmcm9tICcuL1RvZG9MaXN0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RvcmFnZSB7XG4gICAgc3RhdGljIHNhdmVUb2RvTGlzdChkYXRhKSB7XG4gICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCd0b2RvTGlzdCcsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZ2V0VG9kb0xpc3QoKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gT2JqZWN0LmFzc2lnbihcbiAgICAgICAgICAgIG5ldyBUb2RvTGlzdCgpLFxuICAgICAgICAgICAgSlNPTi5wYXJzZShsb2NhbFN0b3JhZ2UuZ2V0SXRlbSgndG9kb0xpc3QnKSlcbiAgICAgICAgKTtcblxuICAgICAgICB0b2RvTGlzdC5zZXRQcm9qZWN0cyhcbiAgICAgICAgICAgIHRvZG9MaXN0XG4gICAgICAgICAgICAgICAgLmdldFByb2plY3RzKClcbiAgICAgICAgICAgICAgICAubWFwKChwcm9qZWN0KSA9PiBPYmplY3QuYXNzaWduKG5ldyBQcm9qZWN0KCksIHByb2plY3QpKVxuICAgICAgICApO1xuXG4gICAgICAgIHRvZG9MaXN0XG4gICAgICAgICAgICAuZ2V0UHJvamVjdHMoKVxuICAgICAgICAgICAgLmZvckVhY2goKHByb2plY3QpID0+XG4gICAgICAgICAgICAgICAgcHJvamVjdC5zZXRUYXNrcyhcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdFxuICAgICAgICAgICAgICAgICAgICAgICAgLmdldFRhc2tzKClcbiAgICAgICAgICAgICAgICAgICAgICAgIC5tYXAoKHRhc2spID0+IE9iamVjdC5hc3NpZ24obmV3IFRhc2soKSwgdGFzaykpXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgKTtcblxuICAgICAgICByZXR1cm4gdG9kb0xpc3Q7XG4gICAgfVxuXG4gICAgc3RhdGljIGFkZFByb2plY3QocHJvamVjdCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuYWRkUHJvamVjdChwcm9qZWN0KTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHRvZG9MaXN0ID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpO1xuICAgICAgICB0b2RvTGlzdC5kZWxldGVQcm9qZWN0KHByb2plY3ROYW1lKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyByZW5hbWVQcm9qZWN0KHByb2plY3ROYW1lLCBuZXdQcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuc2V0TmFtZShuZXdQcm9qZWN0TmFtZSk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkVGFzayhwcm9qZWN0TmFtZSwgdGFzaykge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuYWRkVGFzayh0YXNrKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBkZWxldGVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZGVsZXRlVGFzayh0YXNrTmFtZSk7XG4gICAgICAgIFN0b3JhZ2Uuc2F2ZVRvZG9MaXN0KHRvZG9MaXN0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xlYXJUYXNrcyhwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuY2xlYXJUYXNrcygpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbmFtZVRhc2soXG4gICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICB0YXNrTmFtZSxcbiAgICAgICAgbmV3VGFza05hbWUsXG4gICAgICAgIG5ld1Rhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgbmV3VGFza0RhdGVcbiAgICApIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0XG4gICAgICAgICAgICAuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIC5nZXRUYXNrKHRhc2tOYW1lKVxuICAgICAgICAgICAgLnNldERlc2NyaXB0aW9uKG5ld1Rhc2tEZXNjcmlwdGlvbik7XG4gICAgICAgIHRvZG9MaXN0LmdldFByb2plY3QocHJvamVjdE5hbWUpLmdldFRhc2sodGFza05hbWUpLnNldERhdGUobmV3VGFza0RhdGUpO1xuICAgICAgICB0b2RvTGlzdC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKS5nZXRUYXNrKHRhc2tOYW1lKS5zZXROYW1lKG5ld1Rhc2tOYW1lKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRUYXNrRGVzY3JpcHRpb24ocHJvamVjdE5hbWUsIHRhc2tOYW1lLCBuZXdEZXNjcmlwdGlvbikge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3RcbiAgICAgICAgICAgIC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICAgICAgICAgLmdldFRhc2sodGFza05hbWUpXG4gICAgICAgICAgICAuc2V0RGVzY3JpcHRpb24obmV3RGVzY3JpcHRpb24pO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHNldFRhc2tEYXRlKHByb2plY3ROYW1lLCB0YXNrTmFtZSwgbmV3RHVlRGF0ZSkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSkuZ2V0VGFzayh0YXNrTmFtZSkuc2V0RGF0ZShuZXdEdWVEYXRlKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cblxuICAgIHN0YXRpYyBzZXRUYXNrQ29tcGxldGlvblN0YXR1cyhwcm9qZWN0TmFtZSwgdGFza05hbWUpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0XG4gICAgICAgICAgICAuZ2V0UHJvamVjdChwcm9qZWN0TmFtZSlcbiAgICAgICAgICAgIC5nZXRUYXNrKHRhc2tOYW1lKVxuICAgICAgICAgICAgLnRvZ2dsZUNvbXBsZXRpb25TdGF0dXMoKTtcblxuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZUFsbFRhc2tzUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0LnVwZGF0ZUFsbFRhc2tzUHJvamVjdCgpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVRvZGF5UHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgdG9kb0xpc3QgPSBTdG9yYWdlLmdldFRvZG9MaXN0KCk7XG4gICAgICAgIHRvZG9MaXN0LnVwZGF0ZVRvZGF5UHJvamVjdCgpO1xuICAgICAgICBTdG9yYWdlLnNhdmVUb2RvTGlzdCh0b2RvTGlzdCk7XG4gICAgfVxuXG4gICAgc3RhdGljIHVwZGF0ZVdlZWtQcm9qZWN0KCkge1xuICAgICAgICBjb25zdCB0b2RvTGlzdCA9IFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKTtcbiAgICAgICAgdG9kb0xpc3QudXBkYXRlV2Vla1Byb2plY3QoKTtcbiAgICAgICAgU3RvcmFnZS5zYXZlVG9kb0xpc3QodG9kb0xpc3QpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIFRhc2sge1xuICAgIGNvbnN0cnVjdG9yKG5hbWUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICAgICAgdGhpcy5kdWVEYXRlID0gZHVlRGF0ZTtcbiAgICAgICAgdGhpcy5jb21wbGV0ZSA9IGZhbHNlO1xuICAgIH1cblxuICAgIGdldE5hbWUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm5hbWU7XG4gICAgfVxuXG4gICAgc2V0TmFtZShuYW1lKSB7XG4gICAgICAgIHRoaXMubmFtZSA9IG5hbWU7XG4gICAgfVxuXG4gICAgZ2V0RGVzY3JpcHRpb24oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRlc2NyaXB0aW9uO1xuICAgIH1cblxuICAgIHNldERlc2NyaXB0aW9uKGRlc2NyaXB0aW9uKSB7XG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcbiAgICB9XG5cbiAgICBnZXREYXRlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kdWVEYXRlO1xuICAgIH1cblxuICAgIHNldERhdGUoZHVlRGF0ZSkge1xuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xuICAgIH1cblxuICAgIGdldENvbXBsZXRlU3RhdHVzKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5jb21wbGV0ZTtcbiAgICB9XG5cbiAgICB0b2dnbGVDb21wbGV0aW9uU3RhdHVzKCkge1xuICAgICAgICB0aGlzLmNvbXBsZXRlID0gIXRoaXMuY29tcGxldGU7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgY29tcGFyZUFzYywgdG9EYXRlIH0gZnJvbSAnZGF0ZS1mbnMnO1xuaW1wb3J0IFByb2plY3QgZnJvbSAnLi9Qcm9qZWN0JztcbmltcG9ydCBUYXNrIGZyb20gJy4vVGFzayc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRvZG9MaXN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cyA9IFtdO1xuICAgICAgICB0aGlzLnByb2plY3RzLnB1c2gobmV3IFByb2plY3QoJ0FsbCBUYXNrcycpKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUb2RheScpKTtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ldyBQcm9qZWN0KCdUaGlzIFdlZWsnKSk7XG4gICAgfVxuXG4gICAgZ2V0UHJvamVjdHMoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzO1xuICAgIH1cblxuICAgIHNldFByb2plY3RzKHByb2plY3RzKSB7XG4gICAgICAgIHRoaXMucHJvamVjdHMgPSBwcm9qZWN0cztcbiAgICB9XG5cbiAgICBnZXRQcm9qZWN0KHByb2plY3ROYW1lKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnByb2plY3RzLmZpbmQoXG4gICAgICAgICAgICAocHJvamVjdCkgPT4gcHJvamVjdC5nZXROYW1lKCkgPT09IHByb2plY3ROYW1lXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgY29udGFpbnMocHJvamVjdE5hbWUpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucHJvamVjdHMuc29tZShcbiAgICAgICAgICAgIChwcm9qZWN0KSA9PiBwcm9qZWN0LmdldE5hbWUoKSA9PT0gcHJvamVjdE5hbWVcbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBhZGRQcm9qZWN0KG5ld1Byb2plY3QpIHtcbiAgICAgICAgdGhpcy5wcm9qZWN0cy5wdXNoKG5ld1Byb2plY3QpO1xuICAgIH1cblxuICAgIGRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvRGVsZXRlID0gdGhpcy5wcm9qZWN0cy5maW5kKFxuICAgICAgICAgICAgKHByb2plY3QpID0+IHByb2plY3QuZ2V0TmFtZSgpID09PSBwcm9qZWN0TmFtZVxuICAgICAgICApO1xuICAgICAgICB0aGlzLnByb2plY3RzLnNwbGljZSh0aGlzLnByb2plY3RzLmluZGV4T2YocHJvamVjdFRvRGVsZXRlKSwgMSk7XG4gICAgfVxuXG4gICAgdXBkYXRlQWxsVGFza3NQcm9qZWN0KCkge1xuICAgICAgICB0aGlzLmdldFByb2plY3QoJ0FsbCBUYXNrcycpLnRhc2tzID0gW107XG5cbiAgICAgICAgdGhpcy5wcm9qZWN0cy5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXROYW1lKCkgPT09ICdBbGwgVGFza3MnIHx8XG4gICAgICAgICAgICAgICAgcHJvamVjdC5nZXROYW1lKCkgPT09ICdUb2RheScgfHxcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ1RoaXMgV2VlaydcbiAgICAgICAgICAgICkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgYWxsVGFza3MgPSBwcm9qZWN0LmdldEFsbFRhc2tzKCk7XG4gICAgICAgICAgICBhbGxUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBgJHt0YXNrLmdldE5hbWUoKX0gKFByb2plY3Q6ICR7cHJvamVjdC5nZXROYW1lKCl9KWA7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2sudG9nZ2xlQ29tcGxldGlvblN0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByb2plY3QoJ0FsbCBUYXNrcycpLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdBbGwgVGFza3MnKS5hZGRUYXNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRhc2sodGFza05hbWUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlVG9kYXlQcm9qZWN0KCkge1xuICAgICAgICB0aGlzLmdldFByb2plY3QoJ1RvZGF5JykudGFza3MgPSBbXTtcblxuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ0FsbCBUYXNrcycgfHxcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ1RvZGF5JyB8fFxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0TmFtZSgpID09PSAnVGhpcyBXZWVrJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB0b2RheVRhc2tzID0gcHJvamVjdC5nZXRUYXNrc1RvZGF5KCk7XG4gICAgICAgICAgICB0b2RheVRhc2tzLmZvckVhY2goKHRhc2spID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGAke3Rhc2suZ2V0TmFtZSgpfSAoUHJvamVjdDogJHtwcm9qZWN0LmdldE5hbWUoKX0pYDtcbiAgICAgICAgICAgICAgICBpZiAodGFzay5jb21wbGV0ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdUYXNrID0gbmV3IFRhc2soXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhc2suZGVzY3JpcHRpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmR1ZURhdGVcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgbmV3VGFzay50b2dnbGVDb21wbGV0aW9uU3RhdHVzKCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVG9kYXknKS5hZGRUYXNrKG5ld1Rhc2spO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVG9kYXknKS5hZGRUYXNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRhc2sodGFza05hbWUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgdXBkYXRlV2Vla1Byb2plY3QoKSB7XG4gICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVGhpcyBXZWVrJykudGFza3MgPSBbXTtcblxuICAgICAgICB0aGlzLnByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHtcbiAgICAgICAgICAgIGlmIChcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ0FsbCBUYXNrcycgfHxcbiAgICAgICAgICAgICAgICBwcm9qZWN0LmdldE5hbWUoKSA9PT0gJ1RvZGF5JyB8fFxuICAgICAgICAgICAgICAgIHByb2plY3QuZ2V0TmFtZSgpID09PSAnVGhpcyBXZWVrJ1xuICAgICAgICAgICAgKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCB3ZWVrVGFza3MgPSBwcm9qZWN0LmdldFRhc2tzVGhpc1dlZWsoKTtcbiAgICAgICAgICAgIHdlZWtUYXNrcy5mb3JFYWNoKCh0YXNrKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGFza05hbWUgPSBgJHt0YXNrLmdldE5hbWUoKX0gKFByb2plY3Q6ICR7cHJvamVjdC5nZXROYW1lKCl9KWA7XG4gICAgICAgICAgICAgICAgaWYgKHRhc2suY29tcGxldGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbmV3VGFzayA9IG5ldyBUYXNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFza05hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXNrLmRlc2NyaXB0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGFzay5kdWVEYXRlXG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgIG5ld1Rhc2sudG9nZ2xlQ29tcGxldGlvblN0YXR1cygpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFByb2plY3QoJ1RoaXMgV2VlaycpLmFkZFRhc2sobmV3VGFzayk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUaGlzIFdlZWsnKS5hZGRUYXNrKFxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3IFRhc2sodGFza05hbWUsIHRhc2suZGVzY3JpcHRpb24sIHRhc2suZHVlRGF0ZSlcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgdGhpcy5nZXRQcm9qZWN0KCdUaGlzIFdlZWsnKS5zZXRUYXNrcyhcbiAgICAgICAgICAgIHRoaXMuZ2V0UHJvamVjdCgnVGhpcyBXZWVrJylcbiAgICAgICAgICAgICAgICAuZ2V0VGFza3MoKVxuICAgICAgICAgICAgICAgIC5zb3J0KCh0YXNrQSwgdGFza0IpID0+XG4gICAgICAgICAgICAgICAgICAgIGNvbXBhcmVBc2MoXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RhdGUobmV3IERhdGUodGFza0EuZ2V0RGF0ZSgpKSksXG4gICAgICAgICAgICAgICAgICAgICAgICB0b0RhdGUobmV3IERhdGUodGFza0IuZ2V0RGF0ZSgpKSlcbiAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgIClcbiAgICAgICAgKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgUHJvamVjdCBmcm9tICcuL1Byb2plY3QnO1xuaW1wb3J0IFRhc2sgZnJvbSAnLi9UYXNrJztcbmltcG9ydCBTdG9yYWdlIGZyb20gJy4vU3RvcmFnZSc7XG5pbXBvcnQgZWRpdEltZyBmcm9tICcuLi9pbWcvcGVuY2lsLnBuZyc7XG5pbXBvcnQgdHJhc2hJbWcgZnJvbSAnLi4vaW1nL3RyYXNoLWJpbi5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBVSSB7XG4gICAgLy8gTE9BRCBDT05URU5UXG5cbiAgICBzdGF0aWMgbG9hZEhvbWVwYWdlKCkge1xuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKTtcbiAgICAgICAgVUkuaW5pdFByb2plY3RCdXR0b25zKCk7XG4gICAgICAgIFVJLm9wZW5Qcm9qZWN0KCdBbGwgVGFza3MnLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXRhc2tzJykpO1xuICAgIH1cblxuICAgIHN0YXRpYyBsb2FkUHJvamVjdHMoKSB7XG4gICAgICAgIFN0b3JhZ2UuZ2V0VG9kb0xpc3QoKVxuICAgICAgICAgICAgLmdldFByb2plY3RzKClcbiAgICAgICAgICAgIC5mb3JFYWNoKChwcm9qZWN0KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lm5hbWUgPT09ICdBbGwgVGFza3MnIHx8XG4gICAgICAgICAgICAgICAgICAgIHByb2plY3QubmFtZSA9PT0gJ1RvZGF5JyB8fFxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0Lm5hbWUgPT09ICdUaGlzIFdlZWsnXG4gICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgVUkuY3JlYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0Lm5hbWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIFVJLmluaXRBZGRQcm9qZWN0QnV0dG9ucygpO1xuICAgICAgICBVSS5pbml0RWRpdFByb2plY3RCdXR0b25zKCk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRQcm9qZWN0Q29udGVudChwcm9qZWN0TmFtZSkge1xuICAgICAgICBjb25zdCBtYWluSGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJyk7XG5cbiAgICAgICAgbWFpbkhlYWRlci5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcblxuICAgICAgICBVSS5jbGVhclRhc2tzKCk7XG4gICAgICAgIFVJLmxvYWRUYXNrcyhwcm9qZWN0TmFtZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGxvYWRUYXNrcyhwcm9qZWN0TmFtZSkge1xuICAgICAgICBTdG9yYWdlLmdldFRvZG9MaXN0KClcbiAgICAgICAgICAgIC5nZXRQcm9qZWN0KHByb2plY3ROYW1lKVxuICAgICAgICAgICAgLmdldFRhc2tzKClcbiAgICAgICAgICAgIC5mb3JFYWNoKCh0YXNrKSA9PlxuICAgICAgICAgICAgICAgIFVJLmNyZWF0ZVRhc2tDYXJkKHByb2plY3ROYW1lLCB0YXNrLm5hbWUsIHRhc2suZHVlRGF0ZSlcbiAgICAgICAgICAgICk7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIHByb2plY3ROYW1lICE9PSAnQWxsIFRhc2tzJyAmJlxuICAgICAgICAgICAgcHJvamVjdE5hbWUgIT09ICdUb2RheScgJiZcbiAgICAgICAgICAgIHByb2plY3ROYW1lICE9PSAnVGhpcyBXZWVrJ1xuICAgICAgICApIHtcbiAgICAgICAgICAgIFVJLmluaXRBZGRUYXNrQnV0dG9ucygpO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgLy8gQ1JFQVRFIFBST0pFQ1RcblxuICAgIHN0YXRpYyBjbGVhclByb2plY3RzKCkge1xuICAgICAgICBjb25zdCBwcm9qZWN0cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5zaWRlYmFyLXByb2plY3QtYnV0dG9uJyk7XG4gICAgICAgIHByb2plY3RzLmZvckVhY2goKHByb2plY3QpID0+IHByb2plY3QucmVtb3ZlKCkpO1xuICAgIH1cblxuICAgIHN0YXRpYyBlZGl0UHJvamVjdChlKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gdGhpcy5wcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0O1xuICAgICAgICBVSS5vcGVuRWRpdFByb2plY3RGb3JtKHByb2plY3ROYW1lLCBlKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgZGVsZXRlUHJvamVjdCgpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmcuaW5uZXJUZXh0O1xuICAgICAgICBTdG9yYWdlLmRlbGV0ZVByb2plY3QocHJvamVjdE5hbWUpO1xuICAgICAgICBVSS5jbGVhclByb2plY3RzKCk7XG4gICAgICAgIFVJLmxvYWRQcm9qZWN0cygpO1xuICAgICAgICBVSS5vcGVuUHJvamVjdCgnQWxsIFRhc2tzJywgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FsbC10YXNrcycpKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYXBwZW5kQnV0dG9uc1RvUHJvamVjdEJ1dHRvbihwcm9qZWN0TmFtZSwgcHJvamVjdEJ1dHRvbikge1xuICAgICAgICBjb25zdCBwcm9qZWN0TmFtZUNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcbiAgICAgICAgY29uc3QgZWRpdFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcbiAgICAgICAgY29uc3QgcmVtb3ZlUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuXG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VkaXQtcHJvamVjdC1idXR0b24nKTtcbiAgICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdyZW1vdmUtcHJvamVjdC1idXR0b24nKTtcblxuICAgICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lci5pbm5lclRleHQgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgZWRpdFByb2plY3RCdXR0b24uaW5uZXJUZXh0ID0gJ0VkaXQnO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmlubmVyVGV4dCA9ICdSZW1vdmUnO1xuXG4gICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuZWRpdFByb2plY3QpO1xuICAgICAgICByZW1vdmVQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuZGVsZXRlUHJvamVjdCk7XG5cbiAgICAgICAgcHJvamVjdEJ1dHRvbi5hcHBlbmQoXG4gICAgICAgICAgICBwcm9qZWN0TmFtZUNvbnRhaW5lcixcbiAgICAgICAgICAgIGVkaXRQcm9qZWN0QnV0dG9uLFxuICAgICAgICAgICAgcmVtb3ZlUHJvamVjdEJ1dHRvblxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVQcm9qZWN0QnV0dG9uKHByb2plY3ROYW1lKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3RCdXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdidXR0b24nKTtcblxuICAgICAgICBwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5hZGQoJ3NpZGViYXItcHJvamVjdC1idXR0b24nKTtcblxuICAgICAgICBVSS5hcHBlbmRCdXR0b25zVG9Qcm9qZWN0QnV0dG9uKHByb2plY3ROYW1lLCBwcm9qZWN0QnV0dG9uKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdCcpLmFwcGVuZENoaWxkKHByb2plY3RCdXR0b24pO1xuXG4gICAgICAgIFVJLmluaXRQcm9qZWN0QnV0dG9ucygpO1xuICAgIH1cblxuICAgIC8vIEFERCBQUk9KRUNUIEVWRU5UIExJU1RFTkVSU1xuXG4gICAgc3RhdGljIGluaXRBZGRQcm9qZWN0QnV0dG9ucygpIHtcbiAgICAgICAgY29uc3QgYWRkUHJvamVjdEJ1dHRvbiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtcHJvamVjdCcpO1xuICAgICAgICBjb25zdCBzdWJtaXRQcm9qZWN0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3NpZGViYXItc3VibWl0Jyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbFByb2plY3RCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjc2lkZWJhci1jYW5jZWwnKTtcblxuICAgICAgICBhZGRQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkub3BlblByb2plY3RGb3JtKTtcbiAgICAgICAgc3VibWl0UHJvamVjdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmFkZFByb2plY3QpO1xuICAgICAgICBjYW5jZWxQcm9qZWN0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgVUkuY2FuY2VsUHJvamVjdFN1Ym1pc3Npb25cbiAgICAgICAgKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb3BlblByb2plY3RGb3JtKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJykuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0JykuZm9jdXMoKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1pbnB1dCcpLnZhbHVlO1xuICAgICAgICBTdG9yYWdlLmFkZFByb2plY3QobmV3IFByb2plY3QocHJvamVjdE5hbWUpKTtcbiAgICAgICAgVUkuY3JlYXRlUHJvamVjdEJ1dHRvbihwcm9qZWN0TmFtZSk7XG4gICAgICAgIFVJLmNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2FuY2VsUHJvamVjdFN1Ym1pc3Npb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFVJLmNsb3NlUHJvamVjdEZvcm0oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvc2VQcm9qZWN0Rm9ybSgpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2Nsb3NlZCcpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcHJvamVjdC1mb3JtJykuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNwcm9qZWN0LWlucHV0JykudmFsdWUgPSAnJztcbiAgICB9XG5cbiAgICAvLyBFRElUIFBST0pFQ1QgRk9STVxuXG4gICAgc3RhdGljIGluaXRFZGl0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IHN1Ym1pdFByb2plY3RFZGl0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjZWRpdC1zaWRlYmFyLXN1Ym1pdCdcbiAgICAgICAgKTtcbiAgICAgICAgY29uc3QgY2FuY2VsUHJvamVjdEVkaXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFxuICAgICAgICAgICAgJyNlZGl0LXNpZGViYXItY2FuY2VsJ1xuICAgICAgICApO1xuXG4gICAgICAgIHN1Ym1pdFByb2plY3RFZGl0LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkuYWRkUHJvamVjdEVkaXQpO1xuICAgICAgICBjYW5jZWxQcm9qZWN0RWRpdC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNhbmNlbFByb2plY3RFZGl0KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgYWRkUHJvamVjdEVkaXQoZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgY29uc3QgcHJvamVjdFRvRWRpdCA9XG4gICAgICAgICAgICB0aGlzLnBhcmVudEVsZW1lbnQucGFyZW50RWxlbWVudC5wcmV2aW91c1NpYmxpbmcuZmlyc3RFbGVtZW50Q2hpbGQ7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gcHJvamVjdFRvRWRpdC5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IG5ld1Byb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcbiAgICAgICAgICAgICcjZWRpdC1wcm9qZWN0LWlucHV0J1xuICAgICAgICApLnZhbHVlO1xuXG4gICAgICAgIFN0b3JhZ2UucmVuYW1lUHJvamVjdChwcm9qZWN0TmFtZSwgbmV3UHJvamVjdE5hbWUpO1xuXG4gICAgICAgIFVJLmNsb3NlUHJvamVjdEVkaXRGb3JtKCk7XG5cbiAgICAgICAgVUkuY2xlYXJQcm9qZWN0cygpO1xuICAgICAgICBVSS5sb2FkUHJvamVjdHMoKTtcblxuICAgICAgICBwcm9qZWN0VG9FZGl0LnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgfVxuXG4gICAgc3RhdGljIG9wZW5FZGl0UHJvamVjdEZvcm0ocHJvamVjdE5hbWUsIGUpIHtcbiAgICAgICAgY29uc3QgcHJvamVjdFRvRWRpdCA9IGUudGFyZ2V0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGVkaXRQcm9qZWN0Rm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5lZGl0LXByb2plY3QtZm9ybScpO1xuICAgICAgICBjb25zdCBlZGl0UHJvamVjdElucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdC1pbnB1dCcpO1xuXG4gICAgICAgIHByb2plY3RUb0VkaXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcblxuICAgICAgICAvLyBJbnNlcnQgRm9ybSBhZnRlciBwcm9qZWN0VG9FZGl0XG4gICAgICAgIHByb2plY3RUb0VkaXQucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICBlZGl0UHJvamVjdEZvcm0sXG4gICAgICAgICAgICBwcm9qZWN0VG9FZGl0Lm5leHRTaWJsaW5nXG4gICAgICAgICk7XG5cbiAgICAgICAgZWRpdFByb2plY3RGb3JtLmNsYXNzTGlzdC5yZW1vdmUoJ2hpZGRlbicpO1xuXG4gICAgICAgIGVkaXRQcm9qZWN0SW5wdXQudmFsdWUgPSBwcm9qZWN0TmFtZTtcbiAgICAgICAgZWRpdFByb2plY3RJbnB1dC5mb2N1cygpO1xuICAgIH1cblxuICAgIHN0YXRpYyBjYW5jZWxQcm9qZWN0RWRpdChlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgVUkuY2xvc2VQcm9qZWN0RWRpdEZvcm0oKTtcbiAgICAgICAgdGhpcy5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnQucHJldmlvdXNTaWJsaW5nLnN0eWxlLmRpc3BsYXkgPSAnZ3JpZCc7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsb3NlUHJvamVjdEVkaXRGb3JtKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZWRpdC1wcm9qZWN0LWZvcm0nKS5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtcHJvamVjdC1pbnB1dCcpLnZhbHVlID0gJyc7XG4gICAgfVxuXG4gICAgLy8gUFJPSkVDVCBFVkVOVCBMSVNURU5FUlNcblxuICAgIHN0YXRpYyBpbml0UHJvamVjdEJ1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGFsbFRhc2tzUHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWxsLXRhc2tzJyk7XG4gICAgICAgIGNvbnN0IHRvZGF5UHJvamVjdHNCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG9kYXknKTtcbiAgICAgICAgY29uc3Qgd2Vla1Byb2plY3RzQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RoaXMtd2VlaycpO1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnLnNpZGViYXItcHJvamVjdC1idXR0b24nXG4gICAgICAgICk7XG5cbiAgICAgICAgYWxsVGFza3NQcm9qZWN0c0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKFxuICAgICAgICAgICAgJ2NsaWNrJyxcbiAgICAgICAgICAgIFVJLm9wZW5BbGxUYXNrc1Byb2plY3RzQnV0dG9uXG4gICAgICAgICk7XG4gICAgICAgIHRvZGF5UHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcihcbiAgICAgICAgICAgICdjbGljaycsXG4gICAgICAgICAgICBVSS5vcGVuVG9kYXlQcm9qZWN0c0J1dHRvblxuICAgICAgICApO1xuICAgICAgICB3ZWVrUHJvamVjdHNCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5vcGVuV2Vla1Byb2plY3RzQnV0dG9uKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbnMuZm9yRWFjaCgocHJvamVjdEJ1dHRvbikgPT5cbiAgICAgICAgICAgIHByb2plY3RCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5oYW5kbGVQcm9qZWN0QnV0dG9uKVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuQWxsVGFza3NQcm9qZWN0c0J1dHRvbigpIHtcbiAgICAgICAgU3RvcmFnZS51cGRhdGVBbGxUYXNrc1Byb2plY3QoKTtcbiAgICAgICAgVUkub3BlblByb2plY3QoJ0FsbCBUYXNrcycsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuVG9kYXlQcm9qZWN0c0J1dHRvbigpIHtcbiAgICAgICAgU3RvcmFnZS51cGRhdGVUb2RheVByb2plY3QoKTtcbiAgICAgICAgVUkub3BlblByb2plY3QoJ1RvZGF5JywgdGhpcyk7XG4gICAgfVxuXG4gICAgc3RhdGljIG9wZW5XZWVrUHJvamVjdHNCdXR0b24oKSB7XG4gICAgICAgIFN0b3JhZ2UudXBkYXRlV2Vla1Byb2plY3QoKTtcbiAgICAgICAgVUkub3BlblByb2plY3QoJ1RoaXMgV2VlaycsIHRoaXMpO1xuICAgIH1cblxuICAgIHN0YXRpYyBvcGVuUHJvamVjdChwcm9qZWN0TmFtZSwgcHJvamVjdEJ1dHRvbikge1xuICAgICAgICBjb25zdCBkZWZhdWx0UHJvamVjdEJ1dHRvbnMgPVxuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnNpZGViYXItYnV0dG9ucycpO1xuICAgICAgICBjb25zdCBwcm9qZWN0QnV0dG9ucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoXG4gICAgICAgICAgICAnLnNpZGViYXItcHJvamVjdC1idXR0b24nXG4gICAgICAgICk7XG4gICAgICAgIGNvbnN0IGJ1dHRvbnMgPSBbLi4uZGVmYXVsdFByb2plY3RCdXR0b25zLCAuLi5wcm9qZWN0QnV0dG9uc107XG5cbiAgICAgICAgYnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IGJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdzZWxlY3RlZCcpKTtcbiAgICAgICAgcHJvamVjdEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdzZWxlY3RlZCcpO1xuXG4gICAgICAgIGlmIChwcm9qZWN0QnV0dG9uLmNsYXNzTGlzdC5jb250YWlucygnc2lkZWJhci1idXR0b24nKSkge1xuICAgICAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2FkZC10YXNrJykuc3R5bGUuZGlzcGxheSA9ICdub25lJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNhZGQtdGFzaycpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuICAgICAgICB9XG5cbiAgICAgICAgVUkubG9hZFByb2plY3RDb250ZW50KHByb2plY3ROYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgaGFuZGxlUHJvamVjdEJ1dHRvbihlKSB7XG4gICAgICAgIGlmIChcbiAgICAgICAgICAgIGUudGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnZWRpdC1wcm9qZWN0LWJ1dHRvbicpIHx8XG4gICAgICAgICAgICBlLnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3JlbW92ZS1wcm9qZWN0LWJ1dHRvbicpXG4gICAgICAgIClcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgY29uc3QgcHJvamVjdE5hbWUgPSB0aGlzLmZpcnN0RWxlbWVudENoaWxkLmlubmVyVGV4dDtcblxuICAgICAgICBVSS5vcGVuUHJvamVjdChwcm9qZWN0TmFtZSwgdGhpcyk7XG4gICAgfVxuXG4gICAgLy8gQ1JFQVRFIFRBU0tcblxuICAgIHN0YXRpYyBjbGVhclRhc2tzKCkge1xuICAgICAgICBjb25zdCB0YXNrQ29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2snKTtcbiAgICAgICAgdGFza0NvbnRhaW5lci5pbm5lckhUTUwgPSAnJztcbiAgICB9XG5cbiAgICBzdGF0aWMgY2hhbmdlQ29tcGxldGVTdGF0dXMoKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJykuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IHRoaXMucGFyZW50RWxlbWVudC5uZXh0U2libGluZy5pbm5lclRleHQ7XG4gICAgICAgIFN0b3JhZ2Uuc2V0VGFza0NvbXBsZXRpb25TdGF0dXMocHJvamVjdE5hbWUsIHRhc2tOYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlQ2hlY2tCb3gocHJvamVjdE5hbWUsIHRhc2tOYW1lKSB7XG4gICAgICAgIGNvbnN0IGNvbXBsZXRlU3RhdHVzID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICAgICAgICAuZ2V0UHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKS5pbm5lclRleHQpXG4gICAgICAgICAgICAuZ2V0VGFzayh0YXNrTmFtZSlcbiAgICAgICAgICAgIC5nZXRDb21wbGV0ZVN0YXR1cygpO1xuICAgICAgICBjb25zdCBkaXYgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgICAgY29uc3QgY2hlY2tib3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xhYmVsJyk7XG5cbiAgICAgICAgZGl2LmNsYXNzTGlzdC5hZGQoJ3JvdW5kJyk7XG5cbiAgICAgICAgY2hlY2tib3guc2V0QXR0cmlidXRlKCd0eXBlJywgJ2NoZWNrYm94Jyk7XG4gICAgICAgIGNoZWNrYm94LnNldEF0dHJpYnV0ZSgnaWQnLCBgY2hlY2tib3gtJHt0YXNrTmFtZX1gKTtcblxuICAgICAgICBsYWJlbC5zZXRBdHRyaWJ1dGUoJ2ZvcicsIGBjaGVja2JveC0ke3Rhc2tOYW1lfWApO1xuICAgICAgICBsYWJlbC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNoYW5nZUNvbXBsZXRlU3RhdHVzKTtcblxuICAgICAgICBpZiAoY29tcGxldGVTdGF0dXMgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGNoZWNrYm94LmNsaWNrKCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoXG4gICAgICAgICAgICBwcm9qZWN0TmFtZSA9PT0gJ0FsbCBUYXNrcycgfHxcbiAgICAgICAgICAgIHByb2plY3ROYW1lID09PSAnVG9kYXknIHx8XG4gICAgICAgICAgICBwcm9qZWN0TmFtZSA9PT0gJ1RoaXMgV2VlaydcbiAgICAgICAgKSB7XG4gICAgICAgICAgICBjaGVja2JveC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBsYWJlbC5jbGFzc0xpc3QuYWRkKCdkaXNhYmxlZC1jaGVja2JveCcpO1xuICAgICAgICB9XG5cbiAgICAgICAgZGl2LmFwcGVuZChjaGVja2JveCwgbGFiZWwpO1xuXG4gICAgICAgIHJldHVybiBkaXY7XG4gICAgfVxuXG4gICAgc3RhdGljIHJlbW92ZVRhc2soKSB7XG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJykuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9XG4gICAgICAgICAgICB0aGlzLnByZXZpb3VzU2libGluZy5wcmV2aW91c1NpYmxpbmcucHJldmlvdXNTaWJsaW5nLmlubmVyVGV4dDtcbiAgICAgICAgU3RvcmFnZS5kZWxldGVUYXNrKHByb2plY3ROYW1lLCB0YXNrTmFtZSk7XG4gICAgICAgIFVJLmNsZWFyVGFza3MoKTtcbiAgICAgICAgVUkubG9hZFRhc2tzKHByb2plY3ROYW1lKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY3JlYXRlVGFza0NhcmRCdXR0b25zKHRhc2tDb250YWluZXIsIHByb2plY3ROYW1lLCB0YXNrTmFtZSwgZGF0ZSkge1xuICAgICAgICBjb25zdCBjaGVja0JveCA9IFVJLmNyZWF0ZUNoZWNrQm94KHByb2plY3ROYW1lLCB0YXNrTmFtZSk7XG4gICAgICAgIGNvbnN0IHRhc2tOYW1lQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBkYXRlQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgncCcpO1xuICAgICAgICBjb25zdCBlZGl0VGFza0J1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2J1dHRvbicpO1xuICAgICAgICBjb25zdCByZW1vdmVUYXNrQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG5cbiAgICAgICAgdGFza05hbWVDb250YWluZXIuaW5uZXJUZXh0ID0gdGFza05hbWU7XG4gICAgICAgIGRhdGVDb250YWluZXIuaW5uZXJUZXh0ID0gZGF0ZTtcblxuICAgICAgICBlZGl0VGFza0J1dHRvbi5jbGFzc0xpc3QuYWRkKCdlZGl0LXRhc2stYnV0dG9uJyk7XG4gICAgICAgIHJlbW92ZVRhc2tCdXR0b24uY2xhc3NMaXN0LmFkZCgncmVtb3ZlLXRhc2stYnV0dG9uJyk7XG5cbiAgICAgICAgZWRpdFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5vcGVuRWRpdFRhc2tGb3JtKTtcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLnJlbW92ZVRhc2spO1xuXG4gICAgICAgIGVkaXRUYXNrQnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHtlZGl0SW1nfSlgO1xuICAgICAgICBlZGl0VGFza0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgICAgIGVkaXRUYXNrQnV0dG9uLnN0eWxlLndpZHRoID0gJzIuOGVtJztcbiAgICAgICAgZWRpdFRhc2tCdXR0b24uc3R5bGUuaGVpZ2h0ID0gJzIuOGVtJztcblxuICAgICAgICByZW1vdmVUYXNrQnV0dG9uLnN0eWxlLmJhY2tncm91bmRJbWFnZSA9IGB1cmwoJHt0cmFzaEltZ30pYDtcbiAgICAgICAgcmVtb3ZlVGFza0J1dHRvbi5zdHlsZS5iYWNrZ3JvdW5kU2l6ZSA9ICdjb3Zlcic7XG4gICAgICAgIHJlbW92ZVRhc2tCdXR0b24uc3R5bGUud2lkdGggPSAnMi44ZW0nO1xuICAgICAgICByZW1vdmVUYXNrQnV0dG9uLnN0eWxlLmhlaWdodCA9ICcyLjhlbSc7XG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgICAgcHJvamVjdE5hbWUgPT09ICdBbGwgVGFza3MnIHx8XG4gICAgICAgICAgICBwcm9qZWN0TmFtZSA9PT0gJ1RvZGF5JyB8fFxuICAgICAgICAgICAgcHJvamVjdE5hbWUgPT09ICdUaGlzIFdlZWsnXG4gICAgICAgICkge1xuICAgICAgICAgICAgdGFza0NvbnRhaW5lci5hcHBlbmQoY2hlY2tCb3gsIHRhc2tOYW1lQ29udGFpbmVyLCBkYXRlQ29udGFpbmVyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRhc2tDb250YWluZXIuYXBwZW5kKFxuICAgICAgICAgICAgICAgIGNoZWNrQm94LFxuICAgICAgICAgICAgICAgIHRhc2tOYW1lQ29udGFpbmVyLFxuICAgICAgICAgICAgICAgIGRhdGVDb250YWluZXIsXG4gICAgICAgICAgICAgICAgZWRpdFRhc2tCdXR0b24sXG4gICAgICAgICAgICAgICAgcmVtb3ZlVGFza0J1dHRvblxuICAgICAgICAgICAgKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIHN0YXRpYyBjcmVhdGVUYXNrQ2FyZChwcm9qZWN0TmFtZSwgdGFza05hbWUsIGRhdGUpIHtcbiAgICAgICAgY29uc3QgdGFza0NvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuXG4gICAgICAgIFVJLmNyZWF0ZVRhc2tDYXJkQnV0dG9ucyh0YXNrQ29udGFpbmVyLCBwcm9qZWN0TmFtZSwgdGFza05hbWUsIGRhdGUpO1xuXG4gICAgICAgIHRhc2tDb250YWluZXIuY2xhc3NMaXN0LmFkZCgndGFza0NhcmQnKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzaycpLmFwcGVuZENoaWxkKHRhc2tDb250YWluZXIpO1xuICAgIH1cblxuICAgIC8vIEVESVQgVEFTSyBGT1JNXG5cbiAgICBzdGF0aWMgb3BlbkVkaXRUYXNrRm9ybSgpIHtcbiAgICAgICAgY29uc3QgdGFza1RvRWRpdCA9IHRoaXMucGFyZW50RWxlbWVudDtcbiAgICAgICAgY29uc3QgdGFza05hbWUgPVxuICAgICAgICAgICAgdGhpcy5wcmV2aW91c0VsZW1lbnRTaWJsaW5nLnByZXZpb3VzRWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCB0YXNrID0gU3RvcmFnZS5nZXRUb2RvTGlzdCgpXG4gICAgICAgICAgICAuZ2V0UHJvamVjdChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbWFpbi1oZWFkZXInKS5pbm5lclRleHQpXG4gICAgICAgICAgICAuZ2V0VGFzayh0YXNrTmFtZSk7XG4gICAgICAgIGNvbnN0IGVkaXRUYXNrU3VibWl0QnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtc3VibWl0Jyk7XG4gICAgICAgIGNvbnN0IGNhbmNlbEVkaXRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtY2FuY2VsJyk7XG5cbiAgICAgICAgZWRpdFRhc2tTdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5lZGl0VGFzayk7XG4gICAgICAgIGNhbmNlbEVkaXRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoXG4gICAgICAgICAgICAnY2xpY2snLFxuICAgICAgICAgICAgVUkuY2FuY2VsRWRpdFRhc2tTdWJtaXNzaW9uXG4gICAgICAgICk7XG5cbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stZWRpdC10aXRsZScpLnZhbHVlID0gdGFzay5uYW1lO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kZXNjcmlwdGlvbicpLnZhbHVlID0gdGFzay5kZXNjcmlwdGlvbjtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZScpLnZhbHVlID0gdGFzay5kdWVEYXRlO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlFZGl0Rm9ybScpLnN0eWxlLmRpc3BsYXkgPSAnYmxvY2snO1xuXG4gICAgICAgIC8vIEluc2VydCBGb3JtIGFmdGVyIHRhc2tUb0VkaXRcbiAgICAgICAgdGFza1RvRWRpdC5wYXJlbnROb2RlLmluc2VydEJlZm9yZShcbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUVkaXRGb3JtJyksXG4gICAgICAgICAgICB0YXNrVG9FZGl0Lm5leHRTaWJsaW5nXG4gICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGVkaXRUYXNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJykuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCB0YXNrVG9FZGl0ID1cbiAgICAgICAgICAgIHRoaXMucGFyZW50RWxlbWVudC5wYXJlbnRFbGVtZW50LnBhcmVudEVsZW1lbnRcbiAgICAgICAgICAgICAgICAucHJldmlvdXNFbGVtZW50U2libGluZztcbiAgICAgICAgY29uc3QgdGFza05hbWUgPVxuICAgICAgICAgICAgdGFza1RvRWRpdC5maXJzdEVsZW1lbnRDaGlsZC5uZXh0RWxlbWVudFNpYmxpbmcuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCBuZXdUYXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLWVkaXQtdGl0bGUnKS52YWx1ZTtcbiAgICAgICAgY29uc3QgbmV3VGFza0Rlc2NyaXB0aW9uID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNlZGl0LWRlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGNvbnN0IG5ld1Rhc2tEYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGF0ZScpLnZhbHVlO1xuXG4gICAgICAgIFN0b3JhZ2UucmVuYW1lVGFzayhcbiAgICAgICAgICAgIHByb2plY3ROYW1lLFxuICAgICAgICAgICAgdGFza05hbWUsXG4gICAgICAgICAgICBuZXdUYXNrTmFtZSxcbiAgICAgICAgICAgIG5ld1Rhc2tEZXNjcmlwdGlvbixcbiAgICAgICAgICAgIG5ld1Rhc2tEYXRlXG4gICAgICAgICk7XG5cbiAgICAgICAgVUkuY2xvc2VFZGl0VGFza0Zvcm0oKTtcblxuICAgICAgICBVSS5jbGVhclRhc2tzKCk7XG4gICAgICAgIFVJLmxvYWRUYXNrcyhwcm9qZWN0TmFtZSk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNsb3NlRWRpdFRhc2tGb3JtKCkge1xuICAgICAgICBjb25zdCBteUVkaXRGb3JtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI215RWRpdEZvcm0nKTtcblxuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdGFzay1lZGl0LXRpdGxlJykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2VkaXQtZGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZWRpdC1kYXRlJykudmFsdWUgPSAnJztcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI292ZXJsYXknKS5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcblxuICAgICAgICBteUVkaXRGb3JtLnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XG5cbiAgICAgICAgLy8gSW5zZXJ0IEZvcm0gYWZ0ZXIgYWRkVGFza0Zvcm0gdG8gbm90IGRlbGV0ZSBpdCB3aGVuIGNsZWFyaW5nIHRhc2tzXG4gICAgICAgIGRvY3VtZW50XG4gICAgICAgICAgICAucXVlcnlTZWxlY3RvcignI215Rm9ybScpXG4gICAgICAgICAgICAucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoXG4gICAgICAgICAgICAgICAgbXlFZGl0Rm9ybSxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlGb3JtJykubmV4dFNpYmxpbmdcbiAgICAgICAgICAgICk7XG4gICAgfVxuXG4gICAgc3RhdGljIGNhbmNlbEVkaXRUYXNrU3VibWlzc2lvbihlKSB7XG4gICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgVUkuY2xvc2VFZGl0VGFza0Zvcm0oKTtcbiAgICB9XG5cbiAgICAvLyBBREQgVEFTSyBFVkVOVCBMSVNURU5FUlNcblxuICAgIHN0YXRpYyBpbml0QWRkVGFza0J1dHRvbnMoKSB7XG4gICAgICAgIGNvbnN0IGFkZFRhc2tCdXR0b24gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYWRkLXRhc2snKTtcblxuICAgICAgICBhZGRUYXNrQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgVUkub3BlbkFkZFRhc2tGb3JtKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgb3BlbkFkZFRhc2tGb3JtKCkge1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjb3ZlcmxheScpLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjbXlGb3JtJykuc3R5bGUuZGlzcGxheSA9ICdibG9jayc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykuZm9jdXMoKTtcblxuICAgICAgICBjb25zdCBhZGRUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3N1Ym1pdCcpO1xuICAgICAgICBjb25zdCBjYW5jZWxUYXNrQnV0dG9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2NhbmNlbCcpO1xuXG4gICAgICAgIGFkZFRhc2tCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBVSS5hZGRUYXNrKTtcbiAgICAgICAgY2FuY2VsVGFza0J1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIFVJLmNhbmNlbFRhc2tTdWJtaXNzaW9uKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2xvc2VBZGRUYXNrRm9ybSgpIHtcbiAgICAgICAgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3Rhc2stdGl0bGUnKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGVzY3JpcHRpb24nKS52YWx1ZSA9ICcnO1xuICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlID0gJyc7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5JykuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNteUZvcm0nKS5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xuICAgIH1cblxuICAgIHN0YXRpYyBhZGRUYXNrKGUpIHtcbiAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI21haW4taGVhZGVyJykuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCB0YXNrTmFtZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0YXNrLXRpdGxlJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2Rlc2NyaXB0aW9uJykudmFsdWU7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjZGF0ZScpLnZhbHVlO1xuXG4gICAgICAgIFN0b3JhZ2UuYWRkVGFzayhwcm9qZWN0TmFtZSwgbmV3IFRhc2sodGFza05hbWUsIGRlc2NyaXB0aW9uLCBkYXRlKSk7XG4gICAgICAgIFVJLmNyZWF0ZVRhc2tDYXJkKHByb2plY3ROYW1lLCB0YXNrTmFtZSwgZGF0ZSk7XG4gICAgICAgIFVJLmNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgICB9XG5cbiAgICBzdGF0aWMgY2FuY2VsVGFza1N1Ym1pc3Npb24oZSkge1xuICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIFVJLmNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4vc3R5bGUuY3NzJztcbmltcG9ydCBVSSBmcm9tICcuL1VJJztcblxuY29uc3Qgb3ZlcmxheSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNvdmVybGF5Jyk7XG5cbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCBVSS5sb2FkSG9tZXBhZ2UpO1xud2luZG93Lm9uY2xpY2sgPSAoZXZlbnQpID0+IHtcbiAgICBpZiAoZXZlbnQudGFyZ2V0ID09PSBvdmVybGF5KSB7XG4gICAgICAgIFVJLmNsb3NlQWRkVGFza0Zvcm0oKTtcbiAgICAgICAgVUkuY2xvc2VFZGl0VGFza0Zvcm0oKTtcbiAgICB9XG59O1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fID0gbmV3IFVSTChcIi4uL2ZvbnRzL1JvYm90by9Sb2JvdG8tVGhpbi50dGZcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX0VYUE9SVF9fXyA9IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgYC8qIGh0dHA6Ly9tZXllcndlYi5jb20vZXJpYy90b29scy9jc3MvcmVzZXQvIFxuICAgIHYyLjAgfCAyMDExMDEyNlxuICAgIExpY2Vuc2U6IG5vbmUgKHB1YmxpYyBkb21haW4pXG4qL1xuXG5odG1sLFxuYm9keSxcbmRpdixcbnNwYW4sXG5hcHBsZXQsXG5vYmplY3QsXG5pZnJhbWUsXG5oMSxcbmgyLFxuaDMsXG5oNCxcbmg1LFxuaDYsXG5wLFxuYmxvY2txdW90ZSxcbnByZSxcbmEsXG5hYmJyLFxuYWNyb255bSxcbmFkZHJlc3MsXG5iaWcsXG5jaXRlLFxuY29kZSxcbmRlbCxcbmRmbixcbmVtLFxuaW1nLFxuaW5zLFxua2JkLFxucSxcbnMsXG5zYW1wLFxuc21hbGwsXG5zdHJpa2UsXG5zdHJvbmcsXG5zdWIsXG5zdXAsXG50dCxcbnZhcixcbmIsXG51LFxuaSxcbmNlbnRlcixcbmRsLFxuZHQsXG5kZCxcbm9sLFxudWwsXG5saSxcbmZpZWxkc2V0LFxuZm9ybSxcbmxhYmVsLFxubGVnZW5kLFxudGFibGUsXG5jYXB0aW9uLFxudGJvZHksXG50Zm9vdCxcbnRoZWFkLFxudHIsXG50aCxcbnRkLFxuYXJ0aWNsZSxcbmFzaWRlLFxuY2FudmFzLFxuZGV0YWlscyxcbmVtYmVkLFxuZmlndXJlLFxuZmlnY2FwdGlvbixcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5vdXRwdXQsXG5ydWJ5LFxuc2VjdGlvbixcbnN1bW1hcnksXG50aW1lLFxubWFyayxcbmF1ZGlvLFxudmlkZW8ge1xuICAgIG1hcmdpbjogMDtcbiAgICBwYWRkaW5nOiAwO1xuICAgIGJvcmRlcjogMDtcbiAgICBmb250LXNpemU6IDEwMCU7XG4gICAgZm9udDogaW5oZXJpdDtcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XG59XG4vKiBIVE1MNSBkaXNwbGF5LXJvbGUgcmVzZXQgZm9yIG9sZGVyIGJyb3dzZXJzICovXG5hcnRpY2xlLFxuYXNpZGUsXG5kZXRhaWxzLFxuZmlnY2FwdGlvbixcbmZpZ3VyZSxcbmZvb3RlcixcbmhlYWRlcixcbmhncm91cCxcbm1lbnUsXG5uYXYsXG5zZWN0aW9uIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cbmJvZHkge1xuICAgIGxpbmUtaGVpZ2h0OiAxO1xufVxub2wsXG51bCB7XG4gICAgbGlzdC1zdHlsZTogbm9uZTtcbn1cbmJsb2NrcXVvdGUsXG5xIHtcbiAgICBxdW90ZXM6IG5vbmU7XG59XG5ibG9ja3F1b3RlOmJlZm9yZSxcbmJsb2NrcXVvdGU6YWZ0ZXIsXG5xOmJlZm9yZSxcbnE6YWZ0ZXIge1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGNvbnRlbnQ6IG5vbmU7XG59XG50YWJsZSB7XG4gICAgYm9yZGVyLWNvbGxhcHNlOiBjb2xsYXBzZTtcbiAgICBib3JkZXItc3BhY2luZzogMDtcbn1cblxuLyogUHJldmVudHMgRXJyb3IgRGlzcGxheSBvbiBCcm93c2VyIFNjcmVlbiAqL1xuXG4vKlxuaWZyYW1lIHtcbiAgICBkaXNwbGF5OiBub25lO1xufVxuXG4qL1xuXG4vKiBDdXN0b20gRm9udCAqL1xuXG5AZm9udC1mYWNlIHtcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XG4gICAgc3JjOiB1cmwoJHtfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8wX19ffSk7XG59XG5cbi8qIE92ZXJhbGwgU3R5bGluZyAqL1xuXG46cm9vdCB7XG4gICAgLS10ZXh0Q29sb3I6ICNlYWViZWM7XG59XG5cbmJvZHkge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgYWxpZ24taXRlbXM6IHN0cmV0Y2g7XG4gICAgaGVpZ2h0OiAxMDB2aDtcbiAgICB3aWR0aDogMTAwdnc7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8nO1xufVxuXG5oZWFkZXIsXG5mb290ZXIge1xuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xuICAgIGdyaWQtY29sdW1uLWVuZDogMztcbn1cblxuLmhpZGRlbiB7XG4gICAgdG9wOiAwO1xuICAgIGxlZnQ6IDA7XG4gICAgcG9pbnRlci1ldmVudHM6IG5vbmUgIWltcG9ydGFudDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGUgIWltcG9ydGFudDtcbiAgICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XG4gICAgdHJhbnNpdGlvbjogbWF4LWhlaWdodCAxcyBlYXNlLW91dCAhaW1wb3J0YW50O1xuICAgIG9wYWNpdHk6IDAgIWltcG9ydGFudDtcbn1cblxuLyogSGVhZGVyICovXG5cbmhlYWRlciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIHBhZGRpbmc6IDAuOGVtIDAuOGVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM2NDc7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG59XG5cbi5oZWFkZXItY29udGFpbmVyIHtcbiAgICBmb250LXNpemU6IDJlbTtcbn1cblxuLmhlYWRlci1pbWcge1xuICAgIGhlaWdodDogNGVtO1xuICAgIHdpZHRoOiA0ZW07XG4gICAgbWFyZ2luLXJpZ2h0OiAxZW07XG59XG5cbi8qIFNpZGViYXIgKi9cblxuc2lkZWJhciB7XG4gICAgcGFkZGluZzogMC44ZW0gMS44ZW0gMC44ZW0gMS44ZW07XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIGdhcDogMWVtO1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxYjJhMzc7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCA5cHggOXB4IC05cHggIzIzMzY0Nztcbn1cblxuLnNpZGViYXItY29udGFpbmVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgYWxpZ24taXRlbXM6IGZsZXgtc3RhcnQ7XG59XG5cbmhyIHtcbiAgICBib3JkZXItY29sb3I6ICM5ZmEwYTE7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlmYTBhMTtcbiAgICBjb2xvcjogIzlmYTBhMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgICBib3JkZXItdG9wOiAxcHg7XG59XG5cbiNwcm9qZWN0IHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG5cbiNwcm9qZWN0LWNvbnRlbnQge1xuICAgIHdpZHRoOiAxMDAlO1xufVxuXG4jcHJvamVjdC1mb3JtLFxuI2VkaXQtcHJvamVjdC1mb3JtIHtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG59XG5cbiNwcm9qZWN0LWZvcm06aG92ZXIsXG4jZWRpdC1wcm9qZWN0LWZvcm06aG92ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM2NDc7XG59XG5cbiNwcm9qZWN0LWlucHV0LFxuI2VkaXQtcHJvamVjdC1pbnB1dCB7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgICB3aWR0aDogOTklO1xuICAgIGhlaWdodDogMS41ZW07XG4gICAgYXBwZWFyYW5jZTogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkIHJnYmEoOTAsIDkwLCA5MCwgMC40NDMpO1xuICAgIGNvbG9yOiAjZWZmMGYzYTY7XG59XG5cbiNwcm9qZWN0LWlucHV0OmZvY3VzLFxuI2VkaXQtcHJvamVjdC1pbnB1dCB7XG4gICAgb3V0bGluZTogbm9uZTtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjM2FhYmI2O1xufVxuXG4jcHJvamVjdC1pbnB1dDo6LS13ZWJraXQtaW5wdXQtcGxhY2Vob2xkZXIsXG4jZWRpdC1wcm9qZWN0LWlucHV0OjotLXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XG4gICAgY29sb3I6IGJsYWNrO1xufVxuXG4jc2lkZWJhci1mb3JtLWJ1dHRvbi1jb250YWluZXIsXG4jZWRpdC1zaWRlYmFyLWZvcm0tYnV0dG9uLWNvbnRhaW5lciB7XG4gICAgZGlzcGxheTogZmxleDtcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICBnYXA6IDJlbTtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbn1cblxuLnNpZGViYXItZm9ybS1idXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XG4gICAgaGVpZ2h0OiAyZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNkYmRiZGI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbi5zaWRlYmFyLWJ1dHRvbixcbi5zaWRlYmFyLXByb2plY3QtYnV0dG9uLFxuI2FkZC10YXNrIHtcbiAgICBwYWRkaW5nOiAwLjVlbTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgZm9udC1mYW1pbHk6ICdyb2JvdG8nO1xuICAgIGNvbG9yOiB2YXIoLS10ZXh0Q29sb3IpO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIHRleHQtYWxpZ246IHN0YXJ0O1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyIDFmcjtcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xufVxuXG4uc2lkZWJhci1idXR0b246aG92ZXIsXG4uc2lkZWJhci1wcm9qZWN0LWJ1dHRvbjpob3ZlcixcbiNhZGQtdGFzazpob3ZlciB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzJkNDM1NjtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5yZW1vdmUtcHJvamVjdC1idXR0b24sXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbiB7XG4gICAgYmFja2dyb3VuZDogbm9uZTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG4gICAgZm9udC1mYW1pbHk6IHJvYm90bztcbn1cblxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbjpob3Zlcixcbi5lZGl0LXByb2plY3QtYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgY29sb3I6IHJnYmEoMjU1LCAyNTUsIDI1NSwgMC41MjgpO1xufVxuXG4vKiBNYWluICovXG5cbm1haW4ge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgM2ZyO1xuICAgIGZsZXgtZ3JvdzogMTtcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDlweCA5cHggLTlweCAjMjMzNjQ3O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTI3MzQ7XG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XG59XG5cbiN0YXNrLWNvbnRlbnQge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuLm92ZXJsYXkuYWN0aXZlIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbn1cblxuLm92ZXJsYXkge1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICB0b3A6IDA7XG4gICAgbGVmdDogMDtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGhlaWdodDogMTAwJTtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XG59XG5cbi5mb3JtLXBvcHVwIHtcbiAgICBkaXNwbGF5OiBub25lO1xuICAgIHBvc2l0aW9uOiBmaXhlZDtcbiAgICBsZWZ0OiA1MCU7XG4gICAgdG9wOiA1MCU7XG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XG4gICAgei1pbmRleDogOTtcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xufVxuXG4jZm9ybS1jb250YWluZXIsXG4uZm9ybS1lZGl0LWNvbnRhaW5lciB7XG4gICAgbWF4LXdpZHRoOiAyODBweDtcbiAgICBwYWRkaW5nOiAyMHB4O1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTI3MzQ7XG4gICAgYm9yZGVyLXJhZGl1czogMjBweDtcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XG59XG5cbiNmb3JtLWhlYWRlcixcbiNmb3JtLWVkaXQtaGVhZGVyIHtcbiAgICBkaXNwbGF5OiBmbGV4O1xuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgbWFyZ2luLWJvdHRvbTogMC41ZW07XG4gICAgZm9udC1zaXplOiAyZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4jZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT0ndGV4dCddLFxuI2Zvcm0tY29udGFpbmVyIHRleHRhcmVhLFxuI2Zvcm0tY29udGFpbmVyIGlucHV0W3R5cGU9J2RhdGUnXSxcbi5mb3JtLWVkaXQtY29udGFpbmVyIGlucHV0W3R5cGU9J3RleHQnXSxcbi5mb3JtLWVkaXQtY29udGFpbmVyIHRleHRhcmVhLFxuLmZvcm0tZWRpdC1jb250YWluZXIgaW5wdXRbdHlwZT0nZGF0ZSddIHtcbiAgICB3aWR0aDogMTguNWVtO1xuICAgIHBhZGRpbmc6IDE1cHg7XG4gICAgbWFyZ2luOiA1cHggMCAyMHB4IDA7XG4gICAgYm9yZGVyOiBub25lO1xuICAgIGJhY2tncm91bmQ6ICMyMzM2NDc7XG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xuICAgIGNvbG9yOiAjZGJkYmRiO1xufVxuXG4jZm9ybS1jb250YWluZXIgdGV4dGFyZWEsXG4uZm9ybS1lZGl0LWNvbnRhaW5lciB0ZXh0YXJlYSB7XG4gICAgaGVpZ2h0OiA5MXB4O1xuICAgIHJlc2l6ZTogbm9uZTtcbn1cblxuI3Rhc2stdGl0bGU6OnBsYWNlaG9sZGVyLFxuI2Rlc2NyaXB0aW9uOjpwbGFjZWhvbGRlcixcbiN0YXNrLWVkaXQtdGl0bGU6OnBsYWNlaG9sZGVyLFxuI2VkaXQtZGVzY3JpcHRpb246OnBsYWNlaG9sZGVyIHtcbiAgICBjb2xvcjogI2RiZGJkYjtcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXG59XG5cbiN0YXNrLXRpdGxlOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4jZGVzY3JpcHRpb246Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbiN0YXNrLWVkaXQtdGl0bGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbiNlZGl0LWRlc2NyaXB0aW9uOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXG4gICAgY29sb3I6ICNkYmRiZGI7XG59XG5cbiN0YXNrLXRpdGxlOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXG4jZGVzY3JpcHRpb246Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbiN0YXNrLWVkaXQtdGl0bGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcbiNlZGl0LWRlc2NyaXB0aW9uOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xuICAgIC8qIE1pY3Jvc29mdCBFZGdlICovXG4gICAgY29sb3I6ICNkYmRiZGI7XG59XG5cbiN0YXNrLXRpdGxlOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3IsXG4jZGVzY3JpcHRpb246Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcixcbiN0YXNrLWVkaXQtdGl0bGU6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcixcbiNlZGl0LWRlc2NyaXB0aW9uOjotd2Via2l0LWNhbGVuZGFyLXBpY2tlci1pbmRpY2F0b3Ige1xuICAgIGZpbHRlcjogaW52ZXJ0KDEpO1xufVxuXG4udGFzay1mb3JtLWJ1dHRvbi1kaXYge1xuICAgIGRpc3BsYXk6IGZsZXg7XG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgZ2FwOiAxZW07XG59XG5cbi50YXNrLWZvcm0tYnV0dG9uIHtcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcbiAgICBib3JkZXI6IG5vbmU7XG4gICAgYm9yZGVyLXJhZGl1czogMnB4O1xuICAgIGhlaWdodDogMi42ZW07XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgY29sb3I6ICNkYmRiZGI7XG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG59XG5cbiNzdWJtaXQsXG4jc2lkZWJhci1zdWJtaXQsXG4jZWRpdC1zaWRlYmFyLXN1Ym1pdCxcbiNlZGl0LXN1Ym1pdCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFmOGQ0ZDtcbn1cblxuI3N1Ym1pdDpob3ZlcixcbiNzaWRlYmFyLXN1Ym1pdDpob3ZlcixcbiNlZGl0LXNpZGViYXItc3VibWl0OmhvdmVyLFxuI2VkaXQtc3VibWl0OmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjNzg0Mjtcbn1cblxuI2NhbmNlbCxcbiNzaWRlYmFyLWNhbmNlbCxcbiNlZGl0LXNpZGViYXItY2FuY2VsLFxuI2VkaXQtY2FuY2VsIHtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYmUwNDA0O1xufVxuXG4jY2FuY2VsOmhvdmVyLFxuI3NpZGViYXItY2FuY2VsOmhvdmVyLFxuI2VkaXQtc2lkZWJhci1jYW5jZWw6aG92ZXIsXG4jZWRpdC1jYW5jZWw6aG92ZXIge1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTUwNTA1O1xufVxuXG4jYWRkLXRhc2sge1xuICAgIGZvbnQtc2l6ZTogMWVtO1xufVxuXG4vKiBNYWluIENvbnRlbnQgKi9cblxubWFpbi1jb250ZW50IHtcbiAgICBwYWRkaW5nOiAwLjhlbSAxLjhlbSAwLjhlbSAxLjhlbTtcbn1cblxuI21haW4taGVhZGVyIHtcbiAgICBtYXJnaW4tYm90dG9tOiAxZW07XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzY0NztcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XG4gICAgcGFkZGluZzogMWVtO1xufVxuXG4udGFza0NhcmQge1xuICAgIGRpc3BsYXk6IGdyaWQ7XG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgMmZyIDFmciAxZnIgMWZyO1xuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcbiAgICBnYXA6IDJlbTtcbiAgICBwYWRkaW5nOiAxZW07XG4gICAgYm9yZGVyOiAjYjliY2JlIDJweCBzb2xpZDtcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xuICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICBoZWlnaHQ6IDIuNWVtO1xufVxuXG4udGFza0NhcmQgbGFiZWwge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYwO1xuICAgIGJvcmRlcjogMnB4IHNvbGlkICNjY2M7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICBoZWlnaHQ6IDM2cHg7XG4gICAgbGVmdDogMTVweDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxNXB4O1xuICAgIHdpZHRoOiAzNnB4O1xufVxuXG4udGFza0NhcmQgbGFiZWwuZGlzYWJsZWQtY2hlY2tib3gge1xuICAgIGN1cnNvcjogZGVmYXVsdDtcbn1cblxuLnRhc2tDYXJkIGxhYmVsOmFmdGVyIHtcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjZmZmO1xuICAgIGJvcmRlci10b3A6IG5vbmU7XG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xuICAgIGNvbnRlbnQ6ICcnO1xuICAgIGhlaWdodDogMTBweDtcbiAgICBsZWZ0OiA5cHg7XG4gICAgb3BhY2l0eTogMDtcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XG4gICAgdG9wOiAxMHB4O1xuICAgIHRyYW5zZm9ybTogcm90YXRlKC00NWRlZyk7XG4gICAgd2lkdGg6IDE3cHg7XG59XG5cbi50YXNrQ2FyZCBpbnB1dFt0eXBlPSdjaGVja2JveCddIHtcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XG59XG5cbi50YXNrQ2FyZCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbCB7XG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzViYWE1ZjtcbiAgICBib3JkZXItY29sb3I6ICM1YmFhNWY7XG59XG5cbi50YXNrQ2FyZCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbDphZnRlciB7XG4gICAgb3BhY2l0eTogMTtcbn1cblxuLnRhc2tDYXJkIHAsXG4udGFza0NhcmQgZGF0ZSB7XG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xufVxuXG4udGl0bGVDYXJkLFxuLmRhdGVDYXJkIHtcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XG59XG5cbi5kYXRlQ2FyZCB7XG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XG59XG5cbi50YXNrQ2FyZCBidXR0b24ge1xuICAgIGJvcmRlcjogbm9uZTtcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xuICAgIGp1c3RpZnktc2VsZjogY2VudGVyO1xufVxuXG4udGFza0NhcmQgYnV0dG9uOmhvdmVyIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIEZvb3RlciAqL1xuXG5mb290ZXIge1xuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM2NDc7XG4gICAgcGFkZGluZzogMC44ZW0gMWVtIDAuOGVtIDFlbTtcbn1cblxuI2dpdGh1Yi1saW5rIHtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgY29sb3I6IGJsYWNrO1xuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICBjb2xvcjogI2VhZWJlYztcbn1cblxuI2dpdGh1Yi1saW5rOmhvdmVyIHtcbiAgICBjb2xvcjogI2QyZDRkNTtcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG59XG5cbi8qIFN0eWxpbmcgZm9yIFBob25lICovXG5cbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xuICAgIG1haW4ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIH1cblxuICAgIC50YXNrQ2FyZCB7XG4gICAgICAgIGhlaWdodDogYXV0bztcbiAgICB9XG5cbiAgICAucm91bmQge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgIH1cbn1cbmAsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL21vZHVsZXMvc3R5bGUuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBOzs7Q0FHQzs7QUFFRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0lBaUZJLFNBQVM7SUFDVCxVQUFVO0lBQ1YsU0FBUztJQUNULGVBQWU7SUFDZixhQUFhO0lBQ2Isd0JBQXdCO0FBQzVCO0FBQ0EsZ0RBQWdEO0FBQ2hEOzs7Ozs7Ozs7OztJQVdJLGNBQWM7QUFDbEI7QUFDQTtJQUNJLGNBQWM7QUFDbEI7QUFDQTs7SUFFSSxnQkFBZ0I7QUFDcEI7QUFDQTs7SUFFSSxZQUFZO0FB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Wix5QkFBeUI7SUFDekIsbUJBQW1CO0lBQ25CLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLHNCQUFzQjtJQUN0QixrQkFBa0I7SUFDbEIsZUFBZTtJQUNmLFlBQVk7SUFDWixVQUFVO0lBQ1Ysa0JBQWtCO0lBQ2xCLFNBQVM7SUFDVCxXQUFXO0FBQ2Y7O0FBRUE7SUFDSSxlQUFlO0FBQ25COztBQUVBO0lBQ0ksc0JBQXNCO0lBQ3RCLGdCQUFnQjtJQUNoQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixTQUFTO0lBQ1QsVUFBVTtJQUNWLGtCQUFrQjtJQUNsQixTQUFTO0lBQ1QseUJBQXlCO0lBQ3pCLFdBQVc7QUFDZjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLHlCQUF5QjtJQUN6QixxQkFBcUI7QUFDekI7O0FBRUE7SUFDSSxVQUFVO0FBQ2Q7O0FBRUE7O0lBRUksa0JBQWtCO0FBQ3RCOztBQUVBOztJQUVJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLG9CQUFvQjtBQUN4Qjs7QUFFQTtJQUNJLFlBQVk7SUFDWixnQkFBZ0I7SUFDaEIsb0JBQW9CO0FBQ3hCOztBQUVBO0lBQ0ksZUFBZTtBQUNuQjs7QUFFQSxXQUFXOztBQUVYO0lBQ0kseUJBQXlCO0lBQ3pCLDRCQUE0QjtBQUNoQzs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1oscUJBQXFCO0lBQ3JCLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxjQUFjO0lBQ2QscUJBQXFCO0FBQ3pCOztBQUVBLHNCQUFzQjs7QUFFdEI7SUFDSTtRQUNJLGFBQWE7UUFDYixzQkFBc0I7SUFDMUI7O0lBRUE7UUFDSSxZQUFZO0lBQ2hCOztJQUVBO1FBQ0ksbUJBQW1CO0lBQ3ZCO0FBQ0pcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogaHR0cDovL21leWVyd2ViLmNvbS9lcmljL3Rvb2xzL2Nzcy9yZXNldC8gXFxuICAgIHYyLjAgfCAyMDExMDEyNlxcbiAgICBMaWNlbnNlOiBub25lIChwdWJsaWMgZG9tYWluKVxcbiovXFxuXFxuaHRtbCxcXG5ib2R5LFxcbmRpdixcXG5zcGFuLFxcbmFwcGxldCxcXG5vYmplY3QsXFxuaWZyYW1lLFxcbmgxLFxcbmgyLFxcbmgzLFxcbmg0LFxcbmg1LFxcbmg2LFxcbnAsXFxuYmxvY2txdW90ZSxcXG5wcmUsXFxuYSxcXG5hYmJyLFxcbmFjcm9ueW0sXFxuYWRkcmVzcyxcXG5iaWcsXFxuY2l0ZSxcXG5jb2RlLFxcbmRlbCxcXG5kZm4sXFxuZW0sXFxuaW1nLFxcbmlucyxcXG5rYmQsXFxucSxcXG5zLFxcbnNhbXAsXFxuc21hbGwsXFxuc3RyaWtlLFxcbnN0cm9uZyxcXG5zdWIsXFxuc3VwLFxcbnR0LFxcbnZhcixcXG5iLFxcbnUsXFxuaSxcXG5jZW50ZXIsXFxuZGwsXFxuZHQsXFxuZGQsXFxub2wsXFxudWwsXFxubGksXFxuZmllbGRzZXQsXFxuZm9ybSxcXG5sYWJlbCxcXG5sZWdlbmQsXFxudGFibGUsXFxuY2FwdGlvbixcXG50Ym9keSxcXG50Zm9vdCxcXG50aGVhZCxcXG50cixcXG50aCxcXG50ZCxcXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmNhbnZhcyxcXG5kZXRhaWxzLFxcbmVtYmVkLFxcbmZpZ3VyZSxcXG5maWdjYXB0aW9uLFxcbmZvb3RlcixcXG5oZWFkZXIsXFxuaGdyb3VwLFxcbm1lbnUsXFxubmF2LFxcbm91dHB1dCxcXG5ydWJ5LFxcbnNlY3Rpb24sXFxuc3VtbWFyeSxcXG50aW1lLFxcbm1hcmssXFxuYXVkaW8sXFxudmlkZW8ge1xcbiAgICBtYXJnaW46IDA7XFxuICAgIHBhZGRpbmc6IDA7XFxuICAgIGJvcmRlcjogMDtcXG4gICAgZm9udC1zaXplOiAxMDAlO1xcbiAgICBmb250OiBpbmhlcml0O1xcbiAgICB2ZXJ0aWNhbC1hbGlnbjogYmFzZWxpbmU7XFxufVxcbi8qIEhUTUw1IGRpc3BsYXktcm9sZSByZXNldCBmb3Igb2xkZXIgYnJvd3NlcnMgKi9cXG5hcnRpY2xlLFxcbmFzaWRlLFxcbmRldGFpbHMsXFxuZmlnY2FwdGlvbixcXG5maWd1cmUsXFxuZm9vdGVyLFxcbmhlYWRlcixcXG5oZ3JvdXAsXFxubWVudSxcXG5uYXYsXFxuc2VjdGlvbiB7XFxuICAgIGRpc3BsYXk6IGJsb2NrO1xcbn1cXG5ib2R5IHtcXG4gICAgbGluZS1oZWlnaHQ6IDE7XFxufVxcbm9sLFxcbnVsIHtcXG4gICAgbGlzdC1zdHlsZTogbm9uZTtcXG59XFxuYmxvY2txdW90ZSxcXG5xIHtcXG4gICAgcXVvdGVzOiBub25lO1xcbn1cXG5ibG9ja3F1b3RlOmJlZm9yZSxcXG5ibG9ja3F1b3RlOmFmdGVyLFxcbnE6YmVmb3JlLFxcbnE6YWZ0ZXIge1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgY29udGVudDogbm9uZTtcXG59XFxudGFibGUge1xcbiAgICBib3JkZXItY29sbGFwc2U6IGNvbGxhcHNlO1xcbiAgICBib3JkZXItc3BhY2luZzogMDtcXG59XFxuXFxuLyogUHJldmVudHMgRXJyb3IgRGlzcGxheSBvbiBCcm93c2VyIFNjcmVlbiAqL1xcblxcbi8qXFxuaWZyYW1lIHtcXG4gICAgZGlzcGxheTogbm9uZTtcXG59XFxuXFxuKi9cXG5cXG4vKiBDdXN0b20gRm9udCAqL1xcblxcbkBmb250LWZhY2Uge1xcbiAgICBmb250LWZhbWlseTogJ3JvYm90byc7XFxuICAgIHNyYzogdXJsKCcuLi9mb250cy9Sb2JvdG8vUm9ib3RvLVRoaW4udHRmJyk7XFxufVxcblxcbi8qIE92ZXJhbGwgU3R5bGluZyAqL1xcblxcbjpyb290IHtcXG4gICAgLS10ZXh0Q29sb3I6ICNlYWViZWM7XFxufVxcblxcbmJvZHkge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XFxuICAgIGFsaWduLWl0ZW1zOiBzdHJldGNoO1xcbiAgICBoZWlnaHQ6IDEwMHZoO1xcbiAgICB3aWR0aDogMTAwdnc7XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcXG59XFxuXFxuaGVhZGVyLFxcbmZvb3RlciB7XFxuICAgIGdyaWQtY29sdW1uLXN0YXJ0OiAxO1xcbiAgICBncmlkLWNvbHVtbi1lbmQ6IDM7XFxufVxcblxcbi5oaWRkZW4ge1xcbiAgICB0b3A6IDA7XFxuICAgIGxlZnQ6IDA7XFxuICAgIHBvaW50ZXItZXZlbnRzOiBub25lICFpbXBvcnRhbnQ7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xcbiAgICBtYXgtaGVpZ2h0OiAwICFpbXBvcnRhbnQ7XFxuICAgIHRyYW5zaXRpb246IG1heC1oZWlnaHQgMXMgZWFzZS1vdXQgIWltcG9ydGFudDtcXG4gICAgb3BhY2l0eTogMCAhaW1wb3J0YW50O1xcbn1cXG5cXG4vKiBIZWFkZXIgKi9cXG5cXG5oZWFkZXIge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xcbiAgICBwYWRkaW5nOiAwLjhlbSAwLjhlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzY0NztcXG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxufVxcblxcbi5oZWFkZXItY29udGFpbmVyIHtcXG4gICAgZm9udC1zaXplOiAyZW07XFxufVxcblxcbi5oZWFkZXItaW1nIHtcXG4gICAgaGVpZ2h0OiA0ZW07XFxuICAgIHdpZHRoOiA0ZW07XFxuICAgIG1hcmdpbi1yaWdodDogMWVtO1xcbn1cXG5cXG4vKiBTaWRlYmFyICovXFxuXFxuc2lkZWJhciB7XFxuICAgIHBhZGRpbmc6IDAuOGVtIDEuOGVtIDAuOGVtIDEuOGVtO1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICBnYXA6IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFiMmEzNztcXG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICAgIGJveC1zaGFkb3c6IGluc2V0IDAgOXB4IDlweCAtOXB4ICMyMzM2NDc7XFxufVxcblxcbi5zaWRlYmFyLWNvbnRhaW5lciB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxuICAgIGFsaWduLWl0ZW1zOiBmbGV4LXN0YXJ0O1xcbn1cXG5cXG5ociB7XFxuICAgIGJvcmRlci1jb2xvcjogIzlmYTBhMTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzlmYTBhMTtcXG4gICAgY29sb3I6ICM5ZmEwYTE7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBib3JkZXItdG9wOiAxcHg7XFxufVxcblxcbiNwcm9qZWN0IHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcXG59XFxuXFxuI3Byb2plY3QtY29udGVudCB7XFxuICAgIHdpZHRoOiAxMDAlO1xcbn1cXG5cXG4jcHJvamVjdC1mb3JtLFxcbiNlZGl0LXByb2plY3QtZm9ybSB7XFxuICAgIHBhZGRpbmc6IDAuNWVtO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxufVxcblxcbiNwcm9qZWN0LWZvcm06aG92ZXIsXFxuI2VkaXQtcHJvamVjdC1mb3JtOmhvdmVyIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzY0NztcXG59XFxuXFxuI3Byb2plY3QtaW5wdXQsXFxuI2VkaXQtcHJvamVjdC1pbnB1dCB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICB3aWR0aDogOTklO1xcbiAgICBoZWlnaHQ6IDEuNWVtO1xcbiAgICBhcHBlYXJhbmNlOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiBub25lO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCByZ2JhKDkwLCA5MCwgOTAsIDAuNDQzKTtcXG4gICAgY29sb3I6ICNlZmYwZjNhNjtcXG59XFxuXFxuI3Byb2plY3QtaW5wdXQ6Zm9jdXMsXFxuI2VkaXQtcHJvamVjdC1pbnB1dCB7XFxuICAgIG91dGxpbmU6IG5vbmU7XFxuICAgIGJvcmRlcjogMnB4IHNvbGlkICMzYWFiYjY7XFxufVxcblxcbiNwcm9qZWN0LWlucHV0OjotLXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlcixcXG4jZWRpdC1wcm9qZWN0LWlucHV0OjotLXdlYmtpdC1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiBibGFjaztcXG59XFxuXFxuI3NpZGViYXItZm9ybS1idXR0b24tY29udGFpbmVyLFxcbiNlZGl0LXNpZGViYXItZm9ybS1idXR0b24tY29udGFpbmVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGdhcDogMmVtO1xcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG59XFxuXFxuLnNpZGViYXItZm9ybS1idXR0b24ge1xcbiAgICBib3JkZXI6IG5vbmU7XFxuICAgIGJvcmRlci1yYWRpdXM6IDJweDtcXG4gICAgaGVpZ2h0OiAyZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogI2RiZGJkYjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbi5zaWRlYmFyLWJ1dHRvbixcXG4uc2lkZWJhci1wcm9qZWN0LWJ1dHRvbixcXG4jYWRkLXRhc2sge1xcbiAgICBwYWRkaW5nOiAwLjVlbTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcXG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICB0ZXh0LWFsaWduOiBzdGFydDtcXG4gICAgZGlzcGxheTogZ3JpZDtcXG4gICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiA0ZnIgMWZyIDFmcjtcXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXG59XFxuXFxuLnNpZGViYXItYnV0dG9uOmhvdmVyLFxcbi5zaWRlYmFyLXByb2plY3QtYnV0dG9uOmhvdmVyLFxcbiNhZGQtdGFzazpob3ZlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyZDQzNTY7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG59XFxuXFxuLnJlbW92ZS1wcm9qZWN0LWJ1dHRvbixcXG4uZWRpdC1wcm9qZWN0LWJ1dHRvbiB7XFxuICAgIGJhY2tncm91bmQ6IG5vbmU7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxuICAgIGZvbnQtZmFtaWx5OiByb2JvdG87XFxufVxcblxcbi5yZW1vdmUtcHJvamVjdC1idXR0b246aG92ZXIsXFxuLmVkaXQtcHJvamVjdC1idXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxuICAgIGNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNTI4KTtcXG59XFxuXFxuLyogTWFpbiAqL1xcblxcbm1haW4ge1xcbiAgICBkaXNwbGF5OiBncmlkO1xcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAzZnI7XFxuICAgIGZsZXgtZ3JvdzogMTtcXG4gICAgYm94LXNoYWRvdzogaW5zZXQgMCA5cHggOXB4IC05cHggIzIzMzY0NztcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzE5MjczNDtcXG4gICAgY29sb3I6IHZhcigtLXRleHRDb2xvcik7XFxufVxcblxcbiN0YXNrLWNvbnRlbnQge1xcbiAgICBkaXNwbGF5OiBmbGV4O1xcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbn1cXG5cXG4ub3ZlcmxheS5hY3RpdmUge1xcbiAgICBkaXNwbGF5OiBibG9jaztcXG59XFxuXFxuLm92ZXJsYXkge1xcbiAgICBwb3NpdGlvbjogZml4ZWQ7XFxuICAgIHRvcDogMDtcXG4gICAgbGVmdDogMDtcXG4gICAgZGlzcGxheTogbm9uZTtcXG4gICAgd2lkdGg6IDEwMCU7XFxuICAgIGhlaWdodDogMTAwJTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjUpO1xcbn1cXG5cXG4uZm9ybS1wb3B1cCB7XFxuICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgbGVmdDogNTAlO1xcbiAgICB0b3A6IDUwJTtcXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGUoLTUwJSwgLTUwJSk7XFxuICAgIHotaW5kZXg6IDk7XFxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XFxufVxcblxcbiNmb3JtLWNvbnRhaW5lcixcXG4uZm9ybS1lZGl0LWNvbnRhaW5lciB7XFxuICAgIG1heC13aWR0aDogMjgwcHg7XFxuICAgIHBhZGRpbmc6IDIwcHg7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxOTI3MzQ7XFxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XFxuICAgIGZvbnQtZmFtaWx5OiAncm9ib3RvJztcXG59XFxuXFxuI2Zvcm0taGVhZGVyLFxcbiNmb3JtLWVkaXQtaGVhZGVyIHtcXG4gICAgZGlzcGxheTogZmxleDtcXG4gICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIG1hcmdpbi1ib3R0b206IDAuNWVtO1xcbiAgICBmb250LXNpemU6IDJlbTtcXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xcbn1cXG5cXG4jZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT0ndGV4dCddLFxcbiNmb3JtLWNvbnRhaW5lciB0ZXh0YXJlYSxcXG4jZm9ybS1jb250YWluZXIgaW5wdXRbdHlwZT0nZGF0ZSddLFxcbi5mb3JtLWVkaXQtY29udGFpbmVyIGlucHV0W3R5cGU9J3RleHQnXSxcXG4uZm9ybS1lZGl0LWNvbnRhaW5lciB0ZXh0YXJlYSxcXG4uZm9ybS1lZGl0LWNvbnRhaW5lciBpbnB1dFt0eXBlPSdkYXRlJ10ge1xcbiAgICB3aWR0aDogMTguNWVtO1xcbiAgICBwYWRkaW5nOiAxNXB4O1xcbiAgICBtYXJnaW46IDVweCAwIDIwcHggMDtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBiYWNrZ3JvdW5kOiAjMjMzNjQ3O1xcbiAgICBib3JkZXItcmFkaXVzOiAxMHB4O1xcbiAgICBmb250LWZhbWlseTogcm9ib3RvO1xcbiAgICBjb2xvcjogI2RiZGJkYjtcXG59XFxuXFxuI2Zvcm0tY29udGFpbmVyIHRleHRhcmVhLFxcbi5mb3JtLWVkaXQtY29udGFpbmVyIHRleHRhcmVhIHtcXG4gICAgaGVpZ2h0OiA5MXB4O1xcbiAgICByZXNpemU6IG5vbmU7XFxufVxcblxcbiN0YXNrLXRpdGxlOjpwbGFjZWhvbGRlcixcXG4jZGVzY3JpcHRpb246OnBsYWNlaG9sZGVyLFxcbiN0YXNrLWVkaXQtdGl0bGU6OnBsYWNlaG9sZGVyLFxcbiNlZGl0LWRlc2NyaXB0aW9uOjpwbGFjZWhvbGRlciB7XFxuICAgIGNvbG9yOiAjZGJkYmRiO1xcbiAgICBvcGFjaXR5OiAxOyAvKiBGaXJlZm94ICovXFxufVxcblxcbiN0YXNrLXRpdGxlOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuI2Rlc2NyaXB0aW9uOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuI3Rhc2stZWRpdC10aXRsZTo6LW1zLWlucHV0LXBsYWNlaG9sZGVyLFxcbiNlZGl0LWRlc2NyaXB0aW9uOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIge1xcbiAgICAvKiBJbnRlcm5ldCBFeHBsb3JlciAxMC0xMSAqL1xcbiAgICBjb2xvcjogI2RiZGJkYjtcXG59XFxuXFxuI3Rhc2stdGl0bGU6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcXG4jZGVzY3JpcHRpb246Oi1tcy1pbnB1dC1wbGFjZWhvbGRlcixcXG4jdGFzay1lZGl0LXRpdGxlOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIsXFxuI2VkaXQtZGVzY3JpcHRpb246Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7XFxuICAgIC8qIE1pY3Jvc29mdCBFZGdlICovXFxuICAgIGNvbG9yOiAjZGJkYmRiO1xcbn1cXG5cXG4jdGFzay10aXRsZTo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yLFxcbiNkZXNjcmlwdGlvbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yLFxcbiN0YXNrLWVkaXQtdGl0bGU6Oi13ZWJraXQtY2FsZW5kYXItcGlja2VyLWluZGljYXRvcixcXG4jZWRpdC1kZXNjcmlwdGlvbjo6LXdlYmtpdC1jYWxlbmRhci1waWNrZXItaW5kaWNhdG9yIHtcXG4gICAgZmlsdGVyOiBpbnZlcnQoMSk7XFxufVxcblxcbi50YXNrLWZvcm0tYnV0dG9uLWRpdiB7XFxuICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcbiAgICBnYXA6IDFlbTtcXG59XFxuXFxuLnRhc2stZm9ybS1idXR0b24ge1xcbiAgICBtYXJnaW4tdG9wOiAwLjVlbTtcXG4gICAgYm9yZGVyOiBub25lO1xcbiAgICBib3JkZXItcmFkaXVzOiAycHg7XFxuICAgIGhlaWdodDogMi42ZW07XFxuICAgIHdpZHRoOiAxMDAlO1xcbiAgICBjb2xvcjogI2RiZGJkYjtcXG4gICAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxufVxcblxcbiNzdWJtaXQsXFxuI3NpZGViYXItc3VibWl0LFxcbiNlZGl0LXNpZGViYXItc3VibWl0LFxcbiNlZGl0LXN1Ym1pdCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMxZjhkNGQ7XFxufVxcblxcbiNzdWJtaXQ6aG92ZXIsXFxuI3NpZGViYXItc3VibWl0OmhvdmVyLFxcbiNlZGl0LXNpZGViYXItc3VibWl0OmhvdmVyLFxcbiNlZGl0LXN1Ym1pdDpob3ZlciB7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzFjNzg0MjtcXG59XFxuXFxuI2NhbmNlbCxcXG4jc2lkZWJhci1jYW5jZWwsXFxuI2VkaXQtc2lkZWJhci1jYW5jZWwsXFxuI2VkaXQtY2FuY2VsIHtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogI2JlMDQwNDtcXG59XFxuXFxuI2NhbmNlbDpob3ZlcixcXG4jc2lkZWJhci1jYW5jZWw6aG92ZXIsXFxuI2VkaXQtc2lkZWJhci1jYW5jZWw6aG92ZXIsXFxuI2VkaXQtY2FuY2VsOmhvdmVyIHtcXG4gICAgY3Vyc29yOiBwb2ludGVyO1xcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjYTUwNTA1O1xcbn1cXG5cXG4jYWRkLXRhc2sge1xcbiAgICBmb250LXNpemU6IDFlbTtcXG59XFxuXFxuLyogTWFpbiBDb250ZW50ICovXFxuXFxubWFpbi1jb250ZW50IHtcXG4gICAgcGFkZGluZzogMC44ZW0gMS44ZW0gMC44ZW0gMS44ZW07XFxufVxcblxcbiNtYWluLWhlYWRlciB7XFxuICAgIG1hcmdpbi1ib3R0b206IDFlbTtcXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzIzMzY0NztcXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xcbiAgICBwYWRkaW5nOiAxZW07XFxufVxcblxcbi50YXNrQ2FyZCB7XFxuICAgIGRpc3BsYXk6IGdyaWQ7XFxuICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogMWZyIDJmciAxZnIgMWZyIDFmcjtcXG4gICAgbWFyZ2luLWJvdHRvbTogMWVtO1xcbiAgICBnYXA6IDJlbTtcXG4gICAgcGFkZGluZzogMWVtO1xcbiAgICBib3JkZXI6ICNiOWJjYmUgMnB4IHNvbGlkO1xcbiAgICBib3JkZXItcmFkaXVzOiAxMnB4O1xcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XFxuICAgIGhlaWdodDogMi41ZW07XFxufVxcblxcbi50YXNrQ2FyZCBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICNmZmYwO1xcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjY2NjO1xcbiAgICBib3JkZXItcmFkaXVzOiA1MCU7XFxuICAgIGN1cnNvcjogcG9pbnRlcjtcXG4gICAgaGVpZ2h0OiAzNnB4O1xcbiAgICBsZWZ0OiAxNXB4O1xcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XFxuICAgIHRvcDogMTVweDtcXG4gICAgd2lkdGg6IDM2cHg7XFxufVxcblxcbi50YXNrQ2FyZCBsYWJlbC5kaXNhYmxlZC1jaGVja2JveCB7XFxuICAgIGN1cnNvcjogZGVmYXVsdDtcXG59XFxuXFxuLnRhc2tDYXJkIGxhYmVsOmFmdGVyIHtcXG4gICAgYm9yZGVyOiAycHggc29saWQgI2ZmZjtcXG4gICAgYm9yZGVyLXRvcDogbm9uZTtcXG4gICAgYm9yZGVyLXJpZ2h0OiBub25lO1xcbiAgICBjb250ZW50OiAnJztcXG4gICAgaGVpZ2h0OiAxMHB4O1xcbiAgICBsZWZ0OiA5cHg7XFxuICAgIG9wYWNpdHk6IDA7XFxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXG4gICAgdG9wOiAxMHB4O1xcbiAgICB0cmFuc2Zvcm06IHJvdGF0ZSgtNDVkZWcpO1xcbiAgICB3aWR0aDogMTdweDtcXG59XFxuXFxuLnRhc2tDYXJkIGlucHV0W3R5cGU9J2NoZWNrYm94J10ge1xcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxufVxcblxcbi50YXNrQ2FyZCBpbnB1dFt0eXBlPSdjaGVja2JveCddOmNoZWNrZWQgKyBsYWJlbCB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICM1YmFhNWY7XFxuICAgIGJvcmRlci1jb2xvcjogIzViYWE1ZjtcXG59XFxuXFxuLnRhc2tDYXJkIGlucHV0W3R5cGU9J2NoZWNrYm94J106Y2hlY2tlZCArIGxhYmVsOmFmdGVyIHtcXG4gICAgb3BhY2l0eTogMTtcXG59XFxuXFxuLnRhc2tDYXJkIHAsXFxuLnRhc2tDYXJkIGRhdGUge1xcbiAgICBhbGlnbi1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50aXRsZUNhcmQsXFxuLmRhdGVDYXJkIHtcXG4gICAgYWxpZ24tc2VsZjogY2VudGVyO1xcbn1cXG5cXG4uZGF0ZUNhcmQge1xcbiAgICBqdXN0aWZ5LXNlbGY6IGNlbnRlcjtcXG59XFxuXFxuLnRhc2tDYXJkIGJ1dHRvbiB7XFxuICAgIGJvcmRlcjogbm9uZTtcXG4gICAgYmFja2dyb3VuZDogbm9uZTtcXG4gICAganVzdGlmeS1zZWxmOiBjZW50ZXI7XFxufVxcblxcbi50YXNrQ2FyZCBidXR0b246aG92ZXIge1xcbiAgICBjdXJzb3I6IHBvaW50ZXI7XFxufVxcblxcbi8qIEZvb3RlciAqL1xcblxcbmZvb3RlciB7XFxuICAgIGJhY2tncm91bmQtY29sb3I6ICMyMzM2NDc7XFxuICAgIHBhZGRpbmc6IDAuOGVtIDFlbSAwLjhlbSAxZW07XFxufVxcblxcbiNnaXRodWItbGluayB7XFxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcXG4gICAgY29sb3I6IGJsYWNrO1xcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxuICAgIGNvbG9yOiAjZWFlYmVjO1xcbn1cXG5cXG4jZ2l0aHViLWxpbms6aG92ZXIge1xcbiAgICBjb2xvcjogI2QyZDRkNTtcXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcbn1cXG5cXG4vKiBTdHlsaW5nIGZvciBQaG9uZSAqL1xcblxcbkBtZWRpYSAobWF4LXdpZHRoOiA1NDBweCkge1xcbiAgICBtYWluIHtcXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XFxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xcbiAgICB9XFxuXFxuICAgIC50YXNrQ2FyZCB7XFxuICAgICAgICBoZWlnaHQ6IGF1dG87XFxuICAgIH1cXG5cXG4gICAgLnJvdW5kIHtcXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxuICAgIH1cXG59XFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIlwidXNlIHN0cmljdFwiO1xuXG4vKlxuICBNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuICBBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoY3NzV2l0aE1hcHBpbmdUb1N0cmluZykge1xuICB2YXIgbGlzdCA9IFtdO1xuXG4gIC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcbiAgbGlzdC50b1N0cmluZyA9IGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiB0aGlzLm1hcChmdW5jdGlvbiAoaXRlbSkge1xuICAgICAgdmFyIGNvbnRlbnQgPSBcIlwiO1xuICAgICAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBpdGVtWzVdICE9PSBcInVuZGVmaW5lZFwiO1xuICAgICAgaWYgKGl0ZW1bNF0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cbiAgICAgIGlmIChuZWVkTGF5ZXIpIHtcbiAgICAgICAgY29udGVudCArPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpO1xuICAgICAgfVxuICAgICAgY29udGVudCArPSBjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKGl0ZW0pO1xuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIn1cIjtcbiAgICAgIH1cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJ9XCI7XG4gICAgICB9XG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9O1xuXG4gIC8vIGltcG9ydCBhIGxpc3Qgb2YgbW9kdWxlcyBpbnRvIHRoZSBsaXN0XG4gIGxpc3QuaSA9IGZ1bmN0aW9uIGkobW9kdWxlcywgbWVkaWEsIGRlZHVwZSwgc3VwcG9ydHMsIGxheWVyKSB7XG4gICAgaWYgKHR5cGVvZiBtb2R1bGVzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICBtb2R1bGVzID0gW1tudWxsLCBtb2R1bGVzLCB1bmRlZmluZWRdXTtcbiAgICB9XG4gICAgdmFyIGFscmVhZHlJbXBvcnRlZE1vZHVsZXMgPSB7fTtcbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcbiAgICAgICAgaWYgKGlkICE9IG51bGwpIHtcbiAgICAgICAgICBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzW2lkXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gICAgZm9yICh2YXIgX2sgPSAwOyBfayA8IG1vZHVsZXMubGVuZ3RoOyBfaysrKSB7XG4gICAgICB2YXIgaXRlbSA9IFtdLmNvbmNhdChtb2R1bGVzW19rXSk7XG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIGxheWVyICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgIGlmICh0eXBlb2YgaXRlbVs1XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbGF5ZXJcIi5jb25jYXQoaXRlbVs1XS5sZW5ndGggPiAwID8gXCIgXCIuY29uY2F0KGl0ZW1bNV0pIDogXCJcIiwgXCIge1wiKS5jb25jYXQoaXRlbVsxXSwgXCJ9XCIpO1xuICAgICAgICAgIGl0ZW1bNV0gPSBsYXllcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1lZGlhKSB7XG4gICAgICAgIGlmICghaXRlbVsyXSkge1xuICAgICAgICAgIGl0ZW1bMl0gPSBtZWRpYTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpdGVtWzFdID0gXCJAbWVkaWEgXCIuY29uY2F0KGl0ZW1bMl0sIFwiIHtcIikuY29uY2F0KGl0ZW1bMV0sIFwifVwiKTtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBsaXN0LnB1c2goaXRlbSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbGlzdDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVybCwgb3B0aW9ucykge1xuICBpZiAoIW9wdGlvbnMpIHtcbiAgICBvcHRpb25zID0ge307XG4gIH1cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG4gIHVybCA9IFN0cmluZyh1cmwuX19lc01vZHVsZSA/IHVybC5kZWZhdWx0IDogdXJsKTtcblxuICAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cbiAgaWYgKC9eWydcIl0uKlsnXCJdJC8udGVzdCh1cmwpKSB7XG4gICAgdXJsID0gdXJsLnNsaWNlKDEsIC0xKTtcbiAgfVxuICBpZiAob3B0aW9ucy5oYXNoKSB7XG4gICAgdXJsICs9IG9wdGlvbnMuaGFzaDtcbiAgfVxuXG4gIC8vIFNob3VsZCB1cmwgYmUgd3JhcHBlZD9cbiAgLy8gU2VlIGh0dHBzOi8vZHJhZnRzLmNzc3dnLm9yZy9jc3MtdmFsdWVzLTMvI3VybHNcbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG4gIHJldHVybiB1cmw7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpdGVtKSB7XG4gIHZhciBjb250ZW50ID0gaXRlbVsxXTtcbiAgdmFyIGNzc01hcHBpbmcgPSBpdGVtWzNdO1xuICBpZiAoIWNzc01hcHBpbmcpIHtcbiAgICByZXR1cm4gY29udGVudDtcbiAgfVxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgcmV0dXJuIFtjb250ZW50XS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG4gIHJldHVybiBbY29udGVudF0uam9pbihcIlxcblwiKTtcbn07IiwidmFyIGRlZmF1bHRPcHRpb25zID0ge307XG5leHBvcnQgZnVuY3Rpb24gZ2V0RGVmYXVsdE9wdGlvbnMoKSB7XG4gIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXREZWZhdWx0T3B0aW9ucyhuZXdPcHRpb25zKSB7XG4gIGRlZmF1bHRPcHRpb25zID0gbmV3T3B0aW9ucztcbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiByZXF1aXJlZEFyZ3MocmVxdWlyZWQsIGFyZ3MpIHtcbiAgaWYgKGFyZ3MubGVuZ3RoIDwgcmVxdWlyZWQpIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKHJlcXVpcmVkICsgJyBhcmd1bWVudCcgKyAocmVxdWlyZWQgPiAxID8gJ3MnIDogJycpICsgJyByZXF1aXJlZCwgYnV0IG9ubHkgJyArIGFyZ3MubGVuZ3RoICsgJyBwcmVzZW50Jyk7XG4gIH1cbn0iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiB0b0ludGVnZXIoZGlydHlOdW1iZXIpIHtcbiAgaWYgKGRpcnR5TnVtYmVyID09PSBudWxsIHx8IGRpcnR5TnVtYmVyID09PSB0cnVlIHx8IGRpcnR5TnVtYmVyID09PSBmYWxzZSkge1xuICAgIHJldHVybiBOYU47XG4gIH1cbiAgdmFyIG51bWJlciA9IE51bWJlcihkaXJ0eU51bWJlcik7XG4gIGlmIChpc05hTihudW1iZXIpKSB7XG4gICAgcmV0dXJuIG51bWJlcjtcbiAgfVxuICByZXR1cm4gbnVtYmVyIDwgMCA/IE1hdGguY2VpbChudW1iZXIpIDogTWF0aC5mbG9vcihudW1iZXIpO1xufSIsImltcG9ydCB0b0ludGVnZXIgZnJvbSBcIi4uL19saWIvdG9JbnRlZ2VyL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9EYXRlIGZyb20gXCIuLi90b0RhdGUvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGFkZERheXNcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQWRkIHRoZSBzcGVjaWZpZWQgbnVtYmVyIG9mIGRheXMgdG8gdGhlIGdpdmVuIGRhdGUuXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBZGQgdGhlIHNwZWNpZmllZCBudW1iZXIgb2YgZGF5cyB0byB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gYmUgY2hhbmdlZFxuICogQHBhcmFtIHtOdW1iZXJ9IGFtb3VudCAtIHRoZSBhbW91bnQgb2YgZGF5cyB0byBiZSBhZGRlZC4gUG9zaXRpdmUgZGVjaW1hbHMgd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmZsb29yYCwgZGVjaW1hbHMgbGVzcyB0aGFuIHplcm8gd2lsbCBiZSByb3VuZGVkIHVzaW5nIGBNYXRoLmNlaWxgLlxuICogQHJldHVybnMge0RhdGV9IC0gdGhlIG5ldyBkYXRlIHdpdGggdGhlIGRheXMgYWRkZWRcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gLSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBZGQgMTAgZGF5cyB0byAxIFNlcHRlbWJlciAyMDE0OlxuICogY29uc3QgcmVzdWx0ID0gYWRkRGF5cyhuZXcgRGF0ZSgyMDE0LCA4LCAxKSwgMTApXG4gKiAvLz0+IFRodSBTZXAgMTEgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBhZGREYXlzKGRpcnR5RGF0ZSwgZGlydHlBbW91bnQpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBhbW91bnQgPSB0b0ludGVnZXIoZGlydHlBbW91bnQpO1xuICBpZiAoaXNOYU4oYW1vdW50KSkge1xuICAgIHJldHVybiBuZXcgRGF0ZShOYU4pO1xuICB9XG4gIGlmICghYW1vdW50KSB7XG4gICAgLy8gSWYgMCBkYXlzLCBuby1vcCB0byBhdm9pZCBjaGFuZ2luZyB0aW1lcyBpbiB0aGUgaG91ciBiZWZvcmUgZW5kIG9mIERTVFxuICAgIHJldHVybiBkYXRlO1xuICB9XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSArIGFtb3VudCk7XG4gIHJldHVybiBkYXRlO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgY29tcGFyZUFzY1xuICogQGNhdGVnb3J5IENvbW1vbiBIZWxwZXJzXG4gKiBAc3VtbWFyeSBDb21wYXJlIHRoZSB0d28gZGF0ZXMgYW5kIHJldHVybiAtMSwgMCBvciAxLlxuICpcbiAqIEBkZXNjcmlwdGlvblxuICogQ29tcGFyZSB0aGUgdHdvIGRhdGVzIGFuZCByZXR1cm4gMSBpZiB0aGUgZmlyc3QgZGF0ZSBpcyBhZnRlciB0aGUgc2Vjb25kLFxuICogLTEgaWYgdGhlIGZpcnN0IGRhdGUgaXMgYmVmb3JlIHRoZSBzZWNvbmQgb3IgMCBpZiBkYXRlcyBhcmUgZXF1YWwuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZUxlZnQgLSB0aGUgZmlyc3QgZGF0ZSB0byBjb21wYXJlXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY29tcGFyZVxuICogQHJldHVybnMge051bWJlcn0gdGhlIHJlc3VsdCBvZiB0aGUgY29tcGFyaXNvblxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBDb21wYXJlIDExIEZlYnJ1YXJ5IDE5ODcgYW5kIDEwIEp1bHkgMTk4OTpcbiAqIGNvbnN0IHJlc3VsdCA9IGNvbXBhcmVBc2MobmV3IERhdGUoMTk4NywgMSwgMTEpLCBuZXcgRGF0ZSgxOTg5LCA2LCAxMCkpXG4gKiAvLz0+IC0xXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIFNvcnQgdGhlIGFycmF5IG9mIGRhdGVzOlxuICogY29uc3QgcmVzdWx0ID0gW1xuICogICBuZXcgRGF0ZSgxOTk1LCA2LCAyKSxcbiAqICAgbmV3IERhdGUoMTk4NywgMSwgMTEpLFxuICogICBuZXcgRGF0ZSgxOTg5LCA2LCAxMClcbiAqIF0uc29ydChjb21wYXJlQXNjKVxuICogLy89PiBbXG4gKiAvLyAgIFdlZCBGZWIgMTEgMTk4NyAwMDowMDowMCxcbiAqIC8vICAgTW9uIEp1bCAxMCAxOTg5IDAwOjAwOjAwLFxuICogLy8gICBTdW4gSnVsIDAyIDE5OTUgMDA6MDA6MDBcbiAqIC8vIF1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gY29tcGFyZUFzYyhkaXJ0eURhdGVMZWZ0LCBkaXJ0eURhdGVSaWdodCkge1xuICByZXF1aXJlZEFyZ3MoMiwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGVMZWZ0ID0gdG9EYXRlKGRpcnR5RGF0ZUxlZnQpO1xuICB2YXIgZGF0ZVJpZ2h0ID0gdG9EYXRlKGRpcnR5RGF0ZVJpZ2h0KTtcbiAgdmFyIGRpZmYgPSBkYXRlTGVmdC5nZXRUaW1lKCkgLSBkYXRlUmlnaHQuZ2V0VGltZSgpO1xuICBpZiAoZGlmZiA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoZGlmZiA+IDApIHtcbiAgICByZXR1cm4gMTtcbiAgICAvLyBSZXR1cm4gMCBpZiBkaWZmIGlzIDA7IHJldHVybiBOYU4gaWYgZGlmZiBpcyBOYU5cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZGlmZjtcbiAgfVxufSIsImltcG9ydCBzdGFydE9mRGF5IGZyb20gXCIuLi9zdGFydE9mRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1NhbWVEYXlcbiAqIEBjYXRlZ29yeSBEYXkgSGVscGVyc1xuICogQHN1bW1hcnkgQXJlIHRoZSBnaXZlbiBkYXRlcyBpbiB0aGUgc2FtZSBkYXkgKGFuZCB5ZWFyIGFuZCBtb250aCk/XG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBBcmUgdGhlIGdpdmVuIGRhdGVzIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZXMgYXJlIGluIHRoZSBzYW1lIGRheSAoYW5kIHllYXIgYW5kIG1vbnRoKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgNCBTZXB0ZW1iZXIgMDY6MDA6MDAgYW5kIDQgU2VwdGVtYmVyIDE4OjAwOjAwIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0LCA2LCAwKSwgbmV3IERhdGUoMjAxNCwgOCwgNCwgMTgsIDApKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciBhbmQgNCBPY3RvYmVyIGluIHRoZSBzYW1lIGRheT9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZURheShuZXcgRGF0ZSgyMDE0LCA4LCA0KSwgbmV3IERhdGUoMjAxNCwgOSwgNCkpXG4gKiAvLz0+IGZhbHNlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIEFyZSA0IFNlcHRlbWJlciwgMjAxNCBhbmQgNCBTZXB0ZW1iZXIsIDIwMTUgaW4gdGhlIHNhbWUgZGF5P1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDQpLCBuZXcgRGF0ZSgyMDE1LCA4LCA0KSlcbiAqIC8vPT4gZmFsc2VcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNTYW1lRGF5KGRpcnR5RGF0ZUxlZnQsIGRpcnR5RGF0ZVJpZ2h0KSB7XG4gIHJlcXVpcmVkQXJncygyLCBhcmd1bWVudHMpO1xuICB2YXIgZGF0ZUxlZnRTdGFydE9mRGF5ID0gc3RhcnRPZkRheShkaXJ0eURhdGVMZWZ0KTtcbiAgdmFyIGRhdGVSaWdodFN0YXJ0T2ZEYXkgPSBzdGFydE9mRGF5KGRpcnR5RGF0ZVJpZ2h0KTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZkRheS5nZXRUaW1lKCkgPT09IGRhdGVSaWdodFN0YXJ0T2ZEYXkuZ2V0VGltZSgpO1xufSIsImltcG9ydCBzdGFydE9mV2VlayBmcm9tIFwiLi4vc3RhcnRPZldlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzU2FtZVdlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIEFyZSB0aGUgZ2l2ZW4gZGF0ZXMgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKT9cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlTGVmdCAtIHRoZSBmaXJzdCBkYXRlIHRvIGNoZWNrXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlUmlnaHQgLSB0aGUgc2Vjb25kIGRhdGUgdG8gY2hlY2tcbiAqIEBwYXJhbSB7T2JqZWN0fSBbb3B0aW9uc10gLSBhbiBvYmplY3Qgd2l0aCBvcHRpb25zLlxuICogQHBhcmFtIHtMb2NhbGV9IFtvcHRpb25zLmxvY2FsZT1kZWZhdWx0TG9jYWxlXSAtIHRoZSBsb2NhbGUgb2JqZWN0LiBTZWUgW0xvY2FsZV17QGxpbmsgaHR0cHM6Ly9kYXRlLWZucy5vcmcvZG9jcy9Mb2NhbGV9XG4gKiBAcGFyYW0gezB8MXwyfDN8NHw1fDZ9IFtvcHRpb25zLndlZWtTdGFydHNPbj0wXSAtIHRoZSBpbmRleCBvZiB0aGUgZmlyc3QgZGF5IG9mIHRoZSB3ZWVrICgwIC0gU3VuZGF5KVxuICogQHJldHVybnMge0Jvb2xlYW59IHRoZSBkYXRlcyBhcmUgaW4gdGhlIHNhbWUgd2VlayAoYW5kIG1vbnRoIGFuZCB5ZWFyKVxuICogQHRocm93cyB7VHlwZUVycm9yfSAyIGFyZ3VtZW50cyByZXF1aXJlZFxuICogQHRocm93cyB7UmFuZ2VFcnJvcn0gYG9wdGlvbnMud2Vla1N0YXJ0c09uYCBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNlxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBBcmUgMzEgQXVndXN0IDIwMTQgYW5kIDQgU2VwdGVtYmVyIDIwMTQgaW4gdGhlIHNhbWUgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzU2FtZVdlZWsobmV3IERhdGUoMjAxNCwgNywgMzEpLCBuZXcgRGF0ZSgyMDE0LCA4LCA0KSlcbiAqIC8vPT4gdHJ1ZVxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheSxcbiAqIC8vIGFyZSAzMSBBdWd1c3QgMjAxNCBhbmQgNCBTZXB0ZW1iZXIgMjAxNCBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCA3LCAzMSksIG5ldyBEYXRlKDIwMTQsIDgsIDQpLCB7XG4gKiAgIHdlZWtTdGFydHNPbjogMVxuICogfSlcbiAqIC8vPT4gZmFsc2VcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQXJlIDEgSmFudWFyeSAyMDE0IGFuZCAxIEphbnVhcnkgMjAxNSBpbiB0aGUgc2FtZSB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNTYW1lV2VlayhuZXcgRGF0ZSgyMDE0LCAwLCAxKSwgbmV3IERhdGUoMjAxNSwgMCwgMSkpXG4gKiAvLz0+IGZhbHNlXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGlzU2FtZVdlZWsoZGlydHlEYXRlTGVmdCwgZGlydHlEYXRlUmlnaHQsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDIsIGFyZ3VtZW50cyk7XG4gIHZhciBkYXRlTGVmdFN0YXJ0T2ZXZWVrID0gc3RhcnRPZldlZWsoZGlydHlEYXRlTGVmdCwgb3B0aW9ucyk7XG4gIHZhciBkYXRlUmlnaHRTdGFydE9mV2VlayA9IHN0YXJ0T2ZXZWVrKGRpcnR5RGF0ZVJpZ2h0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGRhdGVMZWZ0U3RhcnRPZldlZWsuZ2V0VGltZSgpID09PSBkYXRlUmlnaHRTdGFydE9mV2Vlay5nZXRUaW1lKCk7XG59IiwiaW1wb3J0IGlzU2FtZVdlZWsgZnJvbSBcIi4uL2lzU2FtZVdlZWsvaW5kZXguanNcIjtcbmltcG9ydCByZXF1aXJlZEFyZ3MgZnJvbSBcIi4uL19saWIvcmVxdWlyZWRBcmdzL2luZGV4LmpzXCI7XG4vKipcbiAqIEBuYW1lIGlzVGhpc1dlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIGluIHRoZSBzYW1lIHdlZWsgYXMgdGhlIGN1cnJlbnQgZGF0ZT9cbiAqIEBwdXJlIGZhbHNlXG4gKlxuICogQGRlc2NyaXB0aW9uXG4gKiBJcyB0aGUgZ2l2ZW4gZGF0ZSBpbiB0aGUgc2FtZSB3ZWVrIGFzIHRoZSBjdXJyZW50IGRhdGU/XG4gKlxuICogPiDimqDvuI8gUGxlYXNlIG5vdGUgdGhhdCB0aGlzIGZ1bmN0aW9uIGlzIG5vdCBwcmVzZW50IGluIHRoZSBGUCBzdWJtb2R1bGUgYXNcbiAqID4gaXQgdXNlcyBgRGF0ZS5ub3coKWAgaW50ZXJuYWxseSBoZW5jZSBpbXB1cmUgYW5kIGNhbid0IGJlIHNhZmVseSBjdXJyaWVkLlxuICpcbiAqIEBwYXJhbSB7RGF0ZXxOdW1iZXJ9IGRhdGUgLSB0aGUgZGF0ZSB0byBjaGVja1xuICogQHBhcmFtIHtPYmplY3R9IFtvcHRpb25zXSAtIHRoZSBvYmplY3Qgd2l0aCBvcHRpb25zXG4gKiBAcGFyYW0ge0xvY2FsZX0gW29wdGlvbnMubG9jYWxlPWRlZmF1bHRMb2NhbGVdIC0gdGhlIGxvY2FsZSBvYmplY3QuIFNlZSBbTG9jYWxlXXtAbGluayBodHRwczovL2RhdGUtZm5zLm9yZy9kb2NzL0xvY2FsZX1cbiAqIEBwYXJhbSB7MHwxfDJ8M3w0fDV8Nn0gW29wdGlvbnMud2Vla1N0YXJ0c09uPTBdIC0gdGhlIGluZGV4IG9mIHRoZSBmaXJzdCBkYXkgb2YgdGhlIHdlZWsgKDAgLSBTdW5kYXkpXG4gKiBAcmV0dXJucyB7Qm9vbGVhbn0gdGhlIGRhdGUgaXMgaW4gdGhpcyB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gSWYgdG9kYXkgaXMgMjUgU2VwdGVtYmVyIDIwMTQsIGlzIDIxIFNlcHRlbWJlciAyMDE0IGluIHRoaXMgd2Vlaz9cbiAqIGNvbnN0IHJlc3VsdCA9IGlzVGhpc1dlZWsobmV3IERhdGUoMjAxNCwgOCwgMjEpKVxuICogLy89PiB0cnVlXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDI1IFNlcHRlbWJlciAyMDE0IGFuZCB3ZWVrIHN0YXJ0cyB3aXRoIE1vbmRheVxuICogLy8gaXMgMjEgU2VwdGVtYmVyIDIwMTQgaW4gdGhpcyB3ZWVrP1xuICogY29uc3QgcmVzdWx0ID0gaXNUaGlzV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyMSksIHsgd2Vla1N0YXJ0c09uOiAxIH0pXG4gKiAvLz0+IGZhbHNlXG4gKi9cblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gaXNUaGlzV2VlayhkaXJ0eURhdGUsIG9wdGlvbnMpIHtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHJldHVybiBpc1NhbWVXZWVrKGRpcnR5RGF0ZSwgRGF0ZS5ub3coKSwgb3B0aW9ucyk7XG59IiwiaW1wb3J0IGlzU2FtZURheSBmcm9tIFwiLi4vaXNTYW1lRGF5L2luZGV4LmpzXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSBpc1RvZGF5XG4gKiBAY2F0ZWdvcnkgRGF5IEhlbHBlcnNcbiAqIEBzdW1tYXJ5IElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICogQHB1cmUgZmFsc2VcbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIElzIHRoZSBnaXZlbiBkYXRlIHRvZGF5P1xuICpcbiAqID4g4pqg77iPIFBsZWFzZSBub3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgcHJlc2VudCBpbiB0aGUgRlAgc3VibW9kdWxlIGFzXG4gKiA+IGl0IHVzZXMgYERhdGUubm93KClgIGludGVybmFsbHkgaGVuY2UgaW1wdXJlIGFuZCBjYW4ndCBiZSBzYWZlbHkgY3VycmllZC5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIGRhdGUgdG8gY2hlY2tcbiAqIEByZXR1cm5zIHtCb29sZWFufSB0aGUgZGF0ZSBpcyB0b2RheVxuICogQHRocm93cyB7VHlwZUVycm9yfSAxIGFyZ3VtZW50IHJlcXVpcmVkXG4gKlxuICogQGV4YW1wbGVcbiAqIC8vIElmIHRvZGF5IGlzIDYgT2N0b2JlciAyMDE0LCBpcyA2IE9jdG9iZXIgMTQ6MDA6MDAgdG9kYXk/XG4gKiBjb25zdCByZXN1bHQgPSBpc1RvZGF5KG5ldyBEYXRlKDIwMTQsIDksIDYsIDE0LCAwKSlcbiAqIC8vPT4gdHJ1ZVxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1RvZGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgcmV0dXJuIGlzU2FtZURheShkaXJ0eURhdGUsIERhdGUubm93KCkpO1xufSIsImltcG9ydCB0b0RhdGUgZnJvbSBcIi4uL3RvRGF0ZS9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZkRheVxuICogQGNhdGVnb3J5IERheSBIZWxwZXJzXG4gKiBAc3VtbWFyeSBSZXR1cm4gdGhlIHN0YXJ0IG9mIGEgZGF5IGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSBkYXkgZm9yIHRoZSBnaXZlbiBkYXRlLlxuICogVGhlIHJlc3VsdCB3aWxsIGJlIGluIHRoZSBsb2NhbCB0aW1lem9uZS5cbiAqXG4gKiBAcGFyYW0ge0RhdGV8TnVtYmVyfSBkYXRlIC0gdGhlIG9yaWdpbmFsIGRhdGVcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSBkYXlcbiAqIEB0aHJvd3Mge1R5cGVFcnJvcn0gMSBhcmd1bWVudCByZXF1aXJlZFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBUaGUgc3RhcnQgb2YgYSBkYXkgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mRGF5KG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFR1ZSBTZXAgMDIgMjAxNCAwMDowMDowMFxuICovXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzdGFydE9mRGF5KGRpcnR5RGF0ZSkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGRhdGUgPSB0b0RhdGUoZGlydHlEYXRlKTtcbiAgZGF0ZS5zZXRIb3VycygwLCAwLCAwLCAwKTtcbiAgcmV0dXJuIGRhdGU7XG59IiwiaW1wb3J0IHRvRGF0ZSBmcm9tIFwiLi4vdG9EYXRlL2luZGV4LmpzXCI7XG5pbXBvcnQgdG9JbnRlZ2VyIGZyb20gXCIuLi9fbGliL3RvSW50ZWdlci9pbmRleC5qc1wiO1xuaW1wb3J0IHJlcXVpcmVkQXJncyBmcm9tIFwiLi4vX2xpYi9yZXF1aXJlZEFyZ3MvaW5kZXguanNcIjtcbmltcG9ydCB7IGdldERlZmF1bHRPcHRpb25zIH0gZnJvbSBcIi4uL19saWIvZGVmYXVsdE9wdGlvbnMvaW5kZXguanNcIjtcbi8qKlxuICogQG5hbWUgc3RhcnRPZldlZWtcbiAqIEBjYXRlZ29yeSBXZWVrIEhlbHBlcnNcbiAqIEBzdW1tYXJ5IFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIFJldHVybiB0aGUgc3RhcnQgb2YgYSB3ZWVrIGZvciB0aGUgZ2l2ZW4gZGF0ZS5cbiAqIFRoZSByZXN1bHQgd2lsbCBiZSBpbiB0aGUgbG9jYWwgdGltZXpvbmUuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gZGF0ZSAtIHRoZSBvcmlnaW5hbCBkYXRlXG4gKiBAcGFyYW0ge09iamVjdH0gW29wdGlvbnNdIC0gYW4gb2JqZWN0IHdpdGggb3B0aW9ucy5cbiAqIEBwYXJhbSB7TG9jYWxlfSBbb3B0aW9ucy5sb2NhbGU9ZGVmYXVsdExvY2FsZV0gLSB0aGUgbG9jYWxlIG9iamVjdC4gU2VlIFtMb2NhbGVde0BsaW5rIGh0dHBzOi8vZGF0ZS1mbnMub3JnL2RvY3MvTG9jYWxlfVxuICogQHBhcmFtIHswfDF8MnwzfDR8NXw2fSBbb3B0aW9ucy53ZWVrU3RhcnRzT249MF0gLSB0aGUgaW5kZXggb2YgdGhlIGZpcnN0IGRheSBvZiB0aGUgd2VlayAoMCAtIFN1bmRheSlcbiAqIEByZXR1cm5zIHtEYXRlfSB0aGUgc3RhcnQgb2YgYSB3ZWVrXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqIEB0aHJvd3Mge1JhbmdlRXJyb3J9IGBvcHRpb25zLndlZWtTdGFydHNPbmAgbXVzdCBiZSBiZXR3ZWVuIDAgYW5kIDZcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gVGhlIHN0YXJ0IG9mIGEgd2VlayBmb3IgMiBTZXB0ZW1iZXIgMjAxNCAxMTo1NTowMDpcbiAqIGNvbnN0IHJlc3VsdCA9IHN0YXJ0T2ZXZWVrKG5ldyBEYXRlKDIwMTQsIDgsIDIsIDExLCA1NSwgMCkpXG4gKiAvLz0+IFN1biBBdWcgMzEgMjAxNCAwMDowMDowMFxuICpcbiAqIEBleGFtcGxlXG4gKiAvLyBJZiB0aGUgd2VlayBzdGFydHMgb24gTW9uZGF5LCB0aGUgc3RhcnQgb2YgdGhlIHdlZWsgZm9yIDIgU2VwdGVtYmVyIDIwMTQgMTE6NTU6MDA6XG4gKiBjb25zdCByZXN1bHQgPSBzdGFydE9mV2VlayhuZXcgRGF0ZSgyMDE0LCA4LCAyLCAxMSwgNTUsIDApLCB7IHdlZWtTdGFydHNPbjogMSB9KVxuICogLy89PiBNb24gU2VwIDAxIDIwMTQgMDA6MDA6MDBcbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc3RhcnRPZldlZWsoZGlydHlEYXRlLCBvcHRpb25zKSB7XG4gIHZhciBfcmVmLCBfcmVmMiwgX3JlZjMsIF9vcHRpb25zJHdlZWtTdGFydHNPbiwgX29wdGlvbnMkbG9jYWxlLCBfb3B0aW9ucyRsb2NhbGUkb3B0aW8sIF9kZWZhdWx0T3B0aW9ucyRsb2NhbCwgX2RlZmF1bHRPcHRpb25zJGxvY2FsMjtcbiAgcmVxdWlyZWRBcmdzKDEsIGFyZ3VtZW50cyk7XG4gIHZhciBkZWZhdWx0T3B0aW9ucyA9IGdldERlZmF1bHRPcHRpb25zKCk7XG4gIHZhciB3ZWVrU3RhcnRzT24gPSB0b0ludGVnZXIoKF9yZWYgPSAoX3JlZjIgPSAoX3JlZjMgPSAoX29wdGlvbnMkd2Vla1N0YXJ0c09uID0gb3B0aW9ucyA9PT0gbnVsbCB8fCBvcHRpb25zID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvcHRpb25zLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX29wdGlvbnMkd2Vla1N0YXJ0c09uICE9PSB2b2lkIDAgPyBfb3B0aW9ucyR3ZWVrU3RhcnRzT24gOiBvcHRpb25zID09PSBudWxsIHx8IG9wdGlvbnMgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfb3B0aW9ucyRsb2NhbGUgPSBvcHRpb25zLmxvY2FsZSkgPT09IG51bGwgfHwgX29wdGlvbnMkbG9jYWxlID09PSB2b2lkIDAgPyB2b2lkIDAgOiAoX29wdGlvbnMkbG9jYWxlJG9wdGlvID0gX29wdGlvbnMkbG9jYWxlLm9wdGlvbnMpID09PSBudWxsIHx8IF9vcHRpb25zJGxvY2FsZSRvcHRpbyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX29wdGlvbnMkbG9jYWxlJG9wdGlvLndlZWtTdGFydHNPbikgIT09IG51bGwgJiYgX3JlZjMgIT09IHZvaWQgMCA/IF9yZWYzIDogZGVmYXVsdE9wdGlvbnMud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmMiAhPT0gdm9pZCAwID8gX3JlZjIgOiAoX2RlZmF1bHRPcHRpb25zJGxvY2FsID0gZGVmYXVsdE9wdGlvbnMubG9jYWxlKSA9PT0gbnVsbCB8fCBfZGVmYXVsdE9wdGlvbnMkbG9jYWwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IChfZGVmYXVsdE9wdGlvbnMkbG9jYWwyID0gX2RlZmF1bHRPcHRpb25zJGxvY2FsLm9wdGlvbnMpID09PSBudWxsIHx8IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kZWZhdWx0T3B0aW9ucyRsb2NhbDIud2Vla1N0YXJ0c09uKSAhPT0gbnVsbCAmJiBfcmVmICE9PSB2b2lkIDAgPyBfcmVmIDogMCk7XG5cbiAgLy8gVGVzdCBpZiB3ZWVrU3RhcnRzT24gaXMgYmV0d2VlbiAwIGFuZCA2IF9hbmRfIGlzIG5vdCBOYU5cbiAgaWYgKCEod2Vla1N0YXJ0c09uID49IDAgJiYgd2Vla1N0YXJ0c09uIDw9IDYpKSB7XG4gICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ3dlZWtTdGFydHNPbiBtdXN0IGJlIGJldHdlZW4gMCBhbmQgNiBpbmNsdXNpdmVseScpO1xuICB9XG4gIHZhciBkYXRlID0gdG9EYXRlKGRpcnR5RGF0ZSk7XG4gIHZhciBkYXkgPSBkYXRlLmdldERheSgpO1xuICB2YXIgZGlmZiA9IChkYXkgPCB3ZWVrU3RhcnRzT24gPyA3IDogMCkgKyBkYXkgLSB3ZWVrU3RhcnRzT247XG4gIGRhdGUuc2V0RGF0ZShkYXRlLmdldERhdGUoKSAtIGRpZmYpO1xuICBkYXRlLnNldEhvdXJzKDAsIDAsIDAsIDApO1xuICByZXR1cm4gZGF0ZTtcbn0iLCJpbXBvcnQgX3R5cGVvZiBmcm9tIFwiQGJhYmVsL3J1bnRpbWUvaGVscGVycy9lc20vdHlwZW9mXCI7XG5pbXBvcnQgcmVxdWlyZWRBcmdzIGZyb20gXCIuLi9fbGliL3JlcXVpcmVkQXJncy9pbmRleC5qc1wiO1xuLyoqXG4gKiBAbmFtZSB0b0RhdGVcbiAqIEBjYXRlZ29yeSBDb21tb24gSGVscGVyc1xuICogQHN1bW1hcnkgQ29udmVydCB0aGUgZ2l2ZW4gYXJndW1lbnQgdG8gYW4gaW5zdGFuY2Ugb2YgRGF0ZS5cbiAqXG4gKiBAZGVzY3JpcHRpb25cbiAqIENvbnZlcnQgdGhlIGdpdmVuIGFyZ3VtZW50IHRvIGFuIGluc3RhbmNlIG9mIERhdGUuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIGFuIGluc3RhbmNlIG9mIERhdGUsIHRoZSBmdW5jdGlvbiByZXR1cm5zIGl0cyBjbG9uZS5cbiAqXG4gKiBJZiB0aGUgYXJndW1lbnQgaXMgYSBudW1iZXIsIGl0IGlzIHRyZWF0ZWQgYXMgYSB0aW1lc3RhbXAuXG4gKlxuICogSWYgdGhlIGFyZ3VtZW50IGlzIG5vbmUgb2YgdGhlIGFib3ZlLCB0aGUgZnVuY3Rpb24gcmV0dXJucyBJbnZhbGlkIERhdGUuXG4gKlxuICogKipOb3RlKio6ICphbGwqIERhdGUgYXJndW1lbnRzIHBhc3NlZCB0byBhbnkgKmRhdGUtZm5zKiBmdW5jdGlvbiBpcyBwcm9jZXNzZWQgYnkgYHRvRGF0ZWAuXG4gKlxuICogQHBhcmFtIHtEYXRlfE51bWJlcn0gYXJndW1lbnQgLSB0aGUgdmFsdWUgdG8gY29udmVydFxuICogQHJldHVybnMge0RhdGV9IHRoZSBwYXJzZWQgZGF0ZSBpbiB0aGUgbG9jYWwgdGltZSB6b25lXG4gKiBAdGhyb3dzIHtUeXBlRXJyb3J9IDEgYXJndW1lbnQgcmVxdWlyZWRcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ2xvbmUgdGhlIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUobmV3IERhdGUoMjAxNCwgMSwgMTEsIDExLCAzMCwgMzApKVxuICogLy89PiBUdWUgRmViIDExIDIwMTQgMTE6MzA6MzBcbiAqXG4gKiBAZXhhbXBsZVxuICogLy8gQ29udmVydCB0aGUgdGltZXN0YW1wIHRvIGRhdGU6XG4gKiBjb25zdCByZXN1bHQgPSB0b0RhdGUoMTM5MjA5ODQzMDAwMClcbiAqIC8vPT4gVHVlIEZlYiAxMSAyMDE0IDExOjMwOjMwXG4gKi9cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHRvRGF0ZShhcmd1bWVudCkge1xuICByZXF1aXJlZEFyZ3MoMSwgYXJndW1lbnRzKTtcbiAgdmFyIGFyZ1N0ciA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChhcmd1bWVudCk7XG5cbiAgLy8gQ2xvbmUgdGhlIGRhdGVcbiAgaWYgKGFyZ3VtZW50IGluc3RhbmNlb2YgRGF0ZSB8fCBfdHlwZW9mKGFyZ3VtZW50KSA9PT0gJ29iamVjdCcgJiYgYXJnU3RyID09PSAnW29iamVjdCBEYXRlXScpIHtcbiAgICAvLyBQcmV2ZW50IHRoZSBkYXRlIHRvIGxvc2UgdGhlIG1pbGxpc2Vjb25kcyB3aGVuIHBhc3NlZCB0byBuZXcgRGF0ZSgpIGluIElFMTBcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQuZ2V0VGltZSgpKTtcbiAgfSBlbHNlIGlmICh0eXBlb2YgYXJndW1lbnQgPT09ICdudW1iZXInIHx8IGFyZ1N0ciA9PT0gJ1tvYmplY3QgTnVtYmVyXScpIHtcbiAgICByZXR1cm4gbmV3IERhdGUoYXJndW1lbnQpO1xuICB9IGVsc2Uge1xuICAgIGlmICgodHlwZW9mIGFyZ3VtZW50ID09PSAnc3RyaW5nJyB8fCBhcmdTdHIgPT09ICdbb2JqZWN0IFN0cmluZ10nKSAmJiB0eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zb2xlXG4gICAgICBjb25zb2xlLndhcm4oXCJTdGFydGluZyB3aXRoIHYyLjAuMC1iZXRhLjEgZGF0ZS1mbnMgZG9lc24ndCBhY2NlcHQgc3RyaW5ncyBhcyBkYXRlIGFyZ3VtZW50cy4gUGxlYXNlIHVzZSBgcGFyc2VJU09gIHRvIHBhcnNlIHN0cmluZ3MuIFNlZTogaHR0cHM6Ly9naXRodWIuY29tL2RhdGUtZm5zL2RhdGUtZm5zL2Jsb2IvbWFzdGVyL2RvY3MvdXBncmFkZUd1aWRlLm1kI3N0cmluZy1hcmd1bWVudHNcIik7XG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc29sZVxuICAgICAgY29uc29sZS53YXJuKG5ldyBFcnJvcigpLnN0YWNrKTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBEYXRlKE5hTik7XG4gIH1cbn0iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vc3R5bGUuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zdHlsZS5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcInVzZSBzdHJpY3RcIjtcblxudmFyIHN0eWxlc0luRE9NID0gW107XG5mdW5jdGlvbiBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKSB7XG4gIHZhciByZXN1bHQgPSAtMTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5mdW5jdGlvbiBtb2R1bGVzVG9Eb20obGlzdCwgb3B0aW9ucykge1xuICB2YXIgaWRDb3VudE1hcCA9IHt9O1xuICB2YXIgaWRlbnRpZmllcnMgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG4gICAgaWYgKGluZGV4QnlJZGVudGlmaWVyICE9PSAtMSkge1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnJlZmVyZW5jZXMrKztcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4QnlJZGVudGlmaWVyXS51cGRhdGVyKG9iaik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciB1cGRhdGVyID0gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucyk7XG4gICAgICBvcHRpb25zLmJ5SW5kZXggPSBpO1xuICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKGksIDAsIHtcbiAgICAgICAgaWRlbnRpZmllcjogaWRlbnRpZmllcixcbiAgICAgICAgdXBkYXRlcjogdXBkYXRlcixcbiAgICAgICAgcmVmZXJlbmNlczogMVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlkZW50aWZpZXJzLnB1c2goaWRlbnRpZmllcik7XG4gIH1cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuZnVuY3Rpb24gYWRkRWxlbWVudFN0eWxlKG9iaiwgb3B0aW9ucykge1xuICB2YXIgYXBpID0gb3B0aW9ucy5kb21BUEkob3B0aW9ucyk7XG4gIGFwaS51cGRhdGUob2JqKTtcbiAgdmFyIHVwZGF0ZXIgPSBmdW5jdGlvbiB1cGRhdGVyKG5ld09iaikge1xuICAgIGlmIChuZXdPYmopIHtcbiAgICAgIGlmIChuZXdPYmouY3NzID09PSBvYmouY3NzICYmIG5ld09iai5tZWRpYSA9PT0gb2JqLm1lZGlhICYmIG5ld09iai5zb3VyY2VNYXAgPT09IG9iai5zb3VyY2VNYXAgJiYgbmV3T2JqLnN1cHBvcnRzID09PSBvYmouc3VwcG9ydHMgJiYgbmV3T2JqLmxheWVyID09PSBvYmoubGF5ZXIpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gdXBkYXRlcjtcbn1cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxpc3QsIG9wdGlvbnMpIHtcbiAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG4gIGxpc3QgPSBsaXN0IHx8IFtdO1xuICB2YXIgbGFzdElkZW50aWZpZXJzID0gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpO1xuICByZXR1cm4gZnVuY3Rpb24gdXBkYXRlKG5ld0xpc3QpIHtcbiAgICBuZXdMaXN0ID0gbmV3TGlzdCB8fCBbXTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuICAgIHZhciBuZXdMYXN0SWRlbnRpZmllcnMgPSBtb2R1bGVzVG9Eb20obmV3TGlzdCwgb3B0aW9ucyk7XG4gICAgZm9yICh2YXIgX2kgPSAwOyBfaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IF9pKyspIHtcbiAgICAgIHZhciBfaWRlbnRpZmllciA9IGxhc3RJZGVudGlmaWVyc1tfaV07XG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuICAgICAgaWYgKHN0eWxlc0luRE9NW19pbmRleF0ucmVmZXJlbmNlcyA9PT0gMCkge1xuICAgICAgICBzdHlsZXNJbkRPTVtfaW5kZXhdLnVwZGF0ZXIoKTtcbiAgICAgICAgc3R5bGVzSW5ET00uc3BsaWNlKF9pbmRleCwgMSk7XG4gICAgICB9XG4gICAgfVxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTtcblxuICAgIC8vIFNwZWNpYWwgY2FzZSB0byByZXR1cm4gaGVhZCBvZiBpZnJhbWUgaW5zdGVhZCBvZiBpZnJhbWUgaXRzZWxmXG4gICAgaWYgKHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCAmJiBzdHlsZVRhcmdldCBpbnN0YW5jZW9mIHdpbmRvdy5IVE1MSUZyYW1lRWxlbWVudCkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgLy8gVGhpcyB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbiBpZiBhY2Nlc3MgdG8gaWZyYW1lIGlzIGJsb2NrZWRcbiAgICAgICAgLy8gZHVlIHRvIGNyb3NzLW9yaWdpbiByZXN0cmljdGlvbnNcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBzdHlsZVRhcmdldC5jb250ZW50RG9jdW1lbnQuaGVhZDtcbiAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gaXN0YW5idWwgaWdub3JlIG5leHRcbiAgICAgICAgc3R5bGVUYXJnZXQgPSBudWxsO1xuICAgICAgfVxuICAgIH1cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuICByZXR1cm4gbWVtb1t0YXJnZXRdO1xufVxuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydEJ5U2VsZWN0b3IoaW5zZXJ0LCBzdHlsZSkge1xuICB2YXIgdGFyZ2V0ID0gZ2V0VGFyZ2V0KGluc2VydCk7XG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuICB0YXJnZXQuYXBwZW5kQ2hpbGQoc3R5bGUpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBpbnNlcnRCeVNlbGVjdG9yOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKSB7XG4gIHZhciBlbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcInN0eWxlXCIpO1xuICBvcHRpb25zLnNldEF0dHJpYnV0ZXMoZWxlbWVudCwgb3B0aW9ucy5hdHRyaWJ1dGVzKTtcbiAgb3B0aW9ucy5pbnNlcnQoZWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbiAgcmV0dXJuIGVsZW1lbnQ7XG59XG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcbiAgaWYgKG5vbmNlKSB7XG4gICAgc3R5bGVFbGVtZW50LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIG5vbmNlKTtcbiAgfVxufVxubW9kdWxlLmV4cG9ydHMgPSBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXM7IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopIHtcbiAgdmFyIGNzcyA9IFwiXCI7XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG4gIGlmIChvYmoubWVkaWEpIHtcbiAgICBjc3MgKz0gXCJAbWVkaWEgXCIuY29uY2F0KG9iai5tZWRpYSwgXCIge1wiKTtcbiAgfVxuICB2YXIgbmVlZExheWVyID0gdHlwZW9mIG9iai5sYXllciAhPT0gXCJ1bmRlZmluZWRcIjtcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuICBjc3MgKz0gb2JqLmNzcztcbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cbiAgdmFyIHNvdXJjZU1hcCA9IG9iai5zb3VyY2VNYXA7XG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfVxuXG4gIC8vIEZvciBvbGQgSUVcbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuICBvcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtKGNzcywgc3R5bGVFbGVtZW50LCBvcHRpb25zLm9wdGlvbnMpO1xufVxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHN0eWxlRWxlbWVudC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudCk7XG59XG5cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuZnVuY3Rpb24gZG9tQVBJKG9wdGlvbnMpIHtcbiAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHJldHVybiB7XG4gICAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZSgpIHt9LFxuICAgICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7fVxuICAgIH07XG4gIH1cbiAgdmFyIHN0eWxlRWxlbWVudCA9IG9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50KG9wdGlvbnMpO1xuICByZXR1cm4ge1xuICAgIHVwZGF0ZTogZnVuY3Rpb24gdXBkYXRlKG9iaikge1xuICAgICAgYXBwbHkoc3R5bGVFbGVtZW50LCBvcHRpb25zLCBvYmopO1xuICAgIH0sXG4gICAgcmVtb3ZlOiBmdW5jdGlvbiByZW1vdmUoKSB7XG4gICAgICByZW1vdmVTdHlsZUVsZW1lbnQoc3R5bGVFbGVtZW50KTtcbiAgICB9XG4gIH07XG59XG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG4gICAgc3R5bGVFbGVtZW50LmFwcGVuZENoaWxkKGRvY3VtZW50LmNyZWF0ZVRleHROb2RlKGNzcykpO1xuICB9XG59XG5tb2R1bGUuZXhwb3J0cyA9IHN0eWxlVGFnVHJhbnNmb3JtOyIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIF90eXBlb2Yob2JqKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gdHlwZW9mIG9iajtcbiAgfSA6IGZ1bmN0aW9uIChvYmopIHtcbiAgICByZXR1cm4gb2JqICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG9iaiAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2Ygb2JqO1xuICB9LCBfdHlwZW9mKG9iaik7XG59Il0sIm5hbWVzIjpbInRvRGF0ZSIsImlzVG9kYXkiLCJpc1RoaXNXZWVrIiwiYWRkRGF5cyIsIlByb2plY3QiLCJjb25zdHJ1Y3RvciIsIm5hbWUiLCJ0YXNrcyIsImdldE5hbWUiLCJzZXROYW1lIiwiZ2V0VGFza3MiLCJzZXRUYXNrcyIsImdldFRhc2siLCJ0YXNrTmFtZSIsImZpbmQiLCJ0YXNrIiwiY29udGFpbnMiLCJzb21lIiwiYWRkVGFzayIsIm5ld1Rhc2siLCJwdXNoIiwiZGVsZXRlVGFzayIsImZpbHRlciIsImdldEFsbFRhc2tzIiwibWFwIiwiZ2V0VGFza3NUb2RheSIsInRhc2tEYXRlIiwiRGF0ZSIsImdldERhdGUiLCJnZXRUYXNrc1RoaXNXZWVrIiwiVGFzayIsIlRvZG9MaXN0IiwiU3RvcmFnZSIsInNhdmVUb2RvTGlzdCIsImRhdGEiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImdldFRvZG9MaXN0IiwidG9kb0xpc3QiLCJPYmplY3QiLCJhc3NpZ24iLCJwYXJzZSIsImdldEl0ZW0iLCJzZXRQcm9qZWN0cyIsImdldFByb2plY3RzIiwicHJvamVjdCIsImZvckVhY2giLCJhZGRQcm9qZWN0IiwiZGVsZXRlUHJvamVjdCIsInByb2plY3ROYW1lIiwicmVuYW1lUHJvamVjdCIsIm5ld1Byb2plY3ROYW1lIiwiZ2V0UHJvamVjdCIsImNsZWFyVGFza3MiLCJyZW5hbWVUYXNrIiwibmV3VGFza05hbWUiLCJuZXdUYXNrRGVzY3JpcHRpb24iLCJuZXdUYXNrRGF0ZSIsInNldERlc2NyaXB0aW9uIiwic2V0RGF0ZSIsInNldFRhc2tEZXNjcmlwdGlvbiIsIm5ld0Rlc2NyaXB0aW9uIiwic2V0VGFza0RhdGUiLCJuZXdEdWVEYXRlIiwic2V0VGFza0NvbXBsZXRpb25TdGF0dXMiLCJ0b2dnbGVDb21wbGV0aW9uU3RhdHVzIiwidXBkYXRlQWxsVGFza3NQcm9qZWN0IiwidXBkYXRlVG9kYXlQcm9qZWN0IiwidXBkYXRlV2Vla1Byb2plY3QiLCJkZXNjcmlwdGlvbiIsImR1ZURhdGUiLCJjb21wbGV0ZSIsImdldERlc2NyaXB0aW9uIiwiZ2V0Q29tcGxldGVTdGF0dXMiLCJjb21wYXJlQXNjIiwicHJvamVjdHMiLCJuZXdQcm9qZWN0IiwicHJvamVjdFRvRGVsZXRlIiwic3BsaWNlIiwiaW5kZXhPZiIsImFsbFRhc2tzIiwidG9kYXlUYXNrcyIsIndlZWtUYXNrcyIsInNvcnQiLCJ0YXNrQSIsInRhc2tCIiwiZWRpdEltZyIsInRyYXNoSW1nIiwiVUkiLCJsb2FkSG9tZXBhZ2UiLCJsb2FkUHJvamVjdHMiLCJpbml0UHJvamVjdEJ1dHRvbnMiLCJvcGVuUHJvamVjdCIsImRvY3VtZW50IiwicXVlcnlTZWxlY3RvciIsImNyZWF0ZVByb2plY3RCdXR0b24iLCJpbml0QWRkUHJvamVjdEJ1dHRvbnMiLCJpbml0RWRpdFByb2plY3RCdXR0b25zIiwibG9hZFByb2plY3RDb250ZW50IiwibWFpbkhlYWRlciIsImlubmVyVGV4dCIsImxvYWRUYXNrcyIsImNyZWF0ZVRhc2tDYXJkIiwiaW5pdEFkZFRhc2tCdXR0b25zIiwiY2xlYXJQcm9qZWN0cyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJyZW1vdmUiLCJlZGl0UHJvamVjdCIsImUiLCJwcmV2aW91c1NpYmxpbmciLCJvcGVuRWRpdFByb2plY3RGb3JtIiwiYXBwZW5kQnV0dG9uc1RvUHJvamVjdEJ1dHRvbiIsInByb2plY3RCdXR0b24iLCJwcm9qZWN0TmFtZUNvbnRhaW5lciIsImNyZWF0ZUVsZW1lbnQiLCJlZGl0UHJvamVjdEJ1dHRvbiIsInJlbW92ZVByb2plY3RCdXR0b24iLCJjbGFzc0xpc3QiLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwiYXBwZW5kIiwiYXBwZW5kQ2hpbGQiLCJhZGRQcm9qZWN0QnV0dG9uIiwic3VibWl0UHJvamVjdEJ1dHRvbiIsImNhbmNlbFByb2plY3RCdXR0b24iLCJvcGVuUHJvamVjdEZvcm0iLCJjYW5jZWxQcm9qZWN0U3VibWlzc2lvbiIsImZvY3VzIiwicHJldmVudERlZmF1bHQiLCJ2YWx1ZSIsImNsb3NlUHJvamVjdEZvcm0iLCJjb25zb2xlIiwibG9nIiwic3VibWl0UHJvamVjdEVkaXQiLCJjYW5jZWxQcm9qZWN0RWRpdCIsImFkZFByb2plY3RFZGl0IiwicHJvamVjdFRvRWRpdCIsInBhcmVudEVsZW1lbnQiLCJmaXJzdEVsZW1lbnRDaGlsZCIsImNsb3NlUHJvamVjdEVkaXRGb3JtIiwic3R5bGUiLCJkaXNwbGF5IiwidGFyZ2V0IiwiZWRpdFByb2plY3RGb3JtIiwiZWRpdFByb2plY3RJbnB1dCIsInBhcmVudE5vZGUiLCJpbnNlcnRCZWZvcmUiLCJuZXh0U2libGluZyIsImFsbFRhc2tzUHJvamVjdHNCdXR0b24iLCJ0b2RheVByb2plY3RzQnV0dG9uIiwid2Vla1Byb2plY3RzQnV0dG9uIiwicHJvamVjdEJ1dHRvbnMiLCJvcGVuQWxsVGFza3NQcm9qZWN0c0J1dHRvbiIsIm9wZW5Ub2RheVByb2plY3RzQnV0dG9uIiwib3BlbldlZWtQcm9qZWN0c0J1dHRvbiIsImhhbmRsZVByb2plY3RCdXR0b24iLCJkZWZhdWx0UHJvamVjdEJ1dHRvbnMiLCJidXR0b25zIiwiYnV0dG9uIiwidGFza0NvbnRhaW5lciIsImlubmVySFRNTCIsImNoYW5nZUNvbXBsZXRlU3RhdHVzIiwiY3JlYXRlQ2hlY2tCb3giLCJjb21wbGV0ZVN0YXR1cyIsImRpdiIsImNoZWNrYm94IiwibGFiZWwiLCJzZXRBdHRyaWJ1dGUiLCJjbGljayIsImRpc2FibGVkIiwicmVtb3ZlVGFzayIsImNyZWF0ZVRhc2tDYXJkQnV0dG9ucyIsImRhdGUiLCJjaGVja0JveCIsInRhc2tOYW1lQ29udGFpbmVyIiwiZGF0ZUNvbnRhaW5lciIsImVkaXRUYXNrQnV0dG9uIiwicmVtb3ZlVGFza0J1dHRvbiIsIm9wZW5FZGl0VGFza0Zvcm0iLCJiYWNrZ3JvdW5kSW1hZ2UiLCJiYWNrZ3JvdW5kU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwidGFza1RvRWRpdCIsInByZXZpb3VzRWxlbWVudFNpYmxpbmciLCJlZGl0VGFza1N1Ym1pdEJ1dHRvbiIsImNhbmNlbEVkaXRUYXNrQnV0dG9uIiwiZWRpdFRhc2siLCJjYW5jZWxFZGl0VGFza1N1Ym1pc3Npb24iLCJuZXh0RWxlbWVudFNpYmxpbmciLCJjbG9zZUVkaXRUYXNrRm9ybSIsIm15RWRpdEZvcm0iLCJhZGRUYXNrQnV0dG9uIiwib3BlbkFkZFRhc2tGb3JtIiwiY2FuY2VsVGFza0J1dHRvbiIsImNhbmNlbFRhc2tTdWJtaXNzaW9uIiwiY2xvc2VBZGRUYXNrRm9ybSIsIm92ZXJsYXkiLCJ3aW5kb3ciLCJvbmNsaWNrIiwiZXZlbnQiXSwic291cmNlUm9vdCI6IiJ9