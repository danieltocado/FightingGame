//Funciones utiles que podemos utilizar a nuestro antojo en varios proyectos.

const funciones = {

    minMax: (n,min,max) => {
        //Min and max limiter...
        return Math.max (Math.min (n,max),min);
    },

    random(min,max){
        //Random creation of a number...
        return Math.floor(Math.random() * (max - min) + min);
    }
}


// Press any key + audio

document.onkeypress = function(key_dtl) {
    key_dtl = key_dtl || window.event; 
    var uni_code = key_dtl.keyCode || key_dtl.which; 
    var key_name = String.fromCharCode(uni_code); 
    setTimeout(function(){ organizer(2);},3000);
    
    var audio = new Audio('/sound/click.mp3');
    audio.play();
   }



$(document).ready(function(){

    var height = $(window).height();

    $('body').height(height);
});




//Random bg

function randombg(){
    var random= Math.floor(Math.random() * 8) + 0;
    var bigSize = ["url(/img/stage/stage1.png)",
                   "url(/img/stage/stage2.png)",
                   "url(/img/stage/stage3.png)",
                   "url(/img/stage/stage4.png)",
                   "url(/img/stage/stage5.png)",
                   "url(/img/stage/stage6.png)",
                   "url(/img/stage/stage7.png)",
                   "url(/img/stage/stage8.png)"
                   ];
    document.getElementById("pantalla5").style.backgroundImage=bigSize[random];
  }