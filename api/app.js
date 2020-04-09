const express = require("express")
const cors = require("cors")
const PUERTO = 3001

var app = express();
app.use(express.json());
app.use(cors());


app.get(`/`,(req,res)=>{

    res.send(`Bienvenido al Api de paginas web de interes `);


});

//importar rutas

const rutas_paginas = require(`./routes/paginas`)
app.use(rutas_paginas);

app.listen(PUERTO,()=>{
    console.log(`escuchando API en http://localhost:${PUERTO}`);
});
