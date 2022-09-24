//mensaje a consola 
console.log('Hi world');

//declaramos un objeto llamado request para la instancia
var request = new XMLHttpRequest();

//configuracion de nuestro servicio
request.open('GET','https://reqres.in/api/users',true);

//hacemos el send
request.send(null);

//ejecucion de tipo en nuestro html agregamos la funcion onreadystatechange
request.onreadystatechange=function (state) {
    if(request.readyState===4){
        //la respuesta obtiene un string
        var resp = request.response;
       //ahora transformamos la cadena en formato
       var respObj = JSON.parse(resp);
       
        //enviamos el resultado ala consola
        console.log(resp);
        //obtenemos solo la paguina actual
        console.log(respObj.page);
        //obtenemos ahora solo la data de los usuarios
        console.log(respObj.data)
    }
    
}