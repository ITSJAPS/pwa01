//intanciamos lo dos componentes de imagen de la paguina index.html
let img1= document.getElementById("IdImg1");
let img2= document.getElementById("IdImg2");



//Creamos un fetch con codigo de promesa pero simplificada
fetch('imagenes/MazingerZ-1.png')
.then(resp=> resp.blob())
.then(image =>{
    console.log(image);
    
    //creamos instancia para imagen primera
    var imgPath1 = URL.createObjectURL(image);
    img1.src=imgPath1;
});
//fetch con codigo de promesa normal 
fetch('imagenes/MazingerZ-2.png')
.then(resp =>{
    return resp.blob();
})
.then(image=>{
    console.log(image);
    
    //creamos la segunda instancia imagen 
    var imgPath2 =URL.createObjectURL(image);
    img2.src = imgPath2;
});
