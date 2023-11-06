const edad = parseInt(
  prompt("Ingrese su edad para solicitar si puede conducir")
);

if (edad >= 18) {
  document.write("usted está apto para conducir");
} else {
  document.write("la edad ingresada no es válida");
}
