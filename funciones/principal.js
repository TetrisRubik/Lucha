//* Guión principal.
const lienzo = document.getElementById("lienzo");
const ctx = lienzo.getContext("2d");

lienzo.width = 1024;
lienzo.heigth = 576;

ctx.fillRect(0, 0, lienzo.width, lienzo.heigth);