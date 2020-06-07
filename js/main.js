let juego = {
    //propiedades
    equipo1: [],
    equipo2: [],
    stats: [],
    arg1: [],
    arg2: [],
    cont_fight: [],


    //métodos
    escoge1(idLuchador){
        
        this.equipo1.push(allplayers[idLuchador]);
        
       

        for (let i = 0; i < this.equipo1.length; i++) {
            this.stats = document.getElementById("player" + i);
            this.stats.innerHTML = 
                `
                <img class="fotoluchador" src="/img/pj/selec/selec_${this.equipo1[i].id}.png">
               
                 `;

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
    
        let selectp2 = document.getElementById("pantalla3");
        selectp2.innerHTML = ` <div class="titulo red"><h1>PLAYER 2 - CHOOSE YOUR FIGHTERS</h1></div>
            
        <div class="panel-luchadores">
            

        <div class="luchadores custom-cursor">
            <div class="luchador">
                
                <div class="fotoluchador"><img src="/img/pj/Mario/chara_3_mario_00.png" alt="" id="1" onclick="juego.escoge2(this.id)">
                <div class="nombre">Mario</div></div>
            </div>
            <div class="luchador">
                <div class="fotoluchador"><img src="/img/pj/Luigi/chara_3_luigi_00.png" alt="" id="2" onclick="juego.escoge2(this.id)">
                <div class="nombre">Luigi</div></div>
            </div>
            <div class="luchador">
                <div class="fotoluchador"><img src="/img/pj/Bowser/chara_3_koopa_00.png" alt="" id="3" onclick="juego.escoge2(this.id)">
                <div class="nombre">Bowser</div></div>
            </div>
            <div class="luchador">
                <div class="fotoluchador"><img src="/img/pj/Sonic/chara_3_sonic_00.png" alt="" id="4" onclick="juego.escoge2(this.id)">
                <div class="nombre">Sonic</div></div>
            </div>
            <div class="luchador">
                <div class="fotoluchador"><img src="/img/pj/Captain Falcon/chara_3_captain_00.png" alt="" id="5" onclick="juego.escoge2(this.id)">
                <div class="nombre">Captain Falcon</div></div>
            </div>
        </div>

        <div class="luchadores custom-cursor">
            <div class="luchador">
                <div class="fotoluchador"><img src="/img/pj/Donkey Kong/chara_3_donkey_00.png" alt="" id="6" onclick="juego.escoge2(this.id)">
                <div class="nombre">Donkey Kong</div></div>
            </div>
            <div class="luchador">
                <div class="fotoluchador"><img src="/img/pj/Fox/chara_3_fox_00.png" alt="" id="7" onclick="juego.escoge2(this.id)">
                <div class="nombre">Fox</div></div>
            </div>
            <div class="luchador">
                <div class="fotoluchador"><img src="/img/pj/Link/chara_3_link_01.png" alt="" id="8" onclick="juego.escoge2(this.id)">
                <div class="nombre">Link</div></div>
            </div>
            <div class="luchador">
                <div class="fotoluchador"><img src="/img/pj/Pikachu/chara_3_pikachu_00.png" alt="" id="9" onclick="juego.escoge2(this.id)">
                <div class="nombre">Pikachu</div></div>
            </div>
            <div class="luchador">
                <div class="fotoluchador"><img src="/img/pj/Samus/chara_3_samus_00.png" alt="" id="10" onclick="juego.escoge2(this.id)">
                <div class="nombre">Samus</div></div>
            </div>
        </div>
    </div>
    <div class="container-luchadores-red">
        <div id="play0" class="cont-luchador-red"></div>
        <div id="play1" class="cont-luchador-red"></div>
        <div id="play2" class="cont-luchador-red"></div>
    </div>
</div>`;


    },
    


faseprevia() {

    organizer(4);

    let plena_pf = document.getElementById("pantalla4");
    plena_pf.innerHTML = `
        <div class="getready-container">
            <div class="teamblue"><p>TEAM BLUE</p></div>
            <div class="getready"><p>GET READY</p></div>
            <div class="teamred"><p>TEAM RED</p></div>
        </div>
        <div class="prelucha-container">
            <div class="prelucha1">
                ${this.equipo1[0].nombre}
                  <img class="fotoluchador" src="/img/pj/ready/ready_${this.equipo1[0].id}.png">  
                ${this.equipo1[1].nombre} 
                <img class="fotoluchador" src="/img/pj/ready/ready_${this.equipo1[1].id}.png">  
                ${this.equipo1[2].nombre}
                <img class="fotoluchador" src="/img/pj/ready/ready_${this.equipo1[2].id}.png">
            </div>

            <div class="prelucha-versus">
                <img src="/img/prelucha/versus.png" alt="">
            </div>

            <div class="prelucha2">
                ${this.equipo2[0].nombre}
                <img class="fotoluchador" src="/img/pj/ready/ready_${this.equipo2[0].id}.png"> 
                ${this.equipo2[1].nombre}
                <img class="fotoluchador" src="/img/pj/ready/ready_${this.equipo2[1].id}.png">
                 ${this.equipo2[2].nombre}
                <img class="fotoluchador" src="/img/pj/ready/ready_${this.equipo2[2].id}.png">
            </div>
        </div> 
    </div>`
    

    setTimeout(init2 = () =>{
        this.faselucha()}
        ,5000);

    

    },

faselucha() {
    organizer(5);
    randombg();

    if (this.cont_fight < 3) {
            
        //luchadores actuales.
        arg1 = this.equipo1[this.cont_fight];
        arg2 = this.equipo2[this.cont_fight];

        let plena_pf3 = document.getElementById("pantalla5");
        plena_pf3.innerHTML = `
        
    <div class="header-lucha">
    
        <div class="cab2">TURNO ${this.cont_fight + 1}</div>
    
    </div>

    <div class="container-pelea">
        <div class="container-equipo1">
            <div class="luchador1-nombre">${this.equipo1[0].nombre}</div>
            <div id="glad1v" class="luchador1-vida">PLAYER 1 LIFE : ${this.equipo1[0].vida}</div>
            <div class="luchador-sprite"><img src="./img/sprites/sprite_${this.equipo1[0].id}_equipo_1.png"></div>
        </div>
        <div class="container-equipo2">
            <div class="luchador2-nombre">${this.equipo2[0].nombre}</div>
            <div id="glad2v" class="luchador2-vida">PLAYER 2 LIFE : ${this.equipo2[0].vida}</div>
            <div class="luchador-sprite"><img src="./img/sprites/sprite_${this.equipo2[0].id}_equipo_2.png"></div>
        </div>
    </div>
<div class="announcement">
    <div class="ann1"></div>
    <div id ="anuncioko" class="ann2"></div>
    <div class="ann3"></div>
</div>
<div class="punch">
    <div class="pun1"></div>
    <div class="pun2"><img id="fist" class ="hitter" src="./img/punch.png" onclick="game.turnoFight(arg1,arg2)"></div>
    <div class="pun3"></div>
</div>`;
    } else {
        console.log("hemos llegao")
        /*//entramos en la fase final....
        resolveIn(1500).then(delay => {
            this.init6();
        });*/
    }
    },

   

}

const organizer = (arg_O) => {

    let fasewant = "pantalla" + arg_O;
    
    let arrFases = ["pantalla1", "pantalla2", "pantalla3", "pantalla4", "pantalla5"];

    arrFases = arrFases.filter(val => !fasewant.includes(val));

    document.getElementById(fasewant).style.display = "block";  //devuelve el primer valor tambien en block

    for (let _f of arrFases) {
        document.getElementById(_f).style.display = "none";
    }
    
};

