//controlador de paginas


/**
 * validar la informacion de la pagina
 * @param {*} pagina json de la pagina
 */
let validarPagina=pagina=>{
    if (!pagina){
        throw{ok:false,mensaje:"la informacion de la pagina es obligatoria"}
    }
    if (!pagina.url){
        throw{ok:false,mensaje:"la url de la pagina es obligatoria"}
    }
    if (!pagina.nombre){
        throw{ok:false,mensaje:"el nombre de la pagina es obligatoria"}
    }
};

/**
 * guardar en base de datos una pagina
 * @param {*} pagina 
 */
let guardarPagina=pagina=>{

};


module.exports = {validarPagina,guardarPagina};