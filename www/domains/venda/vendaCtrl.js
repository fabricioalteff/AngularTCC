angular.module("superCompras").controller("vendaCtrl", function($scope, $http) {
  	$scope.app="Super Compras";
    $scope.produtos = [];
  	console.log("está funcionando VENDA");

    var carregarProdutos = function() {
        $http.get('http://localhost:3412/produtos').success(function(data) {
            $scope.produtos = data;

            console.log(data);

        }).error(function(data, status) {
            $scope.message = "Aconteceu um problema: " + data;
        });
    };
    carregarProdutos();

});

