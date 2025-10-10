
document.addEventListener('DOMContentLoaded', function() {

    var imagenOriginal = document.getElementById('imagen1');
    imagenOriginal.addEventListener('click', function() {

        var nuevaImagen = document.createElement('img');                    
        nuevaImagen.src = "https://bringatrailer.com/wp-content/uploads/2023/05/1991_acura_nsx_1991_acura_nsx_fdf0ac00-516b-48f1-b312-928e76953870-2xc0mp-99367-27840.jpg";
        nuevaImagen.className = "imagen";
    
        var contenedor = document.querySelector('.contenedor');
    
        contenedor.replaceChild(nuevaImagen, imagenOriginal);
        
    });
    
});