const express = require('express')
const app = express()


app.get('/',(req,res)=>{
    res.end("Bienvenidos al servidor backend Node.js (nodemon) Corriendo....")
})
//Configurar server basico
app.listen(5000,function(){
    console.log('El servidor de YASMIN esta corriendo correctamente')
})