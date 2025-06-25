// SQ5, ex5.8 - votos
let idade 

idade = prompt("para votar voce precisa informar sua idade")
if(idade >= 18 && idade <= 65){
    alert("Voce pode votar, voto obrigatorio")
}
if(idade < 16){
    alert("Voce nao é permitido a votar")
}
if(idade >= 16 && idade <= 17){
    alert("voce podera votar, sendo voto facultativo")
}
if(idade>=65){
    alert("voce podera votar, sendo voto facultativo")
}