const mainHeader = document.querySelector('#main-header');

const mainHeaderUpdate = () => {
    document.addEventListener('click', (e) => {
        const target = e.target.closest('.main-header-title');

        if (target) {
            const mainHeaderTitle =
                document.querySelectorAll('.main-header-title');
            // eslint-disable-next-line no-plusplus
            for (let i = 0; i < mainHeaderTitle.length; i++) {
                mainHeaderTitle[i].classList.remove('selected');
            }
            target.classList.add('selected');
            mainHeader.innerText = target.firstElementChild.innerText;
        }
    });
};

export default mainHeaderUpdate;
