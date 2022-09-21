var i = 600;
var x=720/2;
var y=500/2;
var dx= 2
var dy = -2
var ballRadius=14
var turno = true
var x1 = 720/4;
var y1 = 500/2;
var x2 = 3*720/4 ;
var y2 = 500/2;
var r = 75;
var actualizar
function oMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return { // devuelve un objeto
      x: Math.round(evt.clientX - rect.left),
      y: Math.round(evt.clientY - rect.top)
    };
  }




function radio(x,y,x1,y1,){

}
function jugadores(w1,w2,w3,w4) {
    // console.log(w1,w2)
    // console.log("/////")
    // console.log(w3,w4)

    let canvas = document.getElementById('canvas');
    let lienzo = canvas.getContext('2d');

    lienzo.beginPath();
    lienzo.fillStyle = "#F9CB11";
    lienzo.lineWidth = 1   ;
    lienzo.arc(w1,w2,r*0.3,0,2*Math.PI);
    lienzo.fill();
    lienzo.stroke();

    lienzo.beginPath();
    lienzo.fillStyle = "#FFFF11";
    lienzo.arc(w3,w4,r*0.3,0,2*Math.PI);
    lienzo.fill();
    lienzo.stroke();
    
    
}

function draw() {
    
    x=x+dx*0.99
    y=y+dy*0.99
    
    
actualizar=false
//Leer desde el HTML el objeto canvas
var canvas = document.getElementById('canvas');
//Si el canvas existe haga
if (canvas.getContext) {
    var X = canvas.width/2;
    var Y = canvas.height/2;
    
  
    //Defina una variable donde dibujar
    // cancha
    var lienzo = canvas.getContext('2d');
    lienzo.fillStyle = '#6ab150';
    lienzo.fillRect(0, 0,720, 500);
    jugadores(x1,y1,x2,y2); 
  // borde de la cancha//
    lienzo.strokeStyle='rgb(255, 255, 255)'
    lienzo.strokeRect(10, 10,700, 480);

    // cancha izquierda
    lienzo.beginPath();
    lienzo.moveTo(10,Y-50);
    lienzo.lineTo(40,Y-50);
    lienzo.lineTo(40,Y+50);
    lienzo.lineTo(10,Y+50);
    lienzo.closePath();
    lienzo.stroke();

    // cancha derecha

    lienzo.beginPath();
    lienzo.moveTo(710,Y-50);
    lienzo.lineTo(680,Y-50);
    lienzo.lineTo(680,Y+50);
    lienzo.lineTo(710,Y+50);
    lienzo.closePath();
    lienzo.stroke();

    // cLinea central

    lienzo.beginPath();
    lienzo.moveTo(360,10);
    lienzo.lineTo(360,490);
    lienzo.closePath();
    lienzo.strokeStyle='#FFFFFFF'
    lienzo.stroke();

    // aro circulo central

    lienzo.beginPath();
     lienzo.strokeStyle = "#FFFFFFF";
    lienzo.fillStyle = "#6ab150";
    lienzo.lineWidth = 1   ;
    lienzo.arc(X,Y,r,0,2*Math.PI);
   
    lienzo.stroke();
    // arointerno   

    lienzo.beginPath();
    lienzo.strokeStyle = "#FFFFFFF";
   lienzo.fillStyle = "#6ab150";
   lienzo.lineWidth = 1   ;
   lienzo.arc(X,Y,r*0.15,0,2*Math.PI);
  
   lienzo.stroke();

    // aro izqueirdo

    lienzo.beginPath();
    lienzo.strokeStyle = "#FFFFFFF";
    lienzo.fillStyle = "#6ab150";
    lienzo.lineWidth = 1    ;
    lienzo.arc(10,Y,r*1.5,0.5*Math.PI,1.5*Math.PI,true);
    lienzo.stroke();

    // aro derecho   

    lienzo.beginPath();
    lienzo.strokeStyle = "#FFFFFFF";
    lienzo.fillStyle = "#6ab150";
    lienzo.lineWidth = 1    ;
    lienzo.arc(canvas.width-10,Y,r*1.5,1.5*Math.PI,0.5*Math.PI,true);
    lienzo.stroke();
    
    // balon 
    
    
    var grd = lienzo.createLinearGradient(100, 100, 200, 0);
        grd.addColorStop(0, '#CDC9C7 ');
        grd.addColorStop(1, "#FFFFFF ");

    lienzo.strokeStyle = "#FFFFFFF";
    
    lienzo.beginPath();
    lienzo.lineWidth = 1   ;
    lienzo.arc(x,y,ballRadius,0,2*Math.PI);
    lienzo.fillStyle= grd
    lienzo.fill();
    lienzo.strokeStyle="#000000"
    lienzo.stroke();



     
       
     
        
       
      
        // let canvas = document.getElementById("canvas")
        // let canvas2 = document.createElement("canvas")
        // canvas2.setAttribute("id","canvas")
        // let canvas3 = canvas.parentNode
        // canvas3.replaceChild(canvas2,canvas)
 
        

        console.log(turno)
   

      

     
       
      
     
    


    // Jugador 1
 
       
    
    // Jugador 2
 
    
    if(x + dx > canvas.width-ballRadius || x + dx < ballRadius) {
        dx = -dx;
    }
    if(y + dy > canvas.height-ballRadius || y + dy < ballRadius) {
        dy = -dy;
    }
    if(x > x1   ) {
        x = x+1
        i=0
    }
    // if(y +dy == y1+ballRadius ) {
    //     dy = -dy;
    //     i=0
        
    // }
 
}


canvas.addEventListener("click", function(evt) {
    var mousePos = oMousePos(canvas, evt);

     
        let canvas2 = document.createElement("canvas")
        canvas2.setAttribute("id","canvas")
        canvas2.setAttribute("width","720")
        canvas2.setAttribute("height","500")
        let canvas3 = canvas.parentNode
        canvas3.replaceChild(canvas2,canvas)


   
    


    if(turno){
      x1 =  mousePos.x;
      y1 =  mousePos.y;

   
    }

    else{
        x2 =  mousePos.x;
        y2 =  mousePos.y;
        }
    turno=!turno 
    draw()}
   

    
    
  ); 
  
  i++  
  if (i<1){
            setInterval(draw, 10)
  }

}



// let canvas = document.getElementById("canvas")
//            let canvas2 = document.createElement("canvas")
//            canvas2.setAttribute("id","canvas")
//            let canvas3 = canvas.parentNode
//            canvas3.replaceChild(canvas2,canvas)
        