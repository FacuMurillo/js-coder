
// SIMULADOR DE CUOTAS

function calcularIntereses(monto, cuotas){
    if(cuotas == 1){
        return monto
    }
    else if(cuotas == 3){
        let interes = monto * 0.30;
        return interes
    }
    else if(cuotas == 6){
        let interes = monto * 0.60;
        return interes
    }
    else if(cuotas == 12){
        let interes = monto * 0.95;
        return interes
    }
}

let monto = prompt("Ingrese monto que desea:"); // pido el monto que quiere
monto = parseInt(monto);

let cuotas = parseInt(prompt("Ingrese la cantidad de cuotas: 1, 3, 6 o 12")); // pido las cuotas

let mostrarTotal = monto + calcularIntereses(monto, cuotas); // sumo el monto que quiere y la funciona determina cuanto se suma de interes al resultado final que seria mostrarTotal

console.log("El monto total que deberas pagar es de: ", mostrarTotal);
console.log("El monto que quieres es de: ", monto);
console.log("Las cuotas que quieres: ", cuotas);
