var paciente = document.querySelector("#first-paciente");

var tdpeso = paciente.querySelector(".info-peso");
var Peso = tdpeso.textContent;
var tdalt = paciente.querySelector(".info-altura");
var Altura = tdalt.textContent;


var IMC = Peso/(Altura*Altura);


var imc = paciente.querySelector(".info-imc");
imc.textContent = IMC;
