let distancia = Number(prompt("Digite a distância em km: "));
let velocidade = 300000
let segundos = distancia / velocidade;
let minutos, horas, dias, meses, anos;

// if ( segundos < 60){
    alert('A viagem vai durar ' + segundos + ' segundos!');
// }
if(segundos >= 60){
    minutos = segundos / 60;
    alert('A viagem vai durar ' + minutos + ' minutos!');
}

  if(minutos >= 60){
    horas = minutos / 60;
    alert('A viagem vai durar ' + horas + ' horas!');
}

  if(horas >= 24){
    dias = horas / 24;
    alert('A viagem vai durar ' + dias + ' dias!');
}
  if(dias >= 30){
    meses = dias / 30;
    alert('A viagem vai durar ' + meses + ' meses!');
}

  if(meses >= 12){
    anos = meses / 12;
    alert('A viagem vai durar ' + anos + ' anos!');
}