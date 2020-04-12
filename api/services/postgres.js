
//importar Postgres

const {Pool} = require('pg');




//clase de servicio postgres
class ServicioPG{

    //constructor de la clase
    constructor(){
        this.pool=new Pool({
                user: "postgres",
                host: "localhost",
                database: "practicaWeb",
                password: "juanjose123",
                port: 5432
            });
    }


    /**
     * metodo que ejecuta una sentencia sql en la base de datos postgres
     * @param {*} sql  sentencia a ejecutar
     */
    async ejecutarSql(sql){
        let respuesta = await this.pool.query(sql);
        return respuesta;
    }

}

//exportar la clase servicioPG
module.exports=ServicioPG;