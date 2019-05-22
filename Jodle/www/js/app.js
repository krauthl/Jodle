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
                //envoiContactServeur();
                socket.emit('contact', numeroCourant, "123");
                socket.emit('contact', numeroCourant, "1234567");
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
        messageHtml = '<div class="outgoing-chats">';
        messageHtml += '<div class="outgoing-chats-msg">';
        messageHtml += '<span class="name">' + expediteur + '</span>';
        messageHtml += '<p>' + message + '</p>';
        messageHtml += '<span class="time">' + date + '</span>';
        messageHtml += '</div>';
        messageHtml += '<div class="outgoing-chats-img">';
        messageHtml += '<img src="">';
        messageHtml += '</div>';
        messageHtml += '</div>';
        console.log(messageHtml);
    } else {
        console.log(message);
        messageHtml = '<div class="received-chats">';
        messageHtml += '<div class="received-chats-img">';
        messageHtml += '<img src="">';
        messageHtml += '</div>';
        messageHtml += '<div class="received-msg">';
        messageHtml += '<div class="received-msg-inbox">';
        messageHtml += '<span class="name">' + expediteur + '</span>';
        messageHtml += '<p>' + message + '</p>';
        messageHtml += '<span class="time">' + date + '</span>';
        messageHtml += '</div>';
        messageHtml += '</div>';
        messageHtml += '</div>';
        console.log(messageHtml);
    }
    document.getElementById('messageTable').innerHTML += messageHtml;
}


/*function envoiContactServeur(){
    var options = new ContactFindOptions();
    options.filter="";
    options.filter="";
    options.multiple=true;
    var fields = ["*"];  //"*" will return all contact fields
    navigator.contacts.find(fields, contactfindSuccess, contactfindError, options);

    function contactfindSuccess(contacts) {

        //var th = '';
        $.each(contacts, function(key, value) {
            /*if(value.name){
                $.each(value.name, function(key, value) {
                    if(key == 'formatted'){
                        name = value;
                    }
                });
            }*/
            /*if(value.phoneNumbers){
                $.each(value.phoneNumbers, function(key, value) {
                    phone = value.value;
                    socket.emit('contatct', numeroCourant, formatStringNumero(phone));


                });
            }*/
            //if connected alors:

            /*th += '<span class="inline-block">' + name + ' ' + phone + '</span>';
            th += '<div id="connectedCircle" class="inline-block"></div>';
            th += '<hr>';
            //else: ...*/

            /*console.log(name, value);
        });
        $("#contactTable").html(th);
    }

    function contactfindError(message) {
        alert('Failed because: ' + message);
    }
}*/

function formatStringNumero(numero){
    var formatNumero = numero;
    if(formatNumero.startWith("+33")){
        formatNumero = '0'+ formatNumero.slice(3);
    }
    formatNumero = formatNumero.split(' ').join('');
    return formatNumero;
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



