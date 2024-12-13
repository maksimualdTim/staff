document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.svg-open');
    const closeButton = document.querySelector('.svg-close');
    const navigation = document.querySelector('.header-mobile-container-navigation');

    const updateButtons = (isOpen) => {
        openButton.style.display = isOpen ? 'none' : 'block';
        closeButton.style.display = isOpen ? 'block' : 'none';
    };

    // const toggleNavigation = (isOpen) => {
    //     if (isOpen) {
    //         setTimeout(() => {
    //             const fullHeight = navigation.scrollHeight;
    //             navigation.style.height = `${fullHeight}px`;
    //             navigation.style.paddingTop = '48px';
    //             navigation.style.paddingBottom = '48px';
    //         }, 0);
    //     } else {
    //         navigation.style.height = '0';
    //         navigation.style.paddingTop = '0';
    //         navigation.style.paddingBottom = '0';
    //     }
    //     updateButtons(isOpen);
    // };

    const toggleNavigation = (isOpen) => {
        if (isOpen) {
            navigation.classList.add('open');
        } else {
            navigation.classList.remove('open');
        }
        updateButtons(isOpen);
    };



    // Слушатели событий
    openButton.addEventListener('click', () => toggleNavigation(true));
    closeButton.addEventListener('click', () => toggleNavigation(false));
});
