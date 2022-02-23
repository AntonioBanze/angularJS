var app = angular.module('main,'['ngRoute']);

app.config(function($routeProvider){
    $routeProvider.when('/',{
     templateUrl:'./components/home.html',
    controller:'homeCtrl'
}).otherwise({
    template:'404'
})

});

app.controller('')