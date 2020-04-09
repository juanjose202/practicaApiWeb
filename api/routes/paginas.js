const express = require("express")
const router = express.Router()

const { validarPagina, guardarPagina } = require(`../controller/paginas`);


//obtener todas las paginas
router.get('/paginas', (req, res) => {
    res.send(`endpoint GET de paginas`)
});


//guardar una pagina 
router.post('/paginas', (req, res) => {

    try {

        validarPagina(info_pagina);
        let info_pagina = req.body;
        console.log(info_pagina);
        res.send("endpoint POST de paginas");
        


    } catch (error) {
        res.send(error)
    }

});





module.exports = router;