                            //* CLASE 7 
//! FUNCION DECLARADA / LA QUE USAMOS SIEMPRE
function saludar(){
    console.log("Hola");   
}
// saludar(); 

//! FUNCIONES ANONIMAS
let saludo = function(){
    console.log("Hola desde la funcion anonima");
}
// saludo();
//! FUNCIONES ARROW / FUNCIONES FLECHAS
let saludoArrow = () => {
    console.log("Hola desde Function Arrow");
}
saludoArrow();

//! FUNCIONES DE ORDEN SUPERIOR

function crearMultiplicador(multiplicador){
    return function(num){
        return num * multiplicador
    }
}
let tripleNumAnonimo = crearMultiplicador(3); //Todo // lo que hacemos aqui es declarar por cuanto quiero multiplicar el numero y la guardamos en la variable, y esa variable llama a la function anonima que hicimos y le pasamos un numero para que lo multiplique por el numero que le dimos a crearMultplicador
//! en este caso le dijimos que lo multiploque por 3 y luego llamos a la function anonima y le pasamos 25 y nos queda de resultado 
console.log(tripleNumAnonimo(25)); //* RESULTADO 25 * 3 = 75

        // RECIBIR UNA FUNCION POR PARAMETRO //

function saludarUsuario(nombre){
    console.log("Hola: ", nombre)
}
function saludarATodos( array , fnSaludar){
    for(let alumno of array){       //* EL for (let i of array) sirve para mostrar todos 
                                    //* los elementos que tienen ese arreglo
        fnSaludar(alumno);
    }
}
let listaUsuarios = ["Pedro","Facu","Juan","Laura"];
saludarATodos(listaUsuarios, saludarUsuario);
