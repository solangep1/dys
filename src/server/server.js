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

const corsOptions = {
    origin: 'http://localhost:4200', // Autoriser les requêtes depuis ce domaine
    optionsSuccessStatus: 200 // Répondre avec un statut 200 pour les requêtes preflight
};

// Activer CORS pour toutes les routes
app.use(cors(corsOptions));


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
                return res.send(String(results[0].user_id));
            } else {
                return res.send("0");
            }
        }
    );
});

//Création d'un nouvelle utilisateur
app.post('/user/create', function (req, res) {

    //let result_id = req.body.result_id;
    let user_lastname = req.body.user_lastname;
    let user_firstname = req.body.user_firstname;
    let user_email = req.body.user_email
    let user_dateofbirth = req.body.user_dateofbirth;
    let user_mdp = req.body.user_mdp;
    let user_type = req.body.user_type;

    console.log(req.body)

    dbConn.query("INSERT INTO users SET user_lastname=?,user_firstname=?,user_email=?,user_dateofbirth=?,user_mdp=?,user_type=?", [user_lastname, user_firstname, user_email, user_dateofbirth, user_mdp, user_type,], function (error, results, fields) {

        if (error) throw error;

        return res.send({ error: false, data: results, message: 'New user has been created successfully.' });
    });

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

// Ajout d'un nouveau resultat
app.post('/add_result', function (req, res) {

    //let result_id = req.body.result_id;
    let user_id = req.body.user_id;
    let result_date = req.body.result_date;
    let exercice_id = req.body.exercice_id;
    let result_score = req.body.result_score
    let result_goodanswer = req.body.resutl_goodanswer;
    let result_badanswer = req.body.result_badanswer;
    console.log(req.body)

    dbConn.query("INSERT INTO result SET user_id=?,result_date=?,exercice_id=?,result_score=?,result_goodanswer=?,result_badanswer=?", [user_id, result_date, exercice_id, result_score, result_goodanswer, result_badanswer,], function (error, results, fields) {

        if (error) throw error;

        return res.send({ error: false, data: results, message: 'New result has been created successfully.' });
    });

});

//Récupération de la liste des exercices avec le dernier résultat obtenus d'un utilisateur pour chaque exercice
app.get('/result/:id/:exercice_type', cors(), function (req, res) {
    var userId = req.params.id;
    var exercice_type = req.params.exercice_type;
    dbConn.query(
        "SELECT \
            CASE \
                WHEN r.result_score IS NOT NULL THEN CONCAT(r.result_score) \
                ELSE 0 \
            END AS status \
        FROM \
            exercice e \
        LEFT JOIN ( \
            SELECT \
                r1.exercice_id, \
                r1.result_score \
            FROM \
                result r1 \
            INNER JOIN ( \
                SELECT \
                    exercice_id, \
                    MAX(result_date) AS max_date \
                FROM \
                    result \
                WHERE \
                    user_id = ? \
                GROUP BY \
                    exercice_id \
            ) r2 ON r1.exercice_id = r2.exercice_id AND r1.result_date = r2.max_date \
        ) r ON e.exercice_id = r.exercice_id \
        WHERE \
            e.exercice_type = ?",
        [userId, exercice_type],
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
// Récupération d'un exercice spelling history en fonction de son id
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

// définir le branch
app.listen(3000, function () {
    console.log('Node app is running on port 3000');
});

module.exports = app;



// Serve only the static files form the dist directory
app.use(express.static('./dist/angular-app-heroku'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', { root: 'dist/angular-app-heroku/' }),
);

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);