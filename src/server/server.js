var express = require('express');
var app = express();
 var bodyParser = require('body-parser');
 app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({
     extended: true
 }));

 var cors = require('cors');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "http://localhost:4200");
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

// ...

// Ajoute une route POST pour l'inscription d'un utilisateur
app.post('/user', cors(), function (req, res) {
    var userData = {
        user_nom: req.body.nom,
        user_prenom: req.body.prenom,
        user_email: req.body.email,
        user_naissance: req.body.dateNaissance,
        user_mdp: req.body.motDePasse,
        user_type: 1 // ou toute autre valeur par défaut appropriée
    };

    dbConn.query(
        "INSERT INTO `user` SET ?",
        userData,
        function (error, results, fields) {
            if (error) {
                console.error("Erreur lors de l'inscription :", error);
                return res.status(500).send({ error: 'Erreur lors de l\'inscription' });
            }

            return res.status(200).send({ message: 'Inscription réussie' });
        }
    );
});

// ...


module.exports = app;