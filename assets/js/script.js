// Variables

var juegos = prompt("¿Cuantos Desafios vas a jugar?")

var juegosRealizados = 0
var usuarioPuntaje = 0
var maquinaPuntaje = 0
var empatePuntaje = 0

// Ciclo While

while (juegosRealizados < juegos) {
    var usuario = juegoUsuario()
    alert(`El Usuario jugó: ${usuario}`)

    var maquina = juegoMaquina()
    alert(`La Máquina jugó: ${maquina}`)

    elGanadorEs(usuario, maquina)

    juegosRealizados++
}

triunfadorFinal(usuarioPuntaje, maquinaPuntaje, empatePuntaje)

// El Usuario realiza su jugada

function juegoUsuario() {
    var elige = parseInt(prompt("Elegir un alternativa entre 0, 1 o 2:\n0: Piedra\n1: Papel\n2: Tijera"))

    if (elige == 0) {
        elige = "piedra"
    }
    else if (elige == 1) {
        elige = "papel"
    }
    else {
        elige = "tijera"
    }

    return elige
}

// La máquina realiza su jugada

function juegoMaquina() {

    var maquinaRandom = Math.floor(Math.random() * 3)
    if (maquinaRandom == 0) {
        maquinaRandom = "piedra"
    }
    else if (maquinaRandom == 1) {
        maquinaRandom = "papel"
    }
    else {
        maquinaRandom = "tijera"
    }

    return maquinaRandom
}

// Función ganador cachipun

function elGanadorEs(jugadorUsuario, jugadorMaquina) {
    if ((jugadorUsuario == "papel") && (jugadorMaquina == "piedra")) {
        alert(`¡Ganaste! Tu puntaje es: ${jugadorUsuario}\n y el puntaje de la máquina es: ${jugadorMaquina}`)
        usuarioPuntaje += 1
    }
    else if ((jugadorUsuario == "piedra") && (jugadorMaquina == "papel")) {
        alert(`¡Perdiste!: Tu puntaje es: ${jugadorUsuario}\n y el puntaje de la maquina ${jugadorMaquina}`)
        maquinaPuntaje += 1
    }
    else if ((jugadorUsuario == "tijera") && (jugadorMaquina == "papel")) {
        alert(`¡Ganaste! Tu puntaje es: ${jugadorUsuario}\n y el puntaje de la máquina es: ${jugadorMaquina}`)
        usuarioPuntaje += 1
    }
    else if ((jugadorUsuario == "papel" && jugadorMaquina == "tijera")) {
        alert(`¡Perdiste!: Tu puntaje es: ${jugadorUsuario}\n y el puntaje de la maquina ${jugadorMaquina}`)
        maquinaPuntaje += 1
    }
    else if ((jugadorUsuario == "piedra") && (jugadorMaquina == "tijera")) {
        alert(`¡Ganaste! Tu puntaje es: ${jugadorUsuario}\n y el puntaje de la máquina es: ${jugadorMaquina}`)
        usuarioPuntaje += 1
    }
    else if ((jugadorUsuario == "tijera") && (jugadorMaquina == "piedra")) {
        alert(`¡Perdiste!: Tu puntaje es: ${jugadorUsuario}\n y el puntaje de la maquina ${jugadorMaquina}`)
        maquinaPuntaje += 1
    }
    else {
        alert(`Empate: Tu elegiste ${jugadorUsuario}\n y la máquina eligió: ${jugadorMaquina}`)
        empatePuntaje += 1
    }
}
// Función ganador del juego

function triunfadorFinal(jugUsuario, jugMaquina, jugEmpate) {
    
    var div =  document.getElementById("resultado")

    if (jugUsuario == jugMaquina) {
        div.innerHTML += "<h3>ESTO ES UN TIE</h3>"
    }
    else if (jugEmpate > jugUsuario && jugEmpate > jugMaquina) {
        div.innerHTML += "<h1>ESTO ES UN TIE</h1>"
    }
    else if (jugUsuario > jugMaquina) {
        div.innerHTML += "<h1>¡ERES UN WINNER!</h1>"
    }
    else {
        div.innerHTML += "<h1>¡ERES UN LOOSER!</h1>"
    }
    div.innerHTML +="<h2>PUNTAJE</h2>"
    div.innerHTML +=`<p>USUARIO: ${jugUsuario} pts</p>`
    div.innerHTML +=`<p>MAQUINA: ${jugMaquina} pts</p>`
    div.innerHTML +=`<p>EMPATE: ${jugEmpate} pts</p>`
}
