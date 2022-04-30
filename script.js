function calcularEdad() {
  var edad;
  edad =parseInt( document.getElementById("EdadH").value);
  var resultado;
  resultado = edad * 7;
  var calculo = `Su mascota tiene <span> ${resultado} </span> años en edad canina`;
  document.getElementById('edadCanina').innerHTML = calculo;
}
