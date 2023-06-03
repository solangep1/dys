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

//récupération des inforrmations de l'utisateur en fonction de son id
app.get('/user/:id', cors(), function (req, res) {
    var userId = req.params.id;
    dbConn.query(
        "SELECT * FROM `users` WHERE user_id = ?",
        [userId],
        function (error, results, fields) {
            if (error) throw error;
            return res.send(results);
        }
    );
});

//Vérification des identifiants de connexion. Si correcter alors on renvoie id utilisateur sinon 0
app.get('/connexion/:user_email/:user_mdp', cors(), function (req, res) {
    var user_email = req.params.user_email;
    var user_mdp = req.params.user_mdp;

    dbConn.query(
        "SELECT user_id FROM `users` WHERE user_email = ? AND user_mdp = ?",
        [user_email, user_mdp],
        function (error, results, fields) {
            if (error) throw error;

            if (results.length > 0) {
                // L'utilisateur existe, renvoyer l'id de l'utilisateur
                return res.send({ user_id: results[0].user_id });
            } else {
                // L'utilisateur n'existe pas, renvoyer 0
                return res.send({ user_id: 0 });
            }
        }
    );
});


///////////////////////
/////   Result    /////
//////////////////////

//Récupération des résultats d'un utilisateur
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

///////////////////////
/////   Exercice  /////
//////////////////////

//Récupération de la liste des exercices
app.get('/exercice/:exercice_type', cors(), function (req, res) {
    var exercice_type = req.params.exercice_type;
    dbConn.query(
        "SELECT * FROM `exercice` WHERE exercice_type = ?",
        [exercice_type],
        function (error, results, fields) {
            if (error) throw error;
            return res.send(results);
        }
    );
});

///////////////////////
/////   SpellingH /////
//////////////////////
app.get('/spellingh/:exercice_id', cors(), function (req, res) {
    var exercice_id = req.params.exercice_id;
    dbConn.query(
        "SELECT * FROM `spellinghistory` WHERE exercice_id = ? LIMIT 1 ",
        [exercice_id],
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


