document.addEventListener('DOMContentLoaded', () => {
    const openButton = document.querySelector('.svg-open');
    const closeButton = document.querySelector('.svg-close');
    const navigation = document.querySelector('.header-mobile-container-navigation');
    const mainContainer = document.querySelector('body');
    const mobileHeader = document.querySelector('.header-mobile');

    const updateButtons = (isOpen) => {
        openButton.style.display = isOpen ? 'none' : 'block';
        closeButton.style.display = isOpen ? 'block' : 'none';
    };


    const toggleNavigation = (isOpen) => {
        if (isOpen) {
            navigation.classList.add('open');
            mainContainer.style.overflow = 'hidden';
            // mobileHeader.style.height = '20vh'

        } else {
            navigation.classList.remove('open');
            mainContainer.style.overflow = 'visible';
            // mobileHeader.style.height = '100%';
        }
        updateButtons(isOpen);
    };



    // Слушатели событий
    openButton.addEventListener('click', () => toggleNavigation(true));
    closeButton.addEventListener('click', () => toggleNavigation(false));
});
