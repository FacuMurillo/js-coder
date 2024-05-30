
// PRIMERA PREENTREGA

// CALCULAR CARRITO COMPRA

let sumaTotalProductos = 0;

for(let i = 0; i < 5 ; i = i + 1){

    let producto = parseInt(prompt("Ingresa 5 productos que quieres: \n1) Celular $600 \n2) Notebook $1000 \n3) Bicicleta $750 \n4) PC $2500 \n5) Zapatilla $180 \n6) Termo $70 \n7) Auriculares $100 \n8) Campera $244  \n9) Cargador $135 \n10) No quiero estos productos."));

    if(typeof (producto) == "number" && producto == 1){
        console.log("Agregaste al carrito: Celular $600 ");
        sumaTotalProductos = sumaTotalProductos + 600;
    }else if(typeof (producto) == "number" && producto == 2){
        console.log("Agregaste al carrito: Notebook $1000");
        sumaTotalProductos = sumaTotalProductos + 1000;
    }else if(typeof (producto) == "number" && producto == 3){
        console.log("Agregaste al carrito: Bicicleta $750");
        sumaTotalProductos = sumaTotalProductos + 750;
    }else if(typeof (producto) == "number" && producto == 4){
        console.log("Agregaste al carrito: PC $2500");
        sumaTotalProductos = sumaTotalProductos + 2500;
    }else if(typeof (producto) == "number" && producto == 5){
        console.log("Agregaste al carrito: Zapatilla $180");
        sumaTotalProductos = sumaTotalProductos + 180;
    }else if(typeof (producto) == "number" && producto == 6){
        console.log("Agregaste al carrito: Termo $70");
        sumaTotalProductos = sumaTotalProductos + 70;
    }else if(typeof (producto) == "number" && producto == 7){
        console.log("Agregaste al carrito: Auriculares $100");
        sumaTotalProductos = sumaTotalProductos + 100;
    }else if(typeof (producto) == "number" && producto == 8){
        console.log("Agregaste al carrito: Campera $244");
        sumaTotalProductos = sumaTotalProductos + 244;
    }else if(typeof (producto) == "number" && producto == 9){
        console.log("Agregaste al carrito: Cargador $135");
        sumaTotalProductos = sumaTotalProductos + 135;
    }else if(typeof (producto) == "number" && producto == 10){
        console.log("No agregaste nada al carrito");
        break;
    }else{
        console.log("ERROR INGRESASTE UN PRODUCTO NO VALIDO")
    }
}

function calcularIvaTotal(sumaTotalProductos){
    let ivaDeProductos = sumaTotalProductos * 0.21;
    return ivaDeProductos
}

let resultadoFinal = sumaTotalProductos + calcularIvaTotal(sumaTotalProductos);

console.log("El precio final a pagar es de: ", resultadoFinal);