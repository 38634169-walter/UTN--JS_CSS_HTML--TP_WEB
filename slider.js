$(document).ready(portada);

var posicion=0;
var cambiar=0;
function portada(){
    setInterval(function(){
        posicion++;
        if(posicion>=3){
            posicion=0;
        }
        $('.slider').css({'display':'none','transition':'all 1S'});
        $('.slider').eq(posicion).css({'display':'block','transition':'all 1S'});
    }, 2000);
    setInterval(function(){
        if(cambiar==0){
            $('#flecha').css({'transform':'scale(1.1)','box-shadow':'0px 0px 0xp rgba(255, 255, 255, 0)'});        
            cambiar=1;
        }
        else{
            $('#flecha').css({'transform':'scale(1.0)','box-shadow':'0px 0px 5px white'});        
            cambiar=0;
        }
    }, 700);
}

