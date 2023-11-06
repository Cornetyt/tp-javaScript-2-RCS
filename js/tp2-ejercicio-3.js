let texto = "";
let textoConcatenado = "";

do {
  texto = prompt("Ingrese el texto");
  texto = texto + "-";
  textoConcatenado = textoConcatenado + texto;
} while (confirm("Desea ingresar otro texto"));

document.write(textoConcatenado);
