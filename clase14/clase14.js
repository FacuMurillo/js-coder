
//* LIBRERIAS

//? SWEET ALERT
//* nos permite alert customizados

// Swal.fire({
//     title: 'Error!',
//     text: 'Do you want to continue',
//     icon: 'error',
//     confirmButtonText: 'Cool'
//   })

Swal.fire({
    title: 'Error 404',
    text: 'Usuario no encontrado',
    icon: 'error',
    confirmButtonText: 'Volver',
    // background: 'black', //! se puede personalizar colores
    // imageUrl: '',
    // html:`<p class="parrafos">Para ingresar registrarte</p>`, //? para agregar html, vendria a ser como un innerHTML
    showClass:{
        popup:"animate__animated animate__bounceInDown",
    },
    hideClass:{
        popup:"animate__animated animate__bounceOutDown",
    },
  })
//? TOASTIFY
//* alertas pequeñas pero facheras

let btnComprar = document.getElementById("btnComprar");

btnComprar.addEventListener("click" , function(){
    Toastify({
        text: "Compra exitosa",
        duration: 1500, // 1,5 segundos
        backgroundColor:"",
        destination:"https://plataforma-beta.coderhouse.com/cursos/57715/javascript",
        style:{
            fontSize:"30px",
            fontFamily:"Verdana",
            color:"#baba3a",
            background:"#323fc9"
        },    
    }).showToast();
})


//? LUXON