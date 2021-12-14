const nombre = document.querySelector('#Nombre');
const apellido = document.querySelector('#Apellido');
const direccion = document.querySelector('#Direccion');
const edad = document.querySelector('#Edad');
const email = document.querySelector('#Email');
const image = document.querySelector('#img');
const contraseña = document.querySelector('#contraseña');

const formulario = document.querySelector('form');


formulario.addEventListener('submit', function(e){

    let errores = true;
    
    if(nombre.value == "" || nombre.value.length < 2){
        errores = false;
        nombre.classList.add('is-invalid');
        nombre.nextElementSibling.innerHTML = "debes completar el campo con mas de 2 caracteres"
    }else{
        
        nombre.classList.remove('is-invalid')
        nombre.nextElementSibling.innerHTML = ""
    }
      
    if(apellido.value == "" || apellido.value.length < 2){
        errores = false;
        apellido.classList.add('is-invalid')
        apellido.nextElementSibling.innerHTML = "debes completar el campo con mas de 2 caracteres"
    }else{
        apellido.classList.remove('is-invalid')
        apellido.nextElementSibling.innerHTML = ""
    }

    if(direccion.value == "" || direccion.value.length < 5){
        errores = false;
        direccion.classList.add('is-invalid')
        direccion.nextElementSibling.innerHTML = "debes completar el campo con mas de 5 caracteres"
    }else{
        direccion.classList.remove('is-invalid')
        direccion.nextElementSibling.innerHTML = ""
    }

    if(edad.value == "" || edad.value <= 17){
        errores = false;
        edad.classList.add('is-invalid')
        edad.nextElementSibling.innerHTML = "debes tener mas de 18 años"
    }else{
        edad.classList.remove('is-invalid')
        edad.nextElementSibling.innerHTML = ""
    }
    if(email.value == "" || !email.value.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)){
        errores = false;
        email.classList.add('is-invalid')
        email.nextElementSibling.innerHTML = "debes completar el campo email con un mail valido"
    }else{
        email.classList.remove('is-invalid')
        email.nextElementSibling.innerHTML = ""
    }

    
    let isCharImg = /(.jpg|.jpeg|.png|.gif)$/i
    console.log (img.value)
    if(!isCharImg.test(img.value)){ 
        errores = false;
        img.classList.add('is-invalid')
    }else{
        img.classList.remove('is-invalid')
    }

        
    if(contraseña.value == "" || contraseña.value.length < 8){
        errores = false;
        contraseña.classList.add('is-invalid')
        contraseña.nextElementSibling.innerHTML = "debes completar la contraseña con con al menos a 8 caracteres"
    }else{
        contraseña.classList.remove('is-invalid')
        contraseña.nextElementSibling.innerHTML = ""
    }
    
    if(!errores){
        e.preventDefault();
    }else{
        this.submit()
    }

})