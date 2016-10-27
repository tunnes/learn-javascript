/*
Exercicio-01
Faça uma pequena rotina para mostrar, a cadas mudança de um caixa de texto, uma 
palavra digitada na sua ordem reversa. se esta palavra for um palindromo pinte-a 
de vermelho(se não for volte a cor normal);

*/
$(ex03)

function ex01(){
    $("#nome01").blur(function(){
        palavra = $("#nome01").val();
        palavra == reverso(palavra) ? mudaCor("red") : mudaCor("black");
    });
    var reverso = function(palavra){
        return [].slice.call(palavra).reverse().join("");
    };
    var mudaCor = function(cor){
        $("#nome01").css("color",cor);
    };
    
}

/*
Exercicio-02
Implemente uma pseudoclasse Conta com os componentes abaixo:
Atriobutos: nome e saldo
Métodos:    sacar(qt): Efetua um saque no valor de qt 
            se houver saldo. Se não houver saldo mostre 
            um alert.
            
            deposito(qt): Recebe um paraâmetro qt com 
            10 < qt < 100 e efetyua o depósito. Ovalor qt 
            deve ser multiplo de 10 tambem Caso não seja 
            possivel efetuar o depoisot mostre um alerta
            
            checarSalvdo(): Mostra o nome do cliente e 
            seu saldo disponivel
            
*/

var Conta = function(nome, saldo){
    this.nome   = nome;
    this.saldo  = saldo;

};  
    Conta.prototype.sacar       = function(qt){
        this.saldo > qt ? this.saldo -= qt : alert("Saldo Insuficiente!");
    };
    Conta.prototype.deposito    = function(qt){
        qt >= 10 && qt <= 100 && !(qt % 10) ? this.saldo += qt : alert("Deposito Negado");
    };
    Conta.prototype.checarSaldo   = function(){
        alert("Nome: "+this.nome +"\nSaldo: "+ this.saldo);  
    };

/*
Exercicio-03
Obs: imagem, depois vejo isso..
*/
function ex03(){
    $("#b2").dblclick(function() {parte02();  });
    $("p").eq(0).click(function() {parte01();  });
        
    var parte01 = function(){
        $("span").eq(0).html(parseInt($("span").eq(0).html())+1);
    }
    var parte02 = function(){
        $(".home").eq(0).hide();
    } 
}

/*
Exercicio-04
*/
function ex04() {
    const m = [].slice.call(document.getElementByTagName("p")).reduce(function(a, b) {
        return [ parseInt(b.style.backgroundColor.slice(0, 1), 16) + a[0]
               , parseInt(b.style.backgroundColor.slice(2, 3), 16) + a[1]
               , parseInt(b.style.backgroundColor.slice(4, 5), 16) + a[2]
               ];
    }, [0x0, 0x0, 0x0]).map(function(a) {
        return a / document.getElementByTagName("p").length;
    }).reduce(function(a, b) {
        return a + b;
    });
}
    
