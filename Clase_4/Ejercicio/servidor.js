

const express = require("express");
const app = express();
// const puerto = process.env.PORT;
const puerto = 5000


const { urlencoded } = require("express");
const { render } = require("express/lib/response");
app.use(urlencoded({extended:false}))
// motor de plantillas 
app.set('view engine', 'ejs');
app.set('views',__dirname+'/views')
app.use(express.static(__dirname+"/public"))
app.use(express.static(__dirname+'/views'))



estado= false
i=2;
usuarios=[];
contador = 0
// atencion de la solicitud
usuarios[0]=["admin","123","La Habitacion principal","La Cocina","El Garaje","El Baño", "El patio"]
usuarios[1]=["user","123","La Habitacion principal","La Cocina","El Garaje","El Baño", "El patio"]

app.get('/',(req,res)=>{
    res.render("template/home",{
       intentos:contador
    }) 
    
});

app.post('/',(req,res)=>{
    
    estado=false 
    let j=0;
    for (const usuario of usuarios){
            
            if (req.body.usuario==usuario[0] & req.body.clave==usuario[1] ) {
                contador = 0
                estado = true


                break;
            }
       
    j++
}
    console.log(estado)
        if (estado){
        
        res.render("template/entrada",{credencial:usuarios[j]} ) 

    }
        else{
            contador=contador+1
            res.render("template/home",{
                intentos:contador
            }) 

        }


})

// Oyente

app.get('/registrar',(req,res)=>{
    res.render("template/registrar",{
       intentos:contador
    }) 
})

app.post('/registrar',(req,res)=>{
    usuarios[i]=[req.body.usuario,
        req.body.clave]

     console.log(req.body)


    if (req.body.habitacion) {usuarios[i][2]='LA HABITACION'}
    if (req.body.cocina) {usuarios[i][3]='LA COCINA'}
    if (req.body.garaje) {usuarios[i][4]='EL GARAJE'}
    if (req.body.banio) {usuarios[i][5]='EL BAÑO'}
    if (req.body.patio) {usuarios[i][6]='EL PATIO'}
    usuarios[i]=usuarios[i].filter(Boolean)
    res.render("template/registrar") 
    console.log(usuarios[i])
    
    i++
})


app.listen(puerto,()=>{
    console.log("Ejecutando el servidor local " + puerto )
})