
//* JSON
//* sirve para enviar y almacenar datos en la web 
//* es un texto plano

//? para guardar un objeto en local o session storage

let clientes = [{nombre:"Pepe", apellido:"Murillo", edad:22},{nombre:"Facu", apellido:"Lopez", edad:31},{nombre:"Maxi", apellido:"Gonzalez", edad:45},{nombre:"Lucas", apellido:"Martinez", edad:17}];

console.log(clientes);

//* stringify / parse

//* stringify 
//? acepta un objeto como parametro y devuelve en formato texto plano JSON 

let clientesJson = JSON.stringify(clientes); //! me convierte en string, convertir a json
localStorage.setItem("clientesArreglados" , clientesJson); 
console.log(clientesJson);

//* parse
//? recibe un texto JSON y devuelve un objeto JavaScript  

let recuperoClientes = localStorage.getItem("clientesArreglados");

recuperoClientes = JSON.parse( recuperoClientes );
console.log( recuperoClientes );


//? LOGIN 
//? PASO A PASO
//? CREAMOS UN USUARIO 


//* 3). la funcion tiene que guardar los datos del input, y registrarlo en el localstorage 
function setData(){
//? 3a. capturar los valores del input
        let nombreUsuario = document.getElementById("nombre");
        let passUsuario = document.getElementById("pass");
//? 3b. crearme un nuevo objeto
        let usuario = {nombre:nombreUsuario.value , password:passUsuario.value};
        console.log(usuario);
//? 3c. guardarlo en mi arreglo (arregloUsuario[]) pusheandolo
        arregloUsuario.push(usuario);

//? 3d. al arreglo lo pasamos a JSON Y lo guardamos en el localstorage
        let arregloJson = JSON.stringify(arregloUsuario);
        localStorage.setItem("arreglosDeUsuarios" , arregloJson);
}

let arregloUsuario = [];

//* 1). obtenemos el boton registro y lo guardamos
let btnRegistro = document.getElementById("btnRegistro");

//* 2). cuando el boton escuche que le hacen click llamamos a la funcion setData en este caso 
btnRegistro.addEventListener("click" , setData );

//? INGRESAMOS CON LOGIN
//? PASO A PASO
//* 1). Chequear que los datos que ingresan estan registrados
function loginUsuario(){

//? VOLVEMOS A ACCEDER A LOS VALORES
    let nombreUsuario = document.getElementById("nombre");
    let passUsuario = document.getElementById("pass");

    let recuperandoDatos = localStorage.getItem("arreglosDeUsuarios");
    recuperandoDatos = JSON.parse(recuperandoDatos);
    console.log(recuperandoDatos);

//? RECORREMOS CADA UNO DE LOS DATOS PARA VER SI EL USUARIO ESTA REGISTRADO 
    for( let usuario of recuperandoDatos){

        if( nombreUsuario.value == usuario.nombre && passUsuario.value == usuario.password){
            document.body.innerHTML = `<h1> Bienvenido/a al sistema: ${usuario.nombre} </h1>
                                        <a href="clase11b.html">Volver </a>"`;
            break;
        } 
        else{ document.body.innerHTML = `<h1> Usuario No encontrado ${usuario.nombre} </h1>
                                        <a href="clase11b.html">Volver</a>"`
        }

    }

}

let btnLogin = document.getElementById("btnLogin");
btnLogin.addEventListener("click" , loginUsuario);

