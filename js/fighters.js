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

let f1 = new Fighter('1','','Mario', 25, 14, 10, 15);
let f2 = new Fighter('2','','Luigi', 23, 12, 10, 18);
let f3 = new Fighter('3','','Bowser', 15, 25, 6, 13);
let f4 = new Fighter('4','','Sonic', 20, 10, 25, 12);
let f5 = new Fighter('5','','Captain Falcon', 24, 10, 10, 15);
let f6 = new Fighter('6','','Donkey Kong', 18, 20, 8, 15);
let f7 = new Fighter('7','','Fox', 20, 10, 8, 25);
let f8 = new Fighter('8','','Link', 25, 10, 8, 15);
let f9 = new Fighter('9','','Pikachu', 25, 12, 15, 8);
let f10 = new Fighter('10','','Samus', 24, 10, 14, 15);
let f11 = new Fighter('11','','Peach', 16, 8, 12, 25);
let f12 = new Fighter('12','','Kirby', 25, 14, 7, 18);
let f13 = new Fighter('13','','Yoshi', 23, 12, 15, 15);
let f14 = new Fighter('14','','Banjo', 20, 10, 8, 15);
let f15 = new Fighter('15','','Cloud', 25, 10, 12, 15);


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
    "11": f11,
    "12": f12,
    "13": f13,
    "14": f14,
    "15": f15,
}

//Partida

let partida = {
    turno1: 0,
    winner: "",
    fighter1: "",
    fighter2: "",
    first: "",
    victoriateam1: "",
    victoriateam2: "",

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

    pelea(fig1,fig2){

        this.turno1++;
        this.fighter1 = fig1;
        this.fighter2 = fig2;

        first = funciones.random(1, 3);

        //estado y acciones luchador1
        if(this.fighter1.vida > 0){
                if(first == 1) {
                    this.victoriateam1 = (this.fighter2 <= 0) ? "w" : "l";
                    if(this.victoriateam1 == "w") {
                    }else {
                        this.fighter1.atacar(this.fighter2);

                        if(this.fighter2.vida < 0) {
                            this.fighter2.vida = 0;
                        }

                        let vidatoda = document.getElementById("vida2");
                        vidatoda.innerHTML = `${this.fighter2.vida}%`;
                    }
                }
        } else {
            //gana jugador2
            document.getElementById("golpe").onclick = "";
            this.winner = `THE WINNER IS ${this.fighter2.nombre}`;

            let anuncioganador2 = document.getElementById("thewinneris");
            anuncioganador2.innerHTML = `THE WINNER IS ${this.fighter2.nombre}`;

            partida.team2wins++;

            setTimeout(init2 = () =>{
                this.limpiarPelea()}
                ,2000);
        }

        if(this.fighter2.vida > 0) {
            if(first == 2) {
                this.victoriateam2 = (this.fighter1.vida <= 0) ? "w" : "l";
                if (this.victoriateam2 == "w") {
                } else {
                    this.fighter2.atacar(this.fighter1);

                    if(this.fighter1.vida < 0) {
                        this.fighter1.vida = 0;
                    }

                    let vidatoda = document.getElementById("vida1");
                    vidatoda.innerHTML = `${this.fighter1.vida}%`;
                }
            }
        } else {
            //gana jugador 1
            this.winner = `THE WINNER IS ${this.fighter1.nombre} `;
            document.getElementById("golpe").onclick = "";

            let anuncioganador = document.getElementById("thewinneris");

            anuncioganador.innerHTML = `THE WINNER IS ${this.fighter1.nombre} `;

            partida.team1wins++;

            setTimeout(init2 = () =>{
                this.limpiarPelea()}
                ,2000);
        }
    }


};





  