
// ACTIVIDADES 

//!     N O      F U N C I O N A
let productosComida = ["Pollo","Carne","Coca Cola","Banana","Fideos","Pan","Sopa"];

let productosLimpieza = ["Detergente","Trapo de piso","Jabon","Cepillo","Perfumante","Esponja","Virulana",];

let productosHogar = ["Cubiertos","Papel Higienico","Rollo de cocina","Platos","Vasos","Tazas"];

let categoria = 0;
let producto = 0;
let productoComida = 0;
let productoLimpieza = 0;
let productoHogar = 0;

let mostrar = parseInt(prompt("Que categoria quieres: 1). Comidas  2). Limpieza  3). Hogar"));
function mostrarProductos(){
    if(typeof(mostrar) == "number" && mostrar == 1){
        productoComida = parseInt(prompt("Seleccione un producto:1. Pollo, 2. Carne, 3.Coca Cola, 4. Banana, 5. Fideos 6. Pan, 7. Sopa"));
        seleccionarComida();
        categoria = 1;
    } else if(typeof(mostrar) == "number" && mostrar == 2){
        productoLimpieza = parseInt(prompt("Seleccione un producto:1. Detergente, 2. Trapo de piso, 3.Jabon, 4. Cepillo, 5. Perfumante 6. Esponja, 7. Virulana"));
        seleccionarLimpieza();
        categoria = 2;
    }else if(typeof(mostrar) == "number" && mostrar == 3){
        productoHogar = parseInt(prompt("Seleccione un producto:1. Cubiertos, 2. Papel Higienico, 3. Rollo de cocina, 4. Platos, 5. Vasos 6. Tazas"));
        categoria = 3;
        seleccionarHogar();
    }else{
        console.log("Error al ingresar la categoria");
    }
}
function seleccionarComida(productoComida){
    if(productoComida == 1){
        console.log("Agregaste un pollo");
    }else if(productoComida == 2){
        console.log("Agregaste una Carne")
    }else if(productoComida == 3){
        console.log("Agregaste una Coca cola")
    }else if(productoComida == 4){
        console.log("Agregaste una Banana")
    }else if(productoComida == 5){
        console.log("Agregaste un Fideo")
    }else if(productoComida == 6){
        console.log("Agregaste un Pan")
    }else if(productoComida == 7){
        console.log("Agregaste una Sopa")
    }else{
        console.log("No agregaste un producto correctamente");
    }
    let agregar = prompt("Quieres seguir comprando? SI / NO");
    while( agregar !== "NO" ) {
        productoComida = 0;
        productoComida = parseInt(prompt("Seleccione un producto:1. Pollo, 2. Carne, 3.Coca Cola, 4. Banana, 5. Fideos 6. Pan, 7. Sopa"));
        seleccionarComida();
        agregar = prompt("Quieres seguir comprando? SI / NO");
    }
}
function seleccionarLimpieza(){
    if(productoLimpieza == 1){
        console.log("Agregaste un Detergente")
    }else if(productoLimpieza == 2){
        console.log("Agregaste un Trapo de piso")
    }else if(productoLimpieza == 3){
        console.log("Agregaste un Jabon")
    }else if(productoLimpieza == 4){
        console.log("Agregaste un Cepillo")
    }else if(productoLimpieza == 5){
        console.log("Agregaste un Perfumante")
    }else if(productoLimpieza == 6){
        console.log("Agregaste una Esponja")
    }else if(productoLimpieza == 7){
        console.log("Agregaste una Virulana")
    }else{
        console.log("No agregaste un producto correctamente");
    }
}
function seleccionarHogar(){
    if(productoHogar == 1){
        console.log("Agregaste unos Cubiertos")
    }else if(productoHogar == 2){
        console.log("Agregaste un Papel Higienico")
    }else if(productoHogar == 3){
        console.log("Agregaste un Rollo de cocina")
    }else if(productoHogar == 4){
        console.log("Agregaste unos Platos")
    }else if(productoHogar == 5){
        console.log("Agregaste unos Vasos")
    }else if(productoHogar == 6){
        console.log("Agregaste una Taza")
    }else{
        console.log("No agregaste un producto correctamente");
    }
}
mostrarProductos();

