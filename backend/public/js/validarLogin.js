const email = document.querySelector('#Email');

const contraseña = document.querySelector('#contraseña');

const formulario = document.querySelector('form');

formulario.addEventListener('submit', function(e){
    let errores = true;

    if(email.value == "" || !email.value.match(/^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i)){
        errores = false;
        email.classList.add('is-invalid')
        email.nextElementSibling.innerHTML = "debes completar el campo email con un mail valido"
    }else{
        email.classList.remove('is-invalid')
        email.nextElementSibling.innerHTML = ""
    }
   
    if(contraseña.value == "" || contraseña.value.length < 8){
        errores = false;
        contraseña.classList.add('is-invalid')
        contraseña.nextElementSibling.innerHTML = "las credeciales mail o contraseña no coinciden"
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