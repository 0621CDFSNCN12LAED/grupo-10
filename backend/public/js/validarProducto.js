const nombre = document.querySelector('#nombre');
const descripcion = document.querySelector('#descripcion');
const precio = document.querySelector('#precio');
const img = document.querySelector('#img');


const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e){

    let errores = true;


    if(nombre.value == "" || nombre.value.length < 5){
        errores = false;
        nombre.classList.add('is-invalid');
        nombre.nextElementSibling.innerHTML = "debes completar el campo con mas de 5 caracteres"
    }else{
        nombre.classList.remove('is-invalid')
        nombre.nextElementSibling.innerHTML = ""
    }

    if(descripcion.value == "" || descripcion.value.length < 30){
        errores = false;
        descripcion.classList.add('is-invalid');
        descripcion.nextElementSibling.innerHTML = "debes completar el campo con mas de 30 caracteres"
    }else{
        descripcion.classList.remove('is-invalid')
        descripcion.nextElementSibling.innerHTML = ""
    }

    if(precio.value == "" || precio.value.length <= 3){
        errores = false;
        precio.classList.add('is-invalid');
        precio.nextElementSibling.innerHTML = "el precio debe tener al menos 3 digitos"
    }else{
        precio.classList.remove('is-invalid')
        precio.nextElementSibling.innerHTML = ""
    }

    let isCharImg = /(.jpg|.jpeg|.png|.gif)$/i
    console.log (img.value)
    if(!isCharImg.test(img.value)){ 
        errores = false;
        img.classList.add('is-invalid')
    }else{
        img.classList.remove('is-invalid')
    }


    if(!errores){
        e.preventDefault();
    }else{
        this.submit()
    }
        
              
})
