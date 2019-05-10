document.addEventListener("deviceready", onDeviceReady, false);

var socket;
var numeroCourant;

var listeMessage = [];

function onDeviceReady(){
}

function connectionSocket(usrName){
    numeroCourant = usrName;
    socket = io.connect('http://localhost:8080', {usr : usrName}); //On envoie à la connection le numéro du client au serveur pour identifier la socket

    socket.on('connection', function(message){
        console.log(message);

        socket.on(usrName, function(name, message, date){
            console.log("J'ai reçu le message "+ message + " de la part de " + usrnName + " à la date " + date);
            listeMessage.push({destinataire : name,message: message,date: date}); //remplir une array liste avec les messages à afficher

        });

    });
}

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl : 'partials/loginPage.html'})
        .when('/sendMessage', {templateUrl : 'partials/sendMessage.html'})
        .when('/receiveMessage', {templateUrl: 'partials/receiveMessage.html'})
        .when('/loginPage', {templateUrl: 'partials/loginPage.html'})
        .when('/contact', {templateUrl: 'partials/contact.html'})
        .when('/loginPage/addNewUser', {templateUrl: 'partials/addNewUser.html'})
        .when('/loginPage/forgotPassword', {templateUrl: 'partials/forgotPassword.html'})
        .when('/loginPage/connected', {templateUrl: 'partials/connected.html'})
        .when('/login', {templateUrl: 'partials/connected.html'})
        .when('/maps', {templateUrl: 'partials/maps.html'})

        .otherwise({redirectTo: 'partials/home.html'});
});



