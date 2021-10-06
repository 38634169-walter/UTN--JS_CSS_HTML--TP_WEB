var speed=100;
var cont=0;
var b=0;
var text = document.getElementById('titulo');
var str = text.innerHTML;
text.innerHTML = "";

function animar(){
  if(cont < str.length){
    text.innerHTML += str.charAt(cont);
    cont++;
    setTimeout(animar,speed);
  }
}

setTimeout(animar,speed);

setInterval(function(){
  cont=0;
  text.innerHTML = "";
  setTimeout(animar,speed);
},4000);