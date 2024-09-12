// 1. Función que recibe un string y retorna el string en mayúsculas
function convertirMayusculas(texto) {
    return texto.toUpperCase();
  }
  
  const textoMayusculas = convertirMayusculas('hola mundo');
  console.log(textoMayusculas); // HOLA MUNDO
  
  // 2. Función que recibe un string y retorna el string en minúsculas
  function convertirMinusculas(texto) {
    return texto.toLowerCase();
  }
  
  const textoMinusculas = convertirMinusculas('HOLA MUNDO');
  console.log(textoMinusculas); // hola mundo
  
  // 3. Función que recibe como parámetro 2 números y los resta
  function restar(numero1, numero2) {
    return numero1 - numero2;
  }
  
  const resultadoResta = restar(20, 10);
  console.log(resultadoResta); // 10
  
  // 4. Función que recibe como parámetro 2 números y los divide
  function dividir(numero1, numero2) {
    if (numero2 === 0) {
      return 'No se puede dividir por cero';
    }
    return numero1 / numero2;
  }
  
  const resultadoDivision = dividir(20, 10);
  console.log(resultadoDivision); // 2
  
  // 5. Función que recibe como parámetro 2 números y los multiplica
  function multiplicar(numero1, numero2) {
    return numero1 * numero2;
  }
  
  const resultadoMultiplicacion = multiplicar(10, 20);
  console.log(resultadoMultiplicacion); // 200
  
  // 6. Función que recibe un string y devuelve la longitud del string
  function obtenerLongitud(texto) {
    return texto.length;
  }
  
  const longitudTexto = obtenerLongitud('Hola mundo');
  console.log(longitudTexto); // 10