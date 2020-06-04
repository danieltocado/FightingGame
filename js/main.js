let juego = {
    //propiedades
    equipo1: [],
    equipo2: [],
    

    //métodos
    escoge1(idLuchador){
        //aquí programaremos la funcionalidad para escoger los personajes del primer equipo
        console.log ("La id del luchador escogido es:",idLuchador);

        //let traduccion = allplayers[idLuchador];

        //console.log(traduccion);

        if(this.equipo1.length == 3){
            //como ya tenemos los 3 luchadores del equipo1, cambiaremos de pantalla.
            //llamamos a organizer y de argumento le pasamos un 3.
            console.log("se mete");
            return organizer(3);
        } 

        this.equipo1.push(allplayers[idLuchador]);

        console.log(this.equipo1);


    },
    escoge2(){
        //aquí programaremos la funcionalidad para escoger los personajes del segundo equipo
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
    
}


