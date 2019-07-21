angular.module(appName).controller('detalhesClienteCtrl', function ($scope, $http, $routeParams) {

    var detalhesCliente = function () {
        $http.get('http://localhost/AngularJS-Clientes/service/cliente/detalhesCliente.php', {
            params: {
                ID_CLIENTE:  $routeParams.id
            }
        }).then(function success(response) {
            const { data } = response;

            $scope.cliente = data;

        });
    };

    detalhesCliente();

});