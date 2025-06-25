// SQ5, ex5.9 - peso ideal
    let altura = Number( prompt("qual sua altura em M?"))
    let genero = prompt("qual seu gênero? (M ou F)")
    let pesoIdeal
    if(genero == "F"){
        alert("seu peso ideal é: " + (62.1 * altura - 44.7 + "kgs"))
    }else if(genero == "M"){
        alert("seu peso ideal é: " + (72.7* altura -58 + "kgs"))
    }else{
         alert("por favor, coloque M ou F(M para masculino e F para feminino)")
    }