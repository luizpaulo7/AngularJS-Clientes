angular.module(appName).config(function($routeProvider) {

    $routeProvider.when("/clientes", {
        templateUrl: '../src/cliente/clientes.html',
        controller: ''
    });

    $routeProvider.when("/detalhesCliente/:id", {
        templateUrl: '../src/cliente/detalhes.html',
        controller: ''
    });

    $routeProvider.otherwise({ redirectTo: "/clientes" });
});