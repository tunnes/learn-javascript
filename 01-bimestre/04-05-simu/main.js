function Ex01(vetorClientes){
    var somaSalario = 0;
    var mediaIdade = 0;
    var tabela = '<table id="tabela">';
    tabela += "<thead>";
    tabela += "<th>Nome</th>";
    tabela += "<th>Idade</th>";
    tabela += "<th>Salario</th>";
    tabela += "</thead>";
    for(var i = 0; i < vetorClientes.length; i++){
        tabela += "<tr>";
        tabela += "<td>"+vetorClientes[i].nome+"</td>";
        tabela += "<td>"+vetorClientes[i].idade+"</td>";
        tabela += "<td>"+vetorClientes[i].salario+"</td>";
        tabela += "</tr>"
        somaSalario += vetorClientes[i].salario;
        mediaIdade  += vetorClientes[i].idade;
        
    }
    mediaIdade = mediaIdade/vetorClientes.length;
    tabela += "</table>";
    
    tabela += "<p>A soma total de salarios é "+somaSalario+"</p>";
    tabela += "<p>A media das idades é:"+mediaIdade+"</p>";
    document.write(tabela);
}
function teste(){
    var cliente = {nome:"Ayrton", idade:20, salario:1000 };
    var vetorClientes = [cliente, cliente, cliente, cliente];
    Ex01(vetorClientes);
}

//==============================================================================
function Ex02(){
    var botao = document.getElementById("b1");
    var mudaCor = function(){
        var p = document.getElementsByTagName("p");
        var div = document.getElementsByTagName("div");
        for(var i = 0; i < p.length; i++){
            p[i].style.backgroundColor = "blue";
        }
        for(var i = 0; i < div.length; i++){
            div[i].style.backgroundColor = "red";
        }
    }
    botao.onclick = mudaCor;
}
//==============================================================================
function Ex03onFocus(text){
        text.style.backgroundColor = "yellow";
}
function Ex03onBlur(text){
        var numero = parseInt(text.value) % 2;
        if (numero == 0) {
            text.style.backgroundColor = "green";
        }else{
            text.style.backgroundColor = "blue";
        }
}

//==============================================================================
function Ex04(){
    var div = document.querySelector("div");
    var largura = 5;
    var janela = window.innerWidth;
    
    var f = function (){
        div.style.width = largura +"px";
        if (largura < janela){
            largura +=  10;
        }else{
            largura = 5;
        }
        
    }
    var x = setInterval(f, 100); 
    clearInterval(x);
}
//==============================================================================
// Treinando Cury

function olaCurr(saudacao) {
    return function(nome) {
                alert(saudacao + ", " + nome + "!");
                return function(convite){
                        alert(nome + "," + convite);
                        return function(quanto){
                        alert(nome + ", só" + quanto +"vezes? :O");    
                        };
                };
    };
}

