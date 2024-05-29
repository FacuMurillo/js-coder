/* 
CICLOS E ITERACIONES

     FOR (SINTAXIS) 
for( desde; hasta; actualizacion){        
        codigo
}
 SIEMPRE SERA ASI, PUEDE VARIAR LAS VUELTAS (hasta) 
    let i = 0 es el iniciador
    i < 5 es las vueltas que hara
    i = i + 1 es la actualizacion de vuelta 

for( let i = 0; i <= 10 ; i = i + 1){

    console.log("Mensaje numero: ", i);

}
*/

// SI YO QUIERO QUE DE 10 VUELTAS NECESITO PONER i <= 10
 
// TABLA DE MULTIPLICAR
let numeroUsuario = 5;

for(let i = 0;i <= 10;i = i + 1){
    let resultado = numeroUsuario * i;
    console.log("El resultado es de : ",resultado)
}

// INTENTO DE LOGIN  

let usuarioRegistrado = "Facu";
let intentos = 1;

for(let i = 0 ; i < 5 ; i = i + 1){
    let nombreRegistrado = prompt("Ingrese su nombre");
    
    if( nombreRegistrado == usuarioRegistrado){
        console.log("Bienvenido/a al sistema: ", usuarioRegistrado);
        break;
    } 
    else if( intentos <= 3){   
        intentos = intentos + 1;
    }
    else{
        console.log("Superaste el limite de intentos")
        break;
    }
}

