const showMenu = (value) => {
    const menuContent = document.querySelector('.landing-menu_mobile');
    console.log('menuContent',menuContent)
    if (value > 0) {
        menuContent.style.display = 'flex';
        document.body.style.overflow = 'hidden'
    } else {
        menuContent.style.display = 'none';
        document.body.style.overflow = 'auto'
    }
}

