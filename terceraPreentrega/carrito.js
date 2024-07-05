
//* CARRITO

let carrito = [];

function agregarCarrito(e){
    
    console.log("Producto agregado con exito");
    let padre = e.target.parentNode
    let abuelo = e.target.parentNode.parentNode
        
    let nombreProducto = padre.querySelector("h5").textContent;
    console.log(nombreProducto);
    let precioProducto = padre.querySelector(".precio").textContent;
    console.log("El precio del producto es de",precioProducto);
    let imgProducto = abuelo.querySelector("img").src;

    let producto = {
        nombre:nombreProducto,
        precio:precioProducto,
        img: imgProducto,
        cantidad: 1
    };

    carrito.push(producto);
    console.log(carrito);
    
    let historialCarrito = JSON.stringify(carrito);
    localStorage.setItem("historialDelCarrito" , historialCarrito );
    
    agregarProducto();
}

function agregarProducto(){

    let tabla = document.getElementById("tbody");
    tabla.innerHTML = "";

    for(let producto of carrito){
        let fila = document.createElement("tr");
        fila.innerHTML = `<td><img src="${producto.img}" style="width: 50px;"></td>
                        <td><p>${producto.nombre}</p></td>
                        <td><p>${producto.cantidad}</p></td>
                        <td>${producto.precio}</td>
                        <td><button class="btn btn-danger borrarElemento">x</button></td>`;
        tabla.append(fila);
    }

    let btnBorrar = document.querySelectorAll(".borrarElemento");
    for(let btn of btnBorrar){

        btn.addEventListener("click" , borrarProducto);
    
    }

}
function borrarProducto(e){
    
    console.log("Producto eliminado");
    let abuelo = e.target.parentNode.parentNode;
    abuelo.remove();

    let productoEliminar = abuelo.querySelector("p").textContent;

    function sacarCarrito(producto){
        return producto.nombre != productoEliminar
    }
    
    let resultadoEliminar = carrito.filter(sacarCarrito);
    carrito = resultadoEliminar;
    console.log(carrito);
}

let btnCompra = document.querySelectorAll(".btnCompra");

for(let boton of btnCompra){
    boton.addEventListener("click" , agregarCarrito);
}

let btnCarrito = document.getElementById("botonCarrito");
btnCarrito.addEventListener("click" , mostrarCarrito);

function mostrarCarrito(){
    let carrito = document.getElementById("carrito");
    if(carrito.style.display == "none" || carrito.style.display == ""){
        carrito.style.display = "block";
    }else{
        carrito.style.display = "none";
    }
};
