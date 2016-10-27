function teoricReduce(){
    var soma = [1,2,3,4,5,6,7,8,9,10].reduce(function (e,a){
        return e + a;
    },0);
    console.log(soma);
};
function origameAoContrario(){
    var  resposta = [];
    var res = [55].reduce(function(e,a){
        return resposta.push(e - a);
    },54);
};

//Exemplo01 Dado um array [1,3,10,9,10,1] retorne [-1,-3...];
function exemplo01(){
    var arr = [1,3,10,9,10,1].map(function(e){
        return -e;
    });
};
//Ex02 Faça uma rotina que pinte todos os paragrafos de amarelo
function ex02(){
    var arr = [].slice.call(document.body.querySelectorAll("p"));
        arr.forEach(function(e,i){
            
        });
};
//  Ex03 Dado paragrafo de uma pagina retorne todos os seus, conteudos de forma concatenada.
    function ex01(){
        
    };


//  Ex01 Faça uma função que receba uma string v e retorne seu reverso function reverso(v){ //complete }
    function ex01cancelado(){
        var string = "UmaStringAqui";
        string.filter(function(e){
                
        });
    }
    // Foi cancelado.
    
//  Ex01 Faça uma função que a partir da seguinte estrutura <p>1<p><p>2<p><p>3<p>...<p>7<p> retorne o maior elemento.
    function ex01(){
        var array = [].slice.call(document.body.querySelectorAll("p"));
            array.reduce(function(a,e){
                return e.innerHtml > a.innerHtml ? e.innerHtml : a.innerHtml;
            },0);
    }
    //  Patrick mostrou o if ternario e > a ? a = e : e 
    //  onde antes da interrogação é a condição e depois a ação.
    
//  Ex02 uma função que mostre na tela o conteúdo string dos parágrafos que não possua o conteúdo "Ignorar"
//  HTML: <p> Ola </p> <p> Ignorar </p>  <p> Mundo </p>
//  Deve mostrar na tela dois alerts: "Ola" e "Mundo".
    function ex02(){
        var array = [].slice.call(document.body.querySelectorAll("p"));
            array = array.filter(function(e){
                    return e.innerHtml != "Ignorar";    
                });
            array.forEach(function(e){
                alert(array.innerHtml);
            });
    }  

    
//  Ex03 Faça uma função que pinte de vermelho as divs de índice par e de amarelo as ímpares.
    function ex03(){
        var array = [].slice.call(document.body.querySelectorAll("div"));
            array = array.forEach(function(e){
               parseInt(e.innerHtml)%2 == 0 ? e.backgroundColor = "yellow" : e.backgroundColor = "red"; 
            });
    }   
/*    


4) Faça uma função que a partir de um array
de elemento que possua a classe ".classe"
retorne um array dos mesmos com o color
amarelo.
*/