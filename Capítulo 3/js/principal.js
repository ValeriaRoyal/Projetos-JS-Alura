
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

        if (Peso <= 0 || Peso >= 100) {
            Pv = false;

//      6) Estilos no JS

            //Boa prática: Não auterar o style doretamente no JS, utilize a folha de style

            //paciente.style.backgroundColor = "red"; //Utilizando o style.color podemos trocar a cor da fonte p/ dar enfase que algo está errado
            paciente.classList.add("paciente-invalido"); // ClassList retorna todas as classes daquele obj e metodos
            //metodo add permite adc uma classe aquele obj ex.: paciente-invalido que foi criada na folha de style
            Tdimc.textContent ="Peso invalido"; 
        }
        if (Altura <= 0 || Altura >= 3.00) {
            Av = false;
            paciente.classList.add("paciente-invalido");
            Tdimc.textContent ="Altura invalido";     
        }

        if (Av && Pv) {
            var Tdimc = paciente.querySelector(".info-imc");
            Tdimc.textContent = IMC.toFixed(2); // limita casas decimais
        }    
}

