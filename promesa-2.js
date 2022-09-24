//mensaje de consola
console.log('Hi world');

//funtion normal que regresa una promesa pero el reultado se obtiene mas lento
function sumarUno(numero, resultadoCallback){

    var promesa1 = new Promise (function(resolve,reject){
      
        setTimeout(function(){
            resultadoCallback(numero+1); 
        }, 800);
    });
    return promesa1;
}

//mandar llamar a la funcion
sumarUno(8).then(numeroNuevo=> {
    console.log('Resultado1: ',numeroNuevo);
    return sumarUno(numeroNuevo);
}).then(numeroNuevo=>{
    console.log('Resultado2: ',numeroNuevo);
    return sumarUno(numeroNuevo);
}).then(numeroNuevo=>{
    console.log('Resultado3: ',numeroNuevo);
});
