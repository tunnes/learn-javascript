/*========================
    Objeto Revolver
========================    

Crie um tipo de objeto Revolver com os atributos:
maximoBalas, balas

E os métodos:
atirar() e recarregar()

A cada tiro a quantidade de balas diminui em 1.
Ao recarregar, a quantidade de balas aumenta em 1. */
function exMelissa(){
    var Revolver = function (municao){
    this.municao = municao; 
    }
        Revolver.prototype.atirar = function(){
            return this.municao--;}
        Revolver.prototype.recaregar = function(){
            return this.municao++;}    
}


