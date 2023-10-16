

require('dotenv').config();
//const mysql = require('mysql2/promise'); //câu điều kiện phải có để kết nối
const mysql = require('mysql2/promise'); // thay cho câu điều kiện trên để chạy async await
// create the connection to database
//const connection = mysql.createConnection({
// host: process.env.DB_HOST,
// port: process.env.DB_PORT, // default 3306
//     user: process.env.DB_USER,// default empty
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME,

// });
// module.exports = connection;
const connection = mysql.createPool({
    host: process.env.DB_HOST,
    port: process.env.DB_PORT, // default 3306
    user: process.env.DB_USER,// default empty
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 10,
    queueLimit: 0,
});
module.exports = connection;