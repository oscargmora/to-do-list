const mainHeader = document.querySelector('#main-header');

const mainHeaderUpdate = () => {
    document.addEventListener('click', (e) => {
        const target = e.target.closest('.main-header-title');

        if (target) {
            mainHeader.innerText = target.innerText;
        }
    });
};

export default mainHeaderUpdate;
