//Estructura básica de personajes y juego

class Fighter {
    constructor(id, imagen, nombre, ataque, defensa, velocidad, suerte) {

        this.id = id;
        this.imagen = imagen;
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
        let speed = func.random(1,100);

        if (speed < enemigo.velocidad) {
            hit -= func.random(1,5);
        }

        enemigo.vida -= hit;
    }

    especial() {
        let hit = this.ataque + 2;

        enemigo.vida -= hit;
    }
}

//Instanciamos a los luchadores
// id, nombre, ataque, defensa, velocidad, suerte

let f1 = new Fighter('1','','Mario', 20, 10, 8, 15, 6, 3);
let f2 = new Fighter('2','','Luigi', 20, 10, 8, 15, 6, 3);
let f3 = new Fighter('3','','Bowser', 20, 10, 8, 15, 6, 3);
let f4 = new Fighter('4','','Sonic', 20, 10, 8, 15, 6, 3);
let f5 = new Fighter('5','','Captain Falcon', 20, 10, 8, 15, 6, 3);
let f6 = new Fighter('6','','Donkey Kong', 20, 10, 8, 15, 6, 3);
let f7 = new Fighter('7','','Fox', 20, 10, 8, 15, 6, 3);
let f8 = new Fighter('8','','Link', 20, 10, 8, 15, 6, 3);
let f9 = new Fighter('9','','Pikachu', 20, 10, 8, 15, 6, 3);
let f10 = new Fighter('10','','Samus', 20, 10, 8, 15, 6, 3);

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

//Partida

let partida = {
    turno: 0,
    ganador: "",
    fighter1: "",
    fighter2: "",
    first: "",

    pelea(luchador1,luchador2) {
        
        this.fighter1 = luchador1;
        this.fighter2 = luchador2;

        this.turno++; //sig turno

        //Funcion random primer ataque

        first = funciones.random(1,3);

        if (this.fighter1.vida > 0) {
            if (first == 1) {
                this.fighter1.atacar(this.fighter2);
                console.log('first 1');
            } else if (first == 2) {
                this.fighter2.atacar(this.fighter1);
                console.log('first 2');
            };
        }
      
    }

};