
//!       ARRAYS / ARREGLOS

let listaAlumnos = ["Facundo", "Mili", "matheo"];

console.log(listaAlumnos)

//!          CARACTERISTICA 
//1. ORDENADOS
//2. PUEDE TENER CUALQUIER VALOR ADENTRO

// para acceder      0     1   2       3     4
let listaRandom = ["Facu", 29, true, false, 22.22, ["Gato", "Perro" , "Raton"], {nombre: "Facundo", apellido: "Murillo"}];

console.log(listaRandom);
console.log(listaRandom[4]); // para acceder al dato 22.22 llamo a la variable y con [] para señarlar que es un array/arreglo

/* para acceder a array dentro de la array tenemos que colocar al lado del indice el indice de la segunda array 
por ejemplo */

console.log(listaRandom[5]); //acceso al indice 5 que es la lista 

console.log(listaRandom[5][1]); //acceso a la lista y llamo al indice 1 que seria "Perro"

console.log(listaRandom[6].nombre); 

console.log(listaRandom.length); //esto nos sirve para saber cuantos elemenots tenemos

// tambien podemos hacer un bucle para ir mostrando los elementos que tenemos en un arreglo

for(let i = 0 ; i <= listaRandom.length; i = i + 1){

        console.log("Vuelta: ", i);
        console.log(listaRandom[i]);
}

