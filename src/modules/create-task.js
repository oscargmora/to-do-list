const overlay = document.getElementById('overlay');
const myForm = document.getElementById('myForm');

function closeForm() {
    myForm.style.display = 'none';
    overlay.classList.remove('active');
}

// eslint-disable-next-line func-names
window.onclick = function (event) {
    if (event.target === overlay) {
        closeForm();
    }
};

export default closeForm;
