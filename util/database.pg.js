const Pool = require('pg').Pool;

const pool = new Pool({  
    host: 'ec2-52-203-160-194.compute-1.amazonaws.com',  
    user: 'abdnjbkkfhugnz',  
    database: 'd2a1o716qh7l7r',  
    password: 'e37524b896a459b056360c4483a06881ef3c39826762ce18ee81d13f8efb81fc',
    port: 5432,
    ssl: true
});  

module.exports = pool;