// funcao visualizar imagens
const imagenes = document.querySelectorAll('.img-galeria');
const imagenesLight = document.querySelector('.agregar-imagen');
const contenedorLight = document.querySelector('.imagen-light');

imagenes.forEach(imagen =>{
    imagen.addEventListener('click', ()=>{
        aparecerImagen(imagen.getAttribute('src'))
    
    })
})

contenedorLight.addEventListener('click', (e) =>{
    if(e.target !== imagenesLight){
        contenedorLight.classList.remove('show');
        imagenesLight.classList.remove('showImage'); 
    }
})

const aparecerImagen = (imagen) =>{
    imagenesLight.src = imagen;
    contenedorLight.classList.add('show');
    imagenesLight.classList.add('showImage');
}

// funcao filtrar fotos
$(document).ready(function(){
    $(".tudo").click(function(){
        $(".salas, .lazer, .dependencias").show();
    });
  
    $(".so-dependencias").click(function(){
        $(".salas, .lazer").fadeOut(200);
        $(".dependencias").show();
    });
  
    $(".so-salas").click(function(){
        $(".dependencias, .lazer").fadeOut(200);
        $(".salas").show();
    });
  
  $(".so-lazer").click(function(){
        $(".dependencias, .salas").fadeOut(200);
        $(".lazer").show();
    });
});