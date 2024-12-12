function operacion(a, b, c) {
  let suma = a + b;
  let multiplicacion = suma * c;
  return multiplicacion;
}

console.log(operacion(2, 5, 10));

function esPar(numero) {
  message = "Par";
  message2 = "Impar";
  if (numero % 2 == 0) {
    return message;
  } else {
    return message2;
  }
}

console.log(esPar(5));
