// Colapsar el menú al hacer scroll
window.addEventListener('scroll', () => {
    const navbarCollapse = document.querySelector('.navbar-collapse');
    const navbarToggler = document.querySelector('.navbar-toggler');

    // Cambiar el estado del botón a 'false'
    navbarToggler.setAttribute('aria-expanded', 'false'); // Cambiar el estado del botón

    // Colapsar el menú usando Bootstrap
    if (navbarCollapse.classList.contains('show')) {
        $(navbarCollapse).collapse('hide'); // Usar jQuery para colapsar
    }
	
	// Verificar el ancho de la ventana
    if (window.innerWidth > 1023) {
        // Aquí puedes agregar la lógica para mantener la clase '-pinned'
        // Por ejemplo, agregar la clase a la barra de navegación
        document.querySelector('.navbar').classList.add('-pinned');
    } else {
        // Si el ancho es menor o igual a 1023px, puedes quitar la clase
        document.querySelector('.navbar').classList.remove('-pinned');
    }	
});

// Colapsar el menú al hacer clic en un elemento del menú
const navbarItems = document.querySelectorAll('.nav-link');
navbarItems.forEach(item => {
    item.addEventListener('click', () => {
        const navbarCollapse = document.querySelector('.navbar-collapse');
        const navbarToggler = document.querySelector('.navbar-toggler');

        // Cambiar el estado del botón a 'false'
        navbarToggler.setAttribute('aria-expanded', 'false'); // Cambiar el estado del botón

        // Colapsar el menú usando Bootstrap
        if (navbarCollapse.classList.contains('show')) {
            $(navbarCollapse).collapse('hide'); // Usar jQuery para colapsar
        }
    });
});