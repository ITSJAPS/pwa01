console.log('HI world')
//Funcion para recibir un numero y le suma dos
function sumardos(numero,resultadoCallback){
   setTimeout(function(){
       //return numero +2
       resultadoCallback(numero+1);
   },900);
    

}
//llamar la funcion
sumardos(10,function(resultado){
   
    // console.log("Resultado: "+resultado);
    sumardos(resultado,function(resultado2){
       // console.log("Resultado: "+resultado2);
        sumardos(resultado2,function(resultado3){
            console.log("Resultado: "+resultado3);
        });
         //Desplegar el resultado en consola
    });
});

