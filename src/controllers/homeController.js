
const { request } = require('express');
const { getAllUsers } = require('../services/CRUDservice');
const connection = require('../config/database');
const { compile } = require('ejs');


// const getHomePage = (req, res) => {
//     return res.render('home.ejs')

// }

const getAddUserPage = (req, res) => {
    return res.render('addnew.ejs')
}
const getHomePage = async (req, res) => {
    //chuyển câu naỳ sang CRUD
    // let [results, fields] = await connection.query('SELECT * FROM Users ');
    let results = await getAllUsers();
    // console.log('>>>check', results)
    return res.render('home.ejs', { ListUsers: results });
}
// cau lenh cho button save trên addnew

const postnewUser = async (req, res) => {

    let email = req.body.email;
    let name = req.body.myname;
    let city = req.body.city;
    console.log('email=', email, 'myname=', name, 'city=', city)

    // connection.query(
    //     `INSERT INTO Users (email,name,city) 
    //     VALUES (?,?,?)`,
    //     [email, name, city],
    //     // function (err, results) {
    //     // }
    //     res.render('home.ejs')
    // );
    let [results, fields] = await connection.query(
        `INSERT INTO Users (email,name,city) 
        VALUES (?,?,?)`,
        [email, name, city]
    );
    console.log('>>>check results', results);
    //return res.render('home.ejs');
    // connection.query(
    //     'SELECT * FROM Users',
    //     function (err, results, fields) {
    //         console.log(results); // results contains rows returned by server
    //     }
    // );
    // const [results, fields] = await connection.query('SELECT * FROM Users');
    // console.log('>>>> check results', results);
}

const UpdateUser = (req, res) => {
    return res.render('UpdatePage.ejs')
}
module.exports = {
    getHomePage, getAddUserPage, postnewUser, UpdateUser, getAllUsers
}