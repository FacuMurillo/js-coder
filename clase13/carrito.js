
//* CARRITO 


let carrito = [];

//? objeto evento = e  // e.target

function agregarCarrito(e){
    console.log("PRODUCTO AGREGADO" , e.target);
    let hijo = e.target;
    let padre = hijo.parentNode;
    // console.log("Padre: ", padre);
    let abuelo = padre.parentNode;
    // console.log("Abuelo: ", abuelo);
    //? abuelo.remove()  para eliminarlo
    //? tambien se puede hacer e.target.parentNode.parentNode para evitar crear las varaibles padre y abuelo
    let nombreProducto = padre.querySelector("h5").textContent;
    let precioProducto = padre.querySelector("span").textContent;
    let imgProducto = abuelo.querySelector("img").src;

    let producto = {
        nombre:nombreProducto,
        precio:precioProducto,
        img: imgProducto,
        cantidad: 1
    };
    //? para agregarlo al carrito
    carrito.push(producto);

    console.log(carrito);

    // no agregar duplicados - FIND
    // guardas los datos en  el localstorage

    mostrarCarrito();
}

function mostrarCarrito(){

    //* 1) llamamos al tbody del carrito
    let tabla = document.getElementById("tbody");


    //! solucion al problema de que se muestra duplicado 
    tabla.innerHTML = "";

    //* 2) por cada producto que tenemos en nuestro carrito creamos una fila
    for(let producto of carrito){

        let fila = document.createElement("tr");
        fila.innerHTML = `<td><img src="${producto.img}"></td>
                        <td><p>${producto.nombre}</p></td>
                        <td><p>${producto.cantidad}</p></td>
                        <td>${producto.precio}</td>
                        <td><button class="btn btn-danger borrarElemento">x</button></td>`;
        
    //* 3) y por ultimo agregamos al html en el mismo for
        tabla.append(fila);
    }
    //* 4) para seleccionar el button de borrarElemento tenemos que hacer
    let btnBorrar = document.querySelectorAll(".borrarElemento"); //? como podemos ver necesitamos el ".nombredelaclase"
    //* 5) creamos un for por cada btn que tenemos
    for(let btn of btnBorrar){

        btn.addEventListener("click" , borrarProducto);
    
    }
}

function borrarProducto(e){
    
    //? para saber que boton clickeamos tenemos que usar e.target
    console.log("Producto eliminado" , e.target);
    //? y una vez lo tengamos seleccionado tenemos que eliminarlo usando remove 
    // e.target.remove(); //! eliminaria el boton nomas
    // e.target.parentNode.remove() //! este seria el PADRE pero elimina el boton y el fondo
    let abuelo = e.target.parentNode.parentNode; //! este elimina toda la fila porque es el ABUELO
    abuelo.remove();
    //? falta actualizar el arreglo / array sino se borra lo visual y no el array

    //? eliminar el producto del array
    let productoEliminar = abuelo.querySelector("p").textContent;

    function sacarCarrito(producto){
        return producto.nombre != productoEliminar
    }
    
    let resultadoEliminar = carrito.filter(sacarCarrito);
    carrito = resultadoEliminar;
    console.log(carrito);
}

//? traemos todos los botones del HTML
let btnCompra = document.querySelectorAll(".botonCompra");

console.log( btnCompra ); //? te muestra todos los botones

//? hacer un for para recorrer todos los botones 
//? agrega a cada boton del btnCompra una funcion de agregar a carrito
for( let boton of btnCompra){

    boton.addEventListener("click", agregarCarrito);

}