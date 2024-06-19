
//* OBTENER DATOS DE INPUTS

//* .value
let nombreUsuario = document.getElementById("nombreUsuario");
console.log(nombreUsuario);
console.log(nombreUsuario.value);

function saludar(){
    let nombreUsuario = document.getElementById("nombreUsuario");
    console.log("Bienvenido al sistema: ", nombreUsuario.value);
    console.log("Hola desde el script");
}
function validar(){

    let nombreUsuario = document.getElementById("nombreUsuario");
    let msj = document.getElementById("mensaje");

    if( nombreUsuario.value == "Pepe"){

        let parrafo = document.createElement("p");
        parrafo.innerText = "Bienvenido/a al sistema: "+ nombreUsuario.value;
        msj.append(parrafo);
    }else{
            document.body.innerHTML = `<h2>ERROR DE USUARIO</h2>
                                   <p>El usuario ${nombreUsuario.value} no existe</p>
                                   <a href="clase9b.html">Volver</a>`;
    }
}