document.addEventListener("deviceready", onDeviceReady, false);

var socket;

function onDeviceReady(){
    socket = io.connect('http://localhost:8080', { query: "foo=bar" });
    console.log("je suis dans onDeviceReady");
    socket.on('connection', function(message){
        console.log(message);
    });
}

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/', {templateUrl : '/partials/loginPage.html'})
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



