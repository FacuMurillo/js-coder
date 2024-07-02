


let usuario = document.getElementById("nombreUsuario");

//*          INPUT
/*
usuario.addEventListener("input", function(e){

    console.log("EL USUARIO INGRESO ALGO");
    //console.log(usuario.value);
    console.log( e.target.value )
});
*/

//* CHANGE

usuario.addEventListener("change", function(e){

    
    console.log( e );

});



let form = document.getElementById("form");


form.addEventListener("submit" , function(e){

    e.preventDefault();

    let nombre = document.getElementById("usuarioForm");
    console.log("Bievenido/a al sistema: ", nombre.value);

})