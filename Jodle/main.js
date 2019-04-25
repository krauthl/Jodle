var express = require('express');
var path = require('path');
var app = express(); // creation du serveur
var mustacheExpress = require('mustache-express');

app.set('views', path.join( 'public/views'));
app.engine('mustache', mustacheExpress());
app.set('view engine', 'mustache');

// fichiers statiques
app.use(express.static('public'));



app.get('/Envoyer', function (req , res) {
    res.render('Envoyer', {});
    

})


var server = app.listen(8080); // démarrage du serveur sur le port 8080

console.log("Serveur démarré sur le port 8080");
