// Tarcisio mandou estudar requisiçoes para serv
// Cors e JSONP: Obriga a retornar uma requisição.
// https://pt.wikipedia.org/wiki/Pol%C3%ADtica_de_mesma_origem
// https://pt.wikipedia.org/wiki/JSONP
// query selector all retorna a lista ai é preciso especificar.
function criaHeader(){
    var div = document.createElement("div");
    div.style.height = "400px";
    div.style.backgroundColor = "#c6c6c6";
    document.body.appendChild(div);
    var div2 = document.querySelector('div');
    for(var i = 0; i < 100000; i++){
    
        var p = document.createElement('p');
        div2.appendChild(p);
        p.innerHTML = "&WE@W&*@#¨*(@&#¨*&#$¨@#&*$¨*#&$¨#&*@";
    }
    
};