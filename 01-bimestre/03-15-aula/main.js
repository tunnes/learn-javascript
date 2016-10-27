//TRABALHANDO COM FORMS
function teste(){
    //form1 eh o nome do formulario
    //o nome eh o nome do input.text
    var nome = document.forms.form1.nome.value;
    //Query selector aceita qualquer seletor css..
    document.querySelector("#p1").innerHTML = nome;
}
function validar(){
    var nome = document.forms.form1.nome.value;
    if(nome == ""){
        alert("Nome Invalido");
        return false;
    }else{
        return true;
    }
}

// EXERCICIO 01 ================================================================
// CRIE UMA VALIDÇÃO PARA UM FORMULARIO COM O CAMPO EMAIL 
// O EMAIL DEVE POSSUIR UM @ E AO MENOS DOIS CARACTERES 
// APOS O PENULTIMO PONTO.
// Ex:  a@b.co          -> VALIDO
//      aa@bbc.c        -> INVALIDO
//      aa@bbc.com.br   -> VALIDO
//      aa@bbc.co.jp    -> VALIDO
// 
function Ex01(){
    var email = document.forms.formEx01.email.value;
    for( var i = 0; i < email.length; i++){
        if( email[i] == "@" && email[i+1] != "."){
            if (email[0] == "@"){
                alert("Invalido - Iniciar com '@'!");
                return false;
            }else if(email.split(".")[1].length > 1){
                alert("Válido");
                return true;
            }else{
                alert("Invalido - Dois caracteres após '.'!");
                return false;
            }
        }
    }
    alert("Invalido - Não possui '@' ou Dominio invalido!");
    return false;
}
//==============================================================================

//  PAGINAS DINAMICAS:
//  travesel percorer o dom appendChild || createtextNode || insertBefore & 
//  insertAfter no mesmo nivel
//  quetySelctorAll = pega tudo e retorna um vetor

function t(){
    var div = document.querySelector("div");
    var p = document.createElement("p");
    var p1 = document.createElement("p");
    var texto = document.createTextNode("Ola");
    p.appendChild(texto);
    div.appendChild(p);
    p1.innerHTML = "Aqui";
    document.body.insertBefore(p1,div);
}

/*  EXERCICIO 02 ================================================================
    FACA UMA FUNCAO QUE RECEBA UM VETOR DE ALUNOS EX [{nome:"Ana" nota:9.9},...]
    MONTE UMA PAGINA ONDE CADA ALUNO DE VE ESTAR DENTRO DE UMA DIV E NOME E NOTA 
    DENTRO DE UMA LISTA NÃO ORDENADA.
*/
function mostraAluno(alunos,cor,fonte){
    var stc = document.getElementById("wrapper");
        
    for(var i = 0; i < alunos.length; i++){
            
        var div     = document.createElement("div");
        var ul      = document.createElement("ul");
        var liNom   = document.createElement("li");
        var liNot   = document.createElement("li");
            
        div.appendChild(ul);
        div.style.backgroundColor = cor[Math.floor((Math.random() * 4) + 0)];
        div.style.fontSize = fonte[Math.floor((Math.random() * 2) + 1)];
        
        alert(Math.floor((Math.random() * 4) + 1));
        ul.appendChild(liNom);
        liNom.innerHTML = alunos[i].nome;
        ul.appendChild(liNot);
            
        liNot.innerHTML = alunos[i].nota;
        stc.appendChild(div);
        
        // Poderia também ter colocado direto no body.. mas iria ficar meio zuado.
        // document.body.appendChild(div)
        }
}

function teste(){
    var alunos = [
        {nome:"Ana", nota: 7.0},{nome:"Joao", nota: 8.1},
        {nome:"Joana", nota: 9.0},{nome:"Anajão", nota: 7.0},
        {nome:"Janana", nota: 5.1},{nome:"Onaja", nota: 5.8},
        {nome:"Naja", nota: 8.0},{nome:"Jana", nota: 10}
    ];
    var cor = ["red","blue","green","yellow","gray","pink"];   
    var fonte = ["12px","14px","16px","20px","18px","8px"];   
    
        mostraAluno(alunos, cor, fonte);
}