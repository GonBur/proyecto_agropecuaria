/* recuperando el boton  */
let boton = document.getElementById("boton");

/* recuperando el menu de navegacion */
let nav = document.getElementById("nav");

/* creando un funcion */
function mostrar_menu (){
    nav.classList.toggle("mostrarMenu");
}



if (boton == true) {
    boton.addEventListener("click", mostrar_menu)
} else {
    boton.addEventListener("click", mostrar_menu)
}