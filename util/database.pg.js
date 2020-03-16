const Pool = require('pg').Pool;

const pool = new Pool({  
    host: 'ec2-3-234-169-147.compute-1.amazonaws.com',  
    user: 'syvesyxmjyjqzt',  
    database: 'dejse2r4282hq6',  
    password: '3f6d0e0ad59795bf919356e5e82884f4cfbeef87b30fa362e589297483bcefd9',
    port: 5432,
    ssl: true
});  

module.exports = pool;