// const nombre = document.querySelector('#Nombre');
// const apellido = document.querySelector('#Apellido');
// const direccion = document.querySelector('#Direccion');
// const edad = document.querySelector('#Edad');
// const email = document.querySelector('#Email');
// const image = document.querySelector('#img');
// const contraseña = document.querySelector('#contraseña');

// const formulario = document.querySelector('form');

// const inputs = [nombre, apellido, direccion, edad, email, contraseña]


// formulario.addEventListener('submit', function(e){
    
    
//     if(nombre.value == "" || nombre.value.length < 2){
//         nombre.classList.add('is-invalid');

//     }else{
//         nombre.classList.remove('is-invalid')
//     }
        
//     if(apellido.value == "" || apellido.value.length < 2){
//         apellido.classList.add('is-invalid')
//     }else{
//         apellido.classList.remove('is-invalid')}

//     if(direccion.value == "" || direccion.value.length < 5){
//         direccion.classList.add('is-invalid')
//     }else{
//         direccion.classList.remove('is-invalid')}

//     if(edad.value == "" || edad.value <= 17){
//         edad.classList.add('is-invalid')
//     }else{
//         edad.classList.remove('is-invalid')}

//     if(email.value == ""){  //TERMINAR VALIDACION QUE SEA MAIL
//         email.classList.add('is-invalid')
//     }else{
//         email.classList.remove('is-invalid')}

//     const formatos =  ['jpg','jpeg','png'];
//     const extenciones = image.value.split('.').pop();
//     if(!extenciones.includes(formatos)){ 
//         contraseña.classList.add('is-invalid')
//     }else{
//         contraseña.classList.remove('is-invalid')}

        
//     if(contraseña.value == "" || contraseña.value.length < 8){
//         contraseña.classList.add('is-invalid')
//     }else{
//         contraseña.classList.remove('is-invalid')}
    
    
//     e.preventDefault();
      
        
       

// })