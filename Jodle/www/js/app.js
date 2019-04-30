document.addEventListener("deviceready", onDeviceReady, false);

function onDeviceReady(){
    listContacts();
}

var app = angular.module('app', ['ngRoute']);

app.config(function($routeProvider){
    $routeProvider
        .when('/home', {templateUrl : 'partials/home.html'})
        .when('/loginPage', {templateUrl: 'partials/loginPage.html'})
        .when('/contact', {templateUrl: 'partials/contact.html'})
        .when('/about', {templateUrl: 'partials/about.html'})
        .when('/contact/addContact', {templateUrl: 'partials/addContact.html'})
        .otherwise({redirectTo: 'partials/home.html'})
});



