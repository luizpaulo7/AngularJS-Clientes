angular.module(appName).factory('clienteAPI', function($http, config) {

    var _getClientes = function() {
        return $http.get(config.baseUrl + "/clientes.php");
    };
    var _getCliente = function(id) {
        return $http.get(config.baseUrl + "/cliente.php" + id);
    };
    var _saveCliente = function(cliente) {
        return $http.post(config.baseUrl + "/saveCliente.php", cliente);
    };

    return {
        getClientes: _getClientes,
        getCliente: _getCliente,
        saveCliente: _saveCliente
    };

});