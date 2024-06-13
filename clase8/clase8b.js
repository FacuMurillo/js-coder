//* EXTRAS
//* STRINGS + METODOS 

let nombre = "Facu";
console.log( nombre );

console.log( nombre[0] );
console.log( nombre[1] );
console.log( nombre[2] );
console.log( nombre[3] );

//! propiedad 

let nombreDos = "Facundo";
console.log( nombreDos.length );


//! metodos

let nombreTres = "fAcuNdo";
console.log(nombreTres.toUpperCase() ); //? las hace mayusculas

console.log(nombreTres.toLowerCase() ); //? las hace minusculas

//* TRIM
//? saca los espacios de adelante y atras. no los del medio de un string

let usuario = "                Facu";

console.log(usuario);
console.log(usuario.trim());

//* SPLIT

let usuarios = "Facu Maria Lucas";
let listaUsuarios = usuarios.split(" ");
console.log(usuarios);
console.log(listaUsuarios);

let usuariosDos = "Facu,Maria,Lucas,Mauro";
let listaUsuariosDos = usuariosDos.split(",");
console.log(usuariosDos);
console.log(listaUsuariosDos);