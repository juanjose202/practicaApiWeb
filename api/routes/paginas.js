const express = require("express")
const router = express.Router()

const { validarPagina, guardarPagina, consultarPagina } = require(`../controller/paginas`);


//obtener todas las paginas
router.get('/paginas', (req, res) => {
    consultarPagina().then(respuestaDB => {
        
        let registros =  respuestaDB.rows;
        res.send({ok:true,info:registros,mensaje:"paginas Consultadas"})
        
    }).catch(error => {
        res.send(error)
    })

});


//guardar una pagina 
router.post('/paginas', (req, res) => {

    try {

        let info_pagina = req.body;
        validarPagina(info_pagina);
        guardarPagina(info_pagina).then(respuestaDB => {
            res.send({ ok: true, mensaje: "Pagina Guardada", info: info_pagina });

        }).catch(error => {
            res.send(error)
        })


    } catch (error) {
        res.send(error)
    }

});

module.exports = router;