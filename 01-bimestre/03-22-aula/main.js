/*
    1-  EXERCICIO FACE UMA FUNCAO QUE RECEBA UM VETOR DE ANIMAIS VIA PARAMETRO
        POR EXEMPLO: [{nome:"Bidu", tipo:"Cachorro"},
                      {nome:"Garfield", tipo:"Gato"},
                      {nome:"Felix", tipo:"Gato"},
                      {nome:"Branco", tipo:"Gato"},
                      {nome:"Erry", tipo:"Jabuti"},
                      {nome:"Ennel", tipo:"Jabuti"}]
                      
        Mostre o nome dentro de uma DIV e o tipo
        dentro de outra. Para cada animal, uma div
        deve ser criada de modo dinâmico.
                      
    2-  EXERCICIO CADA CACHORRO E CADA GARTO CRIE ESTILOS
        DIFERENTES (APROVEITE O EXERCICIO 01);
    
    3-  FACA UMA FUNÇÃO QUE RECEBA UM VETOR DE STRINGS  VIA PARAMETRO E MONTE
        UMA PAGINA CONTENDO ESSAS STRINGS DENTRO DE UMA DIV.
        
    4-  FACA UMA FUNCAO QUE RECEBA UM INTEIRO N E A PARTIR DELE MONTA N DIVS
        DE CORES DE FUNDO ALTERNADOS ENTRE RED, GREEN BLUE E YELLOW.
    
    5-  FACA UMA FUNCAO QUE RECEBA UM VETOR DE COTAÇÃO DE AÇÕES DOS ULTIMOS 
        DIAS DA SEGUNTE FORMA:
        
        [{id : "PETR4", valores : [3.2,3.5,3.8,4.1,3.5]},
        {id : "VALE5", valores : [10.85,10.54,10.77]},
        {id : "SBUX", valores : [22.55,23,23.20,23,22.80,22.77]}
        {id : "MSFT", valores : [100,100.20,102.77,101.55]}]
 
        Mostre a media dos valores das empresas
        e seu nome em forma tabela.
*/

//  Ex-001 ============================================================
    function ex01(animais){
        for(var i = 0; i < animais.length; i++){
           // alert(animais.length)
            var div     = document.createElement("div");
            var divNom  = document.createElement("div");
            var divTip  = document.createElement("div");
            divNom.innerHTML = "Nome: " + animais[i].nome;
            divTip.innerHTML = "Tipo: " + animais[i].tipo;
            
            div.appendChild(divNom);
            div.appendChild(divTip);
            document.body.appendChild(div);
        }
    }
    function tesEx01(){
        var animais = [{nome:"Bidu", tipo:"Cachorro"},
                      {nome:"Garfield", tipo:"Gato"},
                      {nome:"Felix", tipo:"Gato"},
                      {nome:"Branco", tipo:"Gato"},
                      {nome:"Erry", tipo:"Jabuti"},
                      {nome:"Ennel", tipo:"Jabuti"}];
                      
        ex01(animais);
    }
// ====================================================================

//  Ex-002 ============================================================
        function ex02(animais, cor){
        for(var i = 0; i < animais.length; i++){
            var div     = document.createElement("div");
            var divNom  = document.createElement("div");
            var divTip  = document.createElement("div");
            divNom.innerHTML = "Nome: " + animais[i].nome;
            divTip.innerHTML = "Tipo: " + animais[i].tipo;
            
            div.style.backgroundColor = cor[Math.floor(Math.random() * 3)];
            
            div.appendChild(divNom);
            div.appendChild(divTip);
            document.body.appendChild(div);
            
        }
        }
        function tesEx02(){
        var animais = [{nome:"Bidu", tipo:"Cachorro"},
                      {nome:"Garfield", tipo:"Gato"},
                      {nome:"Felix", tipo:"Gato"},
                      {nome:"Branco", tipo:"Gato"},
                      {nome:"Erry", tipo:"Jabuti"},
                      {nome:"Ennel", tipo:"Jabuti"}];
                      
        var cor =  ["red","blue","green"]
                      
        ex02(animais, cor);
        }
    
// ====================================================================
//  Ex-003 ============================================================
    function tesEx03(){
        var strings =  ["Lorem ","ipsum","dolor","dolor","sit amet","consectetuer"];
        
        ex03(strings);
        
    }
    function ex03(strings){
        for(var i = 0; i < strings.length; i++){
            var cadaDiv = document.createElement("div");  
            cadaDiv.innerHTML = strings[i] + " ";
            cadaDiv.style.display = "inline";
            document.body.appendChild(cadaDiv);
        }
    }
    
// ====================================================================
//  Ex-004 ============================================================
    
    function ex04(){
        var cor =  ["red","blue","green","yellow"]
        var n = parseInt(document.getElementById("numero").value);
        //alert(parseInt(document.getElementById("numero").value));
        for(var i = 0; i < n; i++){
            var divAleat = document.createElement("div");
            divAleat.style.width = "200px";
            divAleat.style.height = "200px";
            divAleat.style.backgroundColor = cor[Math.floor(Math.random() * 4)];
            divAleat.style.border = "1px solid black";
            divAleat.style.display = "inline-block";
            document.body.appendChild(divAleat);
        }
    }
// ====================================================================
//  Ex-005 ============================================================
    function ex05(cotacao){
        var table    = document.createElement("table");
        var th1       = document.createElement("th");
        var th2       = document.createElement("th");
        var th3       = document.createElement("th");
        
        table.style.border = "1px solid #e0e0e0";
        
        th1.innerHTML = "EMPRESA";
        th1.style.backgroundColor = "#c3c3c3";
        th1.style.padding = "2px 5px 2px 5px";

        table.appendChild(th1);
        th2.innerHTML = "COTACAO";
        th2.style.backgroundColor = "#c3c3c3";
        th2.style.padding = "2px 5px 2px 5px";
        
        table.appendChild(th2);
        th3.innerHTML = "MEDIA";
        th3.style.backgroundColor = "#c3c3c3";
        th3.style.padding = "2px 5px 2px 5px";
        
        table.appendChild(th3);
        
        for(var i = 0; i < cotacao.length; i++){
           var media       = 0;
           var tr          = document.createElement("tr");
           
           var tdEmp       = document.createElement("td");
           tdEmp.style.padding = "2px 5px 2px 5px";
           var tdCot       = document.createElement("td");
           tdCot.style.padding = "2px 5px 2px 5px";
           var tdMed       = document.createElement("td");
           tdMed.style.padding = "2px 5px 2px 5px";
           
           tdEmp.innerHTML = cotacao[i].id;
           tdCot.innerHTML = cotacao[i].valores;
           for(var x = 0; x < cotacao[i].valores.length; x++){ media = media + cotacao[i].valores[x]; };
           tdMed.innerHTML = media/cotacao[i].valores.length;
           
           tr.appendChild(tdEmp);
           tr.appendChild(tdCot);
           tr.appendChild(tdMed);
           
           table.appendChild(tr);
        
        }
          document.body.appendChild(table);
    }
    function tesEx05(){
        
        
        var cotacao =  [    {id : "PETR4", valores : [3.2,3.5,3.8,4.1,3.5]},
                            {id : "VALE5", valores : [10.85,10.54,10.77]},
                            {id : "SBUX", valores : [22.55,23,23.20,23,22.80,22.77]},
                            {id : "MSFT", valores : [100,100.20,102.77,101.55]}];
                      
        ex05(cotacao);
    }
// ====================================================================
/*   function umaFuncaoQualquer(parametro){
       console.log(parametro[2]*2);
   };
   
   function qualquerNomeIdiota(){
       
        var assimDoNada = [10, 20 ,30];
        
        
        umaFuncaoQualquer(assimDoNada);
   };
*/   
   