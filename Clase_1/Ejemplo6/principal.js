

const express = require("express");
const app = express();
const puerto = 5000;
//modulo para juntas palabras y contruir una ruta

const path = require('path')
// extrae informacion de la solicitud entrante
const bodyParser = require('body-parser');
const { urlencoded } = require("express");
// recupera informacion en forma de texto unicamente
app.use(urlencoded({extended:false}))

// solicitud atendida y redirigida al archivo formulario
app.get('/',(req,res)=>{
    //dirname indica la ubicacion del proyecto
    res.sendFile(path.join(__dirname,'/formulario.html'));
});
;
contador = -1;
producto=[]
app.post('/',(req,res)=> {
    contador = contador+1
    var serial = req.body.Serial
    var Procesador = req.body.Procesador
    var Modelo = req.body.Modelo
    var Ram = req.body.Ram
    var Almacenamieto= req.body.Almacenamieto
 
    producto[contador]=[serial,Procesador,Modelo,Ram,Almacenamieto]
     // toma el atributo name 
    console.log(contador)
    res.send(producto[contador]);

});


app.post('/listapar',(req,res)=> {
    a=-1
    par=[]
    for(let i=1;i<producto.length;i++){
        if (producto[i][0]%2==0){
            a=a+1
            par[a]=producto[i]
            
           
        }
    }
    res.send(par);
    console.log(par)
    

});
app.post('/listainpar',(req,res)=> {
    a=-1
    inpar=[]
    for(let i=1;i<producto.length;i++){
        if (producto[i][0]%2!=0){
            a=a+1
            inpar[a]=producto[i]
            
           
        }
    }
    res.send(inpar);
    console.log(inpar)
    

});
app.post('/ascendente',(req,res)=> {

    producto.sort(function (a, b){
        return (a[0] - b[0])
    });
    res.send(producto);
    console.log(producto)
    

});
app.post('/descendente',(req,res)=> {
    producto.sort(function (a, b){
        return (b[0] - a[0])
    });
    res.send(producto);
    console.log(producto)
    

});

app.listen(puerto,()=>{console.log("Ejecutando express")})