/* recuperando el boton  */
let boton = document.getElementById("boton");

/* recuperando el menu de navegacion */
let nav = document.getElementById("nav");

/* creando un funcion */
function mostrar_menu (){
    nav.classList.toggle("mostrarMenu");
}




    boton.addEventListener("click", mostrar_menu)
