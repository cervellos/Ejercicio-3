let nombre
nombre = prompt('Indique su nombre')

let edad
edad = prompt('Indique su edad')

if (edad < 30) {
console.log("Hola como andas " + nombre);
alert("Hola como andas " + nombre)
} else if (edad > 30 && edad < 99){
console.log("Bienvenido. Buenos dias " + nombre); 
alert("Bienvenido. Buenos dias " + nombre)
}else{
    console.log("esa no es una edad humana. de todas formas, Bienvenido" + nombre)
    alert("esa no es una edad humana. de todas formas, Bienvenido" + nombre)
}