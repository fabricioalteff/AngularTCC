angular.module("superCompras").config(function($routeProvider) {
  $routeProvider.when("/sales", {
    templateUrl:"view/saleView.html"
  });

  $routeProvider.when("/login", {
    templateUrl:"view/login.html"
  });

});
