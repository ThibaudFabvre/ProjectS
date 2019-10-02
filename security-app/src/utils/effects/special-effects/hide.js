export const hide = (evt, elements) => {
    const toggle = 'activate';
    if (elements) {
        elements.forEach((element) => {
            const lowerCasedElement = element.name;
            const domElement = document.getElementById(`${lowerCasedElement}`);
            if (domElement.classList.contains(`${toggle}`)) {
                domElement.classList.remove(`${toggle}`);
                domElement.classList.add('hide');
            } else {
                domElement.classList.add(`${toggle}`);
                domElement.classList.remove('hide');
            }
        });
    } else {
        const domElement = evt.target;
        if (domElement.classList.contains(`${toggle}`)) {
            domElement.classList.remove(`${toggle}`);
            domElement.classList.add('hide');
        } else {
            domElement.classList.add(`${toggle}`);
            domElement.classList.remove('hide');
        }
    }
};
