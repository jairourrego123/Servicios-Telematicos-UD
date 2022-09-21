// importe el modulo express

const express  = require("express");
// variable que almacena el objeto para usar los metodos de la clase
const app = express();
const puerto = 5000;

// el primer atributo de get indica la ruta
// solicitud 1 atendida en la raiz
app.get('/',(req,res)=>{
    res.send("Hola curso usando express")
});
// solicitud 2 atendida en el espacio servicios
app.get('/curso',(req,res)=>{
    res.send("Hola curso usando express V2")
})
// luego se agrega el oyente al servidor 
app.listen(puerto,()=>{
    console.log("Ejecutando Express")
})