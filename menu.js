$(document).ready(iniciar);


var cambiar=0;
function iniciar(){
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

    $('#hamburguesa').click(function(){
        mostrar_menu();
    });
    $('#x').click(function(){
        ocultar_menu();
    });
    
    if($(window).width() <= 800){
        $('section').click(function(){
           ocultar_menu(); 
        });
        
        $('footer').click(function(){
            ocultar_menu(); 
         });
    }
    
    function mostrar_menu(){
        $('#menu').css({'left':'0%'});
        $('#hamburguesa').css({'display':'none'});
        $('#x').css({'display':'block'});
    }
    function ocultar_menu(){
        $('#menu').css({'left':'-100%'});
        $('#x').css({'display':'none'});
        $('#hamburguesa').css({'display':'block'});
    }
    
}