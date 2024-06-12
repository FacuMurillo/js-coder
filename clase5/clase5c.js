
//!  CLASES 

//* agregamos las palabras reservadas "class" que siempre tenemos que poner la primera letra con mayusculas, 
//* "constructor" que nos permite determinar los parametros que recibira
//* y para crear un nuevo objeto llamamos al class y ponemos antes "new".

class Alumno{

    constructor(nombre, apellido ,dni){
    //! CARACTERUSTICAS / es una variable pero encapasulada en el objeto Alumno
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.notaUno = 0;
        this.notaDos = 0;
        this.notaFinal = 0;
    }

    //! METODOS / se llaman metodos pero son funciones encapsuladas en un objetos
    saludar(){
        console.log("Hola mucho gusto mi nombre es: ", this.nombre); // ES FUNDAMENTAL PONER EL THIS. PORQUE NOS PERMITE SABER QUE INSTANCIA/VUELTA ESTAMOS
    }
    //* GET Y SET 
    getDatos(){
        console.log("<----- Datos ----->");
        console.log("Nombre: ", this.nombre);
        console.log("Apellido: ", this.apellido);
        console.log("Dni: ", this.dni); 
        console.log("Nota Uno: ", this.notaUno); 
        console.log("Nota Dos: ", this.notaDos); 
        console.log("Nota Final: ", this.notaFinal); 
    }
    setNotaUno( nota ){
        if( nota > 0 && nota <= 10 && typeof(nota) == "number"){
            this.notaUno = nota;
            this.calcularNotaFinal(); //! es necesario actualizar la notaFinal cada vez que ingresemos una nota porque sino tendremos que hacer un llamado adicional al finalizar las notas uno y dos, con esto automatizamos la funcion calcularNotaFinal sin que ese llamado y evitar que nota final muestre 0
        }
        else{
            console.log("ERROR EN LA CARGA DE DATOS")
        }
    }
    setNotaDos( nota ){
        if( nota > 0 && nota <= 10 && typeof(nota) == "number"){
            this.notaDos = nota;
            this.calcularNotaFinal(); //! actualizamos nota final
        }else{
            console.log("ERROR EN LA CARGA DE DATOS")
        }
    }
    calcularNotaFinal(){
        this.notaFinal = (this.notaUno + this.notaDos)/2; 
    }
};
//saludar(); //! Si nosotros llamamos a la funcion no funciona porque esta encapsulada en el objeto que tenemos por eso se la llama METODO al igual que las CARACTERISTICAS que son variables

let alumnoUno = new Alumno("Facundito", "Murillo", 433414124);
let alumnoDos = new Alumno("Milagros", "Lopez", 32124124);

alumnoUno.saludar();
alumnoDos.saludar();

// getDatos
//alumnoUno.getDatos();
//alumnoDos.getDatos();

// setNotas
alumnoUno.setNotaUno(10);
alumnoUno.setNotaDos(8);

alumnoDos.setNotaUno(6);
alumnoDos.setNotaDos(7);

//* NOTAS CARGADAS YA 

alumnoUno.getDatos();
alumnoDos.getDatos();