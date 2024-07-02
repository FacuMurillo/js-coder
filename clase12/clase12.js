
//* OPERADORES AVANZADOS / sugar syntax

//? Operador ++  
let i = 0;

i = i + 1; //? tradicional
i++       //? es lo mismo pero mas facil (suma uno)
i--       //? podemos restarlo tmb (resta uno)
// for(let i = 0; i < 10 ; i++){}

i *= 4; //? i = 4 porque i ya valia 1 ; i = i * 4 ;
i += i; //? 4 + 4 = 8 ; i = 8 

//? Operador ternario 
// if(20 > 30){
//     alert("Cumple");
// }
// else{
//     alert("No cumple");
// }

//? condicion ? casoTrue : casoFalse;

20 > 30 ? alert("Cumple") : alert("No cumple");

let edadCliente = 18;

let puedeVotar = edadCliente >= 18 ? true : false;
console.log(puedeVotar);

puedeVotar ? alert("Puede Votar") : alert("No puede votar");

//? ENCADENAMIENTO OPCIONAL

let usuario = document.getElementById("usuarioUno"); 
console.log( usuario); 

console.log( usuario?.nombre || "No se encontro el usuario"); //? hacemos esto para mostrar algo en caso de que nos confundamos al encontrar el id del elemento o simplemente porque no paso el valor nombre el usuario
//* agregamos el ? al final para evitar crasheo en caso de que este vacio

//? DESESTRUCTURACION

let alumnoUno = {
    nombre:"Pepe",
    apellido:"Rojas",
    edad:22
};
// let nombreAlumno = alumnoUno.nombre;
// let apellidoAlumno = alumnoUno.apellido;
// let edadAlumno = alumnoUno.edad;

let { nombre , apellido , edad } = alumnoUno;
console.log(nombre);
console.log(apellido);
console.log(edad);

//? desesctructarion arreglos 

let listaAlumnos = ["Pepe","Facu","Lucas","Maria"];

let [ clienteUno, clienteDos, clienteTres, clienteCuatro] = listaAlumnos;
//* no hay una referencia por lo que se guardan por posicionamiento
//? para dejar un elemento usamos , , seria asi:
//? let [ clienteUno ,   , clienteTres, clienteCuatro] = listaAlumnos;

//? SPREAD ...

console.log(listaAlumnos); //? te muestra un array[4]
console.log(...listaAlumnos); //? te muestra: Pepe Facu Lucas Maria