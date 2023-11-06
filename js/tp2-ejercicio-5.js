do {
  let dni = parseInt(prompt("ingrese un numero de dni"));
  if (dni >= 0 && dni <= 99999999) {
    switch (dni % 23) {
      case 0:
        alert("la letra correspondiente es T");
        break;
      case 1:
        alert("la letra correspondiente es R");
        break;
      case 2:
        alert("la letra correspondiente es W");
        break;
      case 3:
        alert("la letra correspondiente es A");
        break;
      case 4:
        alert("la letra correspondiente es G");
        break;
      case 5:
        alert("la letra correspondiente es M");
        break;
      case 6:
        alert("la letra correspondiente es Y");
        break;
      case 7:
        alert("la letra correspondiente es F");
        break;
      case 8:
        alert("la letra correspondiente es P");
        break;
      case 9:
        alert("la letra correspondiente es D");
        break;
      case 10:
        alert("la letra correspondiente es X");
        break;
      case 11:
        alert("la letra correspondiente es B");
        break;
      case 12:
        alert("la letra correspondiente es N");
        break;
      case 13:
        alert("la letra correspondiente es J");
        break;
      case 14:
        alert("la letra correspondiente es Z");
        break;
      case 15:
        alert("la letra correspondiente es S");
        break;
      case 16:
        alert("la letra correspondiente es Q");
        break;
      case 17:
        alert("la letra correspondiente es V");
        break;
      case 18:
        alert("la letra correspondiente es H");
        break;
      case 19:
        alert("la letra correspondiente es L");
        break;
      case 20:
        alert("la letra correspondiente es C");
        break;
      case 21:
        alert("la letra correspondiente es K");
        break;
      case 22:
        alert("la letra correspondiente es E");
        break;
      default:
        alert("al dni ingresado no le corresponde ninguna letra");
    }
  } else {
    alert("el dni ingresado no es valido");
  }
} while (confirm("desea ingresar otro dni?"));
