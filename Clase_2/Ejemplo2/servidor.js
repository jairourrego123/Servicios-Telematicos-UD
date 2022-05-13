const express = require("express");
const app = express();
const puerto = 5000;

// motor de plantillas 
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views')
// atencion de la solicitud
app.get('/',(req,res)=>{
    res.render("index",{titulo:"titulo dinamico",
                       parrafo:"este es un parrafo"})
});

// Oyente
app.listen(puerto,()=>{
    console.log("Ejecutando el servidor")
})