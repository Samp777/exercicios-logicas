// SQ5, ex5.7 - conta do mano juca
let dias = Number(prompt("quantos dias voce quer ficar? "))
let ValorDaDiaria 
let Desconto10 = 0.10
let Desconto15 = 0.15
let multa = 150
let totalBruto
let ValorTotal 

if(dias <= 5){
 ValorDaDiaria = 100 
}
if(dias >= 6 && dias <=10){
 ValorDaDiaria = 90 
}  
if(dias >11){
 ValorDaDiaria = 80 
} 

totalBruto = dias * ValorDaDiaria
Desconto10 = totalBruto * 0.1
Desconto15 = totalBruto *0.15
ValorTotal = totalBruto - Desconto10 - Desconto15 + 150
alert("total bruto: R$ "+ totalBruto +
    "\ndesconto 1: R$" + Desconto10 +
    "\ndesconto 2: R$ " + Desconto15 +
    "\nmulta de R$ " + multa +
    "\nsua conta deu: " + ValorTotal )