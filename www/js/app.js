var spa = angular.module('superCompras', ['ngRoute']);

spa.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: '../templates/login.html',
        controller: 'loginCtrl'
    })
    .when('/venda', {
        templateUrl: '../templates/venda.html',
        controller: 'vendaCtrl'
    })   
    .otherwise({ redirectTo: '/'});
});