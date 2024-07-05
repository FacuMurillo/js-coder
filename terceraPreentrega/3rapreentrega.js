
//* LOGIN 

function guardarDatos(){
    let emailUsuario = document.getElementById("emailUsuario");
    let passUsuario = document.getElementById("passUsuario");

    let usuarioCreado = {email:emailUsuario.value,
                        password:passUsuario.value};
    console.log(usuarioCreado);

    usuariosRegistrados.push(usuarioCreado);
    let usuariosRegistradosJSON = JSON.stringify(usuariosRegistrados);
    localStorage.setItem("usuariosArreglados", usuariosRegistradosJSON);
}

let usuariosRegistrados = [];

let btnRegistro = document.getElementById("btnRegistro");
btnRegistro.addEventListener("click" , guardarDatos);


function validarDatos(){
    let emailUsuario = document.getElementById("emailUsuario");
    let passUsuario = document.getElementById("passUsuario");
 
    let validarDatos = localStorage.getItem("usuariosArreglados");
    validarDatos = JSON.parse(validarDatos);
    
    
    for(let usuario of validarDatos){
        if(emailUsuario.value == usuario.email && passUsuario == usuario.password){
            window.location.href = "producto.html";
            break;
        }else{
            document.body.innerHTML = `<h1>Usuario no encontrado!</h1>`;
        }
    }
}
let btnIngreso = document.getElementById("btnIngresar");
btnIngreso.addEventListener("click" , validarDatos);