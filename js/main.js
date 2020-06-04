let juego = {
    //propiedades
    equipo1: [],
    equipo2: [],
    equipo2posibles: [],
    

    //métodos
    escoge1(idLuchador){
        //aquí programaremos la funcionalidad para escoger los personajes del primer equipo
        console.log ("La id del luchador escogido es:",idLuchador);

        //let traduccion = allplayers[idLuchador];

        //console.log(traduccion);


        this.equipo1.push(allplayers[idLuchador]);

        console.log(this.equipo1);


        if(this.equipo1.length == 3){
            //como ya tenemos los 3 luchadores del equipo1, cambiaremos de pantalla.
            //llamamos a organizer y de argumento le pasamos un 3.
            
            
            console.log("se mete");
            this.init();
        } 
    },
    escoge2(){
        //aquí programaremos la funcionalidad para escoger los personajes del segundo equipo
    },

    init() {
        organizer(3);
    
        let selectp2 = document.getElementById("pantalla3");
        selectp2.innerHTML = ` <div class="titulo red"><h1>PLAYER 2 - CHOOSE YOUR FIGHTERS</h1></div>
            
        <div class="panel-luchadores">
            
    
            <div class="luchadores custom-cursor">
                <div class="luchador">
                    
                    <div class="fotoluchador"><img src="/img/pj/Mario/chara_3_mario_00.png" alt="" id="1" onclick="juego.escoge1(this.id)">
                    <div class="nombre">Mario</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/Luigi/chara_3_luigi_00.png" alt="" id="2" onclick="juego.escoge1(this.id)">
                    <div class="nombre">Luigi</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/Bowser/chara_3_koopa_00.png" alt="" id="3" onclick="juego.escoge1(this.id)">
                    <div class="nombre">Bowser</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/Sonic/chara_3_sonic_00.png" alt="" id="4" onclick="juego.escoge1(this.id)">
                    <div class="nombre">Sonic</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/Captain Falcon/chara_3_captain_00.png" alt="" id="5" onclick="juego.escoge1(this.id)">
                    <div class="nombre">Captain Falcon</div></div>
                </div>
            </div>
    
            <div class="luchadores custom-cursor">
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/Donkey Kong/chara_3_donkey_00.png" alt="" id="6" onclick="juego.escoge1(this.id)">
                    <div class="nombre">Donkey Kong</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/Fox/chara_3_fox_00.png" alt="" id="7" onclick="juego.escoge1(this.id)">
                    <div class="nombre">Fox</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/Link/chara_3_link_01.png" alt="" id="8" onclick="juego.escoge1(this.id)">
                    <div class="nombre">Link</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/Pikachu/chara_3_pikachu_00.png" alt="" id="9" onclick="juego.escoge1(this.id)">
                    <div class="nombre">Pikachu</div></div>
                </div>
                <div class="luchador">
                    <div class="fotoluchador"><img src="/img/pj/Samus/chara_3_samus_00.png" alt="" id="10" onclick="juego.escoge1(this.id)">
                    <div class="nombre">Samus</div></div>
                </div>
            </div>
        </div>
       <div class="selectplayers">
        <div class="select selectR">
    
            <div class="players">
              <div id="player1" class="playerR">
                <div class="player-image">
                 <!-- <img src="/img/pj/Mario/chara_7_mario_00.png" alt="">-->
                </div>
                
              </div>
              <div id="player2" class="playerR">
                <div class="player-image">
                  
                </div>
              
              </div>
              <div id="player3" class="playerR">
                
                    
               
              
            </div>
          </div>
        </div>
    </div>`;
    }
    
}

const organizer = (arg_O) => {

    let fasewant = "pantalla" + arg_O;
    
    let arrFases = ["pantalla1", "pantalla2"];

    arrFases = arrFases.filter(val => !fasewant.includes(val));

    document.getElementById(fasewant).style.display = "block";  //devuelve el primer valor tambien en block

    for (let _f of arrFases) {
        document.getElementById(_f).style.display = "none";
    }
    
};

