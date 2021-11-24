const contenedor = document.querySelector('#contenedor');
const btn = document.querySelector('#boton-menu');

btn.addEventListener('click', () => {
    contenedor.classList.toggle('active');
});

const btnMas = document.querySelector('button#mas');
const iconMas = document.querySelector('i#iconMas');
const tendencias = document.querySelector('#tendencias');

btnMas.addEventListener('click', () => {
    tendencias.classList.toggle('active');
    if (btnMas.textContent == ' Mostrar más') {
        btnMas.textContent = ' Mostrar menos';
        iconMas.classList.value = 'fas fa-chevron-up';
    } else if (btnMas.textContent == ' Mostrar menos') {
        btnMas.textContent = ' Mostrar más';
        iconMas.classList.value = 'fas fa-chevron-down';
    }
});

const comprobarAncho = () => {
    if (window.innerWidth <= 768) {
        contenedor.classList.remove('active');
    } else {
        contenedor.classList.add('active');
    }
};

comprobarAncho();

window.addEventListener('resize', () => {
    comprobarAncho();
});