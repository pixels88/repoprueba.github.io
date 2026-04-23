let numero = 0;
let counter = 0;

function fechita() {
    document.getElementById("fecha").innerHTML = Date();
}

function sumarClick() {
    numero++;
    document.getElementById("contador_clicks").innerHTML = numero;
}

function randomColor() {
    let letters = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random()*16)];
    }

    return color;
}

function cambiarColor() {
    let color = randomColor();
    document.getElementById("colors").style.color = color;
}

function addElement() {
    counter++;
    element = document.createElement("p");
    element.innerHTML = `Elemento - ${counter}`;
    document.getElementById("contenedor").appendChild(element)
}