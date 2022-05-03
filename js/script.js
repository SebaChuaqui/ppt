var jugadas = parseInt(prompt("Cantidad de juegos que desea hacer:"));

var juega = document.getElementById("juegos");

juega.innerHTML= jugadas;

var usuarioGana = 0;
var maquinaGana = 0;
var juegaUsuario = jugadas;
var juegosActuales = 0;

while (juegosActuales < juegaUsuario) {

var Usuario = prompt("Escriba: Piedra, Papel o Tijera");
var Maquina = jugar();

ganador(Usuario, Maquina);

juegosActuales++

}

resultadoCachipun(usuarioGana, maquinaGana)

function resultadoCachipun(usuarioGana, maquinaGana){
    if (usuarioGana > maquinaGana){
        alert("Venciste a la máquina")
        document.getElementById("puntaje").innerHTML = "Eres el Ganador"
    }
    else if (usuarioGana < maquinaGana){
        alert("Fallaste, gano la máquina")
        document.getElementById("puntaje").innerHTML = "Eres el Perdedor"
    }

    else{
        alert("Esto es un empate")
        document.getElementById("puntaje").innerHTML = "Empatados"
    }
}

function juego(){

    var numAleatorio = Math.floor(Math.random()*3);

    return numAleatorio

}

function ganadorDelJuego(puntajeUsuario, puntajeMaquina){

    var puntajeObtenido = ["piedra", "papel", "tijera"]

    if(puntajeUsuario ==0){
        if (puntajeMaquina == 0) {
            alert(`¡Han empatado! Los puntajes son: ${puntajeObtenido[puntajeUsuario]}`);
        }
        else if (puntajeMaquina == 1) {
            alert(`¡Ganaste! Tu puntaje es: ${puntajeObtenido[puntajeUsuario]}. Puntaje de la máquina: ${puntajeObtenido[puntajeMaquina]}`);
            usuarioGana++
        }
        else if (puntajeMaquina == 2) {
            alert(`¡Perdiste! Tu puntaje es: ${puntajeObtenido[puntajeUsuario]}. Puntaje de la máquina: ${puntajeObtenido[puntajeMaquina]}`);
            maquinaGana++
        }
        else {
            alert(`¡Cuek!`)
        }
    }

    else if (puntajeUsuario == 1) {

        if (puntajeMaquina == 1) {
            alert(`¡Han empatado! Tu puntaje es: ${puntajeObtenido[puntajeUsuario]}`);
        }
        else if (puntajeMaquina == 0) {
            alert(`¡Ganaste! Tu puntaje es: ${puntajeObtenido[puntajeUsuario]}. Puntaje de la máquina: ${puntajeObtenido[puntajeMaquina]}`);
            usuarioGana++
        }
        else if (puntajeMaquina == 2) {
            alert(`¡Perdiste! Tu puntaje es: ${puntajeObtenido[puntajeUsuario]}. Puntaje de la máquina: ${puntajeObtenido[puntajeMaquina]}`);
            maquinaGana++
        }

        else {
            alert(`¡Cuek!`)
        }
    }

    else if (puntajeUsuario == 2) {

        if (puntajeMaquina == 2) {
            alert(`¡Han empatado! Tu puntaje es: ${puntajeObtenido[puntajeUsuario]}`);
        }
        else if (puntajeMaquina == 1) {
            alert(`¡Ganaste! Tu puntaje es: ${puntajeObtenido[puntajeUsuario]}. Puntaje de la máquina ${puntajeObtenido[puntajeMaquina]}`);
            usuarioGana++
        }
        else if (puntajeMaquina == 0) {
            alert(`¡Perdiste! Tu puntaje es: ${puntajeObtenido[puntajeUsuario]}. Puntaje de la máquina ${puntajeObtenido[puntajeMaquina]}`);
            ganadasMaquina++
        }
        else {
            alert(`¡Cuek!`)
        }
    }
}
