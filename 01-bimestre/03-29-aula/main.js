function teste1(){
    // Dentro da variavel Ola esta associada uma funcao;
    // Foi atribuida uma funcao a variavel ola2... 
    var ola2 = ola;
    alert(ola2());
    // Funcao High-Order funcition = tratar uma funcao como um valor.
    // Funcao Anonima não possui corpo ela sai voando de var em var.
    // Funcao dentro de funcao se chama cloger 
    // Pesquisar funcional reativo.
    // Pesquisar * acima;
    
}
function ola(){
    return 'Ola mundo';
    // 'High order function' tratar uma funcao como um valor qualquer..(pesquisar);
}

function testeQualquer(){
    
    var fucaoQualquer = function(x){
      return x + 1; 
    }
    
    console.log(aplica(fucaoQualquer));
}
function aplica(f){
    return 1 + f(6);

}
//===========================================================================

// Currying funcao que recebe varios parametros sequenciais.. 
// não necessariamente ao mesmo tempo pesquisar.

function outroTeste(){
    
    console.log(f(7)(10));
}
function f(x){
    return function(y){
        return x + y;
    }
} 

// =====================================================================================
// EXERCICIO-01 
// FACA UMA FUNCAO QUE RECEBA UM VETOR DE FUNCOES (QUE RECEBE INTEIRO E RETORNA INTEIRO)
// E UM VALOR INTEIRO, RETORNE A SOMA DA APLICAÇÃO DAS FUNCOES NESTE VALOR.

function Ex01(vetorDeFuncoes){
    var ResultadoTotal = 0;
    for (var i = 0; i < vetorDeFuncoes.length; i++){
        ResultadoTotal = ResultadoTotal + vetorDeFuncoes[i](10);  
    }
    return ResultadoTotal;
}
function testeEx01(){
    
    var funcaoQualquer = function(x){ 
        return x*2; 
    }
    
    var vetor = [funcaoQualquer,funcaoQualquer,funcaoQualquer,funcaoQualquer];
    
    console.log(Ex01(vetor));
    
}

// ==================================================================================================================
// EXERCICIO-02 
// FACA UM CAMPO NOME (INPUT) E UM BOTAO ENVIAR. AO CLICAR NO ENVIAR EH MOSTRADO, VIA 
// ALERT, OLA E O NOME DIGITADO E TAMBEM O BOTAO DEVERA TER O MUDADO PARA LIMPAR 
// CLICKANDO NO BOTAO LIMPAR , ALEM DE LIMPAR O CAMPO O BOTAO DEVE SER MUDADO 
// ENVIAR NOVAMENTE.

function Ex02Limpar(){
    document.getElementById("Ex02-Nome").value = "";
    document.getElementById("Ex02-b1").innerHTML = "Enviar"
    return document.getElementById("b1").onclick = Ex02Mostrar;
}
function Ex02Mostrar(){
    alert("Olá " + document.getElementById("Ex02-Nome").value + " !");
    return document.getElementById("b1").onclick = Ex02Limpar,  document.getElementById("Ex02-b1").innerHTML = "Limpar";
}
// ==================================================================================================================
// EXERCICIO-03
// FACA UMA DIV "BLINKANTE",


function Ex03Iniciar(){
    
    document.getElementById("Ex03-Div").style.height    = "400px";
    document.getElementById("Ex03-Div").style.width     = "100%";
    
    var cores = ["yellow","pink","blue","gray","black","red","green","orange","#e3e3e3","#c4c4c4","#d1d1d5","#a1a1a1"];
    var blikante = function(){
        document.getElementById("Ex03-Div").style.backgroundColor = cores[Math.floor(Math.random() * 11)];
    }
    setInterval(blikante,10);
}
