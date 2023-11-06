let numero = 0;
let numeroSuma = 0;

do {
  numero = parseInt(prompt("Ingresa su numero"));
  if (numero > 0 || numero < 0) {
    numeroSuma = numero + numeroSuma;
  } else {
    alert("ingrese un numero válido");
  }
} while (confirm("desea poner otro numero"));

document.write(numeroSuma);
