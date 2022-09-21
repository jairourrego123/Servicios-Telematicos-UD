// el modulo http esta integrado con node

const http  = require("http");
const servidor = http.createServer

//  cuando creen el servidor siempre da un requerimiento (req) 
// y da una respuesta (res)

const server = http.createServer((req,res)=>{
    res.end("Atendiendo su solicitud")
})

// nomenclatura de un puerto disponible para usar el servidor
const puerto = 3000;
// el listener u oyente espera la solicitud del lado del cliente
server.listen(puerto,()=>{
    console.log("El servidor esta corriendo en el puerto"+puerto)
})