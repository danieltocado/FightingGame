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

// Audio



// Press any key

document.onkeypress = function(key_dtl) {
    key_dtl = key_dtl || window.event; 
    var uni_code = key_dtl.keyCode || key_dtl.which; 
    var key_name = String.fromCharCode(uni_code); 
    setTimeout(organizer(2),3000);
    
    var audio = new Audio('/sound/click.mp3');
    audio.play();
   }



$(document).ready(function(){

    var height = $(window).height();

    $('body').height(height);
});


// Sonido 




