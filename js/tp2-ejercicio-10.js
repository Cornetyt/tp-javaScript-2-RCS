const filas = parseInt(prompt("ingrese un número de filas"));
const columnas = parseInt(prompt("ingrese un número de columnas"));

let tablaTotal = filas * columnas;

document.write(`<table><tbody>`);
for (let iFilas = 0; iFilas < filas; iFilas++) {
  document.write(`<tr>`);
  for (let iColumnas = 0; iColumnas < columnas; iColumnas++) {
    document.write(`<td>${tablaTotal}</td>`);
    tablaTotal--;
  }
  document.write(`</tr>`);
}

document.write(`</tbody></table>`);
