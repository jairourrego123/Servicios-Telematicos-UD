const express = require("express");
const app = express();
const puerto = process.env.PORT;

// motor de plantillas 
app.set('view engine', 'ejs');
app.set('views','/app/views')
app.use(express.static("/app/public"))
// atencion de la solicitud
app.get('/',(req,res)=>{
    res.render("index",{variable:"titulo dinamico variable desde el servidor"
                        })
});

// Oyente
app.listen(puerto,()=>{
    console.log("Ejecutando el servidor")
})

