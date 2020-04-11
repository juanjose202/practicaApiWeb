//controlador de paginas


//importar servicio de postgres
const ServicioPG = require('../services/postgres')

/**
 * validar la informacion de la pagina
 * @param {*} pagina json de la pagina
 */
let validarPagina = pagina => {
    if (!pagina) {
        throw { ok: false, mensaje: "la informacion de la pagina es obligatoria" }
    }
    if (!pagina.url) {
        throw { ok: false, mensaje: "la url de la pagina es obligatoria" }
    }
    if (!pagina.nombre) {
        throw { ok: false, mensaje: "el nombre de la pagina es obligatoria" }
    }
};

/**
 * guardar en base de datos una pagina
 * @param {*} pagina 
 */
let guardarPagina = async pagina => {


    try {
        let servicio = new ServicioPG()
        sql = `insert into paginas (url,nombre,descripcion) values('${pagina.url}','${pagina.nombre}','${pagina.descripcion}')`
        let respuesta = await servicio.ejecutarSql(sql)
        return respuesta;

    } catch (error) {
        console.log("ERROR")
        console.log(error);

    }


};
let consultarPagina = async () => {

    let servicio = new ServicioPG()
    let sql = "select * from paginas";
    let respuesta = await servicio.ejecutarSql(sql)
    return respuesta;
};

let actualizarPagina = async (req,res) => {

    let servicio = new ServicioPG();
    
    let id = req.params.id;
    let {url,nombre,descripcion} = req.body;

    let sql = `update paginas set url='${url}',nombre='${nombre}',descripcion='${descripcion}' where id =${id}`
    let respuesta = await servicio.ejecutarSql(sql);
    res.json(`pagina ${id} actualizada exitosamente`);
    return respuesta;

}


let eliminarPagina = async (req, res) => {

    let servicio = new ServicioPG();
    let id = req.params.id;
    let sql = 'delete from paginas where id=' + id;
    let respuesta = await servicio.ejecutarSql(sql);
    res.json(`pagina ${id} eliminada exitosamente`)
    return respuesta;
}


module.exports = { validarPagina, guardarPagina, consultarPagina, eliminarPagina, actualizarPagina };