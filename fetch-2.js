
//configuracion de nuestro servicio
//'https://reqres.in/api/users'

//fetch original 
fetch('https://reqres.in/api/users')
.then(resp => {
    console.log(resp)
});

//Creamos la funcion fetch con funciones anidadas declaracion ideal
fetch('https://reqres.in/api/users')
.then(resp => resp.json())
.then(respObj=>{
    console.log(respObj);
    console.log(respObj.page);
    console.log(respObj.per_page);
    console.log(respObj.data);
    
});
