const nombre = document.querySelector('#Nombre');
const apellido = document.querySelector('#Apellido');
const direccion = document.querySelector('#Direccion');
const edad = document.querySelector('#Edad');
const email = document.querySelector('#Email');
const image = document.querySelector('#img');
const contraseña = document.querySelector('#contraseña');

const formulario = document.querySelector('form');


formulario.addEventListener('submit', function(e){
    e.preventDefault();
    
    if(nombre.value == "" || nombre.value.length < 2){
        nombre.classList.add('is-invalid');
        nombre.nextElementSibling.innerHTML = "debes completar el campo con mas de 2 caracteres"
    }else{
        nombre.classList.remove('is-invalid')
        nombre.nextElementSibling.innerHTML = ""
    }
      
    if(apellido.value == "" || apellido.value.length < 2){
        apellido.classList.add('is-invalid')
        apellido.nextElementSibling.innerHTML = "debes completar el campo con mas de 2 caracteres"
    }else{
        apellido.classList.remove('is-invalid')
        apellido.nextElementSibling.innerHTML = ""
    }

    if(direccion.value == "" || direccion.value.length < 5){
        direccion.classList.add('is-invalid')
        direccion.nextElementSibling.innerHTML = "debes completar el campo con mas de 5 caracteres"
    }else{
        direccion.classList.remove('is-invalid')
        direccion.nextElementSibling.innerHTML = ""
    }

    if(edad.value == "" || edad.value <= 17){
        edad.classList.add('is-invalid')
        edad.nextElementSibling.innerHTML = "debes tener mas de 18 años"
    }else{
        edad.classList.remove('is-invalid')
        edad.nextElementSibling.innerHTML = ""
    }
    if(email.value == "" || !email.value.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)){
        // validar el campo mail con formato mail
        email.classList.add('is-invalid')
        email.nextElementSibling.innerHTML = "debes completar el campo email con un mail valido"
    }else{
        email.classList.remove('is-invalid')
        email.nextElementSibling.innerHTML = ""
    }

    const formatos =  ['jpg','jpeg','png'];
    const extenciones = img.value.split('.').pop();
    if(!extenciones.includes(formatos)){ 
        img.classList.add('is-invalid')
    }else{
        img.classList.remove('is-invalid')
    }

        
    if(contraseña.value == "" || contraseña.value.length < 8){
        contraseña.classList.add('is-invalid')
        contraseña.nextElementSibling.innerHTML = "debes completar la contraseña con con al menos a 8 caracteres"
    }else{
        contraseña.classList.remove('is-invalid')
        contraseña.nextElementSibling.innerHTML = ""
    }
    
    

})