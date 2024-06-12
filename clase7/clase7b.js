
//* forEach()
//? SIRVE PARA RECORRER EL ARRAY Y MOSTRARLO
function doble (num){
    console.log("El numero es: ", num);
    console.log("El doble es: ", num*2);
}

let numeros = [ 99, 2, 45, 51, 23, 51,87];

numeros.forEach( doble ); //! ponemos "doble" porque referenciamos a la function no hace falta que pongamos doble()

//* Filter() 
//? SIRVE PARA CREAR UN NUEVO ARRAY CON LA CONDICION QUE IMPLEMENTAMOS
//? CON FILTER BUSCAMOS COMPARAR UN VALOR PARA SACAR OTRO NUEVO ARRAY  
let usuarios = [
    {nombre:"Pepe", apellido:"Lopez", edad:22},
    {nombre:"Facu", apellido:"Lopez", edad:21},
    {nombre:"Laura", apellido:"Lius", edad:54},
    {nombre:"Matheo", apellido:"Marta", edad:17},
    {nombre:"Mili", apellido:"Murillo", edad:65},
    {nombre:"Carlos", apellido:"Carlos", edad:14}
]
function esMayorDeEdad(objUsuario){
    return objUsuario.edad >= 18; //! RETORNA UN BOOLEANO / TRUE O FALSE
                        //* LOS OPERADORES RELACIONALES SIEMPRE MUESTRAN UN RESULTADO BOOLEANO
}
let resultadoFilter = usuarios.filter(esMayorDeEdad);
console.log(resultadoFilter);

//* Find()
//? BUSCA UN VALOR EN EL ARREGLO
//? SI TENEMOS DOS VALORES IGUALES TE VA A MOSTRAR EL PRIMERO
let usuariosDos = [
    {nombre:"Pepe", apellido:"Lopez", edad:22},
    {nombre:"Facu", apellido:"Lopez", edad:21},
    {nombre:"Laura", apellido:"Lius", edad:54},
    {nombre:"Matheo", apellido:"Marta", edad:17},
    {nombre:"Mili", apellido:"Murillo", edad:65},
    {nombre:"Carlos", apellido:"Carlos", edad:14}
]
function buscarUsuario( objUsuario ){
    return objUsuario.nombre == "Laura" //! TRUE
 // return objUsuario.nombre == "Laura" && objUsuario.edad == 15 //* Si quiesieramos tener dos valores
}
let resultadoFind = usuariosDos.find(buscarUsuario);
console.log(resultadoFind);

//* MAP
//? EL METODO MAP ME VA A DEVOLVER UN NUEVO ARREGLO CON TODOS LOS ELEMENTOS DEL ORIGINAL TRANSFORMADO A LA OPERACION QUE ENVIAMOS
let productos = [
    {nombre:"Cocina",precio:260000},
    {nombre:"Tv",precio:155000},
    {nombre:"Mouse",precio:18000},
    {nombre:"Teclado",precio:34000},
    {nombre:"Cargador",precio:7000},
    {nombre:"Escritorio",precio:450000},
]

function agregarIva(objProducto){
    let iva = objProducto.precio * 0.21;
    return {
        nombre:objProducto.nombre,
        precio:objProducto.precio + iva
    }
}

let resultadoMap = productos.map( agregarIva );
console.log(resultadoMap);