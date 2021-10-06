$(document).ready(portada);

var posicion=0;
var cambiar=0;
var simbolos=0;
var b=0;
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
            $('#flecha').css({'transform':'scale(1.3)','box-shadow':'0px 0px 0px rgba(255, 255, 255, 0)','transition':'all 0.8s'});        
            cambiar=1;
        }
        else{
            $('#flecha').css({'transform':'scale(1.0)','box-shadow':'0px 0px 5px white','transition':'all 0.8s'});        
            cambiar=0;
        }
    }, 700);
    setInterval(function(){
        if(b==0){
            b=1;
        }
        else{
            simbolos++;
        }
        if(simbolos > 2){
            simbolos=0;
        }
        $('.simbolos').eq(simbolos).fadeIn(500, function () {
          $(this).delay(2000).fadeOut(500);
        });
    }, 3000);
}

