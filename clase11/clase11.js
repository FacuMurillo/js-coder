
//* STORAGE Y JSON - ALMACENAMIENTO

//* LOCALSTORAGE O SESSIONSTORAGE
//? para guardar algo necesito usar el setItem

//? setItem

localStorage.setItem("usuarioUno" , "Facu");
localStorage.setItem("colores" , ["Rojo" , "Azul" ,"Amarillo"]);
localStorage.setItem("usuarioEdad" , 22);

//? sessioStorage

function saludar(){
    sessionStorage.setItem("usuarioTres", "lucas");
}
saludar();

//? getItem
//? sirve para guardar un valor

let usuarioUno = localStorage.getItem("usuarioUno");
console.log(usuarioUno);

let coloresUsuario = localStorage.getItem("colores");
let usuarioEdad = localStorage.getItem("usuarioEdad");

console.log(coloresUsuario);
console.log(usuarioEdad); //? cuando guardamos un numero se tranforma en string
console.log(parseInt(usuarioEdad)); //* lo pasamos a entero


//? cuantos elementos tiene el localstorage

console.log("cuantos objetos hay en localstorage " + localStorage.length);
console.log(`cuantos objetos hay en localstorage ${localStorage.length}`);

//? para acceder a cada uno de los valores que tiene el localstorage

for(let i = 0; i < localStorage.length ; i = i + 1){

    // let resultado = localStorage.getItem( i );
    let clave = localStorage.key(i); //! METODO PARA ACCEDER A LAS LLAVES
    console.log("Clave: " , clave);
    console.log("Valor: " , localStorage.getItem(clave));

}
