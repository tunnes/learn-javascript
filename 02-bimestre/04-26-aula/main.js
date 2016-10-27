$(Desa)
// Exemplo do pro
function main(){
    $("p").click(function(){
    alert($(this).html());
 });
}
// Ex01 Mostre na tela o conteudo HTML das tags  
//      marcadas com a class css my-class.
function Ex01(){
    $(".my-class").click(function(){
    alert($(this).html());
 });
}
// Ex02 Para sumir use a função jQuery .hide().
function Ex02(){
    $(".my-class, #t1").click(function(){
    alert('Adeus "/');
    $(this).hide();
    
 });
}
// Ex03 Suma sem usar o hide()
function Ex03(){
    $(".my-class, #t1").click(function(){
    alert('Adeus "/');
    $(this).css("display","none");
    
 });
}
// Ex04 Ao clicar em qualquer div, mude seu conteudo
//      para clicado e sua cor de fonte para azul.
function Ex04(){
    $("div").click(function(){
    $(this).html("Clicado");
    $(this).css("color","blue");
    
 });
}
// Ex05 Em uma pagina há a seguinte tag <p>1<p> ao clica-lo o numero em seu conteudo html.
function Ex05(){
    $("p").click(function(){
    $(this).html(parseInt($(this).html()) + 1);
 });
}
// Ex06 implementar o slootToogle na mão. +1 na media

function Desa(){
    alert("teste");
    $(".d-content").hide();
    $(".d-header").click(function(){
    $(this).next().css("display","block")
    $(this).next().css("overflow","hidden")
    for( var i; i < 358882; i++)    { $(this).next().css("height", i)}
    $(this).next().css("padding-top", "0")
    for( var i; i < 149521; i++)   {$(this).next().css("margin-top", i)}
    $(this).next().css("padding-bottom","0")
    for( var i; i < 149521; i++)   {$(this).next().css("margin-bottom", i)}
    });
}

// Ex06 Considere uma lista não ordenada e um paragrafo exemplo:
//<p>Menu</p>
//<ul>
//  <li>Menu<li>
//  <li>Menu<li>
//</ul>
// Ao clicar no paragrafo a lista nao ordenada deve sumir com o efeito.
function Ex06(){
    $(".sub-menu").hide();
    $(".menu").click(function(){
        $(this).next().slideToggle(500);
    });
}