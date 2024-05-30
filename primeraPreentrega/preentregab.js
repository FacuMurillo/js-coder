
// PRIMERA PREENTREGA B

// CALCULAR CARRITO COMPRA 

let sumaTotal = 0;

let productoIngresado = parseInt(prompt("Ingresa 5 productos que quieres: \n1) Celular $600 \n2) Notebook $1000 \n3) Bicicleta $750 \n4) PC $2500 \n5) Zapatilla $180 \n6) Termo $70 \n7) Auriculares $100 \n8) Campera $244  \n9) Cargador $135 \n10) No quiero estos productos."));

while(productoIngresado != 10){
    if( productoIngresado == 1){
        sumaTotal = sumaTotal + 600;
        console.log("Se agrego al carrito correctamente");
        productoIngresado = parseInt(prompt("Ingrese otro producto o termine: \n1) Celular $600 \n2) Notebook $1000 \n3) Bicicleta $750 \n4) PC $2500 \n5) Zapatilla $180 \n6) Termo $70 \n7) Auriculares $100 \n8) Campera $244  \n9) Cargador $135 \n10) No quiero estos productos."))
    }else if(productoIngresado == 2){
        sumaTotal = sumaTotal + 1000;
        console.log("Se agrego al carrito correctamente");
        productoIngresado = parseInt(prompt("Ingrese otro producto o termine: \n1) Celular $600 \n2) Notebook $1000 \n3) Bicicleta $750 \n4) PC $2500 \n5) Zapatilla $180 \n6) Termo $70 \n7) Auriculares $100 \n8) Campera $244  \n9) Cargador $135 \n10) No quiero estos productos."))
    }else if(productoIngresado == 3){
        sumaTotal = sumaTotal + 750;
        console.log("Se agrego al carrito correctamente");
        productoIngresado = parseInt(prompt("Ingrese otro producto o termine: \n1) Celular $600 \n2) Notebook $1000 \n3) Bicicleta $750 \n4) PC $2500 \n5) Zapatilla $180 \n6) Termo $70 \n7) Auriculares $100 \n8) Campera $244  \n9) Cargador $135 \n10) No quiero estos productos."))
    }else if(productoIngresado == 4){
        sumaTotal = sumaTotal + 2500;
        console.log("Se agrego al carrito correctamente");
        productoIngresado = parseInt(prompt("Ingrese otro producto o termine: \n1) Celular $600 \n2) Notebook $1000 \n3) Bicicleta $750 \n4) PC $2500 \n5) Zapatilla $180 \n6) Termo $70 \n7) Auriculares $100 \n8) Campera $244  \n9) Cargador $135 \n10) No quiero estos productos."))
    }else if(productoIngresado == 5){
        sumaTotal = sumaTotal + 180;
        console.log("Se agrego al carrito correctamente");
        productoIngresado = parseInt(prompt("Ingrese otro producto o termine: \n1) Celular $600 \n2) Notebook $1000 \n3) Bicicleta $750 \n4) PC $2500 \n5) Zapatilla $180 \n6) Termo $70 \n7) Auriculares $100 \n8) Campera $244  \n9) Cargador $135 \n10) No quiero estos productos."))
    }else if(productoIngresado == 6){
        sumaTotal = sumaTotal + 70;
        console.log("Se agrego al carrito correctamente");
        productoIngresado = parseInt(prompt("Ingrese otro producto o termine: \n1) Celular $600 \n2) Notebook $1000 \n3) Bicicleta $750 \n4) PC $2500 \n5) Zapatilla $180 \n6) Termo $70 \n7) Auriculares $100 \n8) Campera $244  \n9) Cargador $135 \n10) No quiero estos productos."))
    }else if(productoIngresado == 7){
        sumaTotal = sumaTotal + 100;
        console.log("Se agrego al carrito correctamente");
        productoIngresado = parseInt(prompt("Ingrese otro producto o termine: \n1) Celular $600 \n2) Notebook $1000 \n3) Bicicleta $750 \n4) PC $2500 \n5) Zapatilla $180 \n6) Termo $70 \n7) Auriculares $100 \n8) Campera $244  \n9) Cargador $135 \n10) No quiero estos productos."))
    }else if(productoIngresado == 8){
        sumaTotal = sumaTotal + 244;
        console.log("Se agrego al carrito correctamente");
        productoIngresado = parseInt(prompt("Ingrese otro producto o termine: \n1) Celular $600 \n2) Notebook $1000 \n3) Bicicleta $750 \n4) PC $2500 \n5) Zapatilla $180 \n6) Termo $70 \n7) Auriculares $100 \n8) Campera $244  \n9) Cargador $135 \n10) No quiero estos productos."))
    }else if(productoIngresado == 9){
        sumaTotal = sumaTotal + 135;
        console.log("Se agrego al carrito correctamente");
        productoIngresado = parseInt(prompt("Ingrese otro producto o termine: \n1) Celular $600 \n2) Notebook $1000 \n3) Bicicleta $750 \n4) PC $2500 \n5) Zapatilla $180 \n6) Termo $70 \n7) Auriculares $100 \n8) Campera $244  \n9) Cargador $135 \n10) No quiero estos productos."))
    }else if(productoIngresado == 10){
        console.log("Terminaste la compra");
        break
    }else{
        console.log("Error no ingresaste ningun valor correcto")
        break
    }
}

console.log("El total a pagar es de: ", sumaTotal);