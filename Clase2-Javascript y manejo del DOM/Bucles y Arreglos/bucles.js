let alumnos = ["David", "Ricardio", "Carlos", "Manuel"];
for (let i = 0; i < alumnos.length; i++) {
  console.log("Los alumnos son: ", alumnos[i]);
}

//Arreglo del 0 al 10
let numero = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const message = "es par";
const message2 = "es impar";

function esPar() {
  for (let i = 1; i <= 1000; i++) {
    if (i % 2 == 0) {
      console.log("El numero " + i + " " + message);
    }
  }
}

console.log(esPar());
