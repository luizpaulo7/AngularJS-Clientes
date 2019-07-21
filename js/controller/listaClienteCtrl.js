angular.module(appName).controller('listaClienteCtrl', function ($scope, $http) {

    $scope.title = 'Clientes';

    var carregarClientes = function () {
        $http.get('http://localhost/AngularJS-Clientes/service/cliente/clientes.php').then(
            function success(response) {
                $scope.clientes = response.data;
            }, function error(response) {
                console.log(response);
            });
    };

    carregarClientes();
});