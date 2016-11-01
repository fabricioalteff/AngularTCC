angular.module('superCompras').controller('supermercadosCtrl', function($scope, $http) {

    $scope.supermercados = [];

    var carregarSupermercados = function() {
        $http.get('http://localhost:3412/supermercados').success(function(data) {
            $scope.supermercados = data;
        }).error(function(data, status) {
            $scope.message = "Aconteceu um problema: " + data;
        });
    };
    carregarSupermercados();
});
