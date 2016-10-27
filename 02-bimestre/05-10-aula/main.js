//$(ex04);
// Conceito "OBJETOS" e "CLASSES" ============================================================================

// Não existe classe no JavaScript, ou seja um objeto não precisa de uma classe. Só existem pseudo Classes, 
// quando tiver tempo é bom ler o livro: "JavaScript the Good Parts" a aula de hoje é baseada nele

//      Obs¹: Boylerplayte é quando o codigo fica extenso e chato.
//      Obs²: DOM é Document Objet Model..
//      Obs³: Pseudo significa falso..

function teste(){
    var cachorro = {nome:"Bidu"};
};

// ===========================================================================================================

//  Ex01 ======================================================================================================
//  Crie um objeto calculadora, com atributos x e y. Faça os métodos somar e multriplicar que opera sobre 
//  esses atributos:
    function ex01(){
        var Calculadora = function(x,y){
            this.x = x || 3;
            this.y = y || 3;
        };
        Calculadora.prototype.somar = function(){
            return this.x + this.y;
        };
        Calculadora.prototype.multriplicar = function(){
            return this.x * this.y
        };
        
        var calc = new Calculadora();
        var clac = new Calculadora(4,4);
        console.log(calc.somar());
        console.log(clac.somar());
        
    }

//  ===========================================================================================================
//  Ex02 ======================================================================================================
//  Faça um objeto contador com um atributo conta e um método incrementar (soma 1 ao contador). Crie um botão 
//  que ao clicar mostra em uma tag p o valor novo do contador
    function ex02(){
    $("#btnex2").click( function(){
        var contador =  {conta:0, incrementar: function(){ return this.conta + 1;}};
        contador.conta = parseInt($("#pex1").html());
        $("#pex1").html(contador.incrementar());
    });
    
}
//  ===========================================================================================================
//  O this precisa do new 
//  O nome de instancias new apartir de uma função
//  CRIAR SEMPRE O NOME DE FUNÇÕES COM LETRA MAIUSCULA!
//
//  Ex03 ======================================================================================================
//  Usando o prototype faça uma pseudoclasse Quadrado. Esta classe possui um lado e dois métodos, calcArea() lado x lado
//  e calcPerim() soma de todos os lados
    function ex03(){
        var Quadrado = function(lado){
            this.lado = lado;
        };
        Quadrado.prototype.calcArea = function (){
            return this.lado * this.lado; 
        };
        Quadrado.prototype.calcPerim = function(){
            return this.lado * 4;
        }
        
        var q1 = new Quadrado(10);
            console.log("Area do quadrado 01: "+q1.calcArea());
            console.log("Perimetro do quadrado 02: "+q1.calcPerim());
            console.log("==========================================");
        var q2 = new Quadrado(20);
            console.log("Area do quadrado 02: "+q2.calcArea());
            console.log("Perimetro do quadrado 02: "+q2.calcPerim());
        console.log("==========================================");
        var q3 = new Quadrado(30);
            console.log("Area do quadrado 03: "+q3.calcArea());
            console.log("Perimetro do quadrado 03: "+q3.calcPerim());
        
    }
//  ===========================================================================================================
//  Erança

//  Ex04 ======================================================================================================
        function ex04(){
            var Pessoa = function(pai){
                this.pai = pai;
            };

            Pessoa.prototype.apresenta = function (nome){
                return console.log("Oi meu nome é " + this.nome);
            };
        
            
            var GatoFalante = function(cor){
                this.cor = cor;
            };
            
            GatoFalante.prototype = new Pessoa();
            
            var gatoFalanteMad = new GatoFalante("Messias");
            
            gatoFalanteMad.apresenta(this.nome);
            
            
            
            
            
        }
// Ex seila -----------------------------------------------------------------------------------------------------
/*  Crie uma pseudo classe personagem todo personagem pode fugir (apenas um alert) Um ninja pode pular. nadar e aracar com duas maões. 
O cavaleiro pode atacar
*/

// Desafio do mouse
    function desafio(){
        $("#btnMouse").mouseover( function(){
                var x = event.clientX;
                var y = event.clientY;
                console.log("Clicou no x: "+ x +"Clicou no y: "+ y);
        });
        
    }