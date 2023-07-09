import './style.css';
import UI from './UI';

const overlay = document.querySelector('#overlay');

document.addEventListener('DOMContentLoaded', UI.loadHomepage);
window.onclick = (event) => {
    if (event.target === overlay) {
        console.log('clicked');
        UI.closeAddTaskForm();
        UI.closeEditTaskForm();
    }
};
