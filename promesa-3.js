//funtion normal que regresa una promesa pero el reultado se obtiene mas lento
function sumarLento(numero){
    //var promesa = new Promise(funtion(resolve))
    //});
    //return promesa
    return new Promise (function(resolve,reject){
      
        setTimeout(function(){
           resolve(numero+2); 
        }, 800);
    });
}

let sumarRapidito = (numero)=>{
    //var promesa = new Promise(funtion(resolve))
    //});
    //return promesa
    return new Promise (function(resolve,reject){
        setTimeout(function(){
           resolve(numero+1); 
        }, 300);
    });
}
//lamamos ala funcion normalmente sumar lento y su promesa

sumarLento(5).then(respuesta=>{
    console.log('Respuesta Lenta:' , respuesta);

});

//lamamos nomla a la funcion sumar rapidito y su promesa
sumarRapidito(10).then(respuesta=>{
console.log('Respuesta Rapida:' , respuesta);
});

//definimos un arreglo  "arregloVarios"
let arregloVarios =[sumarLento(5),sumarRapidito(10),true,'Hi world'];

//llamando las dos funciones y su respectiva promesa al mismo tiempo

Promise.all(arregloVarios).then(repuestas=>{
    console.log('Respuestas: ',repuestas);
}).catch(error=>{
    console.log('Error en todas las promesas', error);
});

