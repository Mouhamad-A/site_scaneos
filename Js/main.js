const handleMobileMenu = () =>{
    const navMobileMenu = document.getElementById('navMobileMenu');
    const mobileMenu = document.getElementById('mobileMenu');
    const mobileMenuClose = document.getElementById('mobileMenuClose');

    const openMenu = () => {
        mobileMenu.classList.add('mobile-menu--open')
    };

    const closeMenu = () => {
        mobileMenu.classList.remove('mobile-menu--open')
    }

    navMobileMenu.addEventListener('click',openMenu)
    mobileMenuClose.addEventListener('click',closeMenu)
}

handleMobileMenu();