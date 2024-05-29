// WHILE
/*
    mientras la condicion sea true/verdadero el codigo se ejecutara infinitamente hasta que la condicion sea falsa o haya un break

while( condicion ){

    codigo

} 
*/

let nombreUsuario = prompt("Ingrese su nombre o Salir");

while( nombreUsuario != "Salir"){
    console.log("Bienvenido/a al sistema: ", nombreUsuario);
    nombreUsuario = prompt("Ingrese su nombre o Salir"); // lo que hace esto es que no se convierta en un bucle infinito
}

// FUNCIONES PARSE

// parseInt sirve para volver numero un prompt o un String
// parseFloat tambien  
