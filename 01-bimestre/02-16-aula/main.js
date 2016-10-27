media = (parseInt(ck.split(";")[1].split("=")[1])+ parseInt(ck.split(";")[2].split("=")[1]))/2
9.5

media = (parseFloat(aulunos[0].nota) + parseFloat(aulunos[1].nota) + parseFloat(aulunos[2].nota) + parseFloat(aulunos[3].nota) + parseFloat(aulunos[4].nota))/aulunos.length
8.4

for(var i in aulunos){total = total + parseFloat(aulunos[i].nota);} total/aulunos.length
8.4

for(var i in alunos){ 
	if(((parseFloat(alunos[i].notas[0]) + parseFloat(alunos[i].notas[1]))/2) < 6 ){
		if(((parseFloat(alunos[i].notas[0]) + parseFloat(alunos[i].notas[2]))/2) < 6){
			if(((parseFloat(alunos[i].notas[1]) + parseFloat(alunos[i].notas[2]))/2) < 6){
				console.log(alunos[i].nome);console.log("REPROVADO!")
			}else{
				console.log(alunos[i].nome);console.log("POR POUCO!")
			}
		} else{
				console.log(alunos[i].nome);console.log("UMM QUASE!")
			}

	}else{
				console.log(alunos[i].nome);console.log("DE PRIMEIRA!")
			}
}
SI003
	 = total + parseFloat(alunos[i].nota);} total/alunos.length
8.4

Pegar o code http://ide.c9.io/remofeller/jsaula0