const {createPool} = require('mysql')


//Obteniendo la conexion
const pool = createPool({
    host:           "localhost",
    user:           "root",
    password:       "",
    database:       "proyecto2",
    connectionLimit: 10
})

/* QUERY DE EJEMPLO
pool.query(`SELECT id, nombre, url FROM webpage`, (err, result, fields) => {
    if(err){
        return console.log(err)
    }
    return console.log(result)
})
*/


/*
pool.getConnection((err, connection) => {
    if(err){
        if(err.code == 'PROTOCOL_CONNECTION_LOST'){
            console.error('Database connection lost')
        }
        if(err.code == 'ECONNREFUSED'){
            console.error('Database connection refused')
        }
    }
    if(connection){
        connection.release()
    } 
})
*/

module.exports = pool