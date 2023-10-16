require('dotenv').config();
const { render } = require('ejs');
const express = require('express');
const { get } = require('http');
const path = require('path');
const configViewEngine = require('./config/viewEngine');
const webRountes = require('./routes/web');

const connection = require('./config/database');
//console.log(">>>>>check", process.env)
const app = express();
const port = process.env.PORT || 8888;// hard code
const hostname = process.env.HOST_NAME;

// request config.body
app.use(express.json()); // for json
app.use(express.urlencoded({ extended: true })); // for form data
// config template engine
configViewEngine(app);


//khai báo routes
app.use('/', webRountes);
app.listen(port, hostname, () => {
    console.log(`Example app listening on port ${port}`)
})
