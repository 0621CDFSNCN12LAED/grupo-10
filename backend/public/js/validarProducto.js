const nombre = document.querySelector('#nombre');
const descripcion = document.querySelector('#descripcion');
const precio = document.querySelector('#precio');
const img = document.querySelector('#img');


const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e){


    if(nombre.value == "" || nombre.value.length < 5){
        nombre.classList.add('is-invalid');
        nombre.nextElementSibling.innerHTML = "debes completar el campo con mas de 5 caracteres"
    }else{
        nombre.classList.remove('is-invalid')
        nombre.nextElementSibling.innerHTML = ""
    }

    if(descripcion.value == "" || descripcion.value.length < 30){
        descripcion.classList.add('is-invalid');
        descripcion.nextElementSibling.innerHTML = "debes completar el campo con mas de 30 caracteres"
    }else{
        descripcion.classList.remove('is-invalid')
        descripcion.nextElementSibling.innerHTML = ""
    }

    if(precio.value == "" || nombre.value.length < 3){
        precio.classList.add('is-invalid');
        precio.nextElementSibling.innerHTML = "el precio debe tener al menos 3 digitos"
    }else{
        precio.classList.remove('is-invalid')
        precio.nextElementSibling.innerHTML = ""
    }

    // const formatos =  ['jpg','jpeg','png'];
    // const extenciones = img.value.split('.').pop();
    // if(!extenciones.includes(formatos)){ 
    //     img.classList.add('is-invalid')
    // }else{
    //     img.classList.remove('is-invalid')
    // }

    e.preventDefault();
        
              
})
