
//* AJAX Y FETCH 

fetch("https://twitter.com/home")  //? el fetch sirve para pedir una peticion https y te dara una respuesta/response 
//? y con .then le decimos que hacer en caso de recibir esto
    .then(response => response.json())
    .then(data => console.log(data))




//! explicacion con ejemplo de vida cotidiana
//? Hacer el Pedido (fetch): 
//* fetch("https://pizzeria.com/pedir-pizza"): Aquí es donde llamas al servicio de la pizzería para hacer tu pedido de pizza.

//? Recibir Confirmación (Primer .then):
//* then(response => response.json()): Cuando la pizzería recibe tu pedido, te envían una confirmación de que han recibido tu pedido y están preparando tu pizza. La confirmación se convierte en algo que puedes entender, como "Sí, estamos haciendo tu pizza".

//? Obtener la Pizza (Segundo .then):
//* then(data => console.log(data)): Una vez que la pizza está lista y el repartidor te la entrega en la puerta de tu casa, ahora tienes la pizza en tus manos y puedes disfrutarla. Aquí, "data" es la pizza que recibiste, y console.log(data) es como abrir la caja y ver la pizza deliciosa.

//? Manejo de Errores (catch):
//* catch(error => console.error('Error:', error)): Si algo sale mal, como que la pizzería no puede entregar tu pizza porque no tienen los ingredientes, o el repartidor se perdió en el camino, recibirás una notificación de error. Aquí es donde manejas cualquier problema que haya surgido, como pedir a otra pizzería o llamar para ver qué pasó.


fetch("https://pizzeria.com/pedir-pizza") //! Hacemos el pedido de la pizza
    .then(response => response.json()) //! La pizzería confirma que han recibido el pedido y están preparando la pizza
    .then(data => {console.log(data); //! El repartidor llega y recibimos nuestra pizza
    })
    .catch(error => {console.error('Error:', error); //! Algo salió mal, la pizzería no puede entregar la pizza y manejamos el error
    });
