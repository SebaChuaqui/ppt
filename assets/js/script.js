var Jugadas = parseInt(prompt("Veces que desea Jugar:"));

var dato = document.getElementById("jugar");

dato.innerHTML = Jugadas;

var usuarioGana = 0;
var maquinaGana = 0;
var usuarioJuega = Jugadas;
var juegosActuales = 0;

while (juegosActuales < usuarioJuega) {

    var usuario = parseInt(prompt("Elija: Piedra(1), Papel(2), Tijera(3)"))
    var maquina = jugada()

    ganador(usuario, maquina)

    juegosActuales++

}


    juego(usuarioGana, maquinaGana)


function juego(usuarioGana, maquinaGana) {
    if (usuarioGana > maquinaGana) {

        alert(`Has ganado el juego`)
        document.getElementById("resultado").innerHTML = "¡Has Ganado el juego!"
    }
    
    else if (usuarioGana< maquinaGana) {
        alert(`Perdiste el juego`)
        document.getElementById("resultado").innerHTML = "Eres un Perdedor"
    }

    else {
        alert(`Esto es un Empate`)
        document.getElementById("resultado").innerHTML = "Solo Empate"
    }
}

function jugada() {
    var numAleatorio = Math.floor(Math.random() * 3);

    return numAleatorio
}

function ganador(usuarioResultado, maquinaResultado) {

    var puntajeObtenido = ["piedra", "papel", "tijera"]

    if (usuarioResultado == 0) {

        if (maquinaResultado == 0) {
            alert(`Es un empate. Los puntajes son: ${puntajeObtenido[usuarioResultado]}`);
        }
        else if (maquinaResultado == 1) {
            alert(`¡Ganaste!. Los puntajes son: ${puntajeObtenido[usuarioResultado]}, ${resultadosJugada[resultadoMaquina]}`);
            usuarioGana++
        }
        else if (maquinaResultado == 2) {
            alert(`¡Perdiste! Los puntajes son: ${puntajeObtenido[usuarioResultado]}, ${resultadosJugada[resultadoMaquina]}`);
            maquinaGana++
        }
        else {
            alert(`Cuek`)
        }
    }

    else if (usuarioResultado == 1) {

        if (maquinaResultado == 1) {
            alert(`Es un empate. Los puntajes son: ${puntajeObtenido[usuarioResultado]}`);
        }
        else if (maquinaResultado == 0) {
            alert(`¡Ganaste! Los puntajes son: ${puntajeObtenido[usuarioResultado]}, ${puntajeObtenido[maquinaResultado]}`);
            usuarioGana++
        }
        else if (maquinaResultado == 2) {
            alert(`¡Perdiste! Los puntajes son: ${puntajeObtenido[usuarioResultado]}, ${puntajeObtenido[maquinaResultado]}`);
            maquinaGana++
        }

        else {
            alert(`Cuek`)
        }
    }

    else if (usuarioResultado == 2) {

        if (maquinaResultado == 2) {
            alert(`Es un empate. Los puntajes son: ${puntajeObtenido[usuarioResultado]}`);
        }
        else if (maquinaResultado == 1) {
            alert(`¡Ganaste! Los puntajes son: ${puntajeObtenido[usuarioResultado]}, ${puntajeObtenido[maquinaResultado]}`);
            usuarioGana++
        }
        else if (maquinaResultado == 0) {
            alert(`¡Perdiste! Los puntajes son: ${puntajeObtenido[usuarioResultado]}, ${puntajeObtenido[maquinaResultado]}`);
            maquinaGana++
        }
        else {
            alert(`Cuek`)
        }
    }
}
