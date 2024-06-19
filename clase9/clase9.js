    //* DOM
//? ES UNA REPRESENTACION DE MI SITIO WEB/HTML

    //* METODOS DE ACCESOS AL DOM

//* getElementById 
//? BUSCAR UN NODO O ELEMENTO POR SU ID 

let titulo = document.getElementById("tituloPrincipal");
console.log(titulo);

console.log(titulo.innerText); //? SELECCIONA EL TEXTO QUE TIENE ADENTRO 

titulo.innerText = "Titulo generado por JS"; //? podemos cambiar el titulo desde JS

//* getElementByClassName 
//? BUSCAR UN NODO O ELEMENTO POR SU CLASS 
//? HACE ARRAYS DE LOS ELEMENTOS QUE TENGAN ESA class

let parrafos = document.getElementsByClassName("parrafo");
console.log(parrafos);
console.log(parrafos[0]);
console.log(parrafos[2]);

//* getElementsByTagName
//? BUSCA ELEMENTOS POR SU ETIQUETA

let li = document.getElementsByTagName("li");
console.log(li);

for (let elemento of li){

    console.log(elemento);          //* muestra todos los elementos
    console.log(elemento.innerText);
}

let contenedor = document.getElementById("contenedor");

console.log(contenedor);

//* createElement 
//? sirve para crear un elemento

let parrafoJs = document.createElement("p");
parrafoJs.innerText = "Parrafo creado desde Js 100%";
//? para enviarlo al html necesitamos un metodo del padre, en este caso seria el "contenedor"

//* append 
//? metodo del padre / agregamos el hijo que queremos agregar "parrafoJs"
//* (  padre )       (   hijo  )
    contenedor.append(parrafoJs);
//* remove
//? elimina un elemento

//! parrafoJs.remove();

//* className 
//? sirve para agregarle una clase a un elemento. en este caso agregamos color rojo    
parrafoJs.className = "parrafoRojo"; 
//! parrafoJs.style.display = "none"; / para ocultar el elemento 

