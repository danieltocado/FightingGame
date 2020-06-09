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

    atacar(enemigo) {
        let luck = funciones.random(1,enemigo.suerte);
        let hit = (this.ataque - enemigo.defensa) * luck;
        let speed = funciones.random(1,100);

        if (speed < enemigo.velocidad) {
            hit -= funciones.random(1,5);
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
    turno1: 0,
    winner: "",
    fighter1: "",
    fighter2: "",
    first: "",
    victoriap1: "",
    victoriap2: "",

    resetPelea(){
        this.turno1 = 0;
        this.first = "";
        this.fighter1 = "";
        this.fighter2 = "";
    },

    limpiarPelea() {
        this.resetPelea();
        juego.turno++;
        this.fighter1.vida = 200;
        this.fighter2.vida = 200;

        juego.faselucha();
    },

    pelea(arglu1,arglu2){

        first = funciones.random(1, 3);

        this.turno1++;
        this.fighter1 = arglu1;
        this.fighter2 = arglu2;


        //estado y acciones luchador1
        if(this.fighter1.vida > 0){
                if(first == 1) {
                    this.victoriap1 = (this.fighter2 <= 0) ? "v" : "m";
                    if(this.victoriap1 == "v") {
                        //Ganaria el jugador1
                    }else {
                        this.fighter1.atacar(this.fighter2);

                        if(this.fighter2.vida < 0) {
                            this.fighter2.vida = 0;
                        }

                        let lbact = document.getElementById("vida2");
                        lbact.innerHTML = `${this.fighter2.vida}%`;


                    }
                }
        } else {
            //gana jugador2
            document.getElementById("fist").onclick = "";
            this.winner = `THE WINNER IS ${this.fighter2.nombre}`;

            let koknow2 = document.getElementById("anuncioko");
            koknow2.innerHTML = `THE WINNER IS ${this.fighter2.nombre}`;

            partida.team2wins++;

            setTimeout(init2 = () =>{
                this.limpiarPelea()}
                ,2000);
        }

        if(this.fighter2.vida > 0) {
            if(first == 2) {
                this.victoriap2 = (this.fighter1.vida <= 0) ? "v" : "m";
                if (this.victoriap2 == "v") {
                    //gana el jugador2
                } else {
                    this.fighter2.atacar(this.fighter1);

                    if(this.fighter1.vida < 0) {
                        this.fighter1.vida = 0;
                    }

                    let lbact = document.getElementById("vida1");
                    lbact.innerHTML = `${this.fighter1.vida}%`;

                }
            }
        } else {
            //gana jugador 1
            this.winner = `THE WINNER IS ${this.fighter1.nombre} `;
            document.getElementById("fist").onclick = "";

            let koknow = document.getElementById("anuncioko");

            koknow.innerHTML = `THE WINNER IS ${this.fighter1.nombre} `;

            partida.team1wins++;

            setTimeout(init2 = () =>{
                this.limpiarPelea()}
                ,2000);
        }
    }


};





  