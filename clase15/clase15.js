
//* AJAX & Fetch
    
//? API es un intervendiario entre "vos" y "un servidor"
//? podemos solicitar y enviar informacion desde el cliente
//* Por ejemplo: vas a un bar y el MOZO seria la API, le pedimos algo y el se encarga de traerlo de la cocina 

//* HTTP (Hypertext Transfer Protocol) 
//? peticiones o request a algun servidor y luego la recibe y nos devuelve la respuesta con informacion que utilizaremos en la aplicacion

//? Estas peticiones que debemos hacer están
//? definidas por varias partes:
//? - Una URL o dirección.
//? - Un método (GET, POST, PUT, DELETE).
//? - Headers.
//? - Body.
//? - Parámetros (Query Params o URL Params)

//* Query Params vendria a ser = https://www.google.com.ar/search?q=gato
//* URL Params = https://pokeapi.co/api/v2/pokemon/{id or name}/ seria https://pokeapi.co/api/v2/pokemon/1


//* FETCH 

console.log(fetch('https://jsonplaceholder.typicode.com/posts/')); //* SALE PENDING 

fetch('https://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(data => console.log(data))


fetch("https://api.openweathermap.org/data/2.5/weather?lat=44.34&lon=10.99&appid={API key}")
        .then( response => response.json() )
        .then( data => console.log(data) )