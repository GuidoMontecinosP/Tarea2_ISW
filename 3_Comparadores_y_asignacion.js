const numero1 = 15;
const numero2 = 20;
const numero3 = '25';

// 1. ¿Es numero1 mayor o igual que numero2?
console.log('numero1 >= numero2:', numero1 >= numero2); // false

// 2. ¿Es numero1 menor o igual que numero2?
console.log('numero1 <= numero2:', numero1 <= numero2); // true

// 3. ¿Es numero1 menor que numero3? (Recuerda que numero3 es un string, pero se convierte a number para la comparación)
console.log('numero1 < numero3:', numero1 < numero3); // true

// 4. ¿Es numero3 menor que numero2? (numero3 se convierte a number para la comparación)
console.log('numero3 < numero2:', numero3 < numero2); // false

// 5. ¿Es numero3 estrictamente diferente de numero1? (Comparación estricta, incluyendo tipos)
console.log('numero3 !== numero1:', numero3 !== numero1); // true

// 6. ¿Es numero1 estrictamente igual a numero2? (Comparación estricta, incluyendo tipos)
console.log('numero1 === numero2:', numero1 === numero2); // false