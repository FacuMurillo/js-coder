

// ACTIVIDADES B


let productosComida = ["Pollo", "Carne", "Coca Cola", "Banana", "Fideos", "Pan", "Sopa"];
let productosLimpieza = ["Detergente", "Trapo de piso", "Jabon", "Cepillo", "Perfumante", "Esponja", "Virulana"];
let productosHogar = ["Cubiertos", "Papel Higienico", "Rollo de cocina", "Platos", "Vasos", "Tazas"];

function mostrarProductos(categoria) {
    if (categoria === 1) {
        let productoComida = parseInt(prompt("Seleccione un producto: 1. Pollo, 2. Carne, 3. Coca Cola, 4. Banana, 5. Fideos, 6. Pan, 7. Sopa"));
        seleccionarComida(productoComida);
    } else if (categoria === 2) {
        let productoLimpieza = parseInt(prompt("Seleccione un producto: 1. Detergente, 2. Trapo de piso, 3. Jabon, 4. Cepillo, 5. Perfumante, 6. Esponja, 7. Virulana"));
        seleccionarLimpieza(productoLimpieza);
    } else if (categoria === 3) {
        let productoHogar = parseInt(prompt("Seleccione un producto: 1. Cubiertos, 2. Papel Higienico, 3. Rollo de cocina, 4. Platos, 5. Vasos, 6. Tazas"));
        seleccionarHogar(productoHogar);
    } else {
        console.log("Error al ingresar la categoria");
    }
}

//! Acceso al Elemento del Array:

//? productosHogar[productoHogar - 1]:
//* productosHogar es un array que contiene los nombres de los productos de la categoría "Hogar".

//* productoHogar es el número del producto seleccionado por el usuario (por ejemplo, 1 para "Cubiertos", 2 para "Papel Higiénico", etc.).

//* Los arrays en JavaScript son indexados desde 0, lo que significa que el primer elemento tiene el índice 0, el segundo elemento tiene el índice 1, y así sucesivamente.

//* productoHogar - 1 convierte el número de producto seleccionado a un índice válido del array. Por ejemplo si el usuario selecciona 1 (primer producto), entonces el índice será 0 (1 - 1).

function seleccionarComida(productoComida) {
    if (productoComida >= 1 && productoComida <= productosComida.length) {
        console.log("Agregaste un " + productosComida[productoComida - 1]);
    } else {
        console.log("No agregaste un producto correctamente");
    }
}

function seleccionarLimpieza(productoLimpieza) {
    if (productoLimpieza >= 1 && productoLimpieza <= productosLimpieza.length) {
        console.log("Agregaste un " + productosLimpieza[productoLimpieza - 1]);
    } else {
        console.log("No agregaste un producto correctamente");
    }
}

function seleccionarHogar(productoHogar) {
    if (productoHogar >= 1 && productoHogar <= productosHogar.length) {
        console.log("Agregaste un " + productosHogar[productoHogar - 1]);
    } else {
        console.log("No agregaste un producto correctamente");
    }
}

let agregar = "SI";
while (agregar.toUpperCase() !== "NO") {
    let mostrar = parseInt(prompt("Qué categoría quieres: 1). Comidas  2). Limpieza  3). Hogar"));
    if (!isNaN(mostrar) && (mostrar === 1 || mostrar === 2 || mostrar === 3)) {
        mostrarProductos(mostrar);
    } else {
        alert("Por favor ingresa un número válido");
    }
    agregar = prompt("¿Quieres seguir comprando? SI / NO");
}
