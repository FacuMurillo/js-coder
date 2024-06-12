

//! FUNCION CONSTRUCTORA

//! AGREGAMOS DOS NUEVAS PALABRAS this. Y new 

function alumno(nombre, apellido, dni){

    this.nombre = nombre ;
    this.apellido = apellido;
    this.dni = dni ;
    
}

let alumnoUno = new alumno("Facundo", "Murillo", 43771069);
console.log(alumnoUno);