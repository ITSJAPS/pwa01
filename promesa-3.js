//funtion normal que regresa una promesa pero el reultado se obtiene mas lento
function sumarLento(numero){
    //var promesa = new Promise(funtion(resolve))
    //});
    //return promesa
    return new Promise (funtion(resolve,reject){
        setTimeout(function(){
           resolve(numero+2); 
        },800);
    });
}