//mensaje de consola
console.log('Hi world');

//funtion normal que regresa una promesa pero el reultado se obtiene mas lento
function sumarUno(numero,){

    var promesa1 = new Promise (function(resolve,reject){
        if(numero>=7){
            reject('El numero ya es muy alto');
        }

        setTimeout(function(){
            resolve(numero+1); 
        }, 800);
    });
    return promesa1;
}

//mandar llamar a la funcion
sumarUno(8)
.then(sumarUno)
.then(sumarUno)
.then(numeroNuevo=> {
 console.log('Resultado: ',numeroNuevo);
}).catch(error=>{
    console.log('Error en la promesa',error)
});
