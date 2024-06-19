
//* Segunda preentrega


//* simulador de carrito

let usuario = "";
let listaProductos = [];
let monto = 0;

class Productos{
    constructor(nombre , producto, monto){
        this.nombre = nombre;
        this.producto = producto;
        this.monto =  monto;
    }
}
while( usuario != "FIN" ){

    usuario = prompt("Ingrese su nombre o FIN para finalizar:");

    if( usuario != "FIN" ){
        let producto = parseInt(prompt("Ingresa que producto quieres: \n1) Celular $600 \n2) Notebook $1000 \n3) Bicicleta $750 \n4) PC $2500 \n5) Zapatilla $180 \n6) Termo $70 \n7) Auriculares $100 \n8) Campera $244  \n9) Cargador $135 \n10) No quiero estos productos."));
        console.log("Ingresaste un producto al carrito exitosamente!");

        if(typeof (producto) == "number" && producto == 1){
            console.log("Agregaste al carrito: Celular $600 ");
            monto = monto + 600;
        }else if(typeof (producto) == "number" && producto == 2){
            console.log("Agregaste al carrito: Notebook $1000");
            monto = monto + 1000;
        }else if(typeof (producto) == "number" && producto == 3){
            console.log("Agregaste al carrito: Bicicleta $750");
            monto = monto + 750;
        }else if(typeof (producto) == "number" && producto == 4){
            console.log("Agregaste al carrito: PC $2500");
            monto = monto + 2500;
        }else if(typeof (producto) == "number" && producto == 5){
            console.log("Agregaste al carrito: Zapatilla $180");
            monto = monto + 180;
        }else if(typeof (producto) == "number" && producto == 6){
            console.log("Agregaste al carrito: Termo $70");
            monto = monto + 70;
        }else if(typeof (producto) == "number" && producto == 7){
            console.log("Agregaste al carrito: Auriculares $100");
            monto = monto + 100;
        }else if(typeof (producto) == "number" && producto == 8){
            console.log("Agregaste al carrito: Campera $244");
            monto = monto + 244;
        }else if(typeof (producto) == "number" && producto == 9){
            console.log("Agregaste al carrito: Cargador $135");
            monto = monto + 135;
        }else if(typeof (producto) == "number" && producto == 10){
            console.log("No agregaste nada al carrito");
            break;
        }else{
            console.log("ERROR INGRESASTE UN PRODUCTO NO VALIDO")
        }

        let productoAgregado = new Productos( usuario, producto , monto);
        listaProductos.push(productoAgregado);
    }

}
console.log("Los productos que agregaste son:" , listaProductos);

