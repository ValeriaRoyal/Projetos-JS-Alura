
//  5) Loop e validação

var pacientes = document.querySelectorAll(".paciente"); //Seleciona todos os pacientes coma função querySelectorAll
//console.log(pacientes); 


for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]; //Seleciona cada array de pacientes

    var tdpeso = paciente.querySelector(".info-peso");
    var Peso = tdpeso.textContent; 
    var tdalt = paciente.querySelector(".info-altura");
    var Altura = tdalt.textContent;
    var IMC = Peso/(Altura*Altura);

    var Tdimc = paciente.querySelector(".info-imc");

        var Av = true;
        var Pv = true;

        if (Peso <= 0 || Peso >= 1000) {
            console.log("Peso invalido!");
            Pv = false;
        }
        if (Altura <= 0 || Altura >= 3.00) {
            console.log("Altura invalido!");
            Av = false;
            Tdimc.textContent ="Altura invalido"; 
        }

        if (Av && Pv) {
            var Tdimc = paciente.querySelector(".info-imc");
            Tdimc.textContent = IMC.toFixed(2); // limita casas decimais
        }    
}

