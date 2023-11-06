const nota = parseInt(prompt("Ingrese su nota correspondiente"));

switch (nota) {
  case 0:
  case 1:
  case 2:
    alert(`${nota} es muy deficiente`);
    break;
  case 3:
  case 4:
    alert(`${nota} es insuficiente`);
    break;
  case 5:
  case 6:
    alert(`${nota} es suficiente`);
    break;
  case 7:
    alert(`${nota} esta bien`);
    break;
  case 8:
  case 9:
    alert(`${nota} es notable`);
    break;
  case 10:
    alert(`${nota} es sobresaliente`);
    break;
  case nota:
    alert(`no es un número válido`);

  default:
    alert("introduce un número válido");
}
