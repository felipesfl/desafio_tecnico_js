function calcularFaixaEtária(idade){
    if( idade > 0 && idade <= 12){
        console.log("Você é uma criança")
    } else if(idade >= 13 && idade <= 17){
        console.log("Você é um adolescente")
    } else if(idade >= 18 && idade <= 59){
        console.log("Você é um adulto")
    } else{
        console.log("Você é um idoso")
    }
}

console.log(calcularFaixaEtária(20))