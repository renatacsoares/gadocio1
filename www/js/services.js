angular.module('app.services', [])

.factory('Usuarios', ['$http', function($http) {

    var svc = {};
    svc.getUsuarios = function(succescallback, errorCalback) {
        // Simple GET request example:
        $http({
            method: 'GET',
            url: 'http://localhost:3000/usuarios'
        }).then(function successCallback(response) {
            succescallback(response.data);
        }, function errorCallback(response) {
            errorCalback(response);
        });
    }

    svc.addUsuario = function(usuario, succescallback, errorCalback) {
        $http({
            method: 'POST',
            url: 'http://localhost:3000/usuarios',
            data: usuario
        }).then(function successCallback(response) {
            succescallback(response.data);
        }, function errorCallback(response) {
            errorCalback(response);
        });
    }

    return svc;

}]);

//.service('AnimaisService', [function(){
//        var svc = {};

        //função para retornar as informações dos usuarios existentes
//        svc.getAnimais = function(){
    //        return animais;
    //    }

        //função para cadastrar um novo usuario
//        svc.addAnimais = function(numero, tipo, idade, peso){
//            servicos.push({
//                numero: numero,
//                tipo: tipo,
//                idade: idade,
//                peso: peso
//            })

//        }
//        return svc;



//}])//
