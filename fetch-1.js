//mensaje a consola 
console.log('Hi world');

//declaramos un objeto llamado request para la instancia
var request = new XMLHttpRequest;

//configuracion de nuestro servicio
request.open('GET','https://reqres.in/api/users',true);