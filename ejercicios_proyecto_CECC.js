document.addEventListener("DOMContentLoaded", function() {
    // Reloj
    function mostrarReloj() {
        const reloj = document.getElementById("reloj");
        const ahora = new Date();
        reloj.innerHTML = ahora.toLocaleTimeString();
        setTimeout(mostrarReloj, 1000);
    }
    mostrarReloj();

    // Cola de texto
    function crearCola() {
        const cola = document.createElement("div");
        cola.id = "cola";
        cola.innerHTML = "¡Hola!";
        cola.style.position = "absolute";
        document.body.appendChild(cola);
    }
    crearCola();

    document.addEventListener("mousemove", function(event) {
        const cola = document.getElementById("cola");
        if (cola) {
            cola.style.top = (event.pageY + 10) + "px";
            cola.style.left = (event.pageX + 10) + "px";
        }
    });

    let index = 0;
    const imagenes1 = ["img/gracias.png", "img/Hola.png", "img/abecedario.png", "img/Conceptos.png"];
    const captions1 = ["Gracias", "Hola", "Abecedario", ""]; // Pie de foto para la primera imagen
    
    const imagenes2 = ["img/Como-estas.png", "img/Bien.png", "img/Mal.png", "img/Varios.png"];
    const captions2 = ["¿Como estas?", "Bien ¿Y tu?", "", "Varios conceptos"]; // Pie de foto para la segunda imagen
    
    function cambiarDiapositiva() {
        const slide1 = document.getElementById("diapositiva");
        const caption1 = document.getElementById("caption");
        const slide2 = document.getElementById("diapositiva-2");
        const caption2 = document.getElementById("caption-2");
        
        // Actualizar diapositiva 1
        if (slide1 && caption1) {
            slide1.src = imagenes1[index];
            caption1.innerText = captions1[index];
        }
        
        // Actualizar diapositiva 2
        if (slide2 && caption2) {
            slide2.src = imagenes2[index % imagenes2.length];  // El modulo garantiza el ciclo de imágenes
            caption2.innerText = captions2[index % captions2.length];
        }

        // Actualizar índice para ambas diapositivas
        index = (index + 1) % imagenes1.length;

        setTimeout(cambiarDiapositiva, 3000); // Cambia cada 3 segundos
    }

    cambiarDiapositiva();
});
   
function ocultarBoton() {
    const anuncio = document.querySelector('.fixed-section');
    if (anuncio.classList.contains('hidden')) {
        anuncio.classList.remove('hidden');
    } else {
        anuncio.classList.add('hidden');
    }
}

    document.querySelector('a[href="#inicio"]').addEventListener('click', function(e) {
        e.preventDefault(); // Prevenir la acción predeterminada del enlace
        document.getElementById('inicio').scrollIntoView({
            behavior: 'smooth' // Desplazamiento suave
        });
    });
