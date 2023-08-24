function alerta(){
    alert("¡Hola!");
}

function cartelito (){
    alert("¡Hola! ¡Soy el div!");
}

document.addEventListener("DOMContentLoaded", function(){
const miDiv = document.getElementById("div");
const boton = document.getElementById("boton");

miDiv.addEventListener("click", function(ev){
    if (ev.target != boton){
        cartelito()
    }
});
})