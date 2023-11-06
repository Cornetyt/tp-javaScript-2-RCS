let numero = parseInt(prompt("ingrese un numero entre 1 y 50"));

if (numero >= 1 && numero <= 50) {
  for (let f = numero; f >= 1; f--) {
    for (let c = 0; c < f; c++) {
      document.write(f);
    }
    document.write("<br>");
  }
}