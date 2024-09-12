// 1. Crear un objeto de consola de videojuegos
const consola = {
    nombre: 'PlayStation 5',
    fabricante: 'Sony',
    anioLanzamiento: 2020,
    almacenamiento: '825GB',
    juegosInstalados: ['Demon\'s Souls', 'Spider-Man: Miles Morales', 'Ratchet & Clank'],
    encendida: false
  };
  
  // Mostrar la información de la consola por consola
  console.log('Información de la consola:', consola);
  console.log('Nombre:', consola.nombre); // PlayStation 5
  console.log('Fabricante:', consola.fabricante); // Sony
  console.log('Año de lanzamiento:', consola.anioLanzamiento); // 2020
  console.log('Almacenamiento:', consola.almacenamiento); // 825GB
  console.log('Juegos instalados:', consola.juegosInstalados); // Lista de juegos
  console.log('¿Está encendida?:', consola.encendida); // false
  
  // 2. Crear un objeto llamado caja relacionado con consolas
  const caja = {
    consolas: ['PlayStation 4', 'Nintendo Switch', 'Xbox Series X'],
    controles: 5,
    juegos: 15,
    accesorios: ['VR headset', 'Cargadores', 'Base de carga'],
    buenEstado: true
  };
  
  // Imprimir el objeto entero por consola
  console.log('Objeto caja:', caja);
  
  // Imprimir cada propiedad del objeto y su tipo de dato
  console.log('Consolas:', caja.consolas, '-', typeof caja.consolas); // object (array)
  console.log('Controles:', caja.controles, '-', typeof caja.controles); // number
  console.log('Juegos:', caja.juegos, '-', typeof caja.juegos); // number
  console.log('Accesorios:', caja.accesorios, '-', typeof caja.accesorios); // object (array)
  console.log('Buen estado:', caja.buenEstado, '-', typeof caja.buenEstado); // boolean