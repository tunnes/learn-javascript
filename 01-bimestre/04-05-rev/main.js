//  Revisão para o simulado
//  ============================================================================

//  Criando um novo elemento e enviando para o body;
    function novoElemento(){
        var p = document.createElement("p");
        p.innerHTML = ("Criei um novo elemento!");
        document.body.appendChild(p);
    }

//  Criando um array de elementos e o percorendo;
    function arrayElemento(){
        var elementos = [];
        for(var i = 0; i < 10; i++){
            var h1 = document.createElement("h1");
            elementos[i] = h1;
            elementos[i].innerHTML = ("Hey sou o titulo número " + i + "!");
            document.body.appendChild(elementos[i]);
        }
    }

//  Alterando o estilo de algum elemento;
    function alterandoEstilo(){
        var div = document.createElement("div");
            div.style.width  = "100px";
            div.style.height = "100px";
            div.style.backgroundColor = "red";
        document.body.appendChild(div);
    }

//  Carregando elementos do DOM para o script;
    function carregandoElementos(){
        var tudao = document.getElementsByTagName("p");
        for(var i = 0; i < tudao.length; i++){
            var quemSois = tudao[i].innerHTML;
            console.log("- Quem és tu? "+ quemSois + "!");
        }
    }

//  Criando e manipulando objetos do DOM e do script;