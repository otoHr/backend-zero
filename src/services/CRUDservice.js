const connection = require("../config/database");
const getAllUsers = async () => {

    let [results, fields] = await connection.query('SELECT * FROM Users ');
    // console.log('>>>>check', results)
    return results;
}
module.exports = { getAllUsers }


// const connection = require('../config/database');
// const getAllUsers = async (req, res) => {
//     let [results, fields] = await connection.query('SELECT * FROM Users ');
//     return results;
// }
// module.exports = { getAllUsers };