//funtion normal que regresa una promesa pero el reultado se obtiene mas lento
function sumarLento(numero){
    //var promesa = new Promise(funtion(resolve))
    //});
    //return promesa
    return new Promise (function(resolve,reject){
      
        setTimeout(function(){
           resolve(numero+1); 
        }, 300);
    });
}

let sumarRapidito = (numero)=>{

    return new Promise (function(resolve,reject){
        setTimeout(function(){
           //resolve(numero+1); 
           reject('Error en la promesa de la funcion sumar rapidito');
        }, 1000);
    });
}

//creamos una promesa tipo carrera
Promise.race([sumarLento(8),sumarRapidito(15)])
.then(respuesta =>{
    console.log('Respuestas:',respuesta);
}).catch(error=>{
    console.log('Error en la respuesta de la promesa: ',error);
});