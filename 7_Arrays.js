  // 1. Función que recibe un array de números y retorna la suma de todos los números del array
function sumarArray(numeros) {
    return numeros.reduce((acumulador, numero) => acumulador + numero, 0);
  }
  
  const numeros1 = [1, 2, 3, 4, 5];
  console.log('Suma de los números:', sumarArray(numeros1)); // 15
  
  // 2. Función que recibe un array de números y retorna el promedio de todos los números del array
  function promedioArray(numeros) {
    const suma = sumarArray(numeros);
    return suma / numeros.length;
  }
  
  console.log('Promedio de los números:', promedioArray(numeros1)); // 3
  
  // 3. Función que toma un arreglo de strings como parámetro y devuelve un nuevo arreglo con todas las letras en mayúsculas
  function convertirMayusculas(arrayDeStrings) {
    return arrayDeStrings.map(str => str.toUpperCase());
  }
  
  const strings = ['hola', 'mundo', 'javascript'];
  console.log('Strings en mayúsculas:', convertirMayusculas(strings)); // ['HOLA', 'MUNDO', 'JAVASCRIPT']
  
  // 4. Función que toma un arreglo de números como parámetro y devuelve un nuevo arreglo que contiene solo los números pares
  function filtrarPares(arrayDeNumeros) {
    return arrayDeNumeros.filter(numero => numero % 2 === 0);
  }
  
  const numeros2 = [1, 2, 3, 4, 5, 6, 7, 8];
  console.log('Números pares:', filtrarPares(numeros2)); // [2, 4, 6, 8]