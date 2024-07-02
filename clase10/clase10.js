
//* EVENTOS

function saludar(){
    console.log("Hola buen dia");
}


let btnSaludar = document.getElementById("btnSaludar");

//? FUNCION DECLARADA
btnSaludar.addEventListener("click", saludar );
//? FUNCION ANONIMA 
btnSaludar.addEventListener("click", function(){
    console.log("GUARDANDO REGISTRO");
});
//? FUNCTION FLECHA
btnSaludar.addEventListener("click", ()=>console.log("GUARDANDO REGISTRO"));


let btnDos = document.getElementById("btnDos");

btnDos.addEventListener("mousedown", function(e){

    console.log("Se escucho el mousedown");
    console.log( e.button );

    if( e.button == 0 ){
        console.log("BOTON IZQ");        
    }
    else if( e.button == 1){
        console.log("RUEDITA");
    }
    else if( e.button == 2){
        console.log("BOTON DERECHO")
    }
    else{
        console.log("OTRO BOTON");
    }

});


btnDos.addEventListener("mouseup", function(e){
    console.log("Se escucho el mouseup");
    console.log("Se solto el boton: ", e.button)
});




let img = document.getElementById("img");

img.addEventListener("mouseover" , function(){

    img.src = "img2.jpg";

});


img.addEventListener("mouseout" , function(){

    img.src = "img1.jpg";

});




//TECLADO

window.addEventListener("keydown", function(e){

    console.log("KEY: ", e.key);

    if(e.key == "ArrowUp"){
        document.body.style.background = "gray";
    }
    else if(e.key == "ArrowDown"){
        document.body.style.background = "white";
    }
})