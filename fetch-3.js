//declaracion de un objeto
let usuario={
    nombre:'Alberto',
    edad:22
}
//api fetch post de usuario
fetch('https://reqres.in/api/users',{
    method:'POST',
    body:JSON.stringify(usuario),//DATA por enviar
    headers:{
        'Content-Type':'appliction/json'
    }
});