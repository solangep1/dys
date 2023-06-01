var express = require('express');
var app = express();
 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));

 var cors = require('cors');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:3308");
    res.header("Access-Control-Allow-Methods", "GET , PUT , POST , DELETE");
    res.header("Access-Control-Allow-Headers", "Content-Type, x-requested-with");
    next(); // Important
})

 var mysql = require('mysql');
 // connection configurations
 var dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'dys*bdd'
});
// connect to database
dbConn.connect(); 

/////////////////////
/////   User    /////
////////////////////

//get user
app.get('/user/:id', cors(), function (req, res) {
    var userId = req.params.id;
    dbConn.query(
        "SELECT * FROM `user` WHERE user_id = ?",
        [userId],
        function (error, results, fields) {
            if (error) throw error;
            return res.send(results);
        }
    );
});

///////////////////////
/////   Result    /////
//////////////////////

//get result user
app.get('/user/result/:id', cors(), function (req, res) {
    var userId = req.params.id;
    dbConn.query(
        "SELECT * FROM `result` WHERE user_id = ?",
        [userId],
        function (error, results, fields) {
            if (error) throw error;
            return res.send(results);
        }
    );
});


 // set port
 app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;
