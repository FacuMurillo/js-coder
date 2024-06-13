
            //! FUNCIONES DE ORDEN SUPERIOR II

//* REDUCE()
//? CUANDO NECESITAMOS REDUCIR UN ARREGLO A UN UNICO VALOR por ejemplo: UN CARRITO (mostrar precio total)

let productos = [
    {nombre:"Cocina",precio:260000},
    {nombre:"Tv",precio:155000},
    {nombre:"Mouse",precio:18000},
    {nombre:"Teclado",precio:34000},
    {nombre:"Cargador",precio:7000},
    {nombre:"Escritorio",precio:450000},
]  
        //* pasamos el "acu" y el objeto para que vaya almacenando el total 
function calcularPrecio(acu ,objProducto){
    acu = acu + objProducto.precio;      //? sumamos acu(0) = acu + precio del objeto;
    return acu                           //? retornamos el total de los productos
}                       //! esta estructura siempre se usa en reduce()
                        //* pasamos la function y 0 es el valor de "acu"
let ventaTotal = productos.reduce(calcularPrecio, 0); 
console.log(ventaTotal);

//* sort()
//? ACOMODA EL ARREGLO ALFABETICAMENTE
//? no ordena numeros correctamente
let listaAlumnos = ["Facu","Alan","Camila","Ramiro","Javier","Daniel"];
console.log(listaAlumnos);
console.log("Lista Alfabeticamente: ",listaAlumnos.sort());

                        //* MATH 
console.log( Math.PI); // para saber el numero pi

//* RANDOM
 //? si quiero un numero random del 1 al 10
console.log( Math.round(Math.random() * 10));
//? si quiero un numero random del 1 al 100
console.log( Math.round(Math.random() * 100));
//? siempre tengo q multiplicarlo para que me de un numero hasta ese numero

console.log("Ceil: ", Math.ceil(3.3)); //* REDONDEA PARA ARRIBA
console.log("Floor: ", Math.floor(3.3)); //* REDONDEA PARA ABAJO
console.log("Round: ", Math.round(3.5)); //* REDONDEA tradicional: 3.5 (4) - 3.3 (3)

let listaNumeros = [3, 2, 5,1 ,69, 51,88,100];
console.log("Mayor: ", Math.max(listaNumeros)); //! NO FUNCIONA
//* ... SPREAD
//? convierte un Arreglo/Array en numeros atras del otro
console.log(listaNumeros); //? array normal
console.log(...listaNumeros); //? array convertida en lista de numeros
console.log("Mayor: ", Math.max(...listaNumeros)); //! asi se soluciona 

console.log("Mayor: ", Math.max(3, 2, 5,1 ,69, 51,88,100)); //! SI FUNCIONA

//* Date (OBJETO)
//? sirve para guardar la hora dia exacta de un registro

let fechaHoy = new Date();
console.log(fechaHoy);

let day = fechaHoy.getDate();
console.log(day);

let mes = fechaHoy.getMonth()+1;
console.log(mes); 
//! LOS MESES ESTAN DEL 0-11 PORQUE ESTA INDEXADO ASI XD 
//? lo solucionamos sumandole +1

let anio = fechaHoy.getFullYear();
console.log(anio); 

