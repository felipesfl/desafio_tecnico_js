function conversorFahrenheit(celsius){
    const fahrenheit = (celsius * 1.8) + 32
    return fahrenheit
}

function conversorCelsius(fahrenheit){
    const celsius = (fahrenheit - 32) * 1.8
    return celsius
}

console.log(conversorCelsius(60))