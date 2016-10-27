
    function teste(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var docx = xhr.responseText; // readyState retorna passo -int;
                var obj  =  JSON.parse(docx); // Converte para um objeto JSON.
                document.getElementById('p1').innerHTML = obj.name;
                document.getElementById('p2').innerHTML = obj.number;
                
            }
        };
        xhr.open("GET", "https://jsonpy-romefeller.c9users.io/teste/Lol/6", true); // true = sincrono.
        xhr.send();
    }
    
    // o retorno xml de uma requisão ajax é lida como o DOM, ou seja para acessa-lo como objeto.
     function teste2(){
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var docx = xhr.responseXML; // readyState retorna passo -int;
                document.getElementById('p1').innerHTML = docx.getElementsByTagName('nome')[0].innerHTML;
                document.getElementById('p2').innerHTML = docx.getElementsByTagName('number')[0].innerHTML;
                console.log(docx.getElementsByTagName('nome')[0]);
            }
        };
        xhr.open("GET", "https://jsonpy-romefeller.c9users.io/xml/joao/19", true); // true = sincrono.
        xhr.send();
    } 
    
    function ex01(){
        var soma = 0;
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function(){
            if(xhr.readyState == 4 && xhr.status == 200){
                var docx = xhr.responseXML; // readyState retorna passo -int;
                for(var i = 0; i < docx.getElementsByTagName("info").length; i++){
                    console.log(docx.getElementsByTagName("info")[i]);
                    soma = soma + parseInt(docx.getElementsByTagName("info")[i].innerHTML);
                }
                console.log("Soma = " + soma);
                console.log("Media = " + soma / parseInt(docx.getElementsByTagName("info").length));
            }
        };
        xhr.open("GET", "https://jsonpy-romefeller.c9users.io/exercicio/ayrton-tarcisio", true); // true = sincrono.
        xhr.send();
        
        
    }
    
    function ex02(){
      var nome = document.forms.formulario.nome.value;
      var ox   = parseInt(document.forms.formulario.ox.value);
      var oy   = parseInt(document.forms.formulario.oy.value);
      var resposto = "";
      alert(nome[ox.oy]);
      //Jeito masculo 
      for(var i = ox; i < oy; i++){
        resposto = resposto + nome[i];
      }
      alert(resposto);
      
      //Jeito não tao masculo assim..
      //if(ox <= oy){
      //  document.getElementById("resp").innerHTML = nome.substring(ox,oy);
      //}else{
        //    alert("Lembre-se X <= Y ");
     // }
    }

    
  
    
    