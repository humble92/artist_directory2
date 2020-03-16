const mysql = require('mysql2');

// connect to a database artistbook running on your localmachine
const pool = mysql.createPool({
    host: 'localhost',
    user: 'ecoclec3_artdb',
    database: 'ecoclec3_artdb',
    password: 'humble_artdb'
});

module.exports = pool.promise();