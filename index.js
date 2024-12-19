// Esperar a que el DOM cargue completamente
document.addEventListener('DOMContentLoaded', () => {
  // Seleccionar todos los botones de compra
  const botonesCompra = document.querySelectorAll('.boton');

  // Agregar un evento de clic a cada botón
  botonesCompra.forEach(boton => {
    boton.addEventListener('click', (event) => {
      event.preventDefault(); // Evitar el comportamiento predeterminado del enlace
      alert('¡Gracias por tu compra! tú recibo de pago se enviara a tu correo electronico' );
    });
  });

  // Seleccionar los enlaces del menú de navegación
  const menuItems = document.querySelectorAll('.menu .star');

  // Cambiar el estilo del enlace activo al hacer clic
  menuItems.forEach(item => {
    item.addEventListener('click', (event) => {
      // Remover la clase 'activo' de todos los enlaces
      menuItems.forEach(link => link.classList.remove('activo'));

      // Agregar la clase 'activo' al enlace clicado
      event.target.classList.add('activo');
    });
  });
});

