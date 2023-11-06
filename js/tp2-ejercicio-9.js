for (let i = 1; i <= 500; i++) {
  document.write(i);

  if (i % 4 === 0 && i % 9 === 0) {
    document.write("(es multiplo 4 y de 9)");
  } else if (i % 4 === 0) {
    document.write("(es multiplo 4)");
  } else if (i % 9 === 0) {
    document.write("(es multiplo 9)");
  } else if (i % 5 === 0) {
    document.write("<br>-----------------");
  }
  document.write("<br>");
}
