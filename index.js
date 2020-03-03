"use strict";
// npm install nodemon--save-dev
//npm install express --save

// declaramos las librerias a usar en este servidor:
const express = require("express");
// definimos el uso de app como interprete express:
const app = express ();
// declaramos el puerto del servicio:
const port = 3800;

// mensaje de bienvenida desde el servidor:
app.listen(port, ()=>{
    console.log("bienvenidos al servidor de NodeJS");
    console.log("puedes ingresar a la URL: localhost:3800//");
});

