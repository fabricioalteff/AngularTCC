var spa = angular.module('superCompras', ['ngRoute', 'whimsicalRipple']);

spa.config(function($routeProvider){
    $routeProvider
    .when('/', {
        templateUrl: './domains/login/login.html',
        controller: 'loginCtrl'
    })
    .when('/venda', {
        templateUrl: './domains/venda/venda.html',
        controller: 'vendaCtrl'
    })   
    .otherwise({ redirectTo: '/'});
});