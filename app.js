let listaDeNumerosSorteados = [];
let numeroLimite = 50;
let numeroSecreto = geraNumeroAleatorio();
let tentativas = 1;


function exibirTextoNaTela(tag,texto) {
 let campo = document.querySelector(tag);
 campo.innerHTML = texto;
 responsiveVoice.speak(texto ,"Brazilian Portuguese Female", {rate:1.2});
}
  exibirMensagemInicial();


function exibirMensagemInicial(){
   exibirTextoNaTela("h1", "Jogo do número secreto");
   exibirTextoNaTela("p", "Digite um número entre 1 e 50");
}

 function verificarChute(){
    let chute = document.querySelector("input").value;
    
    if (chute == numeroSecreto){
      exibirTextoNaTela("h1", " Aí! Você acertou!");
      let palavraTentativa = tentativas > 1? " tentativas!" : " tentativa!";
      let mensagemTentativas = " Você acertou o número secreto com " + tentativas + palavraTentativa;
      exibirTextoNaTela("p",mensagemTentativas);
      document.getElementById("reiniciar").removeAttribute("disabled");
    } else
        if (chute > numeroSecreto){
        exibirTextoNaTela("p", "O número secreto é menor");
        } else
         {
            exibirTextoNaTela("p","O número secreto é maior")
         }
         tentativas++;
         limpaCampo();
      }

 function geraNumeroAleatorio() {
  let numeroSorteado =  parseInt( Math.random() * numeroLimite + 1); 
  let quantidadeDeElementosNaLista = listaDeNumerosSorteados.length;
    if (quantidadeDeElementosNaLista == numeroLimite){
       listaDeNumerosSorteados = [];
    } 

   if ( listaDeNumerosSorteados.includes(numeroSorteado)){
     return geraNumeroAleatorio();
   } else {
     listaDeNumerosSorteados.push(numeroSorteado);
     return numeroSorteado;
    
   }
  }
 function limpaCampo(){

   chute = document.querySelector("input");
   chute.value = " ";
 }

 function reiniciarJogo(){
   numeroSecreto = geraNumeroAleatorio();
   limpaCampo();
   tentativas = 1;
   exibirMensagemInicial();
   document.getElementById("reiniciar").setAttribute("disabled", true);

 }