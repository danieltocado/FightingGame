//Estructura básica de personajes y juego

class Fighter {
    constructor(nombre, ataque, defensa, velocidad, suerte) {

        this.nombre = nombre;
        this.ataque = ataque;
        this.defensa = defensa;
        this.velocidad = velocidad;
        this.suerte = suerte;
        this.vida = 100;
    }

    atacar() {
        let luck = funciones.random(1,enemigo.suerte);

        let hit = (this.ataque - enemigo.defensa) * luck;

        enemigo.vida -= hit;
    }

    defenderse() {

    }

    esquivar() {

    }

    especial() {
        let hit = this.ataque + 2;

        enemigo.vida -= hit;
    }
}

//Instanciamos a los luchadores
// nombre, ataque, defensa, velocidad, suerte

let f1 = new Fighter("Mario", 0, 0, 0, 0);
let f2 = new Fighter("Luigi", 20, 10, 8, 15, 6, 3);
let f3 = new Fighter("Bowser", 20, 10, 8, 15, 6, 3);
let f4 = new Fighter("Sonic", 20, 10, 8, 15, 6, 3);
let f5 = new Fighter("Captain Falcon", 20, 10, 8, 15, 6, 3);
let f6 = new Fighter("Donkey Kong", 20, 10, 8, 15, 6, 3);
let f7 = new Fighter("Fox", 20, 10, 8, 15, 6, 3);
let f8 = new Fighter("Link", 20, 10, 8, 15, 6, 3);
let f9 = new Fighter("Pikachu", 20, 10, 8, 15, 6, 3);
let f10 = new Fighter("Samus", 20, 10, 8, 15, 6, 3);

//Traductor

let allplayers = {
    "1": f1,
    "2": f2,
    "3": f3,
    "4": f4,
    "5": f5,
    "6": f6,
    "7": f7,
    "8": f8,
    "9": f9,
    "10": f10,
}

document.querySelector("primer-luchador").innerHTML = JSON.stringify(f1);
