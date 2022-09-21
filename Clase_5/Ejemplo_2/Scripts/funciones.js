
function Capturar() {
  var context = canvas.getContext('2d');
  context.drawImage(video,0,0,640,480)
  
  //setTimeout(Capturar, 1000);
}
  

// funcion para iniciar web cam
function iniciar_WEBCAM(){
 // toma  los elementos  creados  en la interface  y almacanerlo en variables 
 const video =  document.getElementById('video');
 const canvas = document.getElementById('canvas');
 const snap = document.getElementById('snap');
 const  errorMsgElement = document.querySelector('snap#errorMsg');

 // Asignar  dimencionalidad  al area  de video 

 const constraints = {
   audio : false,
   video:{width:680, height:480}
 };



 // Solicitar permiso  para acceder  a la WEBCAM
 async function init(){
   try{
     const  stream = await navigator.mediaDevices.getUserMedia(constraints);
     handleSuccess(stream)

   }
   catch(e){
     errorMsgElement.innerHTML =   `navigator.getUserMedia error: ${e.toString()}`;
   }
 }
    //  si la funcion retorna que es permito inicie  la proyeccion  en la pagina 

    function handleSuccess(stream){
      window.stream = stream;
      video.srcObject = stream;
    }

  // cargar inicio
    init();

    // Dibujar imagenes usando un oyente  asignado al boton 


const time=0
    snap.addEventListener("click",()=>{
      // context.drawImage(video,0,0,640,480)
       Capturar();
    })

  }