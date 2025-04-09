// la carpeta db.js para conectar postgres 
const { Pool } = require('pg');

class Database {
    constructor() {
        this.pool = new Pool({
            user: 'postgres',   //usuario de postgresql
            host: 'localhost',      //localhost si mapeaste el puerto 5432 en docker
            database: 'prueba2', //nombre de la base de datos 
            password: 'admin', // cantraseña de la base de datos 
            port: 5431, // puerto por defecto de postgresql
        });
  }
    query(text, params) {
        return this.pool.query(text, params);
    }
}
module.exports= new Database();