var canvas, lienzo, jugador, balon;
var goles = [0, 0];
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

function iniciar_WEBCAM(){
  //Tomar los elementos creados en la interface y almacenarlos en variables
  const video = document.getElementById('video');
  const errorMsgElement = document.querySelector('span#errorMsg');
  //Asignar dimensionalidad al área de video
  const constraints = {
  audio: false,
  video: {width: 680, height: 480}
  };
  // Solicitar permiso para acceder a la WEBCAM
  async function init() {
  try {
      const stream = await navigator.mediaDevices.getUserMedia(constraints);
      handleSuccess(stream);
  } catch (e) {
      errorMsgElement.innerHTML = `navigator.getUserMedia error:${e.toString()}`;
  }
  }
  // Si la función retorna que es permitido inicie la proyección en la página
  function handleSuccess(stream) {
  window.stream = stream;
  video.srcObject = stream;
  }
  // Cargar al inicio
  init();
}

function actualizar() {
  var X = canvas.width/2;
  var Y = canvas.height/2;
    lienzo.fillStyle = '#6ab150';
    //Dibuja un rectángulo
    lienzo.fillStyle = '#6ab150';
    lienzo.fillRect(0, 0,720, 500);

  // borde de la cancha//
    lienzo.strokeStyle='rgb(255, 255, 255)'
    lienzo.strokeRect(10, 10,700, 480);

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
    lienzo.moveTo(X,10);
    lienzo.lineTo(X,490);
    lienzo.closePath();
    lienzo.strokeStyle='#FFFFFFF'
    lienzo.stroke();
   
    // aro circulo central

    lienzo.beginPath();
     lienzo.strokeStyle = "#FFFFFFF";
    lienzo.fillStyle = "#6ab150";
    lienzo.lineWidth = 1   ;
    lienzo.arc(X,Y,r,0,2*Math.PI);

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
    lienzo.arc(balon.x, balon.y, 15, 0, 2*Math.PI, 1);
    lienzo.fillStyle= grd
    lienzo.fill();
    lienzo.strokeStyle="#000000"
    lienzo.stroke();

  
   
    lienzo.fill();
    //lienzo.fillRect(300, 240, 10, 40);
    //lienzo.fillRect(600, 240, 10, 40);
    lienzo.beginPath();
    for (var i = 0; i < jugador.length; i++) {
        lienzo.fillStyle = jugador[i].color;
        lienzo.fillRect(jugador[i].x, jugador[i].y, jugador[i].width, jugador[i].height);
      }

      lienzo.font = "30px Arial";
    
      lienzo.fillText("Goles: "+String(goles[0]), 40, 450); 

      
      lienzo.strokeText("Goles: "+String(goles[1]), 560, 450);
   

      //lienzo.drawImage(video, 0, 0, 640, 480);
  }

function draw() {
    iniciar_WEBCAM();
    var audio = document.getElementById("audioPlay");

    canvas = document.getElementById('canvas');
    lienzo = canvas.getContext('2d');
    j1u = document.getElementById('j1u');
    j1i = document.getElementById('j1i');
    j1d = document.getElementById('j1d');
    j1a = document.getElementById('j1a');
    j2u = document.getElementById('j2u');
    j2i = document.getElementById('j2i');
    j2d = document.getElementById('j2d');
    j2a = document.getElementById('j2a');

    balon = {
        x : 720/2,
        y : 500/2
    }

    jugador = [];
      jugador.push({
        x: 150, y: 240,
        width: 40, height: 40,
        color: '#F5F911 '
      });
      jugador.push({
        x: 600, y: 240,
        width: 40, height: 40,
        color: '#1146F9 '
      });

    actualizar();

    j1u.onclick = function(){
        jugador[0].y = jugador[0].y - 10;
        if ((jugador[0].y-balon.y < 20)&(jugador[0].y-balon.y > -60)&(balon.x-jugador[0].x < 30) & (balon.x-jugador[0].x > -20)){
            balon.y = balon.y - 10;
        }
        actualizar();
      }

    j1i.onclick = function(){
        jugador[0].x = jugador[0].x - 10;
        if ((jugador[0].x-balon.x < 20)&(jugador[0].x-balon.x > -20)&(balon.y-jugador[0].y < 60)& (balon.y-jugador[0].y > -20)){
            balon.x = balon.x - 10;
        }
        actualizar();
        
      }

    j1d.onclick = function(){
        jugador[0].x = jugador[0].x + 10;
        if ((balon.x-jugador[0].x < 30)&(balon.x-jugador[0].x > -20)&(balon.y-jugador[0].y < 60)& (balon.y-jugador[0].y > -20)){
            balon.x = balon.x + 10;
        }
        if((balon.x==830)&((balon.y>170)&(balon.y<350))){
            goles[0]=goles[0]+1;
            lienzo.drawImage(video, 10, 10, 640, 480);
            audio.play();
            setTimeout(Clic, 3000);
            
        }
        actualizar();
        
      }
    
    j1a.onclick = function(){
        jugador[0].y = jugador[0].y + 10;
        if ((balon.y-jugador[0].y < 60)&(balon.y-jugador[0].y > -20)&(balon.x-jugador[0].x < 30) & (balon.x-jugador[0].x > -20)){
            balon.y = balon.y + 10;
        }
        actualizar();
      }

    j2u.onclick = function(){
        jugador[1].y = jugador[1].y - 10;
        if ((jugador[1].y-balon.y < 20)&(jugador[1].y-balon.y > -60)&(balon.x-jugador[1].x < 30) & (balon.x-jugador[1].x > -20)){
            balon.y = balon.y - 10;
        }
        actualizar();
      }

    j2i.onclick = function(){
        jugador[1].x = jugador[1].x - 10;
        if ((jugador[1].x-balon.x < 20)&(jugador[1].x-balon.x > -20)&(balon.y-jugador[1].y < 60)& (balon.y-jugador[1].y > -20)){
            balon.x = balon.x - 10;
        }
        if((balon.x==90)&((balon.y>170)&(balon.y<350))){
            goles[1]=goles[1]+1;
            lienzo.drawImage(video, 10, 10, 640, 480);
            audio.play();
            setTimeout(Clic, 3000);
        }
        actualizar();
        
      }

    j2d.onclick = function(){
        jugador[1].x = jugador[1].x + 10;
        if ((balon.x-jugador[1].x < 30)&(balon.x-jugador[1].x > -20)&(balon.y-jugador[1].y < 60)& (balon.y-jugador[1].y > -20)){
            balon.x = balon.x + 10;
        }
        actualizar();
      }
    
    j2a.onclick = function(){
        jugador[1].y = jugador[1].y + 10;
        if ((balon.y-jugador[1].y < 60)&(balon.y-jugador[1].y > -20)&(balon.x-jugador[1].x < 30) & (balon.x-jugador[1].x > -20)){
            balon.y = balon.y + 10;
        }
        actualizar();
      }
}

