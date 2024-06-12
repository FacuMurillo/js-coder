
// METODOS DE ARREGLOS

let listaNombres = ["Pepe","Matheo","Laura","Luis","Juan","Antonella", "Pedro", "Tiago", "Valentina", "Camilo"];
console.log("Arreglo inicial: ", listaNombres);

// PUSH
listaNombres.push("Carlos"); // AGREGA UN ELEMENTO AL FINAL DEL ARREGLO
console.log(listaNombres);

// UNSHIFT 

listaNombres.unshift("Pablo"); // AGREGA UN ELEMENTO AL PRINCIPIO DEL ARREGLO
console.log(listaNombres);

// SHIFT 

listaNombres.shift(); // ELIMINA EL PRIMER ELEMENTO DEL ARREGLO PERO LO PODEMOS RETORNAR 
// Por ejemplo: haces un sistema de turnos, agregas con push un elemento y elimnas con shift el turno que sigue
console.log(listaNombres);

let turnoSiguiente = listaNombres.shift(); 
console.log("El proximo turno es de: ", turnoSiguiente);
console.log(listaNombres);

// POP

listaNombres.pop(); // ELIMINA EL ULTIMO ELEMENTO DEL ARREGLO Y AL IGUAL QUE EL SHIFT LO RETORNA
console.log("Arreglo con el pop: ", listaNombres);

// SPLICE

//splice(indice,cant de elem eliminados);
listaNombres.splice(3,2);
console.log("Arreglo con el splice ", listaNombres);

// JOIN

listaNombres.join(); // JOIN SIRVE PARA SEPARAR LOS ELEMENTOS, POR DEFAULT TE LOS SEPARA CON UNA ","
console.log("Arreglo con el Join", listaNombres.join());
console.log(listaNombres.join(" - "));

// SLICE

// SIRVE PARA SACAR ELEMENTOS DEL ARREGLO PERO NO LOS ELIMINA DEL ARREGLO INICIAL

//slice(inicio del indice, fin del indice);

let corte = listaNombres.slice(0,3);
console.log("Arreglo con el slice ", listaNombres); 
console.log("Resultado", corte);

// INDEX OF

//SIRVE PARA SABER EL INDICE DEL ELEMENTO QUE BUSCAMOS
console.log("El indice de Laura es: ", listaNombres.indexOf("Laura"));

// BUSCAR UN ELEMENTO Y ELIMINARLO 

let eliminarIndexOf = listaNombres.indexOf("Tiago");

listaNombres.splice(eliminarIndexOf , 1);

console.log("ELiminamos a tiago",listaNombres);

// REVERSE

listaNombres.reverse();// SIRVE PARA DAR VUELTA EL ARREGLO 
console.log("Lista al reves", listaNombres);





