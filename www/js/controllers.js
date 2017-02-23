angular.module('app.controllers', ['googlechart'])

.controller('minhaContaCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {



}])

.controller('cadastroAnimalCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
$scope.listaanimal = function (){
   $state.go('listaDeAnimais');
   }
}])

//function ($scope, $stateParams, $state){ //
//$scope.cadastrarAnimal = function(numero, tipo, idade, peso){

//    AnimaisService.addAnimais(numero, tipo, idade,peso);
//    $state.go('listaDeAnimais');
//}//


.controller('movimentosCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])

.controller('loginCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {

$scope.login = function(usuario, senha){
if( usuario == "adm" && senha == "123"){
        $scope.erro = false;
        $state.go('menu');
        }else{
            alert("usuario e senha invalidos.");
        }
}
}])

.controller('menuCtrl', ['$scope', '$stateParams', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    $scope.animaisSelecionado = function(){
        $state.go('listaDeAnimais');
    }
    $scope.fazendaselecionada = function(){
        $state.go('fazenda');
    }
    $scope.cadastrogeral = function(){
        $state.go ('cadastrogeral');
    }
    $scope.minhaConta = function () {
        $state.go ('minhaConta');
    }
}])
.controller('cadastrogeralCtrl', ['$scope', '$stateParams', '$state',// The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    $scope.fazendaselecionada = function(){
        $state.go('cadastroFazendas');
    }
    $scope.animaisSelecionado = function(){
        $state.go('cadastroAnimal');
    }
}])

.controller('listaDeAnimaisCtrl', ['$scope', '$stateParams', '$state', '$filter', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state, $filter) {
    $scope.animais = [
        {
            numero: 1,
            tipo: 'vaca',
            idade: 5,
            peso: 500,
            img: '/img/gadocio.png'
        },
        {
            numero: 2,
            tipo: 'boi',
            idade: 10,
            peso: 700,
            img: '/img/gadocio.png'
        },
        {
            numero: 3,
            tipo: 'bezerro',
            idade: 0.9,
            peso: 200,
            img: '/img/gadocio.png'
        }
    ];
    $scope.animalSelecionado = function (){
        $state.go('animalSelecionado');
    }

}])

.controller("animalSelecionadoCtrl", ['$scope', '$stateParams', '$state',
    function ($scope, $stateParams, $state) {
        $scope.myChartObject = {};

        $scope.secondRow = [
            {v: new Date(2314, 2, 16)},
            {v: 13},
            {v: 'Vaca1'},
            {v: 'Fora do periodo fertil'},
            {v: 25},
            {v: 'Vaca1'},
            {v: 'Alerta!! Hora de Inseminar'}
        ];


        $scope.myChartObject.type = "AnnotationChart";

        $scope.myChartObject.data = {"cols": [
            {id: "month", label: "Month", type: "date"},
            {id: "kepler-data", label: "Kepler-22b mission", type: "number"},
            {id: "kepler-annot", label: "Kepler-22b Annotation Title", type: "string"},
            {id: "kepler-annot-body", label: "Kepler-22b Annotation Text", type: "string"},
            {id: "desktop-data", label: "Inseminação", type: "number"},
            {id: "desktop-annot", label: "Gliese Annotation Title", type: "string"},
            {id: "desktop-annot-body", label: "Gliese Annotaioon Text", type: "string"}
        ], "rows": [
            {c: [
                {v: new Date(2314, 2, 15)},
                {v: 19 },
                {v: 'Vaca1'},
                {v: 'Fora do periodo fertil'},
                {v: 7},
                {v: undefined},
                {v: undefined}
            ]},
            {c: $scope.secondRow},
            {c: [
                {v: new Date(2314, 2, 17)},
                {v: 0},
                {v: 'Vaca1'},
                {v: 'Fora do periodo fertil'},
                {v: 28},
                {v: 'Vaca!'},
                {v: 'Alerta!!Hora de Inseminar'}

            ]}
        ]};

        $scope.myChartObject.options = {
            displayAnnotations: true
        };
}])

.controller('fazendaCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {
    $scope.fazendas = [
        {
            numero: 1,
            img: '/img/fazenda.png',
            nome: "Fazenda Zekim"

        },
        {
            numero: 2,
            img: '/img/fazenda.png',
            nome: "Fazenda Ceara"

        },
    ]
    $scope.fazendaSelecionada = function (){
        $state.go('fazendaSelecionada');
  }
}])
.controller('cadastroFazendasCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {


}])

.controller('fazendaselecionadaCtrl', ['$scope', '$stateParams', '$state', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams, $state) {

}])
