document.addEventListener("deviceready", onDeviceReady, false);

var socket;
var numeroCourant;

var listeMessage = [];

var watchID = navigator.geolocation.watchPosition(onSuccessPosition, onErrorPosition, { timeout: 30000 });

function onDeviceReady(){
}

function connectionSocket(usrName){
    numeroCourant = usrName;
    socket = io.connect('http://localhost:8080', { query: 'name='+usrName }); //On envoie à la connection le numéro du client au serveur pour identifier la socket
    socket.on('connection', function(message){
        alert(message);
        console.log("le numero courant est " + numeroCourant);


        socket.emit('contact', numeroCourant, "123"); //A enlever
        socket.emit('contact', numeroCourant, "1234567");//A enlever

        //récupération des messages en attente
        socket.on('recupereMessage', function(message){

            for(var i=0; i<message.length; i++){
                listeMessage.push({expediteur : message[i].expediteur, destinataire: message[i].destinataire, message: message[i].message});
            }
        });

        //récupération des messages instantannés
        socket.on('boiteReception', function(nomExpe, message, date){
            if(window.location.hash != '#/receiveMessage'){
                //Si la location n'est pas receiveMessage (permet d'avoir du temps réel)
                //envoiContactServeur(); //A decommenter quand on utilisera le serveur
                alert("J'ai reçu le message "+ message + " de la part de " + nomExpe + " à la date " + date);
                listeMessage.push({expediteur : nomExpe, message: message, date: date}); //remplir une array liste avec les messages à afficher
            }
            else{
                if(message != null){
                    //sinon l'afficher direct
                    afficherMessage(nomExpe, message, date);
                }
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

//A decommenter quand on utilisera le serveur
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

function onSuccessPosition(position) {
    //alert(position.coords.longitude);
    //alert(position.coords.latitude);
    //socket.emit('localisation', numeroCourant, position.coords.longitude, position.coords.longitude);
    socket.emit('localisation', numeroCourant, 5, 45);
}

// onError Callback receives a PositionError object
//
function onErrorPosition(error) {
    alert('code: '    + error.code    + '\n' +
        'message: ' + error.message + '\n');
}


var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl : 'partials/loginPage.html'})
        .when('/sendMessage', {templateUrl : 'partials/sendMessage.html'})
        .when('/receiveMessage', {templateUrl: 'partials/receiveMessage.html'})
        .when('/loginPage', {templateUrl: 'partials/loginPage.html'})
        .when('/contact', {templateUrl: 'partials/contact.html'})
        .when('/disconnection', {templateUrl: 'partials/disconnection.html'})
        .when('/loginPage/addNewUser', {templateUrl: 'partials/addNewUser.html'})
        .when('/loginPage/forgotPassword', {templateUrl: 'partials/forgotPassword.html'})
        .when('/loginPage/connected', {templateUrl: 'partials/connected.html'})
        .when('/login', {templateUrl: 'partials/connected.html'})
        .when('/maps', {templateUrl: 'partials/maps.html'})
        .when('/sendMessage/takenPicture', {templateUrl: 'partials/takenPicture.html'})
        .otherwise({redirectTo: 'partials/home.html'});
});



