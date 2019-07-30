// 4) Buscando dados

//através do querySelector chamamos a classe first-paciente onde me retorna os dados do paciente 
var paciente = document.querySelector("#first-paciente");

var tdpeso = paciente.querySelector(".info-peso"); // No paciente selecionamos um dado especifico como o .info-peso que é guardado em var tdpeso
//console.log(tdpeso); // <td class="info-peso">100</td>

var Peso = tdpeso.textContent; // Entrando dentro da tag e pegando o conteudo de texto usando textContent; 
//console.log(Peso); // 100

//A mesma coisa acontece nas linhas abaixo
var tdalt = paciente.querySelector(".info-altura");
//console.log(tdalt);
var Altura = tdalt.textContent;
//console.log(Altura);

var IMC = Peso/(Altura*Altura); // Após pegar os valores das td e armazenar nas veriaveis, efetuamos o calculos de IMC.

var Tdimc = paciente.querySelector(".info-imc");
//console.log(Tdimc);

Tdimc.textContent = IMC; // transferimos o valor de IMC calculado na linha 18 p/ o imc.textContent resultando na troca de valores na tabela.



//  5) Validação
//  
    var Av = true;
    var Pv = true;

//  Para não haver discrepancia nos valores informados no html faremos uma validação de valores.
    if (Peso <= 0 || Peso >= 1000) {
        //console.log("Peso invalido!");
        //Pv = false;
        // Para o usuário saber na tebela mostrará na coluna IMC a msg de peso inválido
    }
    if (Altura <= 0 || Altura >= 3.00) {
        //console.log("Altura invalido!");
        //Av = false;
        //Tdimc.textContent ="Altura invalido"; // Para o usuário saber na tebela mostrará na coluna IMC a msg de altura inválido
    }

    //Se as duas condiçoes forem true executará o calculos do IMC
    if (Av && Pv) {
        //var Tdimc = paciente.querySelector(".info-imc");
        //Tdimc.textContent = IMC;
    } else {
        //Tdimc.textContent = "Peso e Altura inválido";
    }
    