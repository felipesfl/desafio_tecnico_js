function calcularIMC(peso, altura){
    const imc = peso / (altura * altura) * 100
    return imc
}

console.log(calcularIMC(87, 1.78))