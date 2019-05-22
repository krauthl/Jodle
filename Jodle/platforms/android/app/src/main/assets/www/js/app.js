document.addEventListener("deviceready", onDeviceReady, false);

var socket;
var numeroCourant;

var listeMessage = [];

function onDeviceReady(){
}

function connectionSocket(usrName){
    numeroCourant = usrName;
    socket = io.connect('http://localhost:8080', { query: 'name='+usrName }); //On envoie à la connection le numéro du client au serveur pour identifier la socket
    socket.on('connection', function(message){
        alert(message);
        console.log("le numero courant est " + numeroCourant);
        socket.on('boiteReception', function(nomExpe, message, date){
            if(window.location.hash != '#/receiveMessage'){
                //Si la location n'est pas receiveMessage (permet d'avoir du temps réel)
                alert("J'ai reçu le message "+ message + " de la part de " + nomExpe + " à la date " + date);
                listeMessage.push({expediteur : nomExpe, message: message, date: date}); //remplir une array liste avec les messages à afficher
            }
            else{
                //sinon l'afficher direct
                afficherMessage(nomExpe, message, date);
            }
        });
    });
}

function afficherMessage(expediteur, message, date) {
    var messageHtml;
    if (expediteur == numeroCourant) {
<<<<<<< HEAD
        console.log(message);
        messageHtml = '<div class="received-chats">';
        messageHtml += '<div class="received-chats-img">';
        messageHtml += '<img src="">';
        messageHtml += '</div>';
        messageHtml += '<div class="received-msg">';
        messageHtml += '<div class="received-msg-inbox">';
=======
        messageHtml = '<div class="outgoing-chats">';
        messageHtml += '<div class="outgoing-chats-msg">';
>>>>>>> 558b85fbd56b6ce92b5783ffe4b4154f447cbb60
        messageHtml += '<span class="name">' + expediteur + '</span>';
        messageHtml += '<p>' + message + '</p>';
        messageHtml += '<span class="time">' + date + '</span>';
        messageHtml += '</div>';
<<<<<<< HEAD
=======
        messageHtml += '<div class="outgoing-chats-img">';
        messageHtml += '<img src="">';
>>>>>>> 558b85fbd56b6ce92b5783ffe4b4154f447cbb60
        messageHtml += '</div>';
        messageHtml += '</div>';
        console.log(messageHtml);
    } else {
<<<<<<< HEAD
        messageHtml = '<div class="outgoing-chats">';
        messageHtml += '<div class="outgoing-chats-msg">';
=======
        console.log(message);
        messageHtml = '<div class="received-chats">';
        messageHtml += '<div class="received-chats-img">';
        messageHtml += '<img src="">';
        messageHtml += '</div>';
        messageHtml += '<div class="received-msg">';
        messageHtml += '<div class="received-msg-inbox">';
>>>>>>> 558b85fbd56b6ce92b5783ffe4b4154f447cbb60
        messageHtml += '<span class="name">' + expediteur + '</span>';
        messageHtml += '<p>' + message + '</p>';
        messageHtml += '<span class="time">' + date + '</span>';
        messageHtml += '</div>';
<<<<<<< HEAD
        messageHtml += '<div class="outgoing-chats-img">';
        messageHtml += '<img src="">';
=======
>>>>>>> 558b85fbd56b6ce92b5783ffe4b4154f447cbb60
        messageHtml += '</div>';
        messageHtml += '</div>';
        console.log(messageHtml);
    }
    document.getElementById('messageTable').innerHTML += messageHtml;
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



