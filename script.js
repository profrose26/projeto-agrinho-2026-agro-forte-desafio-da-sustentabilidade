let producao = 50;
let ambiente = 50;
let economia = 50;

function atualizar(){

document.getElementById("producao").innerHTML = producao;
document.getElementById("ambiente").innerHTML = ambiente;
document.getElementById("economia").innerHTML = economia;

}

function escolha(tipo){

if(tipo === "gotejamento"){

producao += 5;
ambiente += 15;
economia += 5;

document.getElementById("mensagem").innerHTML =
"Você economizou água e aumentou a sustentabilidade.";

}

if(tipo === "convencional"){

producao += 15;
ambiente -= 10;
economia += 10;

document.getElementById("mensagem").innerHTML =
"A produção aumentou, mas houve maior impacto ambiental.";

}

atualizar();

verificarFinal();

}

function verificarFinal(){

if(producao >= 70 &&
ambiente >= 70 &&
economia >= 70){

document.getElementById("mensagem").innerHTML =
"🏆 EXCELENTE! Sua fazenda é modelo de sustentabilidade.";

}

else if(producao >= 70 &&
ambiente < 50){

document.getElementById("mensagem").innerHTML =
"❌ Sua produção cresceu, mas o meio ambiente foi prejudicado.";

}

}