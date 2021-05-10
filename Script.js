scoreVal=0;
   cross = true;

function updateScore(sc){
  var sco= document.querySelector(".score");
  sco.innerHTML = "Your Score: "+sc;
  //console.log(sc);
}
function jump(){
          var user = document.querySelector(".user");
          user.classList.add("animate");
          setTimeout(function() {
            user.classList.remove("animate");
          }, 750);
          
        }
            /*var body = document.getElementById("body");
            body.addEventListener("click",jump());*/
 var backMusic = new Audio("https://tony-stark12345.github.io/My-First-Game/Back.mp3");    backMusic.play() ;      
 setInterval(function(){
   
   var gameOver = document.querySelector(".Game_over");
    var score = document.querySelector(".score");
    var user = document.querySelector(".user");
    var vil = document.querySelector(".obs");
    
    var cy = parseInt(window.getComputedStyle(user,null).getPropertyValue("left"));
    
   var cx = parseInt(window.getComputedStyle(user,null).getPropertyValue("top"));
  //console.log("cx: "+cx+"cy: "+cy);
    
    
    
var oy = parseInt(window.getComputedStyle(vil,null).getPropertyValue("left"));
    
   var ox = parseInt(window.getComputedStyle(vil,null).getPropertyValue("top"));
   // console.log("ox: "+ox+"oy: "+oy);
    
    
    var offSetX = Math.abs(cx-ox);
    var offSetY = Math.abs(cy-oy);
 // console.log(offSetX,offSetY);
  if(offSetX<25&&offSetY<25){
    gameOver.style.visibility="visible";
    vil.classList.remove("animateObs");
    user.classList.remove("animate");
    gameov = new Audio("https://tony-stark12345.github.io/My-First-Game/End.mp3");
    backMusic.pause();
    gameov.play();
  }
  else if(offSetX<25 && cross){
   scoreVal++;
 // console.log("score:" +scoreVal);
   score.innerHTML = "Your Score: "+scoreVal;
    cross = false;
    setTimeout(()=>{
      cross = true;
    },1000);
   vilDur = parseFloat(window.getComputedStyle(vil,null).getPropertyValue("animation-duration"));
   newDur = vilDur - 0.1;
   //aniobs = document.querySelector(".animateObs");
   setTimeout(function() {
 vil.style.animationDuration = newDur+"s";
   }, 400);
  
   
    
  }
  
     },10
 );
   function intro(){
     pop_alert("<to>Created by Tony Stark</to>","<too>My-First-Game</too>","<tooo>Run</tooo>",true,"orange");
     
   
   }
document.onload = intro();