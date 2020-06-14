let juego = {
    //propiedades
    equipo1: [],
    equipo2: [],
    team1wins: 0,
    team2wins: 0,
    stats: [],
    luchador1: "",
    luchador2: "",
    turno: 0,

    //métodos
    escoge1(idLuchador){
        
        this.equipo1.push(allplayers[idLuchador]);

        for (let i = 0; i < this.equipo1.length; i++) {
            this.stats = document.getElementById("player" + i);
            
            this.stats.innerHTML = 
                `
                <img class="fotoluchador" src="/img/pj/selec/selec_${this.equipo1[i].id}.png">
               
                 `;
                 var audio = new Audio('/sound/super-smash-bros-ultimate-select.mp3');
                 audio.play();
        }

        if (this.equipo1.length < 4) {
            document.getElementById(idLuchador).className = "ocultar";
        }
       
       if (this.equipo1.length == 3) {
            setTimeout(init = () =>{
                this.seleccion2()}
                ,3000)
        }

        console.log(this.equipo1);
    },
    
    escoge2(idLuchador2){

        this.stats = "";
        this.equipo2.push(allplayers[idLuchador2]);

        for (let i2 = 0; i2 < this.equipo2.length; i2++) {
            this.stats = document.getElementById("play" + i2);
            this.stats.innerHTML = 
                `
                <img class="fotoluchador" src="/img/pj/selec/selec_${this.equipo2[i2].id}.png">
               
                 `;
            var audio = new Audio('/sound/super-smash-bros-ultimate-select.mp3');
            audio.play();
        }

        if (this.equipo2.length < 4) {
            document.getElementById(idLuchador2).className = "ocultar";

        }
       
       if (this.equipo2.length === 3) {
            setTimeout(init2 = () =>{
                this.faseprevia()}
                ,3000)
            
        } 

        console.log(this.equipo2);
    },

    seleccion2() {
        organizer(3);
    
        var audio = new Audio('/sound/super-smash-bros-ultimate-press-start-sound-effect.mp3');
    
        let pantalla3 = document.getElementById("pantalla3");
        pantalla3.innerHTML = ` 
        <div class="titulo red"><img src="/img/prelucha/player2choose.png" alt="" srcset="">
        </div>
            
        <div class="panel-luchadores">
            <div class="luchadores custom-cursor">
                <div class="luchador">
                    
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_1.png" alt="" id="1" onclick="juego.escoge2(this.id)" ondragstart="drag(event)" draggable="true"\>
                    <div class="nombre">Mario</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_2.png" alt="" id="2" draggable="true" ondragstart="drag(event)" onclick="juego.escoge2(this.id);">
                    <div class="nombre">Luigi</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_3.png" alt="" id="3" draggable="true" ondragstart="drag(event)" onclick="juego.escoge2(this.id);">
                    <div class="nombre">Bowser</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_4.png" alt="" id="4" onclick="juego.escoge2(this.id);">
                    <div class="nombre">Sonic</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_5.png" alt="" id="5" onclick="juego.escoge2(this.id);">
                    <div class="nombre">Captain Falcon</div></div>
                </div>
            </div>
            
            <div class="luchadores custom-cursor">
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_6.png" alt="" id="6" onclick="juego.escoge2(this.id)">
                    <div class="nombre">Donkey Kong</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_7.png" alt="" id="7" onclick="juego.escoge2(this.id)">
                    <div class="nombre">Fox</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_8.png" alt="" id="8" onclick="juego.escoge2(this.id)">
                    <div class="nombre">Link</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_9.png" alt="" id="9" onclick="juego.escoge2(this.id)">
                    <div class="nombre">Pikachu</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_10.png" alt="" id="10" onclick="juego.escoge2(this.id)">
                    <div class="nombre">Samus</div></div>
                </div>
            </div>
            <div class="luchadores custom-cursor">
                <div class="luchador">
                    
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_11.png" alt="" id="11" onclick="juego.escoge2(this.id)" ondragstart="drag(event)" draggable="true"\>
                    <div class="nombre">Peach</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_12.png" alt="" id="12" draggable="true" ondragstart="drag(event)" onclick="juego.escoge2(this.id);">
                    <div class="nombre">Kirby</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_13.png" alt="" id="13" draggable="true" ondragstart="drag(event)" onclick="juego.escoge2(this.id);">
                    <div class="nombre">Yoshi</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_14.png" alt="" id="14" onclick="juego.escoge2(this.id);">
                    <div class="nombre">Banjo</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/panel/panel_15.png" alt="" id="15" onclick="juego.escoge2(this.id);">
                    <div class="nombre">Cloud</div></div>
                </div>
            </div>
        </div>
        </div>
            <div class="container-luchadores-red">
                <div class="luchadores-objeto1"><img src="/img/start/team2pick.png" alt=""></div>
                <div id="play0" class="cont-luchador-red"></div>
                <div id="play1" class="cont-luchador-red"></div>
                <div id="play2" class="cont-luchador-red"></div>
                <div class="luchadores-objeto2"></div><img src="/img/start/SmashBall.png" alt="" srcset=""></div>
            </div>
        </div>`;
    },
    
    faseprevia() {

        organizer(4);

        let pantalla4 = document.getElementById("pantalla4");
        pantalla4.innerHTML = `
            <div class="getready-container">
                <div class="teamblue"><img src="/img/prelucha/player1fighters.png" alt="" srcset="">
                </div>
                <div class="getready"><img src="/img/lucha/fight.png" alt=""></div>
                <div class="teamred"><img src="/img/prelucha/player2fighters.png" alt="" srcset="">
                </div>
            </div>
            <div class="prelucha-container">
                <div class="prelucha1">
                    ${this.equipo1[0].nombre}
                    <img class="fotoluchador" src="/img/pj/cortadas/cortada_${this.equipo1[0].id}.png">  
                    ${this.equipo1[1].nombre} 
                    <img class="fotoluchador" src="/img/pj/cortadas/cortada_${this.equipo1[1].id}.png">  
                    ${this.equipo1[2].nombre}
                    <img class="fotoluchador" src="/img/pj/cortadas/cortada_${this.equipo1[2].id}.png">
                </div>

                <div class="prelucha-versus">
                    <img src="/img/prelucha/versus.png" alt="">
                </div>

                <div class="prelucha2">
                    ${this.equipo2[0].nombre}
                    <img class="fotoluchador" src="/img/pj/cortadas/cortada_${this.equipo2[0].id}.png"> 
                    ${this.equipo2[1].nombre}
                    <img class="fotoluchador" src="/img/pj/cortadas/cortada_${this.equipo2[1].id}.png">
                    ${this.equipo2[2].nombre}
                    <img class="fotoluchador" src="/img/pj/cortadas/cortada_${this.equipo2[2].id}.png">
                    <div id="loading">
                        <div id="preloader5"></div> 
                    </div>
                </div>
            </div>
            </div>
            `
        
        setTimeout(init2 = () =>{
            this.faselucha()}
            ,5000);
        },

    faselucha() {
        organizer(5);
        randombg();

        if (this.turno < 3) {
            //luchadores actuales.
            luchador1 = this.equipo1[this.turno];
            luchador2 = this.equipo2[this.turno];

            let pantalla5 = document.getElementById("pantalla5");
            pantalla5.innerHTML = `
            
        <div class="header-lucha">
            
            <div class="headercentro-lucha">
                <div class="numero-ronda">ROUND${this.turno + 1} </div>
                <div class="separa"></div>
                <div id="contador"></div>
            </div>
            
    
        
        </div>
        <div class="headercentro-lucha">
            <div class="anuncio-ganador">
                <div class="sep"></div>
                <div id ="thewinneris"></div>
                <div class="sep"></div>
            </div>
        </div>
        <div class="container-pelea">
            <div class="container-equipo">
                <div class="luchador-sprite"><img src="./img/sprites/sprite_${this.equipo1[this.turno].id}_equipo_1.png"></div>
            </div>
            <div class="separa2"></div>
            <div class="container-equipo">
                <div class="luchador-sprite"><img src="./img/sprites/sprite_${this.equipo2[this.turno].id}_equipo_2.png"></div>
            </div>
        </div>

        <div class="lucha-ataque">
            <div class="vida-equipo">
                <img class="fotoluchador" src="/img/pj/ready/ready_${this.equipo1[this.turno].id}.png">
                <div class="info-ingame">
                    <div id="vida1" ondrop="drop(event)" ondragover="allowDrop(event)"class="luchador-vida">${this.equipo1[this.turno].vida}%</div>
                    <img id="dragpoti1" draggable="true" ondragstart="drag(event)" src="/img/lucha/Healing_Potion.png" alt="">
                    <div class="luchador1-nombre"><p>${this.equipo1[this.turno].nombre}</p></div>
                </div>
            </div>
            <div class="atacar">
                <img id="golpe" src="/img/lucha/hit.png" alt="" onclick="partida.pelea(luchador1,luchador2)">
            </div>
            <div class="vida-equipo">
                <img class="fotoluchador" src="/img/pj/ready/ready_${this.equipo2[this.turno].id}.png">
                <div class="info-ingame">
                    <div id="vida2" ondrop="drop2(event)" ondragover="allowDrop2(event)"class="luchador-vida">${this.equipo2[this.turno].vida}%</div>
                    <img id="dragpoti2" draggable="true" ondragstart="drag2(event)" src="/img/lucha/Healing_Potion.png" alt="">
                    <div class="luchador2-nombre"><p>${this.equipo2[this.turno].nombre}</p></div>
                </div>
            </div>
            
        </div>`;

        //contador
        var n = 0;
        var l = document.getElementById("contador");
        window.setInterval(function(){
            l.innerHTML = n;
            n++;
        },1000);


    } else {
        setTimeout(init2 = () =>{
            this.endgame()}
            ,2000);
        
            }
    },
    endgame() {
        organizer(6);
        let team_winner = "";

        //comprobando equipo ganador
        if (this.team1wins > this.team2wins) {
            numero = 1;
            team_winner = this.equipo1;
        } else {
            numero = 2;
            team_winner = this.equipo2;
        };    console.log('estoy aqui')

        let seccionGanador = document.getElementById('pantalla6');

        seccionGanador.innerHTML = `
        <div class="containerWinner">
            
            <div class="tituloWinner">
                <h1>PLAYER ${numero}</h1>
                <img src="/img/winner/youwin.png" alt="" srcset="">
            </div>
            
            
            <div class="container-luchadores-win ganadores">
                <div class="cont-luchador-win"><img class="fotoluchador" src="/img/pj/selec/selec_${team_winner[0].id}.png"></div> 
            
                <div class="cont-luchador-win"><img class="fotoluchador" src="/img/pj/selec/selec_${team_winner[1].id}.png"></div> 
                
                <div class="cont-luchador-win"><img class="fotoluchador" src="/img/pj/selec/selec_${team_winner[2].id}.png"></div>
            </div>

            <div class="footerWinner">
           
                    
                        <div class="playagain" onclick="window.location.reload(true)">        <img src="/img/winner/playagain.png" alt="" srcset="">
                        </div>
                    
              
            </div>
            
            
        </div>`
    }

}

const organizer = (arg_O) => {

    let fasewant = "pantalla" + arg_O;
    
    let arrFases = ["pantalla1", "pantalla2", "pantalla3", "pantalla4", "pantalla5", "pantalla6"];

    arrFases = arrFases.filter(val => !fasewant.includes(val));

    document.getElementById(fasewant).style.display = "block";  //devuelve el primer valor tambien en block

    for (let _f of arrFases) {
        document.getElementById(_f).style.display = "none";
    }
    
};



