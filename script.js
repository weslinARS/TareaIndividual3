function calcularEdad() {
  var edadHumana = parseInt(document.getElementById("edadHumana").value);
  var resultado;
  document.getElementById('edadCanina').innerHTML = edadHumana
  resultado = edadHumana * 7;
  var calculo = `Su mascota tiene ${resultado} años en edad canina`;
  alert(resultado);
  document.getElementById('edadCanina').innerHTML = calculo;
}
