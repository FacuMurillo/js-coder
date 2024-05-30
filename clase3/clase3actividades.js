// ACTIVIDADES

// 1)
/* INGRESE UN NUMERO Y MOSTRAR EL SIGUIENTE SE FINALIZA CUANDO HAYA UN NUMERO NEGATIVO
*/
let numero = 0;

while( numero >= 0){
    numero = parseInt(prompt("Ingrese un numero positivo y le muestro el siguiente"));
    console.log("El numero que ingreso es de: ", numero);
    console.log("El numero siguiente es: ", numero+1);
}
// 2) SUMA MAYOR A 500 NO MOSTRAR

 for(let i = 0 ; i <= 10 ; i = i + 1){
     let numUno = parseInt(prompt("Ingrese un numero"));
     let numDos = parseInt(prompt("Ingrese un segundo numero"));
     let resultado = numUno + numDos;
    if(resultado <= 500){
        console.log("El resultado de la suma es de: ", resultado);
    } 
    else if(resultado >= 500){
        console.log("La suma que realizaste supero 500");
        break
    }
} //DE QUE FUNCIONA FUNCIONA JAJAJAJ PERO NO ES ASI

let acu = 0;

while( acu <= 500){
    let num = parseInt(prompt("Ingrese un numero"));
    acu = acu + num;
    console.log("Acumulado hasta el momento: ", acu);
}

// 3) CLUB PEPITOS

let partidoA = 0;
let partidoB = 0;
let empate = 0;

for(let i = 0; i < 10; i = i + 1){
    let votacion = prompt("Selecciona una opcion: A o B o Nulo");
    if(votacion == "A" || votacion == "a"){
        partidoA = partidoA + 1;
    }
    else if (votacion == "B" || votacion == "b"){
        partidoB = partidoB + 1;
    }
    else{
        empate = empate + 1;
    }
}
console.log("El resultado final de partido A es: ", partidoA + "\nEl resultado final de partido B es: ", partidoB + "\nVoto Nulo es: ", empate);    
