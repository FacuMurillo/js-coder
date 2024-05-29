        // Control de flujos //
// Operadores relacional o condicional sirve para comprobar si los dos numeros son iguales 
// con true o false 

console.log( 250 == 100 ); //false
console.log( 250 == 250 ); // true
console.log( 30 == "treinta" ); // false

console.log( "facu" == "Facu");// False
console.log( "Facu" == "Facu "); //False por el espacio
console.log( "Facu" == "Facu"); //true

console.log( 30 == "30");// true pero ojo uno es un numero y otro es una string 
console.log( 30 === "30");// false porque son distitnto tipos de datos

// = asignacion 
// == igualdad de valores 
// === extrictamente igualales de valor y tipo de datos

//  MAYOR >
console.log( 50 > 25); //true
console.log( 120 + 20 > 160 - 10);// false

// MENOR <
console.log( 100 < 200);// true
console.log( 250 - 50 < 150 + 30);//false

// MAYOR O IGUAL / MENOR O IGUAL
console.log( 100 <= 120); //true
console.log( 45 + 10 >= 55); //true

//NO ES IGUAL O DISTINTO != 

console.log( 100 != 99); // true / se podria leer el PRIMERO en este caso 100 es distinto del segundo (99)
console.log("Facu" != "Facu") // false

// CONDICIONALES 

// IF ---> SI

// SI condicion 
//     bloque de codigo
let edadUsuario = 19;

if(edadUsuario >= 18){
    console.log("Bienvenido/a al sistema");
} 
else{
    console.log("No podes ingresar");
}

// SUMAR O RESTAR NUMEROS

let numUno = 22;
let numDos = 50;

let operacion = prompt("Ingrese la palabra SUMA o RESTA / + o - ");

if( operacion == "SUMA" || operacion == "+"){
    let suma = numUno + numDos;
    console.log(`El resultado de la suma es de ${suma}`);
} 
else if( operacion == "RESTA" || operacion == "-"){
    let resta = numUno - numDos;
    console.log("El resultado de la resta es de: ", resta);
}
else{
    console.log("Operacion no encontrada ", operacion);
}

// OPERADORES LOGICOS//

// AND ----> Y ----> &&
// OR ----> O ----> || 

// Y
console.log( 10 > 5 && 29 < 30); //true

// O
console.log( 22 == 22 || 55 > 50);//true