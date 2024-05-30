// FUNCIONES 
/* function nombreDeFuncion(){
        
    bloque de codigo

}  
nombreDeFuncion() siempre se la llama una vez realizada la funcion para ejecutar
*/

function mayorDeEdad(){
    
    let edad = 30;
    
    if( edad >= 18){
        console.log("Bienvenido/a al sistema, eres mayor de edad");
    }
    else{
        console.log("No eres menor de edad");
    }
}
mayorDeEdad();  //la llamo a la funcion para que muestre en consola 

// SALUDAR A USUARIO

function saludarUsuario( nombreUsuario ){
    console.log("Bienvenido/a: ", nombreUsuario);
}

saludarUsuario("Facundo"); // el valor de "Facundo" se remplaza por nombreUsuario 

// MOSTRAR EL DOBLE DEL NUMERO INGRESADO

function dobleNum(numero){
    console.log("El numero ingresado es: ", numero);
    numero = numero * 2;
    console.log("El doble del numero es: ", numero);

    // console.log("El doble del numero es: ", numero * 2); directamente podemos hacer asi
}

dobleNum(20);
dobleNum(3.5);
dobleNum(92);

// Ejemplo de typeof

typeof(10); // sirve para saber que dato es 

function dobleNum2(numero){
    if( typeof(numero) == "number"){
        console.log("El doble de tu numero es: ", numero*2);
    }
    else{
        console.log("Tipo de dato incorrecto");
    }
}
dobleNum2(54);
dobleNum2("hola");
// TODAS LAS FUNCIONES RETORNAN ALGO SIEMPRE
function calcular(precioUno , precioDos){
    let total = precioUno + precioDos;
    let iva = total * 0.21;
    total = total + iva;

    return total // El return siempre esta aunque no lo especifiquemos
}
/*
let resultado = calcularTotal(1000, 2000);
console.log(resultado)   
*/

//  FUNCION CALCULAR IVA MAS COMPLEJA
function calcularIvaTotal(total){
    let iva = total * 0.21;
    return iva
}

function calcularTotal(precioUno , precioDos){
    let total = precioUno + precioDos;
    return total
}

let resultado = calcularTotal(5000 , 5000);

let resultadoConIva = resultado + calcularIvaTotal(resultado);

console.log(resultadoConIva);


// SCOPE


let nombreGlobal = "Luis"; // SCOPE GLOBAL
let nombre = "Facundo";
{
    // SCOPE LOCAL
    let nombre = "Facu";
    console.log(nombre);
    console.log(nombreGlobal);
    
}
console.log(nombre);