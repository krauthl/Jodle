document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
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
        .when('/maps', {templateUrl: 'partials/maps.html'})

        .otherwise({redirectTo: 'partials/home.html'});
});



