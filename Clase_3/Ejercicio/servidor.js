

const express = require("express");
const app = express();
const puerto = 5000;
const multer = require('multer')


const { urlencoded } = require("express");
app.use(urlencoded({extended:false}))
// motor de plantillas 
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views')
app.use(express.static(__dirname+"/public"))


const storage = multer.diskStorage({
    
    destination:__dirname+ '/views/imagenes',
    filename: (req,file,cb)=>{
        cb(null,file.originalname)
    }
})



app.use(multer({
    storage:storage,
    dest: __dirname+'/views/imagenes'
}).single('imagen'))


app.use(express.static(__dirname+'/views'))


var producto = []
contador=-1
// atencion de la solicitud
app.get('/',(req,res)=>{
    res.render("template/home",{producto:producto})
    
});

app.get('/inventario',(req,res)=>{
    res.render("template/inventario",{producto:producto})
    
});

app.get('/insumos',(req,res)=>{
    res.render("template/insumos",{producto:producto})
    
});

app.post('/',(req,res)=>{

    
    contador++
    producto[contador]=[
                        req.body.nombre,
                        req.body.descripcion,
                        req.body.cantidad,
                        req.body.precio,
                        req.file.originalname]
     
    res.render("template/home", {

                    producto: producto
    } )
    
    console.log(producto)
    console.log(req.file)
    
});












// Oyente
app.listen(puerto,()=>{
    console.log("Ejecutando el servidor local")
})