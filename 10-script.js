// SQ5, ex5.10 - valor das maças
let QuantidadeDeMaças = Number(prompt("Quantas maçãs você vai levar ?"))

if(QuantidadeDeMaças < 12){
   alert("essa quantidade, o valor ficara de " + ( QuantidadeDeMaças * 0.30) + " R$")
}
else if(QuantidadeDeMaças >= 12){
     alert("essa quantidade,o valor ficara de "+(QuantidadeDeMaças * 0.25) + " R$")
}else{
    alert("por favor, coloque um numero válido de maças")
}