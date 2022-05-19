

const express = require("express");
const app = express();
const puerto = 5000;

const { urlencoded } = require("express");
app.use(urlencoded({extended:false}))
// motor de plantillas 
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views')
app.use(express.static(__dirname + "/public"))

var producto = []
contador=-1
// atencion de la solicitud
app.get('/',(req,res)=>{
    res.render("index")
    console.log("HOME")
});

app.post('/',(req,res)=>{
    contador++
    producto[contador]=[
                        req.body.nombre,
                        req.body.descripcion,
                        req.body.imagen]
    
    res.render("index", {

                    producto: producto
    } )
    
    console.log(producto)
    
});












// Oyente
app.listen(puerto,()=>{
    console.log("Ejecutando el servidor local")
})