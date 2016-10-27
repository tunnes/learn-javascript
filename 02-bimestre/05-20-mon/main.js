$(exemplo);

function exemplo(){
    var palavras = [].slice.call(document.querySelectorAll("p"));
    
    //  Coletando o texto em caixa baixa..
    palavras = palavras.map(function(elemento){
        return elemento.innerHTML.toLowerCase();
    });
    
    
    palavras = palavras.filter(function(elemento){
        var p = [].slice.call(elemento);
        //alert(p);
        return p.filter(function(x) {
            return x == 'a' || x == 'e' || x == 'i' || x == 'o' || x == 'u';
        }); 
    });
    
    alert(palavras);
    
    //palavras = palavras.forEach(function(elemento){
    //   console.log(elemento); 
    //});
}