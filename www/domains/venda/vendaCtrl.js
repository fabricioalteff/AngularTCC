angular.module("superCompras").controller("vendaCtrl", function($scope, $http) {
    $scope.app = "Super Compras";
    $scope.produtos = [];

    (function() {
        $http.get('http://localhost:3412/produtos').success(function(data) {
            $scope.produtos = data;

        }).error(function(data, status) {
            $scope.message = "Aconteceu um problema: " + data;
            console.log($scope.message);
        });
    })();

    $scope.adicionarProduto = function(posicao) {
      $scope.produtos[posicao].qtd++;
    }

    $scope.removerProduto = function(posicao) {

      if($scope.produtos[posicao].qtd > 0){
        $scope.produtos[posicao].qtd--;
      }

    }

});
