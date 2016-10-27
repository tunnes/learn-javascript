$(enviaAjax);
// Ex01 Faça um formulario, com duas caixas de texto e um botão. 
// -Ao focar em qualquer caixa, o fundo deve ficar amarelo, 
// -Ao  clicar no botão some dois numeros.
// -O input deve aceitar somente numeros.
// prova 07 de jun

function Ex01(){
    $("#ok").click(function(){
        alert(parseInt($("#n1").val()) + parseInt($("#n2").val()));
    });
    $("#n1, #n2").focus(function(){
        $(this).css("background-color","yellow"); 
    });
    $("#n1, #n2").blur(function(){
        $(this).css("background-color","white"); 
    });
}
// Ex02
// Em um formulario, há o campo de nome, sobrenome e idade.
//  Faça também um botão fora dele (tag button). Ao clicar
//  neste botão crie um objeto da forma:
//  objeto = {nome:<nome digitado> sobrenome:<sobrenome digitado>, idade:<idade digitada>,};
//  Faça uma função exibir que recebe o objeto em questão e mostra via alert os valores do objeto.

function Ex02(){
    /*
    $("[name=nome],[name=sobrenome],[name=idade]").focus(function() {
        $(this).css("box-shadow","0 0 5px red ");
    });
    $("[name=nome],[name=sobrenome],[name=idade]").blur(function() {
       $(this).css("box-shadow","0 0 0px ");
    });
    */
    $("#btn02").click(function (){
        var objeto = {"nome":$("[name=nome]").val(), "sobrenome":$("[name=sobrenome]").val(), "idade":parseInt($("[name=idade]").val())};  
        alert("Nome:" + objeto.nome+"| Sobrenome:" + objeto.sobrenome+"| Idade:" + objeto.idade);
    });
}
// A diferença de usar aspas ou não no objeto varia do servidor que recebera o JSON.
// 

// Traversel $(#teste).not("Qual n quer") 
// ex $("#teste").not(teste).click(function(){});

// Traversel
// Ex03
// Pinte de amarelo todas as div que não possua o id "div1" e "div2"
// Ao clicar nos btns de indice 2 e 4, mostre seu coteudo html via alert.
function Ex03(){
    $("div").not("#div1, #div2").css("background-color","yellow");
    $("button").eq(2).click(function(){
        alert($(this).html());    
    });
    $("button").eq(4).click(function(){
        alert($(this).html());    
    });
}
function enviaAjax(){
         $("#btnEnvia").click(function(){
             $.ajax({
                 contentType: "application/json",
                 url: "https://learn-haskell-yesod-cloned-tunnes.c9users.io/cadastroAluno",
                 type: "POST",
                 data: JSON.stringify({"alunoNome":$("[name=nome]").val(),"alunoSobreNOme":$("[name=sobrenome]").val(),"alunoIdade":$("[name=idade]").val()}),
                 success: function(data) {
                     alert(data.resp);
                     $("[name=nome]").val("");
                 }
            })
         });
}


// 
    function mudaCor(){
        // document.getElementById("seila").style.background-color = cor;
    }
    function verificaTamanho(){
        // var seila = document.getElementById("seila").innerHTML.length;    
        // seila >= 8 && seila <=  12 ? mudaCor("red") : mudaCor("blue")
    }